import { Eye, EyeClosed } from "phosphor-react";
import { Facebook, Apple, Google } from "../../helper/images";
import React, { useState } from "react";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";

export function MainRight() {
  const handleClickLogin = (values) => console.log(values);
  const validationLogin = yup.object().shape({
    email: yup
      .string()
      .email("Não é um email")
      .required("Este campo é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve de ter no minimo 8 caracteres")
      .required("Este campo é obrigatório"),
  });
  const [passwordType, setPasswordType] = useState("password");

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  return (
    <>
      <div className="flex flex-col w-[300px] md:w-[360px] gap-[30px] max-w-[360px] mt-5">
        <div className="flex flex-col">
          <h1 className="text-dark dark:text-light text-3xl font-medium h-auto">
            Sign in
          </h1>
        </div>
        <div className="flex">
          <Formik
            initialValues={{}}
            onSubmit={handleClickLogin}
            validationSchema={validationLogin}
          >
            <Form>
              <div className="flex max-w-full flex-row flex-wrap  justify-between gap-8">
                <Field
                  name="email"
                  className="input"
                  placeholder="example@gmail.com"
                />
                <ErrorMessage component="span" name="email" className="" />
                <div className="flex w-full items-center justify-end">
                  <Field
                    className="input"
                    name="password"
                    placeholder="Password"
                  />
                  <ErrorMessage component="span" name="password" className="" />
                  {passwordType === "password" ? (
                    <EyeClosed
                      size={20}
                      weight="bold"
                      className="tooglePassword"
                      onClick={togglePassword}
                    />
                  ) : (
                    <Eye
                      size={20}
                      weight="bold"
                      className="tooglePassword"
                      value={passwordInput}
                      onClick={togglePassword}
                    />
                  )}
                </div>
              </div>
              <p className="text-gray flex items-center justify-end mt-5">
                Forgot password ?
              </p>
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
