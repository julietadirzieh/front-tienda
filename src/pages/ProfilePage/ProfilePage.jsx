import { PagesContainer } from "../../components/PagesContainer/PagesContainer";
import UserEditForm from "../../components/UserEditForm/UserEditForm";
import TabNav from "../../components/TabNav/TabNav";
import PageHeader from "../../components/PageHeader/PageHeader";
import UserPurchaseHistory from "../../components/UserPurchaseHistory/UserPurchaseHistory";

const ProfilePage = () => {
  const tabs = [
    {
      name: "Datos Personales",
      label: "Datos Personales",
      component: () => (
        <div className="flex  md:px-3 mb-5 md:mb-0 justify-center h-full">
          <UserEditForm />
        </div>
      ),
    },
    {
      name: "Historial de Pedidos",
      label: "Historial de pedidos",
      component: () => (
        <div className="flex w-full md:px-3 mb-5 md:mb-0 justify-center h-full">
          <UserPurchaseHistory />
        </div>
      ),
    },
  ];
  return (
    <PagesContainer>
      <PageHeader title="Perfil" link="/" />
      <div className="mx-2">
        <TabNav tabs={tabs} className="my-2 text-center mx-auto text-2xl" />
      </div>
    </PagesContainer>
  );
};

export default ProfilePage;
