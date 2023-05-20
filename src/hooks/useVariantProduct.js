import { useSelector } from "react-redux";
import { useMemo, useState } from "react";

export const useVariantProduct = () => {
  const [selectedOption, setSelectedOption] = useState("defaultValue");
  const productVariants = useSelector(
    (state) => state.products.productVariants
  );
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const selectedVariant = useMemo(
    () =>
      productVariants.find((eachVariant) => eachVariant._id === selectedOption),
    [productVariants, selectedOption]
  );

  return {
    selectedOption,
    handleSelectChange,
    selectedVariant,
    variants: productVariants,
  };
};
