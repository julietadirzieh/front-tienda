import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, updateProductQuantity } from "../state/slices/cartSlice";

export const useCart = () => {
  const productById = useSelector(
    (state) => state.products.selectedProductById
  );
  const dispatch = useDispatch();

  // manejar la suma/resta de los productos
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  // agregar al carrito desde la página del producto
  const onAddCartClick = ({ variant }) => {
    try {

      dispatch(
        addProduct({
          product: productById,
          quantity: count,
          variant,
        })
      );
      toast.success(`Se han agregado ${count} unidades al carrito.`);
    } catch {
      toast.error(
        "El producto no pudo ser agregado al carrito. Intente nuevamente."
      );
    }
  };

  const handleUpdateQuantity = ({ product, variant, quantity }) => {
    try {
      setCount(quantity);
      dispatch(updateProductQuantity({ product, variant, quantity }));
      toast.success(`Se ha actualizado a ${quantity} unidades.`);
    } catch {
      toast.error(
        "El producto no pudo ser actualizado. Intente nuevamente."
      );
    }
  };

  return {
    handleIncrement,
    handleDecrement,
    count,
    setCount,
    onAddCartClick,
    handleUpdateQuantity
  };
};
