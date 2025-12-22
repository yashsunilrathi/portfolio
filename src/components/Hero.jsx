import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi, I’m <span className="text-blue-400">Yash Rathi</span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-400">
          Computer Engineer | Full Stack (MERN) | AI/ML Enthusiast
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#projects"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded font-medium"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="border border-gray-600 hover:border-blue-400 px-6 py-3 rounded font-medium"
          >
            Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
