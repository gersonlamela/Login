import React from "react";
import { MainLeft } from "../Components/Main/MainLeft/MainLeft";
import { MainRight } from "../Components/Main/MainRight/MainRight";

export function Login() {
  return (
    <div className="flex items-center justify-center flex-col lg:flex-row lg:items-start lg:justify-between lg:px-[100px] xl:px-[180px] pt-5">
      <MainLeft />
      <MainRight />
    </div>
  );
}
