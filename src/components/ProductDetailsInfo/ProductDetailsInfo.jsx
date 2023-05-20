const ProductDetailsInfo = ({ productById, price, selectedVariant }) => {
  const productLogic = selectedVariant ? selectedVariant?.product : productById;

  const descriptionList =
    selectedVariant?.product?.description !== ""
      ? productLogic?.description
      : productById?.description;

  const includes = descriptionList?.startsWith("Incluye:");
  const description = includes
    ? descriptionList.substring(0, descriptionList.indexOf(":") + 1)
    : null;

  return (
    <>
      <h2 className="font-bold text-black text-lg md:text-xl lg:text-2xl mb-2 px-6 md:px-0 md:pr-6">
        {productLogic?.name ? productLogic?.name : productById?.name}
      </h2>
      {price && (
        <h2 className=" text-black text-lg md:text-xl lg:text-3xl my-2">
          $ {price}
        </h2>
      )}
      {includes && <h2>{description}</h2>}
      <ul className="text-base md:text-lg my-2 px-6 md:px-0 md:pr-6">
        {descriptionList
          ?.substring(descriptionList?.indexOf(":") + 1)
          .split("-")
          .filter(Boolean)
          .map((part, index) => (
            <li key={index}>- {part.trim()}</li>
          ))}
      </ul>
    </>
  );
};

export default ProductDetailsInfo;
