import { useSelector } from "react-redux";
import Buttons from "./Buttons/Buttons";
import ProductInCartAside from "../ProductInCart/ProductInCartAside";

const CartList = () => {
  const { products } = useSelector((state) => state.cart);
  const user = useSelector((state) => state.auth.user);
  const userApproved = user?.status === "approved";
  return (
    products?.length > 0 &&
    userApproved && (
      <section className="hidden md:block fixed top-60px bottom-10 right-0 w-1/3 md:w-250px bg-black border-l border-red">
        <div className="w-3/4 md:w-230px p-1 h-60% mx-auto overflow-y-scroll overflow-x-hidden bg-white rounded-md shadow-xl mt-2 border border-red">
          {products?.map((eachProduct, index) => (
            <ProductInCartAside key={index} eachProduct={eachProduct} />
          ))}
        </div>
        <Buttons />
      </section>
    )
  );
};

export default CartList;
