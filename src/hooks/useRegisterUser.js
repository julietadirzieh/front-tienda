import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRegisterMutation } from "../state/apis/auth";
import { useNavigate } from "react-router-dom";

const alphaRegex = /^[A-Za-z]+$/;
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const alphaNumericRegex = /^[a-zA-Z0-9_]+$/;

const validationSchema = Yup.object().shape({
  companyName: Yup.string()
    .min(2, "Demasiado corto!")
    .max(20, "Demasiado largo!")
    .required("Requerido"),
  cuit: Yup.string().matches(phoneRegExp, "Números solamente"),
  personalName: Yup.string()
    .min(2, "Demasiado corto!")
    .max(20, "Demasiado largo!")
    .matches(alphaRegex, "Letras solamente")
    .required("Requerido"),
  email: Yup.string().email("Email inválido").required("Requerido"),
  phone: Yup.string()
    .matches(phoneRegExp, "Números solamente")
    .required("Requerido"),
  street: Yup.string().required("Requerido"),
  number: Yup.string()
    .required("Requerido")
    .min(1, "La altura tiene que tener al menos un carácter"),
  locality: Yup.string().required("Requerido"),
  postalCode: Yup.string().required("Requerido"),
  password: Yup.string()
    .required("Requerido")
    .min(8, "La contraseña debe contener un mínimo de 8 caracteres")
    .max(16, "La contraseña debe contener un máximo de 16 caracteres")
    .matches(alphaNumericRegex, "Números y letras solamente"),
  passwordConfirmation: Yup.string()
    .required("Requerido")
    .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden"),
  comment: Yup.string().min(2, "Demasiado corto!").max(50, "Demasiado largo!"),
});

export const useRegisterUser = () => {
  const navigate = useNavigate();
  const [serverErrorResponse, setServerErrorResponse] = useState(null);
  const [register] = useRegisterMutation();

  const onSubmit = async (values) => {
    try {
      const body = {
        companyName: values.companyName.toLowerCase(),
        cuit: values.cuit,
        personalName: values.personalName.toLowerCase(),
        email: values.email.toLowerCase(),
        phone: values.phone,
        address: {
          street: values.street,
          number: values.number,
          locality: values.locality,
          postalCode: values.postalCode,
        },
        password: values.password,
        passwordConfirmation: values.passwordConfirmation,
        comment: values.comment
      };
      const result = await register(body);

      const hasError = !result.data;
      if (!hasError) {
        navigate("/pendiente");
      }
      setServerErrorResponse(result?.error?.data?.errors[0]?.msg);
    } catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues: {
      companyName: "",
      cuit: "",
      personalName: "",
      email: "",
      phone: "",
      street: "",
      number: "",
      locality: "",
      postalCode: "",
      password: "",
      passwordConfirmation: "",
      comment: "",
    },
    onSubmit,
    validationSchema,
  });

  const showErrorMsg = (msg) => {
    if (msg === "EMAIL_ALREADY_IN_USE") {
      return "Email ya existente";
    }
    if (msg === "EMAIL_NOT_VALID") {
      return "Email inválido";
    }
  };

  return {
    formik,
    showErrorMsg,
    serverErrorResponse,
  };
};
