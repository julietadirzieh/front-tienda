import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import WhatsappIcon from "../WhatsappIcon/WhatsappIcon";

export const PagesContainer = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="pt-60px max-w-screen h-screen md:h-full">
        {children}
      </main>
      <WhatsappIcon />
      <Footer />
    </>
  );
};
