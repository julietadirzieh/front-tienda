import { Link } from "react-router-dom";
import FooterIconContainer from "./components/FooterIconContainer/FooterIconContainer";
import FooterIconLink from "./components/FooterIconLink/FooterIconLink";

const socialMediaUrl = {
  wa: "https://api.whatsapp.com/send/?phone=5491123456789&text&type=phone_number&app_absent=0",
  tel: "https://api.whatsapp.com/send/?phone=541123456789&text&type=phone_number&app_absent=0",
  ig: "https://www.instagram.com/",
  fb: "https://www.facebook.com/",
  mail: "mailto:example@gmail",
  dir: "https://www.google.com/maps/search/example+maps/@-34.5491066,-58.4515584,14z/data=!3m1!4b1",
};

const Footer = () => {
  return (
    <footer className="w-full fixed bottom-0 p-2 max-w-screen bg-black">
      <div className="bottom-0 mt-0 flex md:flex-row w-full list-none items-center flex-wrap justify-between">
        <div className="text-left">
          <div className="inline-block align-top">
            <p className="text-white">EXAMPLE ® </p>
          </div>
        </div>

        <div className="text-center my-3 md:my-0">
          <div className="hidden md:flex align-top text-xs lg:text-base content-center">
            <Link
              to={socialMediaUrl.dir}
              className="text-white hover:text-red  px-2"
              target="inline-flex _blank"
              rel="noreferrer"
              aria-label="Ir a Google Maps"
            >
              CABA
            </Link>
            <p className="text-white font-bold">|</p>
            <Link
              to={socialMediaUrl.mail}
              className="text-white hover:text-red px-2"
              target="inline-flex _blank"
              rel="noreferrer"
              aria-label="Ir al mail"
            >
              example@gmail.com.ar
            </Link>
            <p className="text-white font-bold">|</p>
            <Link
              to={socialMediaUrl.wa}
              className="text-white hover:text-red px-2"
              target="inline-flex _blank"
              rel="noreferrer"
              aria-label="Ir a Whatsapp"
            >
              +549-11-2345-6789
            </Link>
          </div>
        </div>

        <div className="mt-0 align-top items-center">
          <FooterIconContainer>
            <FooterIconLink
              icon="/icons/whatsapp.svg"
              target="inline-flex _blank"
              rel="noreferrer"
              href={socialMediaUrl.wa}
            />
            <FooterIconLink
              icon="/icons/instagram.svg"
              target="inline-flex _blank"
              rel="noreferrer"
              href={socialMediaUrl.ig}
            />
            <FooterIconLink
              icon="/icons/facebook.svg"
              target="inline-flex _blank"
              rel="noreferrer"
              href={socialMediaUrl.fb}
              className="px-1"
            />
            <FooterIconLink
              icon="/icons/mail.svg"
              target="inline-flex _blank"
              rel="noreferrer"
              href={socialMediaUrl.mail}
            />
          </FooterIconContainer>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
