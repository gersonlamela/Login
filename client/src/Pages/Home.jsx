import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { HomeMain } from "../Components/HomeMain/MainHome";
import { Navbar } from "../Components/Navbar/Navbar";
import { isAuthenticated } from "../service/isAuthenticated";

export function Home() {
  document.title = "Home Page";
  window.top.document.title;
  const navigate = useNavigate();

  useEffect(() => {
    isAuthenticated() ? true : navigate("/login");
  }, [navigate]);
  return (
    <>
      <Navbar />
      <HomeMain />
    </>
  );
}
