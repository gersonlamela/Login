import axios from "axios";
import React from "react";
import { HomeMain } from "../Components/HomeMain/MainHome";

import { NavbarHome } from "../Components/HomeNavbar/NavbarHome";

export function Home() {
  const api = axios.create({
    baseURL: "http://localhost:3001" /* metes aqui o url da tua api */,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      "Content-Type": "application/json",
    },
  });

  api.get("/welcome").then((res) => {
    console.log(res);
  });
  return (
    <>
      <NavbarHome />
      <HomeMain />
    </>
  );
}
