import { useCallback } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  updateProductQuantity,
} from "../../../../state/slices/cartSlice";
import { BUTTON_TYPES } from "../../constants";
const { ADD_TO_CART, NOT_STOCK } = BUTTON_TYPES;

const Button = ({ type, product }) => {
  const dispatch = useDispatch();
  const baseStyle =
    "font-bold py-2 px-4 mt-4 rounded-full mx-auto text-center text-xs uppercase w-full";
  const notStockStyle = "border border-red text-red cursor-default";
  const cartStyle =
    "md:w-content bg-gray-900 text-white hover:bg-red scale-90 hover:scale-100";

  const productInCart = useSelector((state) => state.cart.products);

  const handleOnAddCart = useCallback(() => {
    try {
      const existingProduct = productInCart.find(
        (p) => p.product._id === product._id && p.variant === undefined
      );
      if (existingProduct) {
        dispatch(
          updateProductQuantity({
            product,
            variant: undefined,
            quantity: existingProduct.quantity + 1,
          })
        );
      } else {
        dispatch(addProduct({ product, variant: undefined, quantity: 1 }));
      }
      toast.success("El producto fue agregado exitosamente.");
    } catch {
      toast.error(
        "El producto no pudo ser agregado al carrito. Intente nuevamente."
      );
    }
  }, [dispatch, product, productInCart]);

  const button = {
    [ADD_TO_CART]: {
      styles: `${baseStyle} ${cartStyle}`,
      text: "Comprar",
      onClick: handleOnAddCart,
    },
    [NOT_STOCK]: {
      styles: `${baseStyle} ${notStockStyle}`,
      text: "Sin stock",
    },
  };
  return (
    <button
      type="button"
      className={button[type].styles}
      onClick={button[type].onClick}
    >
      {button[type].text}
    </button>
  );
};

export default Button;
