import axios from "axios";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

export function HomeMain() {
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

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <h1 className="text-9xl text-dark dark:text-light">Olá {nome}</h1>

      <button className="w-4 h-4 bg-white ">
        <Link to="/logout">Logout</Link>
      </button>
    </div>
  );
}
