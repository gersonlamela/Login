import React from "react";
import { Link } from "react-router-dom";
export function NavbarHome() {
  return (
    <div className="w-full h-[85px] shadow dark:shadow-none px-10 flex items-center flex-wrap flex-1 justify-between  font-semibold text-xl text-dark dark:text-light">
      <div className="">
        <h1>Bem vindo</h1>
      </div>
      <div className="flex  flex-wrap items-center justify-center gap-20">
        <Link to="./login">
          <button className="hover:text-red">Login</button>
        </Link>
        <Link to="./register">
          <button className="hover:text-red">Register</button>
        </Link>
        <Link to="">
          <button className="hover:text-red">Logout</button>
        </Link>
      </div>
    </div>
  );
}
