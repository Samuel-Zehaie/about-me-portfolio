import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-10">
      <motion.div
        className="text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Hi, I'm Samuel 👋
        </h1>
        <h2
          className="text-2xl text-blue-600 font-semibold mb-4
        "
        >
          Full-Stack Developer | React Enthusiast
        </h2>
        <p className="text-gray-700 max-w-md mb-6 text-lg">
          I craft responsive web applications with modern tech stacks and a
          focus on clean design and performance.
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <Link
            to={"/projects"}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            View Projects
          </Link>
          <Link
            to={"/contact"}
            className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition"
          >
            Contact Me
          </Link>
        </div>
      </motion.div>

      <motion.img
        src="/samuel.jpg"
        alt="Profile"
        className="w-48 h-48 rounded-full border-4 border-blue-600"
        initial={{ opacity: 0, scale: 0.8, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>
  );
}

export default Hero;
