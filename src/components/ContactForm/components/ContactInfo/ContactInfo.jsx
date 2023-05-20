import { Link } from "react-router-dom";

const ContactInfo = () => {
  return (
    <div className="bg-gray-100 rounded-xl mx-auto py-6 px-6 shadow-xl mb-6 w-90%">
      <h2 className="font-bold">
        ¡DEJANOS TU CONSULTA Y TE RESPONDEREMOS A LA BREVEDAD!
      </h2>
      <Link
        to="mailto:example@gmail.com.ar"
        className="text-black hover:text-red px-2 flex justify-center"
        target="_blank"
        rel="noreferrer"
        aria-label="Ir al mail"
      >
        <img
          src="/icons/mailBlack.svg"
          alt="mail icon"
          width="20px"
          height="20px"
          className="mr-2"
        />
        example@gmail.com
      </Link>
      <Link
        to="tel:541123456789"
        className="text-black hover:text-red px-2 flex justify-center"
        target="_blank"
        rel="noreferrer"
        aria-label="Llamar por teléfono"
      >
        <img
          src="/icons/telefonoBlack.svg"
          alt="telefono icon"
          width="15px"
          height="10px"
          className="mr-2"
        />
        +54 9 (11) 2345-6789
      </Link>
      <Link
        to="https://api.whatsapp.com/send/?phone=5491123456789&text&type=phone_number&app_absent=0"
        className="text-black hover:text-red px-2 flex justify-center"
        target="_blank"
        rel="noreferrer"
        aria-label="Ir a Whatsapp"
      >
        <img
          src="/icons/whatsappBlack.svg"
          alt="whatsapp icon"
          width="20px"
          height="20px"
          className="mr-2"
        />
        +54 9 (11) 2345-6789
      </Link>
      <div className="mt-6">
        <h2 className="font-bold">ATENCIÓN AL CLIENTE</h2>
        <p className="flex px-2 justify-center">
          <img
            src="/icons/clock.svg"
            alt="clock icon"
            width="20px"
            height="20px"
            className="mr-2"
          />
          Lunes a Viernes 09:00 a 18:00 hs.
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
