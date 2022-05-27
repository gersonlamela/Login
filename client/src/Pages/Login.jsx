import React from "react";
import { LoginSlogan } from "../Components/LoginSlogan/LoginSlogan";
import { LoginForm } from "../Components/LoginForm/LoginForm";
import { Navbar } from "../Components/Navbar/Navbar";

export function Login() {
  document.title = "Login";
  window.top.document.title;
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center flex-col lg:flex-row lg:items-start lg:justify-between  lg:px-[100px] xl:px-[180px]">
        <LoginSlogan />
        <LoginForm />
      </div>
    </>
  );
}
