import React from "react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <div className="flex gap-5">
        <h1>PÁGINA HOME</h1>
        <p>Olá "NOME DO UTILIZADOR"</p>
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
    </>
  );
}
