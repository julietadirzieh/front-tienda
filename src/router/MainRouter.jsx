import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import ProductByIdPage from "../pages/ProductByIdPage/ProductByIdPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import PendingPage from "../pages/PendingPage/PendingPage";
import { useSelector } from "react-redux";
import CartPage from "../pages/CartPage/CartPage";
import { useGetUserDetailsQuery } from "../state/apis/auth";
import PurchasePage from "../pages/PurchasePage/PurchasePage";
import PurchaseConfirmationPage from "../pages/PurchaseConfirmationPage/PurchaseConfirmationPage";
import { PrivateRoute } from "./PrivateRouter";

const MainRouter = () => {
  useGetUserDetailsQuery();

  const user = useSelector((state) => state.auth.user);
  const userPending = user?.status === "pending";

  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/nosotros" element={<AboutPage />} />
      <Route path="/productos" element={<ProductsPage />} />
      <Route path="/productos/:_id" element={<ProductByIdPage />} />
      <Route path="/contacto" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/registro" element={<RegisterPage />} />
      <Route path="/login" element={<PrivateRoute component={LoginPage} />} />
      <Route
        path="/perfil"
        element={<PrivateRoute component={ProfilePage} />}
      />
      <Route
        path="/pendiente"
        element={userPending ? <PendingPage /> : <NotFoundPage />}
      />
      <Route path="/carrito" element={<PrivateRoute component={CartPage} />} />
      <Route
        path="/finalizar-compra"
        element={<PrivateRoute component={PurchasePage} />}
      />
      <Route
        path="/confirmacion-compra"
        element={<PrivateRoute component={PurchaseConfirmationPage} />}
      />
    </Routes>
  );
};

export default MainRouter;
