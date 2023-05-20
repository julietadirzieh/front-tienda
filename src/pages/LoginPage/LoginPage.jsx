import { PagesContainer } from "../../components/PagesContainer/PagesContainer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
  const user = useSelector((state) => state.auth.user);
  return user ? (
    <PagesContainer>
      <div className="rounded-xl mx-auto py-6 px-6 md:w-2/3 my-6 mb-6%">
        <h1 className="text-gray-400 text-2xl md:text-4xl uppercase text-center my-6 max-w-2/3">
          ¡Hola {user?.personalName}!
        </h1>
        <div className="bg-white shadow-md rounded-xl px-8 my-6 py-12 text-center">
          <h4 className="text-lg inline-block mt-0">
            Podes ir viendo nuestro catálogo haciendo click
            <Link
              to="/productos"
              className="text-lg inline-block underline px-1 hover:text-red"
            >
              acá
            </Link>
          </h4>
        </div>
      </div>
    </PagesContainer>
  ) : (
    <PagesContainer>
      <section className="bg-gray-100 h-screen">
        <div className="bg-gradient-to-b from-black to-gray-100 text-center inline-block py-2% px-10% mx-auto w-full">
          <h3 className="text-sm text-white font-bold pr-2 inline-block">
            ¿Todavía no estás registrado?
          </h3>
          <h4 className="text-sm text-white inline-block">
            Completá nuestro
            <Link
              to="/registro"
              className="text-sm inline-block underline px-1 hover:text-red"
            >
              formulario
            </Link>
            y nos pondremos en contacto.
          </h4>
        </div>
        <h3 className="text-center my-6 text-xl px-10% font-bold">
          Ingresá a tu cuenta
        </h3>
        <LoginForm />
      </section>
    </PagesContainer>
  );
};

export default LoginPage;
