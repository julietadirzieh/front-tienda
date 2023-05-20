import { useFormik } from "formik";
import { useMemo, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  useCancelPurchaseMutation,
  useCheckVoucherMutation,
  useNewPurchaseMutation,
  useRepeatPurchaseMutation,
} from "../state/apis/purchases";
import { clearCart, repeatCart } from "../state/slices/cartSlice";
import { changePurchaseStatus } from "../state/slices/purchasesSlice";

export const usePurchase = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { products } = useSelector((state) => state.cart);

  const [discount, setDiscount] = useState(null);
  const percentageDiscount = discount / 100;

  // función de precio total por producto
  const totalPrice = (values) => {
    const totalPricePerProduct = values.map(
      (product) =>
        parseInt(product?.quantity) * parseInt(product?.product?.price)
    );
    const total = totalPricePerProduct.reduce((acc, eachPrice) => {
      return acc + eachPrice;
    }, 0);
    return total;
  };

  // useMemo de precio total sin descuento
  const totalPriceWithoutDiscount = useMemo(
    () => totalPrice(products),
    [products]
  );

  // función de precio total por producto aplicando descuento
  const finalPrice = (originalPrice, percentage) => {
    return originalPrice - originalPrice * percentage;
  };

  // useMemo de precio total con descuento
  const totalPriceWithDiscount = useMemo(
    () => finalPrice(totalPriceWithoutDiscount, percentageDiscount),
    [products, percentageDiscount, totalPriceWithoutDiscount]
  );

  // aplicar descuento en la compra
  const [checkVoucher, { isSuccess }] = useCheckVoucherMutation();

  const onSubmit = async (values) => {
    try {
      const enteredCode = values.code.toUpperCase();

      const body = {
        code: enteredCode,
        discount: values,
      };

      const result = await checkVoucher(body);

      if (result?.error?.data?.errors[0]?.msg !== "CODE_INVALID") {
        await setDiscount(result?.data?.discount);
        return result;
      }
      await setDiscount(null);
      toast.error("Código de descuento no válido");
    } catch (err) {
      toast.error("Código de descuento no válido");
    }
  };

  const formik = useFormik({
    initialValues: {
      code: "",
    },
    onSubmit,
  });

  // crear nueva compra
  const [confirmPurchase] = useNewPurchaseMutation();

  const newPurchase = async () => {
    try {
      const productsInCart = products?.map((eachProduct) => ({
        quantity: eachProduct?.quantity,
        price: discount
          ? eachProduct?.product?.price -
          eachProduct?.product?.price * percentageDiscount
          : eachProduct?.product?.price,
        product: eachProduct?.product?._id,
        variant: eachProduct?.variant?._id,
      }));

      const body = {
        user: user._id,
        products: productsInCart,
      };

      if (user?.minimumAmount !== undefined && totalPriceWithDiscount < user?.minimumAmount && totalPriceWithoutDiscount < user?.minimumAmount) {
        toast.error(`El mínimo de compra es $${user?.minimumAmount?.toLocaleString("es-ar")}`);
        return;
      }

      const result = await confirmPurchase(body);

      if (!result.error) {
        toast.success("Orden creada exitosamente");
        navigate("/confirmacion-compra");
        dispatch(clearCart());
        return result;
      }

      toast.error("No ha sido posible crear la orden de compra.");
    } catch (err) {
      console.log(err);
    }
  };

  // cancelar compra
  const [cancel, { isError }] = useCancelPurchaseMutation();
  const cancelPurchase = async (values) => {
    try {
      const body = {
        order: values._id,
      };

      const result = await cancel(body);

      if (!isError) {
        toast.success("El pedido fue cancelado correctamente.");
        dispatch(changePurchaseStatus(values));
        return result;
      } else {
        toast.error("No se ha podido cancelar el pedido.");
      }
    } catch (err) {
      toast.error("No se ha podido cancelar el pedido.");
    }
  };

  // repetir compra
  const [repeat] = useRepeatPurchaseMutation();

  const repeatPurchase = async (id) => {
    try {
      const result = await repeat(id);

      const hasError = !result.data;
      if (!hasError) {
        toast.success(
          "Se han agregado los productos en stock nuevamente al carrito."
        );
        result?.data?.products?.map(
          (product) =>
            product?.product?.hasStock &&
            dispatch(
              repeatCart({
                product: product?.product,
                quantity: product?.quantity,
                variant: product?.variant,
              })
            )
        );
        return result;
      }
    } catch (err) {
      toast.error("No ha sido posible agregar los productos al carrito.");
    }
  };

  return {
    newPurchase,
    cancelPurchase,
    repeatPurchase,
    formik,
    totalPriceWithDiscount,
    totalPriceWithoutDiscount,
    discount,
    percentageDiscount,
    isSuccess,
  };
};
