import { useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSearch } from "../../../../state/slices/productsSlice";
import { useProductsSearchNavbarMutation } from "../../../../state/apis/products";
import ProductSearchResultNavbar from "../ProductSearchResultNavbar/ProductSearchResultNavbar";
import { useDebounce } from "../../../../hooks/useDebounce";
import { isEmpty } from "../../../../utils/array";

const ProductSearchNavbar = () => {
  const [getProductsSearched] = useProductsSearchNavbarMutation();
  const [inputValue, setInputValue] = useState("");
  const { searchedProductsNavbar } = useSelector((state) => state.products);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const dispatch = useDispatch();
  const searchResultsRef = useRef(null);

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

  const handleMouseEnter = () => {
    setShowSearchResults(true);
  };

  const handleMouseLeave = () => {
    setShowSearchResults(false);
  };

  return (
    <div className="w-220px mx-auto pt-1">
      <div className="relative">
        <img
          src="/icons/search.svg"
          className="h-5 absolute top-3 left-2 pr-2"
          alt="search product"
        />

        <input
          onChange={searchProducts}
          className="pl-8 form-control border bg-black border-white rounded-lg w-full text-white p-4 text-xs"
          type="text"
          value={inputValue}
          placeholder="Buscar producto por nombre..."
        />
        {inputValue && (
          <button
            className="absolute top-3 right-3 text-white"
            onClick={clearProducts}
            type="button"
          >
            X
          </button>
        )}
      </div>

      {showSearchResults && (
        <div
          ref={searchResultsRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="max-h-[100px] overflow-y-scroll py-auto"
        >
          {isEmpty(searchedProductsNavbar) ? (
            <p className="max-h-[80px] bg-gray-100 md:bg-black md:text-white my-0 text-xs p-4">
              No se han encontrado resultados que coincidan
            </p>
          ) : (
            searchedProductsNavbar?.map((product, index) => (
              <div key={index}>
                <ProductSearchResultNavbar key={index} product={product} />
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default ProductSearchNavbar;
