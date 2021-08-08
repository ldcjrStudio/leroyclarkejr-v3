import Link from "next/link";
import Layout from "../components/Layout";

import { getDatabase } from "../lib/notion";

const databaseId = process.env.NOTION_DATABASE_ID;

const Portfolio = ({ projects }) => {
  console.log(projects);
  return (
    <div>
      <h1>hello</h1>
    </div>
    // <Layout>
    //   <section id="portfolio">
    //     <div className="projects container">
    //       {projects.map((project) => (
    //         <div className="project" key={Math.floor(Math.random() * 100)}>
    //           <div className="container">
    //             <div className="image">
    //               {/* <img src={project.img} alt={project.title} /> */}

    //               {/* <Img
    //                 // style={{ width: "100%", height: "100%" }}
    //                 fluid={
    //                   project.img === "tb"
    //                     ? data.tb.childImageSharp.fluid
    //                     : project.img === "jiffy"
    //                     ? data.jiffy.childImageSharp.fluid
    //                     : project.img === "fifty"
    //                     ? data.fifty.childImageSharp.fluid
    //                     : project.img === "valencia"
    //                     ? data.valencia.childImageSharp.fluid
    //                     : project.img === "pv1"
    //                     ? data.pv1.childImageSharp.fluid
    //                     : data.nt.childImageSharp.fluid
    //                 }
    //                 // fluid={`${data.tb.childImageSharp.fluid}`}
    //               /> */}
    //             </div>

    //             <div className="project-copy">
    //               <h4>{project.title}</h4>
    //               <p>{project.Description}</p>
    //               <h5>Stack</h5>
    //               <ul>
    //                 <li>{project.Stack}</li>
    //               </ul>
    //               {project.url === "#" ? (
    //                 <span className="my-button url-link">Coming soon!</span>
    //               ) : (
    //                 <a href={project.url} className="url-link my-button">
    //                   See live
    //                 </a>
    //               )}
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </section>
    // </Layout>
  );
};

export default Portfolio;

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);
  console.log(database);
  return {
    props: {
      projects: database,
    },
    revalidate: 1,
  };
};
