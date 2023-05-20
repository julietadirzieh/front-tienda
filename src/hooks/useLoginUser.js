import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLoginWithCredentialsMutation } from "../state/apis/auth";
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Email inválido").required("Requerido"),
  password: Yup.string().required("Requerido"),
});

export const useLoginUser = () => {
  const navigate = useNavigate();
  const [serverErrorResponse, setServerErrorResponse] = useState(null);
  const [login] = useLoginWithCredentialsMutation();

  const onSubmit = async (values) => {
    try {
      values.email = values.email.toLowerCase();
      values.password = values.password.toLowerCase();
      const response = await login(values);

      if (!response.error) {
        setServerErrorResponse(response?.error?.data?.message);
        return response;
      }
      setServerErrorResponse(response?.error?.data?.message);
    } catch (err) {
      console.log(err);
    }
  };
  const showErrorMsg = (msg) => {
    if (msg === "PASSWORD_NOT_VALID") {
      return "Contraseña incorrecta";
    }
    if (msg === "USER_NOT_EXISTS") {
      return "Usuario inexistente";
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
    validationSchema,
  });

  return {
    formik,
    showErrorMsg,
    serverErrorResponse,
  };
};
