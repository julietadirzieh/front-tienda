const Button = ({ children, outlined, className, ...rest }) => {
  return (
    <button
      className={`${className} ${
        outlined
          ? "text-red border-2 border-red py-2 px-4 rounded-full mx-2"
          : "uppercase w-content bg-gray-900 text-white font-bold py-3 px-4 hover:bg-red scale-90 hover:scale-100 rounded-full"
      } 
      ${rest.disabled && "cursor-not-allowed hover:none"}'}}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
