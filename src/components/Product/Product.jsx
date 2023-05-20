import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "./components/Button";
import Header from "./components/Header";
import { BUTTON_TYPES } from "./constants";

const Product = ({ eachProduct }) => {
  const { images, _id, name, price, hasStock } = eachProduct;
  const user = useSelector((user) => user.auth.user);
  const userApproved = user?.status === "approved";
  return (
    <article className="bg-white md:bg-gray-100 rounded-xl mx-auto shadow-md w-full p-2">
      <div
        className={`bg-transparent md:bg-white grid grid-cols-1 md:shadow-md rounded-lg md:py-4 md:p-2 overflow-auto  ${
          userApproved ? "h-fit sm:h-330px md:h-350px" : "h-fit sm:h-275px"
        }`}
      >
        <Header _id={_id} images={images} />
        <div className="my-auto pr-2 md:pr-0">
          <Link to={`/productos/${_id}`}>
            <h2 className="font-bold text-xs sm:text-base leading-5 mb-2 pl-2 md:pl-0 text-center">
              {name}
            </h2>
            {userApproved && (
              <h3 className="mt-2 text-base pl-2 md:pl-0 sm:text-xl text-center">
                $ {price?.toLocaleString("es-ar")}
              </h3>
            )}
          </Link>
        </div>
        <footer className="my-auto col-span-1">
          {userApproved && (
            <Button
              type={
                hasStock ? BUTTON_TYPES.ADD_TO_CART : BUTTON_TYPES.NOT_STOCK
              }
              product={eachProduct}
            />
          )}
        </footer>
      </div>
    </article>
  );
};

export default Product;
