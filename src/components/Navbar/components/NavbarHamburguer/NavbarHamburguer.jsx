import NavbarLinkContainer from "../NavbarLinkContainer/NavbarLinkContainer";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useNavbar } from "../../../../hooks/useNavbar";
import { Toggle } from "./Toggle";
import NavbarBtn from "../NavbarBtn/NavbarBtn";

const sidebar = {
  open: {
    clipPath: `circle(40px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const variantes = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const NavbarHamburguer = () => {
  const { isOpen, openNavbar, onClose, toggleNavbar } = useNavbar();
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [ref, onClose]);

  return (
    <div className="inline-flex md:hidden gap-2 py-0 w-full justify-end pr-4 items-center">
      <AnimatePresence>
        {open && (
          <motion.nav
            ref={ref}
            initial={false}
            animate={isOpen ? "open" : "closed"}
          >
            <motion.div className="text-bordo" variants={sidebar} />
            <motion.div
              className={
                isOpen
                  ? "bg-black fixed w-auto h-auto top-14 right-0 p-6 rounded-b-xl bg-bordo opacity-83 z-40 md:pr-16 flex flex-col justify-evenly align-center"
                  : "hidden"
              }
              variants={variantes}
            >
              <NavbarLinkContainer />
            </motion.div>
            <div className="flex flex-row items-center my-auto">
              <NavbarBtn />
              <Toggle toggle={() => toggleNavbar()} />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavbarHamburguer;
