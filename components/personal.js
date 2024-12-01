import { motion } from "framer-motion";

export default function Personal() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center pt-4 pb-12 md:pt-6 md:pb-16"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 rounded-full bg-purple-100/50 dark:bg-purple-900/20"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full bg-pink-100/50 dark:bg-pink-900/20"></div>
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
            <h2 className="text-7xl sm:text-8xl md:text-9xl font-bold text-purple-600 dark:text-purple-400">
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
                <span className="absolute bottom-0 left-0 w-full h-3 bg-purple-200 dark:bg-purple-900/50 transform -skew-x-12"></span>
              </span>
              , a full-stack developer based in{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Arlington, Texas
              </span>
              .
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white rounded-lg font-medium transition-colors"
            >
              View GitHub
            </a>
            <a
              href="/contact"
              className="px-8 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium transition-colors"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12 text-lg text-gray-600 dark:text-gray-400"
          >
            <p>
              I specialize in building modern web applications using React, Next.js, and Node.js.
              Passionate about creating clean, efficient, and user-friendly solutions.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
