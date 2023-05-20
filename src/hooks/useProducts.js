import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useAllVariantsQuery } from "../state/apis/products";

export const useProducts = () => {
  const { _id } = useParams();

  const { data } = useSelector((state) => state.products);

  // todos los productos

  // producto por el id seleccionado

  const productById = useSelector(
    (state) => state.products.selectedProductById
  );
  // variantes del producto seleccionado
  const { data: productVariantsData, isLoading: isLoadingProductVariants } =
    useAllVariantsQuery(_id, {
      refetchOnMountOrArgChange: true,
    });

  const productVariants = useSelector(
    (state) => state.products.productVariants
  );

  return {
    allProductsData: data,
    productById,
    productVariantsData,
    productVariants,
    isLoadingProducts: false,
    isLoadingProductVariants,
  };
};
