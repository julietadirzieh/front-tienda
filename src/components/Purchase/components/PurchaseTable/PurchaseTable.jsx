const PurchaseTable = ({ products, isSuccess, percentageDiscount }) => {
  return (
    <table>
      <thead>
        <tr className="border-collapse border border-gray-400 bg-gray-100 ">
          <th className="border border-gray-300 text-[10px] md:text-base">
            Código
          </th>
          <th className="border border-gray-300 text-[10px] md:text-base">
            Producto
          </th>
          <th className="border border-gray-300 text-[10px] md:text-base">
            Cantidad
          </th>
          <th className="hidden md:table-cell border border-gray-300 text-[10px] md:text-base">
            Precio por unidad
          </th>
          <th className="border border-gray-300 text-[10px] md:text-base">
            Subtotal
          </th>
        </tr>
      </thead>
      {products?.map((eachProduct, index) => (
        <tbody key={index}>
          <tr>
            <td className="border border-gray-300 text-[10px] md:text-base">
              {eachProduct?.variant !== undefined
                ? eachProduct?.variant?.product?.code
                : eachProduct?.product?.code}
            </td>
            <td className="border border-gray-300 text-[10px] md:text-base">
              {eachProduct?.product?.name}

              {eachProduct?.variant !== undefined &&
                ` - Variante: ${eachProduct?.variant?.name}`}
            </td>
            <td className="border border-gray-300 text-[10px] md:text-base">
              {eachProduct?.quantity}
            </td>

            {isSuccess ? (
              <td className="hidden md:table-cell border border-gray-300 text-[10px] md:text-base">
                <p className="line-through inline-block">
                  ${eachProduct?.product?.price?.toLocaleString("es-ar")}
                </p>
                <p className="text-green-600 inline-block md:ml-4">
                  $
                  {(
                    eachProduct?.product?.price -
                    eachProduct?.product?.price * percentageDiscount
                  ).toLocaleString("es-ar")}
                </p>
              </td>
            ) : (
              <td className="hidden md:table-cell border border-gray-300 text-[10px] md:text-base">
                ${eachProduct?.product?.price?.toLocaleString("es-ar")}
              </td>
            )}

            {isSuccess ? (
              <td className="border border-gray-300 text-[10px] md:text-base">
                <p className="line-through md:inline-block ">
                  $
                  {(
                    eachProduct?.product?.price * eachProduct?.quantity
                  ).toLocaleString("es-ar")}
                </p>
                <p className="text-green text-green-600 md:inline-block md:ml-4">
                  $
                  {(
                    eachProduct?.product?.price * eachProduct?.quantity -
                    eachProduct?.product?.price *
                      eachProduct?.quantity *
                      percentageDiscount
                  ).toLocaleString("es-ar")}
                </p>
              </td>
            ) : (
              <td className="border border-gray-300 text-[10px] md:text-base">
                $
                {(
                  eachProduct?.product?.price * eachProduct?.quantity
                ).toLocaleString("es-ar")}
              </td>
            )}
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default PurchaseTable;
