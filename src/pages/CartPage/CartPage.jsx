import { PagesContainer } from "../../components/PagesContainer/PagesContainer";

import PageHeader from "../../components/PageHeader/PageHeader";
import { useSelector } from "react-redux";

import ProductInCart from "../../components/ProductInCart/ProductInCart";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

const CartPage = () => {
  const { products } = useSelector((state) => state.cart);

  const navigate = useNavigate();

  const handlePurchase = () => {
    navigate("/finalizar-compra");
  };

  return (
    <>
      <PagesContainer>
        <PageHeader title="Carrito de compra" />
        <section className="bg-gray-100 rounded-xl mx-auto w-full">
          {products?.length > 0 ? (
            <>
              <div className="rounded-xl p-4 grid grid-cols-1 gap-4 justify-center max-w-full text-center align-middle items-center my-auto h-full">
                {products?.map((eachProduct, index) => (
                  <ProductInCart key={index} eachProduct={eachProduct} />
                ))}
              </div>
              <div className="text-center">
                <Button
                  type="button"
                  onClick={handlePurchase}
                  className="my-4 mb-16"
                >
                  Iniciar pedido de compra
                </Button>
              </div>
            </>
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
    </>
  );
};

export default CartPage;
