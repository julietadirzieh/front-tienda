import { useDispatch } from "react-redux";

import { prevPage, nextPage } from "../../state/slices/productsSlice";
import Button from "../Button/Button";

const Pagination = ({ className, hasNextPage, page }) => {
  const dispatch = useDispatch();

  const handlePrev = () => {
    return dispatch(prevPage());
  };
  const handleNext = () => {
    return dispatch(nextPage());
  };
  return (
    <>
      <div className={`${className} flex justify-evenly`}>
        {page !== "1" && (
          <Button type="button" outlined onClick={handlePrev}>
            Anterior
          </Button>
        )}
        {hasNextPage && (
          <Button type="button" outlined onClick={handleNext}>
            Siguiente
          </Button>
        )}
      </div>
    </>
  );
};

export default Pagination;
