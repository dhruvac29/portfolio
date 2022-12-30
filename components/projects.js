import { PROJECTS } from "../data/projects";

export default function Project() {
  return (
    <>
      <section id="projects" className="my-20">
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl font-bold animate-move-bg bg-gradient-to-r from-purple-500 via-red-500 to-purple-500 bg-[length:400%] bg-clip-text text-transparent">
            Projects
          </h2>
        </div>
        {PROJECTS.map((item, index) => {
          return (
            <div
              key={item}
              className="hover:shadow-lg focus:shadow-lg mb-5 flex flex-col border border-gray-400 hover:ring-gray-600 hover:ring dark:border-gray-600 dark:hover:ring-gray-300 dark:hover:ring rounded-lg mt-5"
            >
              <a href={item.projectLink} target="_blank" rel="noreferrer">
                <div className="p-4 focus:bg-gray-100 dark:focus:bg-gray-900">
                  <h3 className="mb-2 text-xl font-semibold tracking-normal dark:text-gray-100">
                    {item.projectName}
                  </h3>
                  <p className="text-sm md:text-base font-normal text-gray-900 dark:text-gray-300">
                    {item.projectDescription}
                  </p>
                  <ul className="flex md:justify-start text-xs md:text-sm mt-3 font-semibold">
                    {item.projectTechnologies.map((tech, index) => {
                      return (
                        <li key={tech} className="md:ml-1 mr-3">
                          <i>{tech}</i>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </a>
            </div>
          );
        })}
          <div className={"flex flex-col"}>
              <button  className={"align-middle justify-center hover:underline decoration-2"}>
                  <a href={"https://github.com/shrey333?tab=repositories"} target="_blank" rel="noreferrer">More projects</a>
              </button>
          </div>
      </section>
    </>
  );
}