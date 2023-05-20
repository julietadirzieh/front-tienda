import { NavLink } from "react-router-dom";
import constants from "./constants";

const NavbarLinkContainer = () => {
  return (
    <ul className="flex flex-col md:flex-row pt-1 items-center text-center justify-center h-auto py-1 gap-2">
      {constants.map((link, index) => (
        <li
          key={index}
          className="text-center pr-4 md:pr-0 py-0 px-2 flex content-center items-center justify-center"
        >
          <NavLink
            to={link.href}
            className={({
              isActive,
            }) => `text-center flex p-1 md:p-0 md:text-xs lg:text-base uppercase scale-95 ${
              isActive
                ? "text-red font-bold"
                : "text-white hover:text-red hover:scale-100"
            }
            `}
            replace={true}
          >
            {link.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinkContainer;
