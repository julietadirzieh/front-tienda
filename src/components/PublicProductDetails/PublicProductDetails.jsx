import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";
import { useVariantProduct } from "../../hooks/useVariantProduct";
import {
  useAllVariantsQuery,
  useProductByIdQuery,
} from "../../state/apis/products";
import ProductDetailsInfo from "../ProductDetailsInfo/ProductDetailsInfo";
import ProductDetailsMedia from "../ProductDetailsMedia/ProductDetailsMedia";
import ProductDetailsSelectVariant from "../ProductDetailsSelectVariant/ProductDetailsSelectVariant";
import Loading from "../Loading/Loading";
import ProductDetailsTabNav from "../ProductDetailsTabNav/ProductDetailsTabNav";

const PublicProductDetails = () => {
  const { _id } = useParams();
  const { isLoading } = useSelector((state) => state.auth);
  useProducts();
  const { data: productById } = useProductByIdQuery(
    {
      id: _id,
      state: "public",
    },
    {
      skip: isLoading,
      refetchOnMountOrArgChange: true,
    }
  );

  // variantes del producto seleccionado
  const { data: productVariantsData } = useAllVariantsQuery(_id);

  const { handleSelectChange, selectedOption, variants, selectedVariant } =
    useVariantProduct();

  const { loading } = useSelector((state) => state.products);

  return loading ? (
    <Loading />
  ) : (
    <div className="bg-gray-100 rounded-xl py-4 mx-4 md:mx-12 p-4 pb-20">
      <div className="bg-white grid grids-cols-1 lg:grid-cols-3 lg:flex shadow-md rounded-lg px-2 py-12">
        <div className="lg:col-start-1 lg:col-end-2">
          <ProductDetailsMedia
            productById={productById != null && productById?.[0]}
            selectedVariant={selectedVariant}
          />
        </div>
        <div className="m-2 text-center lg:text-left lg:col-start-2 lg:col-end-4 flex flex-col justify-between">
          <ProductDetailsInfo
            productById={productById != null && productById?.[0]}
            selectedVariant={selectedVariant}
          />
          {productVariantsData?.length > 0 && (
            <ProductDetailsSelectVariant
              onChange={handleSelectChange}
              value={selectedOption}
              variants={variants}
              productById={productById?.[0]}
            />
          )}
          <div>
            <ProductDetailsTabNav
              selectedVariant={selectedVariant}
              productById={productById?.[0]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicProductDetails;
