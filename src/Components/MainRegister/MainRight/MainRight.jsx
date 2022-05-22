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
      <div className="flex flex-col w-[350px] md:w-[500px] gap-[30px] max-w-[500px] mt-5">
        <div className="flex flex-col">
          <h1 className="text-dark dark:text-light text-3xl font-medium h-auto">
            Sign Up
          </h1>
        </div>
        <div className="flex">
          <Formik
            initialValues={{}}
            onSubmit={handleClickLogin}
            validationSchema={validationLogin}
          >
            <Form>
              <div className="flex max-w-full flex-row flex-wrap justify-between gap-2">
                <Field
                  name="email"
                  className="input w-[48%]"
                  placeholder="example@gmail.com"
                />
                <Field
                  name="email"
                  className="input w-[48%]"
                  placeholder="example@gmail.com"
                />
                <Field
                  name="email"
                  className="input w-[48%]"
                  placeholder="example@gmail.com"
                />
                <Field
                  name="email"
                  className="input w-[48%]"
                  placeholder="example@gmail.com"
                />
                <Field
                  name="email"
                  className="input w-[48%]"
                  placeholder="example@gmail.com"
                />
                <Field
                  name="password"
                  className="input w-[48%]"
                  placeholder="Password"
                />
                <ErrorMessage
                  component="span"
                  name="email"
                  className="absolute"
                />
                <div className="flex w-full items-center justify-end">
                  <ErrorMessage component="span" name="password" className="" />
                  {passwordType === "password" ? (
                    <EyeClosed
                      size={20}
                      weight="bold"
                      className="tooglePassword mb-[75px] mr-[20px]"
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
