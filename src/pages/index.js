import Head from "next/head";
import { Layout, Navbar } from "@/components";
import { Header, About, Work, Projects } from "@/containers";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Layout>
        <Navbar />
      </Layout>
      <Header />
      <Layout>
        <About />
        <Work />
        <Projects />
      </Layout>
    </>
  );
}
