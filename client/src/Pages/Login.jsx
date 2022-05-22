import React from "react";
import { MainLeft } from "../Components/MainLogin/MainLeft/MainLeft";
import { MainRight } from "../Components/MainLogin/MainRight/MainRight";
import { Navbar } from "../Components/Navbar/Navbar";

export function Login() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center flex-col lg:flex-row lg:items-start lg:justify-between lg:px-[100px] xl:px-[180px] pb-[2.35rem]">
        <MainLeft />
        <MainRight />
      </div>
    </>
  );
}