import { motion } from "framer-motion";

function TechStack() {
  return (
    <motion.section
      className="mt-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        My Tech Stack
      </h3>
      <div className="grid md:grid-cols-3 gap-8 text-lg text-gray-700 max-w-5xl mx-auto">
        <div>
          <h4 className="font-semibold text-blue-600 mb-2">Frontend</h4>
          <ul className="space-y-1">
            <li>React.js</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>styled-components</li>
            <li>React Router</li>
            <li>React Query</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-blue-600 mb-2">
            Backend & Database
          </h4>
          <ul className="space-y-1">
            <li>Node.js & Express</li>
            <li>Supabase (Auth, DB, Realtime)</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>REST APIs</li>
            <li>Spring Boot (Java)</li>
            <li>Python (scripting & automation)</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-blue-600 mb-2">
            Tools & Deployment
          </h4>
          <ul className="space-y-1">
            <li>Vite</li>
            <li>Git & GitHub</li>
            <li>Vercel</li>
            <li>Netlify</li>
            <li>Postman</li>
            <li>VS Code</li>
            <li>npm</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}

export default TechStack;
