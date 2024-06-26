import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="form max-w-[600px]">
      <div className="flex items-center gap-8">
        <FaExclamationTriangle className="text-red-500 dark:text-yellow-300 w-16 h-16 self-start" />
        <div className="flex flex-col">
          <h1 className="text-4xl font-title text-balance text-center dark:text-white/60">
            ERROR 404:
          </h1>
          <p className="text-center text-2xl font-title dark:text-white/60">
            Page not found
          </p>
          <Link
            className="border-none outline-none  text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center  font-title  mt-8 dark:from-secondary-dark dark:to-accent-dark dark:text-primary-dark"
            to="/"
          >
            Go back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
