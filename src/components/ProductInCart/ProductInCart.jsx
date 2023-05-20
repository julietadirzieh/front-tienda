import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeProduct } from "../../state/slices/cartSlice";
import CardQuantityButtons from "../CartQuantityButtons/CartQuantityButtons";
import { toast } from "react-hot-toast";

const ProductInCart = ({ eachProduct }) => {
  const { product, quantity, variant } = eachProduct;

  const dispatch = useDispatch();

  const onRemoveClick = () => {
    try {
      dispatch(removeProduct({ product, variant, quantity }));
      toast.success("El producto fue eliminado del carrito.");
    } catch {
      toast.error("No se pudo eliminar el producto del carrito.");
    }
  };
  return (
    product?.hasStock && (
      <div className="bg-gray-100 rounded-xl mx-auto shadow-md w-full p-2 md:p-4 md:w-3/4">
        <div className="bg-white grid grid-cols-3 md:grid-cols-6 w-full shadow-md rounded-lg items-center justify-between">
          <button
            type="button"
            className="pt-2 md:pt-0 col-1 text-sm mx-auto md:mx-0 items-center flex md:flex-start md:ml-8"
            onClick={onRemoveClick}
          >
            <img src="/icons/close.svg" alt="close icon" className="h-6" />
          </button>
          <div className="col-1 md:col-span-4 md:w-full md:justify-start items-center text-center md:text-left mx-auto py-0 md:py-2">
            <Link
              to={`/productos/${product?._id}`}
              className="md:flex md:flex-row md:mx-auto items-center py-2 px-4"
            >
              <img
                src={`${
                  product?.images[0]
                    ? `${product?.images[0]}
       
       `
                    : "/images/default-img.webp"
                }
        `}
                alt="product"
                className="w-60px h-60px md:w-150px md:h-150px object-fit rounded-xl border-none mx-auto md:mx-0"
              />
              <div className="align-middle md:pl-6">
                <h2 className="font-bold text-xs md:text-base md:mb-2">
                  {product?.name}
                </h2>
                {variant ? (
                  <>
                    <h3 className="leading-6 text-xs md:text-base md:mb-2">
                      Variante: {variant?.product?.name}
                    </h3>
                    <h3 className="leading-6 text-xs md:text-base md:mb-2">
                      Código de artículo: {variant?.product?.code}
                    </h3>
                  </>
                ) : (
                  <h3 className="leading-6 text-xs md:text-base md:mb-2">
                    Código de artículo: {product?.code}
                  </h3>
                )}
              </div>
            </Link>
          </div>
          <div className="col-1 mx-auto pb-2 md:mx-0 items-center md:items-end flex flex-col md:mr-8">
            <CardQuantityButtons
              product={product}
              variant={variant}
              quantity={quantity}
            />
          </div>
        </div>
      </div>
    )
  );
};

export default ProductInCart;
