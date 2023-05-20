const ProductDetailsSelectVariant = ({
  onChange,
  value,
  variants,
  productById,
}) => {
  return (
    <div className="my-4 mb-6">
      <p className="leading-4 text-lg my-6 mr-2 inline-block">Variante:</p>
      <select
        name="option"
        onChange={onChange}
        value={value}
        className="rounded-lg w-fit bg-gray-100 p-2 text-xs lg:text-sm"
      >
        <option value="defaultValue">{productById?.name}</option>
        {variants?.map((option, index) => (
          <option
            id={option?._id}
            label={option?.name}
            key={index}
            value={option?._id}
          >
            {option?.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductDetailsSelectVariant;
