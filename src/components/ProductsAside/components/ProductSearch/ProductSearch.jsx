import { useCallback, useState } from "react";
import ProductSearchResult from "../ProductSearchResult/ProductSearchResult";
import { useDispatch, useSelector } from "react-redux";
import { useProductsSearchMutation } from "../../../../state/apis/products";
import { useDebounce } from "../../../../hooks/useDebounce";
import { isEmpty } from "../../../../utils/array";
import { clearSearch } from "../../../../state/slices/productsSlice";

const ProductSearch = () => {
  const [getProductsSearched] = useProductsSearchMutation();
  const [inputValue, setInputValue] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);
  const { searchedProducts } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const checkedOnChange = useCallback(
    (value) => {
      if (value && value !== "") {
        getProductsSearched({ input: value });
      }
    },
    [getProductsSearched]
  );

  const debouncedOnChange = useDebounce(checkedOnChange, 1000);

  const searchProducts = async (e) => {
    const { value } = e.target;
    setInputValue(value);
    if (value && value !== "") {
      setShowSearchResults(true);
      debouncedOnChange(inputValue);
    } else {
      setShowSearchResults(false);
      setInputValue("");
    }
  };

  const clearProducts = () => {
    setInputValue("");
    setShowSearchResults(false);
    dispatch(clearSearch());
  };
  return (
    <div className="md:mb-10">
      <div className="relative">
        <img
          src="/icons/searchBlack.svg"
          className="h-5 absolute top-3 left-2 text-black pr-2"
          alt="search product"
        />

        <input
          onChange={searchProducts}
          className={`pl-8 form-control border bg-gray-100 border-black rounded-lg w-full text-black p-4 text-xs`}
          type="text"
          value={inputValue}
          placeholder="Buscar producto por nombre..."
        />
        {inputValue && (
          <button
            className="absolute top-3 right-3 text-black"
            onClick={clearProducts}
            type="button"
          >
            X
          </button>
        )}
      </div>

      {showSearchResults && (
        <div className="max-h-[300px] mt-2 px-4 py-4 overflow-y-scroll">
          {isEmpty(searchedProducts)
            ? "No se han encontrado resultados que coincidan :("
            : searchedProducts?.map((product, index) => (
                <div key={index}>
                  <ProductSearchResult key={index} product={product} />
                </div>
              ))}
        </div>
      )}
    </div>
  );
};

export default ProductSearch;
