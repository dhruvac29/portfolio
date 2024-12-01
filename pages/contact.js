import Head from "next/head";
import NavBar from "../components/navbar";
import Contact from "../components/contact";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact - Dhruvil Chodvadiya</title>
        <meta
          name="description"
          content="Contact Dhruvil Chodvadiya - Full Stack Developer"
        />
      </Head>
      <NavBar />
      <main className="max-w-3xl px-4 mt-20 mx-auto">
        <Contact />
      </main>
    </>
  );
}
