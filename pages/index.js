import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "../components/Container";
import slugify from "slugify";

import HomeHero from "../components/HomeHero";
import Hr from "../components/Hr";

import { Text } from "./blog/[slug].js";
import { getDatabase } from "../lib/notion";

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
  // console.log(posts[0].properties);
  return (
    <>
      <HomeHero />
      <Hr />
      <section>
        {/* {posts.map((post) => {
          const date = new Date(post.last_edited_time).toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          });
          return (
            <li key={post.id}>
              <h3>
                <Link href={`/blog/${post.id}`}>
                  <a>
                    <Text text={post.properties.Name.title} />
                  </a>
                </Link>
              </h3>

              <p>{date}</p>
              <Link href={`/blog/${post.id}`}>
                <a> Read post →</a>
              </Link>
            </li>
          );
        })} */}
      </section>
      <section id="about" className="pb-12">
        <Container>
          <div className="container flex justify-center mx-auto">
            <div>
              <h2 className="mb-8 text-center">
                My name is Leroy and I'm a <br /> self-taught Front-end
                Engineer.
              </h2>
              <p className="mb-4 ">
                Thank you for visiting my Digital Garden! This is my personal
                website where I share my projects and share content about things
                I’m interested in. You’ll mostly see things about web
                development, but I'm also interested in entreprenuership,
                fitness, personal development, crypto, web 3.0, and music.
              </p>
              <p className="mb-4">
                Check out my{" "}
                <Link href="/about">
                  <a>About</a>
                </Link>{" "}
                page for more about me!
              </p>
              <p className="mb-4">
                <a href="mailto:hello@leroyclarkejr.com">Hit me up</a> if you're
                looking for a developer, have any questions, or just want to
                connect. ✌🏾
              </p>
            </div>
          </div>
        </Container>
      </section>
      <Hr />

      <section>
        <Container>
          <div className="heading ">
            <h3 className="mb-8 text-left">Recent Blog Posts</h3>
          </div>
          <div className="blogs-container">
            <ul className="mx-auto">
              {posts.map((post) => {
                if (post.properties.Status.select.name === "Live") {
                  const lastDate = new Date(
                    post.last_edited_time
                  ).toLocaleString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  });
                  const ogDate = new Date(post.created_time).toLocaleString(
                    "en-US",
                    {
                      month: "short",
                      day: "2-digit",
                      year: "numeric",
                    }
                  );
                  return (
                    <li
                      key={post.id}
                      className="rounded-lg bg-white dark:bg-gray-800 shadow-md p-6 mb-4 mx-auto"
                    >
                      <Link href={`/blog/${post.id}`}>
                        <h3 className="mb-6">
                          <Text text={post.properties.Name.title} />
                        </h3>
                      </Link>

                      <div className="flex flex-row justify-between">
                        <div className="flex flex-row items-center">
                          <p className="mr-4 blog-tag">
                            {post.properties.Tag.select.name}
                          </p>
                          <p className="text-sm text-black dark:text-white">
                            {lastDate}
                          </p>
                        </div>
                        <Link
                          href={`/blog/${slugify(
                            post.properties.Name.title[0].plain_text
                          ).toLowerCase()}`}
                        >
                          <a className="text-sm font-normal">View Post</a>
                        </Link>
                      </div>
                      {/* <p>Tags: {post.properties.Tags}</p> */}
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
