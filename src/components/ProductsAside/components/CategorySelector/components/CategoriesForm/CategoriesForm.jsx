import { motion } from "framer-motion";
const CategoriesForm = ({ isOpen, children, onChange }) => {
  return (
    <form className={" overflow-hidden"}>
      <motion.div
        initial={{ height: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
        }}
      >
        {children}
      </motion.div>
    </form>
  );
};

export default CategoriesForm;
