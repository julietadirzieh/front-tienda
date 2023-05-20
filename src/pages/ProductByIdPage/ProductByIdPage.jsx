import constants from "../../utils/constants";
import { PagesContainer } from "../../components/PagesContainer/PagesContainer";

import { SEO } from "../../components/SEO/SEO";

import { useSelector } from "react-redux";
import PageHeader from "../../components/PageHeader/PageHeader";
import PublicProductDetails from "../../components/PublicProductDetails/PublicProductDetails";
import PrivateProductDetails from "../../components/PrivateProductDetails/PrivateProductDetails";

const ProductByIdPage = () => {
  const { user } = useSelector((state) => state.auth);
  const userApproved = user?.status === "approved";

  return (
    <>
      <PagesContainer>
        <SEO value={constants.METATAGS_PRODUCTS} />
        <PageHeader title={"Producto"} link="/productos" />
        {userApproved ? <PrivateProductDetails /> : <PublicProductDetails />}
      </PagesContainer>
    </>
  );
};

export default ProductByIdPage;
