import { PagesContainer } from "../../components/PagesContainer/PagesContainer";

import PageHeader from "../../components/PageHeader/PageHeader";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import PurchaseConfirmation from "../../components/Purchase/components/PurchaseConfirmation/PurchaseConfirmation";

const PurchaseConfirmationPage = () => {
  const { purchase } = useSelector((state) => state.purchases);

  return (
    <PagesContainer>
      <PageHeader title="Compra realizada" link="/finalizar-compra" />
      {purchase ? (
        <PurchaseConfirmation />
      ) : (
        <div className="text-center my-12">
          <Link
            to="/perfil"
            className="text-xl underline px-1 text-center hover:text-red"
          >
            Ver el historial de pedidos
          </Link>
        </div>
      )}
    </PagesContainer>
  );
};

export default PurchaseConfirmationPage;
