import Container from "../components/Container";
import React from "react";
import { skills } from "../lib/skills";

function about() {
  return (
    <>
      <section className="about-me"></section>
      <section className="tech-stack">
        <Container>
          <div className="container mx-auto">
            <div className="heading flex justify-center max-w-lg mx-auto">
              <h3 className="mb-8">My Tech Stack</h3>
            </div>
            <div className="my-tech-stack flex justify-center">
              <ul className="max-w-lg flex justify-center flex-row flex-wrap">
                {skills.map((skill) => {
                  return (
                    <li
                      key={skill.key}
                      className=" my-4 mx-6 flex-col justify-center items-center text-center"
                    >
                      {React.cloneElement(skill.icon, {
                        className: "icon w-16 max-h-16 mx-auto flex-grow mb-2",
                      })}
                      <p className="text-base">{skill.name}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default about;
