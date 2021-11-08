import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "../components/Container";

import HomeHero from "../components/HomeHero";
import Hr from "../components/Hr";

import { Text } from "../pages/blog/[id].js";
import { getDatabase } from "../lib/notion";

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
  console.log(posts[0].properties);
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
              <h2 className="mb-6 text-center">
                My name is Leroy and I'm a <br /> self-taught front end
                engineer.
              </h2>
              <p className="mb-4">
                Thank you for visiting my Digital Garden! This is my personal
                website where I share my projects and drop notes & articles
                about things I’m interested in. You’ll mostly see things about
                web development, but my interests also include self-improvement,
                entreprenuership, fitness, crypto, web 3.0, and music.
              </p>
              <p className="mb-4">
                Check out my{" "}
                <Link href="about">
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
            <h3 className="mb-8 text-left">Blog</h3>
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
                      className="rounded-lg bg-gray-800 dark:bg-gray-800 p-4 mb-4 mx-auto"
                    >
                      <h3>
                        <Link href={`/blog/${post.id}`}>
                          <h2>
                            <Text text={post.properties.Name.title} />
                          </h2>
                        </Link>
                      </h3>
                      <p>{lastDate}</p>

                      <p>{post.date}</p>
                      <Link href={`/blog/${post.id}`}>
                        <a> Read post →</a>
                      </Link>
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
