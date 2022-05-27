import React from "react";
import { RegisterSlogan } from "../Components/RegisterSlogan/RegisterSlogan";
import { RegisterForm } from "../Components/RegisterForm/RegisterForm";
import { Navbar } from "../Components/Navbar/Navbar";

export function Register() {
  document.title = "Registar";
  window.top.document.title;
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center flex-col lg:flex-row lg:items-start lg:justify-between lg:px-[100px] xl:px-[180px] pb-[2.35rem]">
        <RegisterSlogan />
        <RegisterForm />
      </div>
    </>
  );
}
