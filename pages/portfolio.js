// import Link from "next/link";
import Layout from "../components/Layout";
import getProjects from "../lib/airtable";
import Image from "next/image";

export default function Portfolio({ projects }) {

  return (
    <>
      <section id="portfolio" className="pt-24">
        <div className="heading w-full text-center mb-8">
          <h2 className="">My Portfolio</h2>
        </div>
        <div className="container w-full mx-auto">
          <div className="projects-container w-full flex justify-center flex-wrap">
            {projects.map((project) => (
              <div
                className="project max-w-xs p-0 m-6 border-black dark:border-white border-2 box-border flex-grow"
                key={Math.floor(Math.random() * 100)}
              >
                <div className="container">
                  <div className="img-container w-300px h-100">
                    <Image
                      src={project.fields.Photos[0].url}
                      layout="responsive"
                      width={project.fields.Photos[0].width}
                      height={project.fields.Photos[0].height}
                    />
                  </div>

                  <div className="project-copy p-6">
                    <h4 className="mb-2">{project.fields.Name}</h4>
                    <p>{project.fields.Description}</p>
                    <h5 className="mt-3">Stack</h5>
                    <p>{project.fields.Stack}</p>
                    {project.fields.Url === "#" ? (
                      <h5 className="my-button url-link mt-3">Coming soon!</h5>
                    ) : (
                      <a
                        href={project.fields.Url}
                        className="url-link my-button flex flex-nowrap flex-row items-center mt-3"
                      >
                        <h5> See live </h5>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps({}) {
  const projects = await getProjects();

  return {
    props: { projects },
  };
}
