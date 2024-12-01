import Head from "next/head";
import NavBar from "../components/navbar";
import Experience from "../components/experience";

export default function ExperiencePage() {
  return (
    <>
      <Head>
        <title>Experience - Dhruvil Chodvadiya</title>
        <meta name="description" content="Experience of Dhruvil Chodvadiya - Full Stack Developer" />
      </Head>
      <NavBar />
      <main className="max-w-3xl px-4 mt-5 mx-auto">
        <Experience />
      </main>
    </>
  );
}
