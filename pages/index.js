import Head from "next/head";
import Layout from "../components/Layout";
import HomeHero from "../components/HomeHero"

export default function Home() {
  return (
    <Layout>
      <HomeHero/>
    </Layout>
  );
}
