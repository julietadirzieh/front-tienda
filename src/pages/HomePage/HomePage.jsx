import { PagesContainer } from "../../components/PagesContainer/PagesContainer";
import { SEO } from "../../components/SEO/SEO";
import constants from "../../utils/constants";

import "react-slideshow-image/dist/styles.css";

import HomeCardsContainer from "../../components/HomeSection/components/HomeCardsContainer/HomeCardsContainer";
import Carousel from "../../components/HomeSection/components/Carousel";
import { TypeAnimation } from "react-type-animation";

const HomePage = () => {
  return (
    <PagesContainer>
      <SEO value={constants.METATAGS_HOME} />
      <section className="bg-gradient-to-b from-black via-black to-gray-100 max-w-screen h-screen md:pb-6">
        <Carousel />
        <TypeAnimation
          sequence={[
            "Todo lo que necesitás para tu auto",
            1000,
            "Todo lo que necesitás para tu moto",
            1000,
            "Todo lo que necesitás para tu camping",
            1000,
            "Todo lo que necesitás para tu bici",
            1000,
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          className="text-white text-2xl md:text-5xl text-center pt-12 md:pt-0 pb-12 px-12"
        />
        <HomeCardsContainer />
      </section>
    </PagesContainer>
  );
};

export default HomePage;
