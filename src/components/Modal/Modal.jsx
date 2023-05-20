import { motion, AnimatePresence } from "framer-motion";

const overlayVariants = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      duration: 0.2,
      delay: 0,
    },
  },
  hidden: {
    opacity: 1,
    transition: {
      when: "afterChildren",
      duration: 0.2,
      delay: 0,
    },
  },
};

const Modal = ({ isOpen, onClose, title, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={overlayVariants}
          onClick={onClose}
          className="z-50 flex justify-center items-center h-full w-full overflow-x-hidden overflow-y-auto scrollbar-hide fixed inset-0 bg-stone-600 bg-opacity-75 shadow"
        >
          <motion.div
            className="relative mx-3% md:mx-0 h-1/2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <div className="border-0 shadow-2xl relative flex flex-col w-full h-auto md:h-full mx-auto h-content max-h-fit">
              {title && (
                <h4 className="text-bordo mt-4 text-2xl font-bold uppercase mx-auto">
                  {title}
                </h4>
              )}
              {onClose && (
                <button
                  className="font-bold text-2xl rounded-md text-center absolute right-0 px-3 py-1"
                  onClick={onClose}
                  type="button"
                >
                  X
                </button>
              )}
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
