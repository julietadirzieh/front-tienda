import { PagesContainer } from "../../components/PagesContainer/PagesContainer";
import PageHeader from "../../components/PageHeader/PageHeader";
import Button from "../../components/Button/Button";
import { useSelector } from "react-redux";
import { usePurchase } from "../../hooks/usePurchase";
import PurchaseSummary from "../../components/Purchase/components/PurchaseSummary/PurchaseSummary";
import PurchaseTable from "../../components/Purchase/components/PurchaseTable/PurchaseTable";
import Voucher from "../../components/Purchase/components/Voucher/Voucher";
import { Link } from "react-router-dom";
import { isEmpty } from "../../utils/array";
const PurchasePage = () => {
  const { products } = useSelector((state) => state.cart);
  const {
    newPurchase,
    formik,
    totalPriceWithDiscount,
    totalPriceWithoutDiscount,
    discount,
    percentageDiscount,
    isSuccess,
  } = usePurchase();

  return (
    <PagesContainer>
      <PageHeader link="/carrito" />
      <section className="bg-gray-100 rounded-xl mx-auto w-full p-6">
        {!isEmpty(products) ? (
          <div className="bg-white shadow-md rounded-xl p-4 grid grid-cols-1 gap-4 justify-center max-w-full text-center h-full align-middle items-center">
            <h2 className="uppercase font-bold text-xl md:text-2xl mb-2">
              Resumen de su compra
            </h2>
            <PurchaseTable
              products={products}
              isSuccess={isSuccess}
              percentageDiscount={percentageDiscount}
            />
            <PurchaseSummary
              products={products}
              isSuccess={isSuccess}
              totalPriceWithDiscount={totalPriceWithDiscount}
              totalPriceWithoutDiscount={totalPriceWithoutDiscount}
              discount={discount}
              percentageDiscount={percentageDiscount}
            />
            <Voucher formik={formik} />
            <Button
              onClick={newPurchase}
              type="submit"
              className="mb-4 w-max mx-auto"
            >
              Finalizar compra
            </Button>
          </div>
        ) : (
          <div className="bg-white w-full md:w-3/4 mx-auto shadow-md rounded-xl p-4 grid grid-cols-1 gap-4 justify-center max-w-full text-center align-middle items-center my-12 h-full">
            <h3 className="text-base lg:text-xl">
              No hay ningún producto agregado al carrito
            </h3>
            <h4 className="text-sm lg:text-lg inline-block">
              Redirigite al
              <Link
                to="/productos"
                className="text-sm lg:text-lg inline-block underline px-1 hover:text-red"
              >
                catálogo de productos
              </Link>
              para ver todos los productos disponibles.
            </h4>
          </div>
        )}
      </section>
    </PagesContainer>
  );
};

export default PurchasePage;
