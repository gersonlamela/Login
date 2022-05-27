import React from "react";
import { Human } from "../helper/images";

export function RegisterSlogan() {
  return (
    <>
      <div className="hidden lg:flex flex-col gap-14">
        <div className="flex flex-col">
          <h1 className="text-dark dark:text-light text-[3.125rem] font-semibold">
            Registar
          </h1>
          <h2 className="text-dark dark:text-light text-2xl font-medium">
            Tem acesso ao nosso site e muito mais...
          </h2>
        </div>
        <div className="flex flex-row text-dark dark:text-light">
          <div className="flex flex-row gap-2">
            <div className="flex flex-col">
              <p className="text-base font-normal">Se já tens conta</p>
              <p className="text-base">
                Podes
                <span className="text-blue">
                  <a href="../"> fazer o teu Login aqui!</a>
                </span>
              </p>
            </div>
            <img
              src={Human}
              className="w-[313px] h-auto relative bottom-10 right-4"
              alt="Imagem de um Humano UI"
              srcSet=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
