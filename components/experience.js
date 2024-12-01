import { motion } from "framer-motion";
import { FaBriefcase, FaCode, FaRocket } from "react-icons/fa";

const experiences = [
  {
    title: "Freelance Software Engineer",
    company: "Self-Employed",
    duration: "May 2022 - September 2022",
    icon: FaCode,
    description: [
      "Transformed front end of an import-export-trading website, from wire-frame design to seamless server deployment, with 2+ million monthly traffic.",
      "Engineered responsive design elements to optimize usability across devices, fostering user-friendliness.",
      "Reduced average loading time of 8K-row data sets by 50% through code and architecture optimizations, improving user experience and system performance.",
      "Successfully delivered a comprehensive solution that harmonized design, functionality, and performance."
    ],
    technologies: ["React", "MongoDB", "NodeJS", "HTML", "CSS", "JavaScript"]
  },
  {
    title: "Research Intern",
    company: "Space Application Center - ISRO",
    duration: "December 2021 - April 2022",
    icon: FaRocket,
    description: [
      "Analyzed Martian dataset, including OpenMARS, EMARS, and ISCA framework, to extract insights and enhance understanding of Mars' atmospheric circulation, resulting in a 20% improvement in the accuracy of atmospheric models.",
      "Developed stereo-graphic charts using Python libraries such as NumPy, Pandas, OpenCV, and PyTorch, contributing to a 30% increase in efficiency in investigating windstorm effects on the Polar Vortex.",
      "Employed Python and MATLAB scripting environments to visualize data both theoretically and visually, enhancing comprehension and enabling effective communication of findings.",
      "Demonstrated proficiency in harnessing cutting-edge technologies such as Python, MATLAB, and NetCDF4 for data analysis and visualization, resulting in a 15% reduction in data processing time while improving the quality of insights generated."
    ],
    technologies: ["Python", "MATLAB", "NetCDF4"]
  }
];

export default function Experience() {
  return (
    <section className="py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-6">
          Professional Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
              )}

              <div className="relative flex items-start">
                {/* Icon */}
                <div className="flex-shrink-0 w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                  <experience.icon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>

                {/* Content */}
                <div className="ml-6 flex-grow">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {experience.title}
                    </h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium mt-1">
                      {experience.company}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                      {experience.duration}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {experience.description.map((point, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-300">
                          • {point}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
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
