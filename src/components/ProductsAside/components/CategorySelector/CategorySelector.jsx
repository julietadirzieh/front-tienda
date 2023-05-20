import { useToggle } from "./hooks/useToggle";
import CategoriesForm from "./components/CategoriesForm";
import CategoriesTitle from "./components/CategoriesTitle";
import Loading from "../../../Loading/Loading";
import ProductCategoriesContainer from "./components/ProductCategoriesContainer";
import { useAllCategoriesQuery } from "../../../../state/apis/categories";

import { useProductsByCategoryMutation } from "../../../../state/apis/products";
import { useDispatch, useSelector } from "react-redux";
import { clearCategories } from "../../../../state/slices/productsSlice";
import {
  setSelectedCategory,
  clearSelectedCategory,
} from "../../../../state/slices/categoriesSlice";

const CategorySelector = () => {
  const [isOpen, toggle] = useToggle();

  const { data: allCategories, isLoading: loading } = useAllCategoriesQuery();
  const [getProductsByCategory] = useProductsByCategoryMutation();
  const { user, isLoading } = useSelector((user) => user.auth);
  const dispatch = useDispatch();
  const { selectedCategory } = useSelector((state) => state.categories);

  const switchOnChange = (category, isChecked) => {
    if (isChecked) {
      dispatch(setSelectedCategory(category._id));

      return getProductsByCategory(
        {
          id: category._id,
          state: user?.status === "approved" ? "private" : "public",
          page: 1,
        },
        {
          skip: isLoading,
          refetchOnMountOrArgChange: true,
        }
      );
    } else {
      dispatch(clearSelectedCategory());
      dispatch(clearCategories());
    }
  };

  const deleteFilter = () => {
    dispatch(clearCategories());
    dispatch(clearSelectedCategory());
  };

  return (
    <ProductCategoriesContainer>
      <CategoriesTitle isOpen={isOpen} toggle={toggle} />
      <CategoriesForm isOpen={isOpen}>
        {loading && <Loading />}
        {!loading && (
          <>
            <button
              onClick={deleteFilter}
              className="text-gray-400 text-xs pb-6"
              type="button"
            >
              Borrar filtros
            </button>
            {allCategories?.map((category, index) => (
              <div key={index}>
                <hr className="w-full mx-auto border-neutral-500" />
                <label className="flex my-2 justify-between items-center">
                  {category.name}
                  <input
                    value={category._id}
                    type="checkbox"
                    id={category._id}
                    name={category.name}
                    className="rounded-full place-self-end"
                    checked={category._id === selectedCategory}
                    onChange={(e) => switchOnChange(category, e.target.checked)}
                  />
                </label>
              </div>
            ))}
          </>
        )}
      </CategoriesForm>
    </ProductCategoriesContainer>
  );
};

export default CategorySelector;
