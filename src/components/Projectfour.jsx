import { motion } from "framer-motion";

function Projectfour() {
  return (
    <section>
      <motion.h1
        className="text-2xl text-blue-900 text-center md:text-left mb-3 mt-4 font-bold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Project Four
      </motion.h1>

      <motion.h2
        className="text-3xl font-semibold text-center md:text-left text-gray-800 mb-3"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Next Cellection
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
            "/NCHome.png",
            "/NCProducts.png",
            "/NCProducts1.png",
            "/NCabout.png",
            "/NCcontact.png",
            "/NCadmin.png",
            "/NCadmin2.png",
            "/NCadmin3.png",
            "/NCcheckout.png",
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
          <strong>Next Cellection</strong> is a full-stack e-commerce
          application designed to showcase and sell premium Apple products. It
          features a modern storefront experience, intuitive cart management,
          and a protected admin dashboard for product control. Built with a
          server-first mindset using Next.js and Supabase, it supports seamless
          user sessions, image uploads, and dynamic routing for products.
        </p>

        <p className="text-2xl mt-4">
          <strong>Tech Stack:</strong> Next.js, React, Supabase (DB + Auth +
          Storage), Tailwind CSS, React Context API, NextAuth.js, Vercel
        </p>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Key Features
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-xl">
            <li>
              Persistent cart with quantity control using React Context API.
            </li>
            <li>
              Dynamic routing for product detail pages with real-time updates.
            </li>
            <li>
              Admin dashboard with full CRUD operations (add, edit, delete
              products).
            </li>
            <li>
              Image upload and storage management using Supabase Storage API.
            </li>
            <li>Responsive design across desktop and mobile devices.</li>
            <li>
              CI/CD pipeline via GitHub and Vercel for instant deployment.
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
            Shop smart. Manage with ease.
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
            href="https://next-cellection.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-700 text-white font-semibold rounded-xl shadow hover:bg-blue-800 transition-transform duration-300 hover:scale-105"
          >
            View Next Cellection Website
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Projectfour;
