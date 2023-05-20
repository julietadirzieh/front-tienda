import { useState } from "react";
import { useCart } from "../../hooks/useCart";
import Button from "../Button/Button";

const CartQuantityButtons = ({ product, variant, quantity }) => {
  const [count, setCount] = useState(quantity || 1);
  const { handleUpdateQuantity } = useCart();

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const handleCountChange = (event) => {
    const newCount = Number(event.target.value);
    setCount(newCount);
  };
  return (
    <>
      <section className="flex flex-col items-center align-middle flex-end">
        <div className="flex flex-row items-center border-2 rounded-full mb-4 sm:mb-0">
          <button
            type="button"
            className="py-2 px-4 text-sm font-bold"
            onClick={handleDecrement}
          >
            -
          </button>
          <input
            type="number"
            className="w-6 text-black"
            value={count}
            onChange={handleCountChange}
          />
          <button
            type="button"
            className="py-2 px-4 text-sm font-bold"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
        <Button
          className="text-[8px] mt-2"
          type="button"
          onClick={() =>
            handleUpdateQuantity({
              product,
              variant,
              quantity: count,
            })
          }
        >
          Actualizar
        </Button>
      </section>
    </>
  );
};

export default CartQuantityButtons;
