import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center flex-col sm:flex-row gap-2 sm:gap-0">
        <h1 className="text-2xl font-bold text-blue-600">Samuel</h1>
        <div className="flex gap-6 text-lg font-semibold text-gray-800">
          <Link
            to="/"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
