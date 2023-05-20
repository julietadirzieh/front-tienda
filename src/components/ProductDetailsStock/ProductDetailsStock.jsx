import { useCart } from "../../hooks/useCart";
import { useProducts } from "../../hooks/useProducts";
import Button from "../Button/Button";

const ProductDetailsStock = ({ selectedVariant }) => {
  const { handleIncrement, handleDecrement, count, setCount, onAddCartClick } =
    useCart();
  const { productById } = useProducts();

  const productLogic = selectedVariant ? selectedVariant?.product : productById;

  const handleCountChange = (event) => {
    const newCount = Number(event.target.value);
    setCount(newCount);
  };

  return productLogic?.hasStock ? (
    <>
      <section className="flex flex-col sm:flex-row items-center align-middle justify-center lg:justify-start">
        <div className="flex items-center border-2 rounded-full mb-4 sm:mb-0">
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
          type="button"
          className="sm:ml-4"
          onClick={() =>
            onAddCartClick({ variant: selectedVariant, quantity: count })
          }
        >
          Agregar al carrito
        </Button>
      </section>
    </>
  ) : (
    <Button
      type="button"
      disabled
      outlined
      className="inline-block w-fit mx-auto lg:mx-0"
    >
      Sin stock
    </Button>
  );
};

export default ProductDetailsStock;
