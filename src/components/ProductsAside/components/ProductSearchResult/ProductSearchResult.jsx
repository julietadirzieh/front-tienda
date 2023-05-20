import { Link } from "react-router-dom";

const ProductSearchResult = ({ product }) => {
  const { _id, images, name } = product;
  return (
    <Link className="w-full" to={`/productos/${_id}`}>
      <div className="w-full flex flex-row py-2 border-b-2 border-b-gray-200 w-100 items-center">
        <img
          src={`${images?.[0] ? `${images?.[0]}` : "/images/default-img.webp"}
        `}
          alt="searched product"
          className="w-60px h-60px rounded-lg mr-2 object-fit"
        />

        <div className="flex flex-col text-left justify-between">
          <p className="font-bold text-xs">{name}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductSearchResult;
