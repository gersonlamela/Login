import axios from "axios";
import { SignOut } from "phosphor-react";
import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

export function HomeMain() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const api = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      "Content-Type": "application/json",
    },
  });

  useEffect(() => {
    api.get("/me").then((res) => {
      setUserData(res.data.data);
    });
  }, []);

  const { id, nome, apelido, telemovel, email } = userData;

  function handleClickLogout() {
    let text = "Tens a certeza que queres sair ?";
    if (confirm(text) == true) {
      navigate("/logout");
    }
  }

  return (
    <div className="w-full mt-64 gap-4 flex flex-col items-center justify-center">
      <h1 className="text-4xl text-dark dark:text-light">
        Olá {nome} <span>{apelido}</span>
      </h1>
      <h1 className="text-2xl text-dark dark:text-light">Email: {email}</h1>
      <h1 className="text-2xl text-dark dark:text-light">
        Telemóvel: {telemovel}
      </h1>

      <button
        className="flex flex-row items-center justify-center gap-2 mt-5 p-5 rounded text-light  bg-gray"
        onClick={handleClickLogout}
      >
        <span>Logout</span>
        <SignOut size={32} />
      </button>
    </div>
  );
}
