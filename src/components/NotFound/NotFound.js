import { MdError } from "react-icons/md";
import { NotFoundPage } from "../assets/images";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full text-center px-4">
        <div className="mb-6">
          <img
            src={NotFoundPage}
            alt="Page Not Found"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 flex items-center justify-center gap-2">
          <MdError className="text-red-500 text-4xl" /> Page Not Found
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
