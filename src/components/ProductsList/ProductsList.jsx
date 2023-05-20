/* import Loading from "../Loading/Loading"; */
import Pagination from "../Pagination/Pagination";
import Product from "../Product/Product";

const ProductsList = ({ products }) => {
  /*   if (isEmpty) return <Loading />; */
  return (
    <div className="w-full">
      <section className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center max-w-full">
        {products?.results?.map((eachProduct, index) => (
          <Product key={index} eachProduct={eachProduct} />
        ))}
      </section>
      <Pagination
        products={products}
        hasNextPage={products?.hasNextPage}
        page={products?.page}
        className="my-12 md:my-8"
      />
    </div>
  );
};

export default ProductsList;
