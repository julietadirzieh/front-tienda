const PurchaseSummary = ({
  isSuccess,
  totalPriceWithDiscount,
  totalPriceWithoutDiscount,
  discount,
}) => {
  return (
    <div className="my-0 flex justify-center md:justify-end h-full">
      {isSuccess ? (
        <div className="text-right mt-6 md:mt-0">
          <h4 className="mx-2 text-xl">
            SUBTOTAL: ${totalPriceWithoutDiscount.toLocaleString("es-ar")}
          </h4>
          <p className="mx-2 text-xl my-2 text-green-600">
            Descuento aplicado: {discount}%
          </p>
          <h3 className="font-bold mx-2 text-2xl">
            TOTAL: ${totalPriceWithDiscount.toLocaleString("es-ar")} + 21% IVA
          </h3>
        </div>
      ) : (
        <h3 className="font-bold mx-2 mt-6 md:mt-0 text-2xl">
          TOTAL: ${totalPriceWithoutDiscount.toLocaleString("es-ar")} + 21% IVA
        </h3>
      )}
    </div>
  );
};

export default PurchaseSummary;
