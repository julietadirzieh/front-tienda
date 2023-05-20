import { Link } from "react-router-dom";

const Header = ({ _id, images }) => {
  return (
    <header>
      <Link to={`/productos/${_id}`}>
        <img
          src={`${
            images.length > 0 ? `${images[0]}` : "/images/default-img.webp"
          }
            `}
          alt="product"
          width={150}
          height={100}
          className="h-100px w-100px md:w-150px md:h-150px lg:w-180px lg:h-150px max-w-180px max-h-150px object-fit rounded-xl aspect-[1/1] border-none mx-auto"
        />
      </Link>
    </header>
  );
};

export default Header;
