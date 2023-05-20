import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader/PageHeader";
import { PagesContainer } from "../../components/PagesContainer/PagesContainer";

const NotFoundPage = () => {
  return (
    <PagesContainer>
      <PageHeader link="/" />
      <section className="py-12 h-screen justify-center text-center bg-gray-100">
        <div className="bg-gray-100 rounded-xl mx-auto py-6 px-6 shadow-xl w-80%">
          <div className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 flex flex-col">
            <h1 className="text-3xl font-bold text-red my-10">
              Página no encontrada
            </h1>
            <Link
              to="/"
              className="my-12 text-xl inline-block underline px-1 hover:text-red"
            >
              Volver al Inicio
            </Link>
          </div>
        </div>
      </section>
    </PagesContainer>
  );
};

export default NotFoundPage;
