import { useSelector } from "react-redux";
import { useGetPurchasesHistoryQuery } from "../../state/apis/purchases";

import { usePurchase } from "../../hooks/usePurchase";
import { useState } from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const UserPurchaseHistory = () => {
  const { cancelPurchase, repeatPurchase } = usePurchase();

  const [pageNumber, setPageNumber] = useState(1);
  const { purchaseOrderHistory, isLoading } = useSelector(
    (state) => state.purchases
  );

  useGetPurchasesHistoryQuery(pageNumber, {
    skip: isLoading,
    refetchOnMountOrArgChange: true,
  });

  const dataFormat = (eachPurchase) => {
    const fechaString = eachPurchase;
    const fecha = new Date(fechaString);
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const año = fecha.getFullYear();

    return `${dia < 10 ? "0" + dia : dia}/${mes < 10 ? "0" + mes : mes}/${año}`;
  };

  return purchaseOrderHistory?.results?.length !== 0 ? (
    <div className="rounded-xl mx-auto w-full md:w-2/3">
      {purchaseOrderHistory?.results?.map((eachPurchase, index) => (
        <div
          key={index}
          className="bg-gray-100 rounded-xl mx-auto shadow-md w-full p-4 my-2"
        >
          <div className="bg-white flex flex-col w-full shadow-md rounded-lg p-4">
            {eachPurchase?.status === "pending" && (
              <Button
                type="button"
                className="p-2 mb-4 md:mb-0 text-sm w-max self-center md:self-end"
                onClick={() => cancelPurchase(eachPurchase)}
              >
                Cancelar pedido
              </Button>
            )}
            <article className="flex flex-col md:flex-row text-center md:self-start">
              <p className="underline mb-2">N° de compra del pedido:</p>
              <p className="mb-2 md:ml-2 text-xs md:text-base">
                #{eachPurchase?.identityNumber}
              </p>
            </article>
            <article className="flex flex-col md:flex-row text-center md:self-start">
              <p className="underline mb-2">Fecha del pedido:</p>
              <p className="mb-2 md:ml-2 text-xs md:text-base">
                {dataFormat(eachPurchase?.createdAt)}
              </p>
            </article>
            <article className="flex flex-col md:flex-row text-center md:self-start">
              <p className="underline mb-2">Estado del pedido:</p>
              {eachPurchase?.status === "pending" && (
                <p className="ml-2 text-cyan-600">PENDIENTE</p>
              )}

              {eachPurchase?.status === "approved" && (
                <p className="ml-2 text-green-600">CONFIRMADO</p>
              )}
              {(eachPurchase?.status === "canceled" ||
                eachPurchase?.status === "rejected") && (
                <p className="ml-2 text-red">CANCELADO</p>
              )}
            </article>
            <article className="flex flex-col text-center md:text-left md:self-start">
              <p className="underline">Productos:</p>
              {eachPurchase?.products?.map(
                (product, index) =>
                  product && (
                    <ul
                      className="list-disc text-center md:text-left"
                      key={index}
                    >
                      <li className="text-xs ml-2 list-none break-words">
                        - Código {product?.product?.code} -{" "}
                        {product?.product?.name}
                        {product?.variant &&
                          `- Variante: (${product?.variant?.name}) `}
                        - X {product?.quantity}
                      </li>
                    </ul>
                  )
              )}
            </article>

            {/*             <article className="flex mx-auto md:mx-0 mt-2 flex-row text-center md:text-left md:self-start">
              <p className="underline mr-1">Precio total: </p>
              <p>${eachPurchase?.totalAmount?.toLocaleString("es-ar")}</p>
            </article> */}
            <Button
              type="button"
              outlined
              className="p-2 mb-4 md:mb-0 text-sm w-max flex self-center md:self-end mt-4 md:mt-0"
              onClick={() => repeatPurchase(eachPurchase?._id)}
            >
              <img
                src="/icons/history.svg"
                alt="history icon"
                className="text-red pr-2 h-5"
              />
              Repetir pedido
            </Button>
          </div>
        </div>
      ))}
      <div className={`mt-8 mb-20 md:mb-12 flex justify-evenly`}>
        {pageNumber !== 1 && (
          <Button
            type="button"
            outlined
            onClick={() => setPageNumber(pageNumber - 1)}
          >
            Anterior
          </Button>
        )}

        {purchaseOrderHistory?.hasNextPage && (
          <Button
            type="button"
            outlined
            onClick={() => setPageNumber(pageNumber + 1)}
          >
            Siguiente
          </Button>
        )}
      </div>
    </div>
  ) : (
    <div className="rounded-xl mx-auto py-6 px-6 md:w-2/3 my-6 mb-6%">
      <div className="bg-white shadow-md rounded-xl px-8 my-6 py-12 text-center">
        <h1 className="text-gray-400 text-2xl md:text-4xl text-center my-6 max-w-2/3">
          Todavía no hiciste ningún pedido
        </h1>
        <h4 className="text-lg inline-block mt-0">
          Podes ir viendo nuestro catálogo haciendo click
          <Link
            to="/productos"
            className="text-lg inline-block underline px-1 hover:text-red"
          >
            acá
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default UserPurchaseHistory;
