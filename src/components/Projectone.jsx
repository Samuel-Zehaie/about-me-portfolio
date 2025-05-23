import { motion } from "framer-motion";

function Projectone() {
  return (
    <section>
      <motion.h1
        className="text-3xl font-bold text-blue-600 mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h1>
      <motion.h2
        className="text-2xl text-blue-900 mb-3 md:text-left text-center font-bold"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Project One
      </motion.h2>
      <motion.h2
        className="text-3xl font-semibold text-center md:text-left text-gray-800 mb-2"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        The Wild Oasis-Admin Dashboard
      </motion.h2>

      <div className="w-full px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1600px] mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {[
            "/login.png",
            "/oasis7.png",
            "/booking.png",
            "/cabin.png",
            "/setting.png",
            "/user.png",
            "/dashboarddark.png",
          ].map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`Screenshot ${i + 1}`}
              className="rounded-md shadow w-full h-auto"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            />
          ))}
        </motion.div>
      </div>

      <div>
        <motion.div
          className="bg-white shadow-md p-6 rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-xl ">
            A sleek, internal admin tool built for managing cabin bookings,
            guest profiles, check-ins, and payments at The Wild Oasis. Includes
            secure Supabase authentication and full CRUD capabilities.
          </p>
          <p className="text-2xl ">
            <strong>Tech Stack:</strong> React,Vite,Supabase, React Query,
            styled-components, Github, Vercel, Netlify
          </p>
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Key Features
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-xl">
              <li>Full CRUD operations for cabins, users, and bookings</li>
              <li>Secure admin login with Supabase authentication</li>
              <li>Real-time data management with React Query</li>
              <li>Styled with styled-components for modular design</li>
              <li>Deployed via Vercel with CI/CD from GitHub</li>
            </ul>
          </div>

          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              Curious? Try it yourself 👇
            </h1>
            <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded-md text-sm text-gray-800 w-fit mx-auto">
              <p>
                <span className="font-semibold">Demo Email:</span>{" "}
                <code className="bg-white px-1 py-0.5 rounded text-blue-600">
                  readonly@demo.com
                </code>
              </p>
              <p className="mt-2">
                <span className="font-semibold">Password:</span>{" "}
                <code className="bg-white px-1 py-0.5 rounded text-blue-600">
                  demo1234
                </code>
              </p>
            </div>

            <a
              href="https://the-wild-oasis-gray-delta.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow  hover:bg-blue-700 transition-transform duration-300 hover:scale-105"
            >
              View The Wild Oasis Admin
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projectone;
