import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PageHeader = ({ title, link }) => {
  return (
    <div
      className="bg-gradient-to-b from-black to-gray-100 h-80px flex items-center align-middle my-auto"
      id="trigger"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="flex ml-6"
      >
        {link && (
          <Link className="z-20 items-center align-middle my-auto" to={link}>
            <img
              src="/icons/arrowWhite.svg"
              className="text-white rotate-90 h-4"
              alt="arrow back icon"
              width={80}
              height={80}
            />
          </Link>
        )}
        <h1 className="ml-4 text-white text-xl md:text-2xl uppercase ">
          {title}
        </h1>
      </motion.div>
    </div>
  );
};

export default PageHeader;
