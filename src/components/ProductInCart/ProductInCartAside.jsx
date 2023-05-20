import { Link } from "react-router-dom";

const ProductInCartAside = ({ eachProduct }) => {
  const { product, quantity, variant } = eachProduct;

  return (
    product?.hasStock && (
      <div className="bg-gray-100 rounded-xl shadow-md w-full p-2 m-2">
        <div className="w-full md:justify-start items-center text-left mx-auto">
          <Link
            to={`/productos/${product?._id}`}
            className="md:flex md:flex-row md:mx-auto items-center my-auto"
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
              className="w-40px h-40px object-fit rounded-xl border-none mx-auto md:mx-0"
            />
            <div className="align-middle pl-2">
              <h2 className="font-bold text-xs">
                {product?.name} X {quantity}
              </h2>
              {variant ? (
                <>
                  <h3 className="leading-6 text-[10px]">
                    Variante: {variant?.product?.name}
                  </h3>
                  <h3 className="leading-6  text-[10px]">
                    Código: {variant?.product?.code}
                  </h3>
                </>
              ) : (
                <h3 className="leading-6  text-[10px]">
                  Código: {product?.code}
                </h3>
              )}
            </div>
          </Link>
        </div>
      </div>
    )
  );
};

export default ProductInCartAside;
