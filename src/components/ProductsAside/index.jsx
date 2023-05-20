import CategorySelector from "./components/CategorySelector";
import ProductSearch from "./components/ProductSearch/ProductSearch";

const ProductsAside = () => {
  return (
    <aside className="px-4 md:col-1">
      <ProductSearch />
      <CategorySelector />
    </aside>
  );
};

export default ProductsAside;
