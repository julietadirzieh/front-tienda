import constants from "../../utils/constants";
import { PagesContainer } from "../../components/PagesContainer/PagesContainer";

import { SEO } from "../../components/SEO/SEO";

import { motion } from "framer-motion";
import PageHeader from "../../components/PageHeader/PageHeader";
import Cards from "../../components/Cards/Cards";

const AboutPage = () => {
  return (
    <PagesContainer>
      <SEO value={constants.METATAGS_ABOUT} />
      <PageHeader title="Nosotros" />
      <section className="pb-12 lg:pb-0 grid lg:grid-cols-2 gap-0 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: "-200px" }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 1 },
          }}
          className="w-full my-auto"
        >
          <figure className="p-0 m-0">
            <img
              className="object-fit mx-auto max-w-full w-3/4 lg:w-full h-full max-h-[400px] lg:max-h-full items-center rounded-br-[100px] lg:rounded-br-[0px] lg:rounded-tr-[100px]"
              src="/images/auto.png"
              alt="auto"
            />
          </figure>
        </motion.div>
        <article className="pt-0 lg:pb-12 lg:pr-6">
          <Cards
            title="Historia"
            description="Somos una empresa establecida en Buenos Aires, Argentina, desde 1993. Importamos y distribuimos accesorios para automóviles, 4x4 y SUV, como así también camping, aire libre, accesorios de bicicletas y hogar. "
            description1="Permanentemente incorporamos artículos de excelente calidad y precios competitivos. Entregamos en todo el país con muy buen servicio post venta, lo que nos hace líderes en el mercado."
          />
          <Cards
            title="Visión"
            description="• Ser referentes del sector"
            description1=" • Compromiso con la calidad, servicio al cliente y entregas inmediatas"
            description2=" • Buscamos lo mismo que vos: el producto perfecto al mejor precio"
          />
        </article>
      </section>
    </PagesContainer>
  );
};

export default AboutPage;
