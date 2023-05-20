import "./index.css";
import { Suspense } from "react";
import Loading from "./components/Loading/Loading";
import MainRouter from "./router/MainRouter";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./state/store";

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Provider store={store}>
          <HelmetProvider>
            <BrowserRouter>
              <MainRouter />
            </BrowserRouter>
          </HelmetProvider>
        </Provider>
        <Toaster
          position="bottom-left"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#333",
              color: "#fff",
              marginBottom: "4%",
            },
          }}
        />
      </Suspense>
    </>
  );
}

export default App;
