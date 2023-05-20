import { Link } from "react-router-dom";

const WhatsappIcon = () => {
  return (
    <Link
      id="whatsapp"
      className="fixed bottom-10% md:bottom-8% right-4 z-90 bg-white rounded-xl p-1"
      to="https://api.whatsapp.com/send/?phone=5491123456789&text&type=phone_number&app_absent=0"
      target="_blank"
      rel="noreferrer"
      aria-label="Ir a Whatsapp"
    >
      <img
        src="/icons/whatsappGreen.svg"
        className="hover:animate-spin"
        alt="whatsapp icon"
        width={40}
        height={40}
      />
    </Link>
  );
};

export default WhatsappIcon;
