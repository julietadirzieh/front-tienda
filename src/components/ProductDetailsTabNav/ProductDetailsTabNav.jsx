import TabNav from "../TabNav/TabNav";

const ProductDetailsTabNav = ({ selectedVariant, productById }) => {
  const productLogic = selectedVariant ? selectedVariant?.product : productById;

  return (
    <TabNav
      className="mt-10 mb-2 text-center lg:text-left max-w-full mx-auto md:mx-0"
      tabs={[
        {
          name: "Descripción General",
          label: "Descripción General",
          component: () => (
            <div className="w-full h-60px md:h-100px">
              <p className="mt-4 text-base">
                <strong> Código de artículo: </strong>
                {productLogic?.code}
              </p>
              {productLogic?.groupUnity !== 0 && (
                <p className="mt-2 text-base">
                  <strong> Unidades por bulto: </strong>
                  {productLogic?.groupUnity}
                </p>
              )}
            </div>
          ),
        },
        {
          name: "Medidas",
          label: "Medidas",
          component: () => (
            <div className="w-full h-60px md:h-100px mt-4">
              <table className="border-collapse border mx-auto lg:mx-0 border-gray-300 text-center">
                <thead>
                  <tr>
                    {productById?.size?.width !== 0 && (
                      <th className="px-2 md:px-6 border border-gray-300">
                        Longitud
                      </th>
                    )}
                    {productById?.size?.height !== 0 && (
                      <th className="px-2 md:px-6 border border-gray-300">
                        Altura
                      </th>
                    )}
                    {productById?.size?.weight !== 0 && (
                      <th className="px-2 md:px-6 border border-gray-300">
                        Ancho
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {productById?.size?.width !== 0 && (
                      <td className="px-2 md:px-6 border border-gray-300">
                        {productById?.size?.width} cm
                      </td>
                    )}
                    {productById?.size?.height !== 0 && (
                      <td className="px-2 md:px-6 border border-gray-300">
                        {productById?.size?.height} cm
                      </td>
                    )}
                    {productById?.size?.weight !== 0 && (
                      <td className="px-2 md:px-6 border border-gray-300">
                        {productById?.size?.weight} cm
                      </td>
                    )}
                  </tr>
                </tbody>
              </table>
              {productLogic?.weight !== 0 ||
                (productLogic?.weight === undefined && (
                  <h2 className="mt-4">
                    <strong> Peso: </strong> {productLogic?.weight} kg
                  </h2>
                ))}
            </div>
          ),
        },
      ]}
    />
  );
};

export default ProductDetailsTabNav;
