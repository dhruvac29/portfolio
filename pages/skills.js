import Head from "next/head";
import NavBar from "../components/navbar";
import Skills from "../components/skills";

export default function SkillsPage() {
  return (
    <>
      <Head>
        <title>Skills - Dhruvil Chodvadiya</title>
        <meta name="description" content="Skills and Technologies - Dhruvil Chodvadiya" />
      </Head>
      <div className="bg-[#f8f8f8] dark:bg-gray-900 min-h-screen">
        <NavBar />
        <main className="max-w-3xl px-4 mt-5 mx-auto">
          <Skills />
        </main>
      </div>
    </>
  );
}
