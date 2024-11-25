import { motion } from "framer-motion";
import { PROJECTS } from "../data/projects";

export default function Project() {
  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-12">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={index}
              className="group relative"
            >
              <a
                href={item.projectLink}
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <div className="h-full p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group-hover:border-purple-500 dark:group-hover:border-purple-400">
                  {/* Project Icon/Logo */}
                  <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {item.projectName}
                  </h3>

                  <p className="mt-3 text-gray-600 dark:text-gray-300 line-clamp-3">
                    {item.projectDescription}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.projectTechnologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Link */}
                  <div className="mt-6 flex items-center text-purple-600 dark:text-purple-400 font-medium">
                    <span className="mr-2">View Project</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-2 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}