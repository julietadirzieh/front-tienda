const ContactInput = ({
  label,
  error,
  icon,
  id,
  helper,
  className,
  ...rest
}) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="uppercase tracking-wide text-black text-xs font-bold mb-2 inline-block"
        >
          {label}
        </label>
      )}

      <input
        id={id}
        name={id}
        placeholder={`Ingrese su ${id} ...`}
        className={`${className} block bg-gray-100 text-black border border-gray-200 rounded w-full py-3 px-4 placeholder:font-thin placeholder:text-base`}
        {...rest}
      />
      <p
        style={{ visibility: error ? "visible" : "hidden" }}
        className="text-red text-xs lg:text-sm py-1 mb-2"
      >
        {`${error}`}
      </p>
    </div>
  );
};

export default ContactInput;
