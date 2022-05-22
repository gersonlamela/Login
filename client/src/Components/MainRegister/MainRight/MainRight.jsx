import { Eye, EyeClosed } from "phosphor-react";
import { Facebook, Apple, Google } from "../../helper/images";
import React, { useState } from "react";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios";

export function MainRight() {
  const PasswordRegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const handleClickRegister = (values) => {
    Axios.post("http://localhost:3001/register", {
      nome: values.nome,
      apelido: values.apelido,
      telemovel: values.telemovel,
      email: values.email,
      password: values.password,
    }).then((response) => {
      alert(response.data.msg);
      console.log(response);
    });
  };
  const validationRegister = yup.object().shape({
    nome: yup.string().required("Este campo é obrigatório"),
    apelido: yup.string().required("Este campo é obrigatório"),
    telemovel: yup
      .string()
      .matches(phoneRegExp, "Número de telemóvel inválido"),
    email: yup
      .string()
      .email("Não é um email")
      .required("Este campo é obrigatório"),
    password: yup
      .string()
      .min(8, "Password pequena - tem de ter no minimo 8 caracteres")
      .matches(
        PasswordRegExp,
        "Deve conter no minimo 8 caracteres, uma maiúsculas, uma minúscula, um número e um personagem de caso especial"
      )
      .required("No password provided."),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas não são iguais")
      .min(8, "Password pequena - tem de ter no minimo 8 caracteres")
      .matches(
        PasswordRegExp,
        "Deve conter no minimo 8 caracteres, uma maiúsculas, uma minúscula, um número e um personagem de caso especial"
      )
      .required("Este campo é obrigatório"),
  });

  return (
    <>
      <div className="flex flex-col w-[350px] md:w-[500px] gap-[30px] max-w-[500px] mt-5">
        <div className="flex flex-col">
          <h1 className="text-dark dark:text-light text-3xl font-medium h-auto">
            Sign Up
          </h1>
        </div>
        <div className="flex">
          <Formik
            initialValues={{}}
            onSubmit={handleClickRegister}
            validationSchema={validationRegister}
          >
            <Form>
              <div className="flex max-w-full flex-row flex-wrap justify-between gap-2">
                <div className="flex flex-col w-[48%]">
                  <Field
                    name="nome"
                    className="input w-full"
                    placeholder="Insira o seu Nome"
                  />
                  <ErrorMessage
                    name="nome"
                    component="span"
                    className="ErrorMessage"
                  />
                </div>
                <div className="flex flex-col w-[48%]">
                  <Field
                    name="apelido"
                    className="input w-full"
                    placeholder="Insira o seu Apelido"
                  />
                  <ErrorMessage
                    name="apelido"
                    component="span"
                    className="ErrorMessage"
                  />
                </div>
                <div className="flex flex-col w-[48%]">
                  <Field
                    name="telemovel"
                    className="input w-full"
                    placeholder="Insira o seu número de telemóvel"
                  />
                  <ErrorMessage
                    name="telemovel"
                    component="span"
                    className="ErrorMessage "
                  />
                </div>
                <div className="flex flex-col w-[48%]">
                  <Field
                    name="email"
                    className="input w-full"
                    placeholder="example@gmail.com"
                  />
                  <ErrorMessage
                    name="email"
                    component="span"
                    className="ErrorMessage"
                  />
                </div>
                <div className="flex flex-col w-[48%]">
                  <Field
                    name="password"
                    className="input w-full"
                    placeholder="Insira a sua password"
                  />
                  <ErrorMessage
                    name="password"
                    component="span"
                    className="ErrorMessage"
                  />
                </div>
                <div className="flex flex-col w-[48%]">
                  <Field
                    name="confirmPassword"
                    className="input w-full"
                    placeholder="Confirmar Password"
                  />

                  <ErrorMessage
                    name="confirmPassword"
                    component="span"
                    className="ErrorMessage"
                  />
                </div>
                {/* 
                <div className="flex w-full items-center justify-end">
                  {passwordType === "password" ? (
                    <EyeClosed
                      size={20}
                      weight="bold"
                      className="tooglePassword mb-[75px] mr-[20px]"
                    />
                  ) : (
                    <Eye size={20} weight="bold" className="tooglePassword" />
                  )}
                </div> */}
              </div>

              <button
                className="w-full h-[60px] rounded-lg bg-blue shadow shadow-blue text-light mt-[45px]"
                type="submit"
              >
                Login
              </button>
              <p className="text-gray flex items-center justify-center my-[45px]">
                or continue with
              </p>
              <div className="flex flex-row justify-center gap-[25px]">
                <img src={Facebook} alt="Facebook" srcSet="" />
                <img src={Apple} alt="Apple" srcSet="" />
                <img src={Google} alt="Google" srcSet="" />
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}
