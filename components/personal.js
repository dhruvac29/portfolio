import { motion } from "framer-motion";

export default function Personal() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center pt-4 pb-12 md:pt-6 md:pb-16"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 rounded-full bg-purple-100 dark:bg-purple-900/20 blur-3xl opacity-50"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full bg-pink-100 dark:bg-pink-900/20 blur-3xl opacity-50"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center sm:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-7xl sm:text-8xl md:text-9xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent pb-4">
              Hello!
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 leading-relaxed">
              I&apos;m{" "}
              <span className="font-bold relative inline-block">
                <span className="relative z-10 text-gray-900 dark:text-white">
                  Dhruvil Chodvadiya
                </span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-purple-200 dark:bg-purple-900 transform -skew-x-12 -z-10"></span>
              </span>
              , a full-stack developer based in{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Arlington, Texas
              </span>
              .
            </h3>

            <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-400">
              Welcome to my digital space! I craft beautiful and functional web
              experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 justify-center sm:justify-start">
              <a
                href="#contact"
                className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 font-medium"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors duration-200 font-medium"
              >
                View Projects
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
