import { Link } from "react-router-dom";

const ProductSearchResultNavbar = ({ product }) => {
  const { _id, name } = product;
  return (
    <div className="max-h-[80px] bg-gray-100 md:bg-black md:text-white my-0">
      <Link className="w-full" to={`/productos/${_id}`}>
        <p className="text-xs text-left p-2">{name}</p>
      </Link>
      <hr className="border-b-2" />
    </div>
  );
};

export default ProductSearchResultNavbar;
