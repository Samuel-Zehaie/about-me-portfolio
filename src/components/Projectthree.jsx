import { motion } from "framer-motion";
function Projectthree() {
  return (
    <section>
      <motion.h1
        className="text-2xl text-blue-900 text-center md:text-left mb-3 mt-4 font-bold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Project Three
      </motion.h1>

      <motion.h2
        className="text-3xl font-semibold text-center md:text-left text-gray-800 mb-3"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        CollabKits
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
            "/CollabHome.png",
            "/CollabLogin.png",
            "/CollabSignUp.png",
            "/CollabDash.png",
            "/CollabBoard.png",
            "/CollabnBoard.png",
            "/CollabCreateC.png",
            "/CollabAndrew.png",
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
          CollabKits is a Kanban-style project collaboration tool designed to
          help users organize tasks visually using boards, columns and cards. It
          allows users organize tasks visually using boards, columns, and cards.
          it allows users to create and manage boards, add columns for task
          stages, and populate them with customizable cards.
        </p>

        <p className="text-2xl">
          <strong>Tech Stack:</strong> React, Vite, Supabase, React Query, React
          Icons, Vercel
        </p>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Key Features
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-xl">
            <li>
              Secure login system powered by Supabase, ensuring private access
              to user-specific boards.
            </li>
            <li>
              Protected routes with session-based access control for
              authenticated users.
            </li>
            <li>
              Full CRUD functionality for project organization:
              <ul className="list-disc list-inside ml-6 space-y-1 text-lg">
                <li>
                  <strong>Boards</strong>: Create and manage multiple boards for
                  different projects.
                </li>
                <li>
                  <strong>Columns</strong>: Add task stages such as "To Do", "In
                  Progress", and "Done".
                </li>
                <li>
                  <strong>Cards</strong>: Add, update, and remove task cards
                  with titles and descriptions.
                </li>
              </ul>
            </li>
            <li>
              Real-Time Updates: Leveraging React Query with Supabase for
              seamless and responsive data fetching and mutations.
            </li>
            <li>
              CI/CD pipeline with GitHub and Vercel for automatic deployment.
            </li>
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
            Organize, collaborate, and execute—seamlessly.
          </h1>
          <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded-md text-sm text-gray-800 w-fit mx-auto">
            <p>
              <span className="font-semibold">Demo Email:</span>{" "}
              <code className="bg-white px-1 py-0.5 rounded text-blue-600">
                samuel@example.com
              </code>
            </p>
            <p className="mt-2">
              <span className="font-semibold">Password:</span>{" "}
              <code className="bg-white px-1 py-0.5 rounded text-blue-600">
                pass0987
              </code>
            </p>
          </div>
          <a
            href="https://collab-kits-b6cb.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-700 text-white font-semibold rounded-xl shadow hover:bg-blue-800 transition-transform duration-300 hover:scale-105"
          >
            View CollabKits Website
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Projectthree;
