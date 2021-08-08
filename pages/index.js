import React from "react";

import Head from "next/head";
import Layout from "../components/Layout";
import HomeHero from "../components/HomeHero";

import { skills } from "../lib/skills";

export default function Home() {
  return (
    <Layout>
      <HomeHero />
      <section id="about">
        <div className="container flex justify-center mx-auto">
          <div className=" max-w-lg">
            <p>
              👋🏾 I'm Leroy - A self taught Front-end Engineering living in New
              Jersey.
            </p>
            <p>
              I ultimately learned ot coe because of my love for technology and
              appreciation for digital multimedia art. I want to work with
              creative people that want a website or application to go along
              with their creative personality and really speaks to what their
              brand is about. My goal is to give creativees a place where your
              fans and ollowers can find you latest content.{" "}
            </p>
            <p>
              I see web development as my opportunity to unleash my creativity
              while also challenging myself technically.
            </p>
            <p>
              Aside from web development my interests include fitness, music,
              personal finance, and entreprenuership.
            </p>
            <p>
              Pairing my coding skillset with my knowledge in brand strategy, UI
              design, SEO, I build modern, aesthetically pleasing websites for
              ambitious people and brands.
            </p>
            <p>Hit me up to collaborate, chat or</p>
          </div>
        </div>
      </section>
      <section className="tech-stack">
        <div className="container mx-auto">
          <div className="max-w-lg heading flex justify-center">
            <h2 className="mb-6">My Tech Stack</h2>
          </div>
          <div className="my-tech-stack flex justify-center">
            <ul className="max-w-lg flex justify-evenly flex-row flex-wrap">
              {skills.map((skill) => {
                return (
                  <li
                    key={skill.key}
                    className=" mb-6 mx-4 flex-col justify-center items-center text-center"
                  >
                    {React.cloneElement(skill.icon, {
                      className: "icon w-16 flex-grow",
                    })}
                    <p>{skill.name}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
