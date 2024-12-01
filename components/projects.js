import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Keep In Touch",
    description: "A feature-rich Android application for tourist groups that enhances travel experiences through real-time communication and location tracking.",
    details: [
      "Pioneered the creation of an Android application using Java, Firebase, and Android Studio for tourist groups, resulting in a 40% improvement in the overall travel experience.",
      "Engineered a feature-rich suite of functionalities encompassing group creation, member invitations, real-time chatting, location tracking, and seamless image-sharing capabilities.",
      "Developed boundary detection system: Notified leaders and members when exceeding safe zone, expediting lost member retrieval, reducing disorientation by 60%.",
      "Implemented a dependable notification system, delivering timely group updates, and boosting app usability and engagement, resulting in 50% increase in user retention.",
      "Spearheaded the implementation of user-friendly features for effortless group formation, extended invitation distribution, and seamless multimedia content sharing, driving a remarkable 70% increase in user engagement within the first quarter"
    ],
    technologies: ["Android Studio", "JAVA", "Google map API", "Firebase"],
    links: {
      github: "#",
      live: "#"
    }
  },
  {
    title: "Blogging Web Application",
    description: "An interactive blog platform built with MERN stack, enabling users to publish and explore diverse content with optimized performance.",
    details: [
      "Created an interactive blog website using ReactJS and MongoDB, where users can publish and explore diverse blogs.",
      "Leveraged MongoDB to streamline blog storage and retrieval, achieving a 30% reduction in page loading times, enhancing site performance, and simplifying the end-to-end blog process for users."
    ],
    technologies: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS"],
    links: {
      github: "#",
      live: "#"
    }
  },
  {
    title: "All in One Compiler",
    description: "A comprehensive web compiler designed for university students and faculty, featuring multiple compiler construction tools and learning aids.",
    details: [
      "Designed a web compiler for university students and faculties with 4+ features, including the first & follow, left factoring, left recursion, token generation, and accelerating the learning process.",
      "Conceptualized 2+ improvements to the compiler based on students' feedback leveraging Node, Flex, and C."
    ],
    technologies: ["NodeJS", "JavaScript", "jQuery", "Ajax", "Flex", "Yacc", "C"],
    links: {
      github: "#",
      live: "#"
    }
  }
];

export default function Projects() {
  return (
    <section className="py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-6">
          Featured Projects
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2">
                    {project.details.map((detail, i) => (
                      <p key={i} className="text-gray-600 dark:text-gray-300 text-sm">
                        • {detail}
                      </p>
                    ))}
                  </div>

                  <div className="pt-4">
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      <FaGithub className="w-5 h-5" />
                      <span>View Code</span>
                    </a>
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      <FaExternalLinkAlt className="w-5 h-5" />
                      <span>Live Demo</span>
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