import { useSelector } from "react-redux";
import CartIconContainer from "./components/CartIconContainer";
import CounterIcon from "./components/CounterIcon";

const CartIcon = () => {
  const user = useSelector((state) => state.auth.user);
  const userApproved = user?.status === "approved";

  const { products } = useSelector((state) => state.cart);
  const stateQuantity = products.reduce(
    (acc, product) => acc + product.quantity,
    0
  );
  const quantity = stateQuantity > 9 ? "9+" : stateQuantity;
  return (
    <CartIconContainer>
      <img
        src="/icons/cart.svg"
        alt="cart"
        className="w-40px md:w-70px mt-0 mx-auto md:mx-0 text-white hover:text-red my-auto pr-2 pb-0 relative"
        width={150}
        height={150}
      />
      {userApproved && <CounterIcon quantity={quantity} />}
    </CartIconContainer>
  );
};

export default CartIcon;
