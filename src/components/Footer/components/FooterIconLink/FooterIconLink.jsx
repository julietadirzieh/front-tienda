import { Link } from "react-router-dom";

const FooterIconLink = ({ icon, href }) => {
  return (
    <Link
      className="flex flex-row items-center text-center"
      to={href}
      target="inline-flex _blank"
      rel="noreferrer"
      aria-label="Ir a la red social"
    >
      <img
        src={icon}
        alt="icons"
        height="20px"
        width="20px"
        className="text-white hover:text-red"
      />
      <span className="text-white"></span>
    </Link>
  );
};

export default FooterIconLink;
