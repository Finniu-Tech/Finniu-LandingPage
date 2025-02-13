"use client";
import React from "react";
import Image from "next/image";
import CountUp from "react-countup";
import CellphoneDollar from "@/images/Section-1/CellPhoneDollar.png";
import { faCalculator, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/dist/client/link";

const DownloadAppSectionDesktop = () => {
  return (
    <div className="flex flex-row  container-section  justify-center relative h-full">
      <div className="text-left w-[380px] z-10 flex justify-center flex-col ">


        <p className="text-white text-[43px] leading-tight">
          Haz crecer tus <span className="text-lightTextNavBar">Ahorros</span> y logra tus
          <span className="text-lilaColor "> metas </span>
          <span className="text-lilaColor capitalize"> Financieras </span>
          con Finniu
        </p>
        <div className="h-[30px]"></div>
        <Link href={"/#simulatorInvestment"} className="w-[314px] h-[55px] flex flex-row justify-center items-center border rounded-lg border-lightTextNavBar  ">
          <p className=" text-[25px] mr-4 text-lightBlueColor">Simula tu inversión</p>
          <FontAwesomeIcon icon={faCalculator} className="text-lightTextNavBar text-2xl" />
        </Link>

      </div>

      <div className="w-[100px]"></div>

      <div className=" flex items-end pb-28 ml-60 w-[523px] ">
        <div className="flex flex-col items-end justify-center  text-white text-xl  ml-8 ">
          <div className="flex items-center justify-center mb-4 space-x-4 w-[476px] leading-[43px] ">
            <div className="text-center">
              <p className="text-base">Soles invertidos</p>

              <CountUp
                start={0}
                end={12.1}
                duration={2.5}
                separator=""
                decimals={1}
                decimal=","
                prefix="+"
                suffix=" M"
                style={{ fontSize: "32px" }}
              />
            </div>
            <div className="border-l-2 border-lightBlueColor h-16"></div>
            <div className="text-center">
              <p className="text-base"> Operaciones</p>
              <CountUp
                start={0}
                end={820}
                duration={2.7}
                prefix="+"
                style={{ fontSize: "32px" }}
              ></CountUp>
            </div>
            <div className="border-l-2 border-lightBlueColor h-16"></div>
            <div className="text-center">
              <p className="text-base">Inversionistas</p>
              <CountUp
                start={0}
                end={390}
                duration={2.5}
                prefix="+"
                style={{ fontSize: "32px" }}
              ></CountUp>
            </div>
          </div>
          <p className="text-justify leading-10 text-[24px]">
            Somos Empresa Gestora de Fondos Privados con un producto de renta fija. En Finniu impulsamos el crecimiento de las empresas de nuestro propio portafolio
          </p>
        </div>
      </div>

      <div className="absolute top-12 flex flex-row items-center  justify-center h-full w-full">
        <Image
          src={CellphoneDollar}
          alt="CellPhone-Dollar"
          width={570}
          style={{ height: "auto" }}
        />
      </div>
    </div>
  );
};

export default DownloadAppSectionDesktop;
