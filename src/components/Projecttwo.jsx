import { motion } from "framer-motion";
function Projecttwo() {
  return (
    <section>
      <motion.h1
        className="text-2xl text-blue-900 text-center md:text-left mb-3 mt-4 font-bold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Project Two
      </motion.h1>

      <motion.h2
        className="text-3xl font-semibold text-center md:text-left text-gray-800 mb-3"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        The Wild Oasis-Website
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
            "/signin.png",
            "/Home.png",
            "/about.png",
            "/cabinw.png",
            "/cabin1.png",
            "/reservation.png",
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

      <motion.div
        className="bg-white shadow-md p-6 rounded-lg mt-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-xl">
          A responsive client-facing cabin booking website where users can
          browse available stays, filter by price and features, and simulate
          bookings — built to mirror a real-world reservation flow with smooth
          animations and dynamic routing.
        </p>

        <p className="text-2xl">
          <strong>Tech Stack:</strong> React, Next.js, Supabase, React Icons,
          date-fns, Vercel
        </p>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Key Features
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-xl">
            <li>Google Sign-In with OAuth 2.0 via NextAuth.js</li>
            <li>Protected routes with secure session handling</li>
            <li>CI/CD pipeline using GitHub and Vercel</li>
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
            Dive into the user experience ✨
          </h1>
          <a
            href="https://the-wild-oasis-website-gamma-jade.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-700 text-white font-semibold rounded-xl shadow hover:bg-blue-800 transition-transform duration-300 hover:scale-105"
          >
            View The Wild Oasis Website
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Projecttwo;
