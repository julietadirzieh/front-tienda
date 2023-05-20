import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader/PageHeader";
import { PagesContainer } from "../../components/PagesContainer/PagesContainer";

const PendingPage = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <PagesContainer>
      <PageHeader title="Perfil pendiente" link="/" />
      <div className="bg-gray-100 rounded-xl mx-auto py-6 px-6 shadow-xl w-2/3 my-6 mb-6%">
        <h1 className="text-gray-400 text-2xl md:text-4xl uppercase text-center my-6 max-w-2/3">
          ¡Gracias {user?.companyName} por registrarse!
        </h1>
        <div className="bg-white shadow-md rounded-xl px-8 my-6 py-12 text-center">
          <p>
            Su cuenta estará en estado de revisión hasta la aprobación de la
            empresa.
          </p>

          <h4 className="text-lg inline-block mt-12">
            Puede ir viendo nuestro catálogo haciendo click
            <Link
              to="/productos"
              className="text-lg inline-block underline px-1 hover:text-red"
            >
              acá
            </Link>
            y nos pondremos en contacto.
          </h4>
        </div>
      </div>
    </PagesContainer>
  );
};

export default PendingPage;
