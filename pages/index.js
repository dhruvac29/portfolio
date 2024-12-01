import Head from "next/head";
import NavBar from "../components/navbar";
import Personal from "../components/personal";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dhruvil Chodvadiya - Full Stack Developer</title>
        <meta name="robots" content="follow, index" />
        <meta
          name="description"
          content="Full Stack Developer, Engineer and Learner"
        />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dhruvil Chodvadiya" />
        <meta
          property="og:description"
          content="Full Stack Developer, Engineer and Learner"
        />
        <meta
          property="og:title"
          content="Dhruvil Chodvadiya : Developer, Engineer"
        />
      </Head>
      <div className="bg-[#f8f8f8] dark:bg-gray-900 min-h-screen">
        <NavBar />
        <main className="max-w-3xl px-4 mt-16 mx-auto">
          <Personal />
        </main>
      </div>
    </>
  );
}
