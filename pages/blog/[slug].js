import { Fragment } from "react";
import Head from "next/head";
import { getDatabase, getPage, getBlocks } from "../../lib/notion";
import Link from "next/link";
import Image from "next/image";
// import { databaseId } from "../../pages/index.js";
import styles from "./post.module.css";
import slugify from "slugify";

export const databaseId = process.env.NOTION_DATABASE_ID;

export const Text = ({ text }) => {
  if (!text) {
    return null;
  }
  return text.map((value, i) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;
    return (
      <span
        className={[
          bold ? "font-bold" : "",
          code ? styles.code : "",
          italic ? "italic" : "",
          strikethrough ? "line-through" : "",
          underline ? "underline" : "",
        ].join(" ")}
        style={color !== "default" ? { color } : {}}
        key={i}
      >
        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
      </span>
    );
  });
};

const renderBlock = (block) => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case "paragraph":
      return (
        <p className="mb-6 leading-tight">
          <Text text={value.text} />
        </p>
      );
    case "heading_2":
      return (
        <h2 key={id}>
          <Text text={value.text} />
        </h2>
      );

    case "heading_3":
      return (
        <h3 key={id}>
          <Text text={value.text} />
        </h3>
      );
    case "bulleted_list_item":
    case "numbered_list_item":
      return (
        <li key={id}>
          <Text text={value.text} />
        </li>
      );
    case "to_do":
      return (
        <div key={id}>
          <label htmlFor={id} className="flex flex-nowrap items-center">
            <input type="checkbox" id={id} defaultChecked={value.checked} />{" "}
            <p className="ml-2">
              <Text text={value.text} />
            </p>
          </label>
        </div>
      );
    case "toggle":
      return (
        <details key={id}>
          <summary>
            <Text text={value.text} />
          </summary>
          {value.children?.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
        </details>
      );
    case "quote":
      return (
        <p key={id}>
          <Text text={value.text} key={Math.random()} />
        </p>
      );
    case "image":
      return (
        <div
          key={id}
          className="img-container mx-auto relative w-full max-w-xs h-80"
        >
          <Image
            layout="fill"
            src={value.external.url}
            alt={value.caption[0].plain_text}
            className="rounded-sm"
            objectFit="cover"
          />
        </div>
      );

    // case "code":
    //   return (
    //     <pre className="bg-white">
    //       <code>{value.text[0].plain_text}</code>
    //       <code>{value.text[0].text.content}</code>
    //     </pre>
    //   );
    default:
      return `❌ Unsupported block (${
        type === "unsupported" ? "unsupported by Notion API" : type
      })`;
  }
};

export default function Post({ page, blocks }) {
  if (!page || !blocks) {
    return <div />;
  }

  return (
    <div>
      <Head>
        <title>{page.properties.Name.title[0].plain_text}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="mt-20 w-screen">
        <div className="content-container max-w-3xl mx-auto">
          <article className="mt-12">
            <h1 className="mb-4">
              <Text text={page.properties.Name.title} />
            </h1>
            <section>
              {blocks.map((block) => (
                <Fragment key={block.id}>{renderBlock(block)}</Fragment>
              ))}
              <Link href="/">
                <a className={styles.back}>← Go home</a>
              </Link>
            </section>
          </article>
        </div>
      </section>
    </div>
  );
}

export const getStaticPaths = async () => {
  const database = await getDatabase(databaseId);

  const paths = [];

  database.forEach((page) => {
    paths.push({
      params: {
        slug: slugify(page.properties.Name.title[0].plain_text).toLowerCase(),
      },
    });
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const database = await getDatabase(databaseId);

  let allPages = [];

  database.forEach((page) => {
    allPages.push({
      page: {
        id: page.id,
        slug: slugify(page.properties.Name.title[0].plain_text).toLowerCase(),
      },
    });
  });

  const matchingPage = allPages.find((result) => {
    if (result.page.slug === context.params.slug) {
      const resultId = result.page.id;
      return resultId;
    } else {
      return false;
    }
  });
  const id = matchingPage.page.id;

  const page = await getPage(id);
  const blocks = await getBlocks(id);

  const childBlocks = await Promise.all(
    blocks
      .filter((block) => block.has_children)
      .map(async (block) => {
        return {
          id: block.id,
          children: await getBlocks(block.id),
        };
      })
  );
  const blocksWithChildren = blocks.map((block) => {
    // Add child blocks if the block should contain children but none exists
    if (block.has_children && !block[block.type].children) {
      block[block.type]["children"] = childBlocks.find(
        (x) => x.id === block.id
      )?.children;
    }
    return block;
  });

  return {
    props: {
      page,
      blocks: blocksWithChildren,
    },
  };
};
