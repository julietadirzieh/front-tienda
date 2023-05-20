import { Link } from "react-router-dom";
import NavbarBtn from "./components/NavbarBtn/NavbarBtn";
import NavbarHamburguer from "./components/NavbarHamburguer/NavbarHamburguer";
import NavbarLinkContainer from "./components/NavbarLinkContainer/NavbarLinkContainer";
import ProductSearchNavbar from "./components/ProductSearchNavbar/ProductSearchNavbar";

const Navbar = () => {
  return (
    <>
      <header className="w-full fixed top-0 bg-black z-30">
        <nav className="text-center md:h-60px flex w-full">
          <Link
            to="/"
            className="text-white my-auto pl-4"
            aria-label="Ir a Inicio"
          >
            <img
              src="/images/auto.png"
              alt="logo"
              className="md:justify-start max-w-60px max-h-60px py-1"
              width={100}
              height={90}
            />
          </Link>
          <div className="hidden md:flex w-full justify-center">
            <NavbarLinkContainer />
          </div>
          <div className="hidden md:flex">
            <ProductSearchNavbar />
          </div>
          <div className="hidden md:flex">
            <NavbarBtn />
          </div>
          <NavbarHamburguer />
        </nav>
      </header>
    </>
  );
};

export default Navbar;
