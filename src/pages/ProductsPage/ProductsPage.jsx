import constants from "../../utils/constants";
import { PagesContainer } from "../../components/PagesContainer/PagesContainer";
import { SEO } from "../../components/SEO/SEO";

/* import ProductsList from "../../components/ProductsList/ProductsList";
 */
import PageHeader from "../../components/PageHeader/PageHeader";
import { useSelector } from "react-redux";
import { useAllProductsQuery } from "../../state/apis/products";
import ProductsAside from "../../components/ProductsAside";
import { isEmpty } from "../../utils/array";
import { lazy, Suspense } from "react";
import Loading from "../../components/Loading/Loading";

const ProductsPage = () => {
  const { page: pageNumber } = useSelector((state) => state.products);

  const { user, isLoading } = useSelector((state) => state.auth);
  useAllProductsQuery(
    {
      state: user?.status === "approved" ? "private" : "public",
      page: pageNumber,
    },
    {
      skip: isLoading,
      refetchOnMountOrArgChange: true,
    }
  );
  const ProductsListLazy = lazy(() =>
    import("../../components/ProductsList/ProductsList")
  );
  const { selectedProducts: filteredProducts, data: allProducts } = useSelector(
    (state) => state.products
  );
  return (
    <>
      <PagesContainer>
        <SEO value={constants.METATAGS_PRODUCTS} />
        <PageHeader title="Catálogo de productos" />
        <div className="grid md:grid-cols-5 mx-4% py-8 w-full h-full">
          <ProductsAside />
          <div className="mx-2 md:col-span-4 mb-4">
            <Suspense fallback={<Loading />}>
              <ProductsListLazy
                /*                 isEmpty={<Loading />} */
                products={
                  !isEmpty(filteredProducts) ? filteredProducts : allProducts
                }
              />
            </Suspense>
          </div>
        </div>
      </PagesContainer>
    </>
  );
};

export default ProductsPage;
