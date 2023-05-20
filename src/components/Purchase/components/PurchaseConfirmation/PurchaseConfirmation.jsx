import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PurchaseConfirmation = () => {
  const { purchase } = useSelector((state) => state.purchases);
  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 rounded-xl shadow-md py-4 mx-4 md:mx-auto p-4 md:mb-20">
      <div className="bg-white lg:flex w-full shadow-md rounded-lg px-2 py-12 items-center">
        <div className="text-center mx-auto">
          <h1 className="text-gray-400 text-lg break-words md:text-2xl lg:text-4xl uppercase text-center my-6 mx-auto">
            Se ha generado exitosamente la Compra N° #{purchase?.identityNumber}
          </h1>

          <p className="px-3 break-words font-semibold">
            El ID de la orden completo es: {purchase?._id}
          </p>

          <p className="px-3 mt-2">
            A la brevedad nos pondremos en contacto para coordinar el pago y
            envío de la misma.
          </p>

          <h4 className="text-lg mt-12">¡Muchas gracias!</h4>

          <Link to="/" className="text-lg underline px-1 hover:text-red">
            Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PurchaseConfirmation;
