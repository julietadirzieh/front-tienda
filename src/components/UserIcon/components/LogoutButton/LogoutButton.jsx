import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../../state/slices/authSlice";
import { clearCategories } from "../../../../state/slices/productsSlice";
import { toast } from "react-hot-toast";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await dispatch(logout());
    await dispatch(clearCategories());
    toast.success("Se cerró sesión exitosamente");
    navigate("/");
  };

  return (
    <button
      className="w-max mx-auto text-white hover:text-red text-[8px] pt-2"
      onClick={handleLogout}
      type="button"
    >
      Cerrar Sesión
    </button>
  );
};

export default LogoutButton;
