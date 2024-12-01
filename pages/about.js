import Head from "next/head";
import NavBar from "../components/navbar";
import Personal from "../components/personal";

export default function About() {
  return (
    <>
      <Head>
        <title>About - Dhruvil Chodvadiya</title>
        <meta
          name="description"
          content="About Dhruvil Chodvadiya - Full Stack Developer"
        />
      </Head>
      <div className="bg-[#f8f8f8] dark:bg-gray-900 min-h-screen">
        <NavBar />
        <main className="max-w-3xl px-4 mt-15 mx-auto">
          <Personal />
        </main>
      </div>
    </>
  );
}
