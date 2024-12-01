import Head from "next/head";
import NavBar from "../components/navbar";
import Project from "../components/projects";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Dhruvil Chodvadiya</title>
        <meta name="description" content="Projects by Dhruvil Chodvadiya - Full Stack Developer" />
      </Head>
      <NavBar />
      <main className="max-w-3xl px-4 mt-5 mx-auto">
        <Project />
      </main>
    </>
  );
}
