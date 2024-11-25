import { motion } from "framer-motion";
import { EXPERIENCE } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-12">
          Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 sm:left-1/2 transform -translate-x-px sm:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-600 via-pink-600 to-blue-600"></div>

          {EXPERIENCE.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={index}
              className="relative mb-12 last:mb-0"
            >
              <div
                className={`flex flex-col sm:flex-row items-center ${
                  index % 2 === 0 ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 sm:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-purple-600 border-4 border-white dark:border-gray-900"></div>

                {/* Content */}
                <div
                  className={`w-full sm:w-1/2 ${
                    index % 2 === 0 ? "sm:pl-8" : "sm:pr-8"
                  }`}
                >
                  <div className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                    <a
                      href={item.companyLink}
                      target="_blank"
                      rel="noreferrer"
                      className="block"
                    >
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {item.companyName}
                      </h3>

                      <p className="mt-2 text-sm font-medium text-purple-600 dark:text-purple-400">
                        {item.startDate} - {item.endDate}
                      </p>

                      <ul className="mt-4 space-y-3 list-disc pl-4">
                        {item.companyDescription.map((desc, idx) => (
                          <li
                            key={idx}
                            className="text-gray-700 dark:text-gray-300 text-base leading-relaxed marker:text-purple-500 dark:marker:text-purple-400"
                          >
                            <span className="pl-2">{desc}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                          Technologies Used:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {item.companyTechnologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
