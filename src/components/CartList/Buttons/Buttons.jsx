import { useNavigate } from "react-router-dom";
import Button from "../../Button/Button";

const Buttons = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center align-middle my-auto bg-white rounded-md m-4 mt-6 border border-red">
      <Button
        type="button"
        outlined
        onClick={() => navigate("/productos")}
        className="w-max text-xs my-2"
      >
        Seguir Comprando
      </Button>
      <Button
        onClick={() => navigate("/carrito")}
        className="w-max text-xs my-2"
        type="button"
      >
        Ver Carrito
      </Button>
      <Button
        type="button"
        onClick={() => navigate("/finalizar-compra")}
        className="w-max text-xs my-2"
      >
        Finalizar Compra
      </Button>
    </div>
  );
};

export default Buttons;
