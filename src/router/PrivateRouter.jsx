import { useSelector } from "react-redux";
import LoginPage from "../pages/LoginPage/LoginPage";

export const PrivateRoute = ({ component: RouteComponent }) => {
  const user = useSelector((state) => state.auth.user);
  if (user) {
    return <RouteComponent />;
  }
  return <LoginPage />;
};
