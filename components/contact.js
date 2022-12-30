export default function Contact() {
  return (
    <>
      <section id="contact" className="my-20">
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl font-bold animate-move-bg bg-gradient-to-r from-purple-500 via-red-500 to-purple-500 bg-[length:400%] bg-clip-text text-transparent">
            Contact
          </h2>
        </div>
        <ul className="flex md:justify-start mt-3 text-base sm:text-xl font-semibold">
          <li className="md:ml-1 mr-3 hover:underline">
            <a
              href="https://www.linkedin.com/in/dhruvil-chodvadiya-6a4434175/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li className="md:ml-1 mr-3 hover:underline">
            <a
              href="https://github.com/dhruvac29"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li className="md:ml-1 mr-3 hover:underline">
            <a
              href="mailto:dhruvac29@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Email
            </a>
          </li>
          <li className="md:ml-1 mr-3 hover:underline">
            <a
              href="/pdfs/Resume_Dhruvil.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}