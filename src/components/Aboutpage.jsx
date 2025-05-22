import { motion } from "framer-motion";

function Aboutpage() {
  return (
    <motion.section
      className="max-w-4xl mx-auto px-6 py-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeIn" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h1 className="text-3xl font-bold text-blue-600 mb-6">About Me</h1>

      <p className="mb-4 text-xl text-gray-800 ">
        Hi, i'm samuel- a full stack developer with a strong focus on building
        modern, responsive web applications using React, Tailwind CSS, and
        styled-components. I bring aunique combination of technical proficiency
        and operational experience from my previous role as a Director of
        Operations in the tech and disturbituion space.
      </p>

      <p className="mb-4 text-xl text-gray-800 ">
        Over the past year, I’ve dedicated myself to transitioning into software
        development full-time, completing hands-on projects with real-world
        tools like Supabase, Node.js, Express, and MongoDB. I’ve also explored
        server-side frameworks like Spring Boot (Java) and built automation
        scripts in Python. Whether I’m working on a full-stack booking app or
        polishing UI transitions in a profile site, I care deeply about writing
        clean code and crafting smooth user experiences.
      </p>

      <p className="mb-4 text-xl text-gray-800 ">
        I approach each project like a product — with attention to usability,
        performance, and long-term maintainability. Having worked across
        multiple countries in a leadership capacity, I bring a collaborative
        mindset, a bias toward action, and a commitment to learning quickly.
      </p>
      <p className="mb-4 text-xl text-gray-800 ">
        I’m currently seeking opportunities where I can contribute to meaningful
        products, grow alongside experienced engineers, and keep expanding my
        technical depth.
      </p>
    </motion.section>
  );
}

export default Aboutpage;
