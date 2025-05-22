import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contactpage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16 text-center">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Contact Me</h1>

      <p className="text-lg text-gray-700 mb-8">
        I'm currently open to opportunities! Feel free to reach out for work,
        collaboration, or just to connect.
      </p>

      <p className="text-xl font-semibold text-gray-800 mb-6">
        📧
        <a
          href="mailto:samuelzehaie@gmail.com"
          className="text-blue-600 hover:underline"
        >
          samuelzehaie@gmail.com
        </a>
      </p>
      <div className="flex justify-center gap-6 text-3xl text-blue-600">
        <a
          href="https://github.com/Samuel-Zehaie"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/samuel-zehaie-4103924b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}

export default Contactpage;
