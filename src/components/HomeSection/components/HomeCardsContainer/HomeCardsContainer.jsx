import Cards from "../../../../components/Cards/Cards";

const HomeCardsContainer = () => {
  return (
    <article className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-8 md:pt-0 pb-12 md:pb-20 px-0 md:px-12">
      <Cards
        icon="/icons/car.svg"
        subtitle="Importamos y distribuimos accesorios para el automotor"
        className={"md:h-200px"}
      />
      <Cards
        icon="/icons/analytics.svg"
        subtitle="Desde 1993 somos líderes en el mercado"
        className={"md:h-200px"}
      />
      <Cards
        icon="/icons/users.svg"
        className={"md:h-200px"}
        subtitle="Equipo especializado en ventas mayoristas con un servicio de excelencia"
      />
      <Cards
        icon="/icons/shipping.svg"
        className={"md:h-200px"}
        subtitle="Hacemos envíos a todo el país con servicio post venta"
      />
    </article>
  );
};

export default HomeCardsContainer;
