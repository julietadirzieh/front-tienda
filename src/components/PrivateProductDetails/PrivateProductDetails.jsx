import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";
import { useVariantProduct } from "../../hooks/useVariantProduct";
import { useProductByIdQuery } from "../../state/apis/products";
import { isEmpty } from "../../utils/array";
import ProductDetailsInfo from "../ProductDetailsInfo/ProductDetailsInfo";
import ProductDetailsMedia from "../ProductDetailsMedia/ProductDetailsMedia";
import ProductDetailsSelectVariant from "../ProductDetailsSelectVariant/ProductDetailsSelectVariant";
import ProductDetailsStock from "../ProductDetailsStock/ProductDetailsStock";
import ProductDetailsTabNav from "../ProductDetailsTabNav/ProductDetailsTabNav";
import Loading from "../Loading/Loading";

const PrivateProductDetails = () => {
  const { _id } = useParams();
  const { user, isLoading } = useSelector((state) => state.auth);
  useProducts();
  const { data: productById } = useProductByIdQuery(
    {
      id: _id,
      state: "private",
    },
    {
      skip: isLoading,
      refetchOnMountOrArgChange: true,
    }
  );

  const { productVariants, loading } = useSelector((state) => state.products);
  const { handleSelectChange, selectedOption, variants, selectedVariant } =
    useVariantProduct();
  return loading ? (
    <Loading />
  ) : (
    <div className="bg-gray-100 rounded-xl py-4 mx-4 md:mx-12 p-4 pb-20">
      <div className="bg-white grid grids-cols-1 lg:grid-cols-3 lg:flex shadow-md rounded-lg px-2 py-12">
        <div className="lg:col-start-1 lg:col-end-2">
          <ProductDetailsMedia
            selectedVariant={selectedVariant}
            productById={productById}
          />
        </div>
        <div className="m-2 text-center lg:text-left lg:col-start-2 lg:col-end-4 flex flex-col justify-between">
          <ProductDetailsInfo
            productById={productById}
            price={productById?.price?.toLocaleString("es-ar")}
            selectedVariant={selectedVariant}
          />
          {!isEmpty(productVariants) && (
            <ProductDetailsSelectVariant
              onChange={handleSelectChange}
              value={selectedOption}
              variants={variants}
              productById={productById}
            />
          )}
          <ProductDetailsStock selectedVariant={selectedVariant} />
          <div>
            <ProductDetailsTabNav
              selectedVariant={selectedVariant}
              productById={productById}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateProductDetails;
