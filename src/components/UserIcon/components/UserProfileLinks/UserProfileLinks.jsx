import { Link } from "react-router-dom";
import LogoutButton from "../LogoutButton/LogoutButton";

const UserProfileLinks = ({ userApproved }) => {
  return (
    <>
      {userApproved ? (
        <section className="fixed top-60px right-0 w-content w-200px md:w-250px bg-black rounded-xl border border-red">
          <div className="flex flex-col p-2 mx-auto">
            <Link
              to="/perfil"
              className="w-max text-white hover:text-red pb-2 mx-auto"
            >
              Ver perfil
            </Link>
            <hr className="border-1 border border-red" />
            <LogoutButton />
          </div>
        </section>
      ) : (
        <section className="fixed top-60px right-0 w-content w-200px md:w-250px bg-black rounded-xl border border-red">
          <div className="flex flex-col p-2 mx-auto">
            <Link
              to="/login"
              className="w-max text-white hover:text-red mb-2 mx-auto"
            >
              Iniciar Sesión
            </Link>
            <hr className="border-1 border border-red" />
            <Link
              to="/registro"
              className="w-max text-white hover:text-red mt-2 mx-auto"
            >
              Crear cuenta
            </Link>
          </div>
        </section>
      )}
    </>
  );
};

export default UserProfileLinks;
