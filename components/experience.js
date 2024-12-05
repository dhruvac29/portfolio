import { motion } from "framer-motion";
import { FaBriefcase, FaCode, FaRocket } from "react-icons/fa";

const experiences = [
  {
    title: "Research Assistant",
    company: "University of Texas at Arlington",
    duration: "Jun 2024 - Present",
    icon: FaCode,
    description: [
      "Developed and deployed two ML-based web platforms: ",
      <span key="platforms">
        <a href="https://cohortnetwork.org" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300">
          Cohort Network
        </a>
        {" for federated learning research and "}
        <a href="https://ecotoxicity.org" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300">
          Ecotoxicity
        </a>
        {" for environmental toxicity predictions."}
      </span>,
      "Architected and implemented Ecotoxicity platform using AWS services (Lambda, API Gateway, S3) and Amazon CDK for Infrastructure as Code, ensuring scalable and cost-effective deployment.",
      "Implemented cancer prediction system using Neural Networks and Autoencoders, achieving 35% improved detection accuracy and submitting findings for publication.",
      "Currently leading research on Fish Chemical Tissues detection using ML algorithms, focusing on automated chemical compound identification and classification."
    ],
    technologies: ["Python", "Machine Learning", "Neural Networks", "AWS Lambda", "API Gateway", "S3", "Amazon CDK", "Web Development"]
  },
  {
    title: "Software Engineer 2",
    company: "Hornbook Technologies PVT. LTD.",
    duration: "May 2024 - Aug 2024",
    icon: FaCode,
    description: [
      "Led development of microservices architecture using Node.js and React, improving system scalability by 40% through implementation of event-driven communication and Redis caching.",
      "Mentored 2 junior developers in React best practices and microservices patterns, conducting weekly code reviews and pair programming sessions that improved team code quality metrics by 25%.",
      "Architected AWS cloud infrastructure using ECS, CloudFormation, and CI/CD pipelines, resulting in 30% reduction in deployment time and improved system reliability with 99.9% uptime."
    ],
    technologies: ["Node.js", "React", "AWS ECS", "Redis", "CloudFormation", "Microservices", "CI/CD"]
  },
  {
    title: "Software Engineer",
    company: "Hornbook Technologies PVT. LTD.",
    duration: "May 2022 - April 2024",
    icon: FaCode,
    description: [
      "Developed and maintained a real-time inventory management system using React, Node.js, and MongoDB, implementing WebSocket for live updates and Redux for state management, serving 50K+ daily active users.",
      "Optimized MongoDB query performance by implementing compound indexes and aggregation pipelines, reducing average query response time from 800ms to 200ms and improving overall application performance by 35%.",
      "Designed and implemented a distributed caching system using Redis and implemented rate limiting, reducing database load by 40% and improving API response times by 60% during peak traffic.",
      "Built a custom analytics dashboard using Chart.js and Material-UI, providing real-time insights into user behavior and system performance, leading to data-driven improvements in user experience."
    ],
    technologies: ["React", "Node.js", "MongoDB", "Redis", "WebSocket", "Redux", "Material-UI", "Chart.js"]
  },
  {
    title: "Research Intern",
    company: "Space Application Center - ISRO",
    duration: "December 2021 - April 2022",
    icon: FaRocket,
    description: [
      "Analyzed Martian dataset, including OpenMARS, EMARS, and ISCA framework, to extract insights and enhance understanding of Mars' atmospheric circulation, resulting in a 20% improvement in the accuracy of atmospheric models.",
      "Utilized Python libraries (NumPy, Pandas, OpenCV, PyTorch) to develop stereo-graphic charts, increasing efficiency in windstorm effect investigations by 30%.",
      "Demonstrated proficiency in harnessing cutting-edge technologies such as Python, MATLAB, and NetCDF4 for data analysis and visualization, resulting in a 15% reduction in data processing time while improving the quality of insights generated."
    ],
    technologies: ["Python", "MATLAB", "NetCDF4", "NumPy", "Pandas", "OpenCV", "PyTorch"]
  },
  {
    title: "Software Engineer Intern",
    company: "Hornbook Technologies PVT. LTD.",
    duration: "Jan 2021 - Jun 2021",
    icon: FaCode,
    description: [
      "Developed a sentiment analysis model using BERT and PyTorch for customer feedback classification, achieving 89% accuracy and reducing manual review time by 65% for the customer support team.",
      "Implemented data preprocessing pipeline using Pandas and NumPy for handling 100K+ customer reviews, including text cleaning, tokenization, and feature engineering, improving model training efficiency by 40%.",
      "Built RESTful APIs using FastAPI to serve ML models in production, implementing model versioning and A/B testing framework, handling 500+ predictions per minute with 200ms average response time.",
      "Created an automated ML pipeline using MLflow for experiment tracking and model registry, enabling efficient model iteration and deployment, reducing model deployment time from 2 days to 4 hours."
    ],
    technologies: ["Python", "PyTorch", "BERT", "FastAPI", "MLflow", "Pandas", "NumPy", "Docker"]
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
