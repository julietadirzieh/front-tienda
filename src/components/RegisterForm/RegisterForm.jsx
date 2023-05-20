import FormInput from "../FormInput/FormInput";
import { useRegisterUser } from "../../hooks/useRegisterUser";
import Button from "../Button/Button";

const RegisterForm = () => {
  const { formik, showErrorMsg, serverErrorResponse } = useRegisterUser();
  return (
    <div className="bg-gray-100 rounded-xl mx-auto py-12 md:py-6 px-6 shadow-xl w-full md:w-2/3">
      <form onSubmit={formik.handleSubmit}>
        <div className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 flex flex-col">
          <div className="md:flex">
            <div className="md:w-1/3 px-3 md:mb-0">
              <FormInput
                label="Nombre de la empresa*"
                id="companyName"
                onChange={formik.handleChange}
                value={formik.values.companyName}
                error={formik.errors.companyName}
              />
            </div>
            <div className="md:w-1/3 px-3">
              <FormInput
                label="CUIT"
                id="cuit"
                onChange={formik.handleChange}
                value={formik.values.cuit}
                error={formik.errors.cuit}
              />
            </div>
            <div className="md:w-1/3 px-3">
              <FormInput
                label="Nombre Personal*"
                id="personalName"
                onChange={formik.handleChange}
                value={formik.values.personalName}
                error={formik.errors.personalName}
              />
            </div>
          </div>

          <div className="md:flex">
            <div className="md:w-1/2 px-3 md:mb-0">
              <FormInput
                label="Email*"
                id="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                error={formik.errors.email || showErrorMsg(serverErrorResponse)}
              />
            </div>
            <div className="md:w-1/2 px-3">
              <FormInput
                label="Teléfono*"
                id="phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
                error={formik.errors.phone}
              />
            </div>
          </div>

          <div className="md:flex mb-6">
            <div className="md:w-1/4 px-3 md:mb-0">
              <FormInput
                label="Calle*"
                id="street"
                onChange={formik.handleChange}
                value={formik.values.street}
                error={formik.errors.street}
              />
            </div>
            <div className="md:w-1/4 px-3 md:mb-0">
              <FormInput
                label="Altura*"
                id="number"
                onChange={formik.handleChange}
                value={formik.values.number}
                error={formik.errors.number}
              />
            </div>
            <div className="md:w-1/4 px-3 md:mb-0">
              <FormInput
                label="Localidad*"
                id="locality"
                onChange={formik.handleChange}
                value={formik.values.locality}
                error={formik.errors.locality}
              />
            </div>
            <div className="md:w-1/4 px-3 md:mb-0">
              <FormInput
                label="Código Postal*"
                id="postalCode"
                onChange={formik.handleChange}
                value={formik.values.postalCode}
                error={formik.errors.postalCode}
              />
            </div>
          </div>

          <div className="md:flex">
            <div className="md:w-full px-3 md:mb-0">
              <FormInput
                label="Contraseña*"
                id="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                error={formik.errors.password}
                placeholder="Elegí tu contraseña"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="md:flex mb-6">
            <div className="md:w-full px-3 md:mb-0">
              <FormInput
                label="Confirmar contraseña*"
                id="passwordConfirmation"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.passwordConfirmation}
                error={formik.errors.passwordConfirmation}
                placeholder="Confirmá tu contraseña"
                autoComplete="off"
              />
            </div>
          </div>

          <div className="md:flex">
            <div className="md:w-full px-3 md:mb-0">
              <FormInput
                label="Comentario"
                id="comment"
                onChange={formik.handleChange}
                value={formik.values.comment}
                error={formik.errors.comment}
              />
            </div>
          </div>
          <p className="text-left px-3 text-xs mb-4">
            Los campos con * son obligatorios.
          </p>
          <div className="md:flex mt-2">
            <div className="md:w-full text-center px-3">
              <Button
                type="submit"
                /*  disabled={Object.keys(formik.errors).length > 0} */
              >
                Solicitar registro
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
