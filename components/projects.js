import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "CareerConnect",
    description: "A comprehensive job platform connecting employers and job seekers using advanced matching algorithms",
    image: "/projects/careerconnect.png",
    technologies: ["Spring Boot", "Java", "MongoDB", "React", "Redis", "JWT", "Spring Security"],
    points: [
      "Engineered a comprehensive job platform using Spring Boot and React, facilitating seamless connections between employers and job seekers through advanced matching algorithms.",
      "Implemented robust search functionality with Elasticsearch, enabling filtering by skills, location, and experience, achieving 45% improvement in job-candidate matching accuracy.",
      "Developed secure authentication system using Spring Security and JWT, implementing role-based access control and OAuth2 integration, leading to 80% user engagement.",
      "Optimized MongoDB queries using compound indexes and implemented Redis caching for frequently accessed data, reducing average page load time by 40%.",
      "Designed and implemented an AI-powered resume parser using NLP techniques, automatically extracting and matching skills with job requirements, improving application process efficiency by 60%.",
      "Created an analytics dashboard for employers to track job posting performance and candidate engagement metrics using Chart.js and Material-UI."
    ]
  },
  {
    title: "Charity Miles",
    description: "A mobile application connecting donors with receivers for efficient donation management and tracking",
    image: "/projects/charitymiles.png",
    technologies: ["React Native", "Firebase", "Node.js", "Express.js", "Google Maps API", "Stripe"],
    points: [
      "Developed a cross-platform mobile application using React Native and Firebase, connecting donors with receivers for seamless donation management and tracking.",
      "Implemented real-time donation tracking and secure payment gateway using Stripe, processing over $10K in donations with 99.9% transaction success rate.",
      "Integrated Google Maps API and geolocation services to connect local donors and receivers within 5-mile radius, increasing successful donations by 65%.",
      "Built comprehensive admin dashboard for NGOs using React and Material-UI to manage donation campaigns and track impact metrics in real-time.",
      "Implemented push notifications using Firebase Cloud Messaging for donation updates and matching alerts, improving user engagement by 75%.",
      "Developed an offline-first architecture using Redux Persist and AsyncStorage, ensuring seamless app functionality in low-connectivity areas."
    ]
  },
  {
    title: "Keep In Touch",
    description: "A feature-rich Android application for tourist groups that enhances travel experiences through real-time communication and location tracking.",
    image: "/projects/keepintouch.png",
    technologies: ["Android Studio", "JAVA", "Google map API", "Firebase"],
    points: [
      "Pioneered the creation of an Android application using Java, Firebase, and Android Studio for tourist groups, resulting in a 40% improvement in the overall travel experience.",
      "Engineered a feature-rich suite of functionalities encompassing group creation, member invitations, real-time chatting, location tracking, and seamless image-sharing capabilities.",
      "Developed boundary detection system: Notified leaders and members when exceeding safe zone, expediting lost member retrieval, reducing disorientation by 60%.",
      "Implemented a dependable notification system, delivering timely group updates, and boosting app usability and engagement, resulting in 50% increase in user retention.",
      "Spearheaded the implementation of user-friendly features for effortless group formation, extended invitation distribution, and seamless multimedia content sharing, driving a remarkable 70% increase in user engagement within the first quarter"
    ]
  },
  {
    title: "Blogging Web Application",
    description: "An interactive blog platform built with MERN stack, enabling users to publish and explore diverse content with optimized performance.",
    image: "/projects/blog.png",
    technologies: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS"],
    points: [
      "Created an interactive blog website using ReactJS and MongoDB, where users can publish and explore diverse blogs.",
      "Leveraged MongoDB to streamline blog storage and retrieval, achieving a 30% reduction in page loading times, enhancing site performance, and simplifying the end-to-end blog process for users."
    ]
  },
  {
    title: "All in One Compiler",
    description: "A comprehensive web compiler designed for university students and faculty, featuring multiple compiler construction tools and learning aids.",
    image: "/projects/compiler.png",
    technologies: ["NodeJS", "JavaScript", "jQuery", "Ajax", "Flex", "Yacc", "C"],
    points: [
      "Designed a web compiler for university students and faculties with 4+ features, including the first & follow, left factoring, left recursion, token generation, and accelerating the learning process.",
      "Conceptualized 2+ improvements to the compiler based on students' feedback leveraging Node, Flex, and C."
    ]
  }
];

export default function Projects() {
  return (
    <section className="py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-6">
          Projects
        </h2>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"
            >
              <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2">
                    {project.points.map((point, i) => (
                      <p key={i} className="text-gray-600 dark:text-gray-300 text-sm">
                        • {point}
                      </p>
                    ))}
                  </div>

                  <div className="mt-4">
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}