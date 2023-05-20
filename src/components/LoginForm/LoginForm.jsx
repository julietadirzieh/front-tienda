import FormInput from "../FormInput/FormInput";
import { useLoginUser } from "../../hooks/useLoginUser";
import Button from "../Button/Button";

const LoginForm = () => {
  const { formik, showErrorMsg, serverErrorResponse } = useLoginUser();
  return (
    <div className="bg-gray-100 rounded-xl mx-auto py-6 px-6 shadow-xl w-full md:w-1/2">
      <form onSubmit={formik.handleSubmit}>
        <div className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 flex flex-col">
          <div className="-mx-3">
            <div className="w-full px-3 md:mb-0">
              <FormInput
                label="Email"
                id="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                error={formik.errors.email}
              />
            </div>
          </div>

          <div className="-mx-3 mb-3">
            <div className="w-full px-3 md:mb-0">
              <FormInput
                label="Contraseña"
                type="password"
                id="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                error={showErrorMsg(serverErrorResponse)}
                autoComplete="off"
              />
            </div>
          </div>

          <div className="-mx-3 md:flex mt-2">
            <div className="md:w-full text-center px-3">
              <Button type="submit">Iniciar Sesión</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
