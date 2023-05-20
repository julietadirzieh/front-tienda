import { PagesContainer } from "../../components/PagesContainer/PagesContainer";

import PageHeader from "../../components/PageHeader/PageHeader";

import RegisterForm from "../../components/RegisterForm/RegisterForm";

const RegisterPage = () => {
  return (
    <PagesContainer>
      <PageHeader title="Registrate" link="/" />
      <section className="bg-gray-100 h-full pb-24">
        <h3 className="text-center text-xl mt-4 mb-2 px-10% font-bold">
          ¿Estás interesado en comprar nuestros artículos por mayor?
        </h3>
        <h4 className="text-center text-lg mb-4 px-10%">
          Completá el siguiente formulario y a la brevedad nos pondremos en
          contacto.
        </h4>
        <RegisterForm />
      </section>
    </PagesContainer>
  );
};

export default RegisterPage;
