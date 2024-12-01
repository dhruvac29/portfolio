import { motion } from "framer-motion";
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs,
  SiTailwindcss, SiBootstrap, SiMaterialui, SiNodedotjs,
  SiExpress, SiMongodb, SiMysql, SiPostgresql, SiPython,
  SiDjango, SiGit, SiGithub, SiVisualstudiocode, SiPostman,
  SiDocker, SiAmazonaws, SiFirebase
} from 'react-icons/si';

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss3, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { name: "Material UI", icon: SiMaterialui, color: "#0081CB" }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Django", icon: SiDjango, color: "#092E20" }
    ]
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "VS Code", icon: SiVisualstudiocode, color: "#007ACC" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "AWS", icon: SiAmazonaws, color: "#232F3E" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-6">
          Skills & Technologies
        </h2>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.2,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="bg-white dark:bg-gray-800 rounded-lg p-4 flex items-center space-x-3 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-8 h-8 flex items-center justify-center">
                      {skill.icon && (
                        <skill.icon
                          className="w-6 h-6"
                          style={{ color: skill.color }}
                        />
                      )}
                    </div>
                    <span className="text-gray-800 dark:text-gray-200 font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400">
            Always learning and exploring new technologies to stay up-to-date with industry trends.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
