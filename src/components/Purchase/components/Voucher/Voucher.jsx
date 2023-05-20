import Button from "../../../Button/Button";

const Voucher = ({ formik }) => {
  return (
    <div className="my-12 md:my-2 flex justify-center md:justify-end">
      <form className="flex items-center" onSubmit={formik.handleSubmit}>
        <input
          type="text"
          id="code"
          className="mx-2 block bg-gray-100 text-black border border-gray-200 rounded-full w-full py-3 px-4 placeholder:font-thin placeholder:text-base"
          onChange={formik.handleChange}
          value={formik.values.code}
          placeholder="Escribí tu código..."
        />
        <Button type="submit" className="text-xs md:text-base">
          Aplicar descuento
        </Button>
      </form>
    </div>
  );
};

export default Voucher;
