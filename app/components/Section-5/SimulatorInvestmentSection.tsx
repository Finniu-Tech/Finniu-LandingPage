import React from "react";
import Image from "next/image";
import InvestmentForm from "./InvestmentForm";
import Bill from "@/images/Section-5/Bill.png";

const SimulatorInvestmentSection = () => {
  return (
    <section
      id="simulatorInvestment"
      className="w-full min-h-[595px]  2xl:min-h-screen flex justify-center items-center bg-lightColor xl:bg-gradient "
    >
      <div className="container flex flex-row min-h-full p-8 justify-center">
        <div className="flex flex-col items-center  justify-center ">
          <div className=" w-[650px] text-left  hidden xl:block">
            <p className=" text-[18px] sm:text-[20px]     md:text-[30px] xl:text-[40px] font-bold text-white  ">
              Proyecta
            </p>
            <p className=" text-[18px] sm:text-[20px] md:text-[30px] xl:text-[40px] font-bold text-white">
              tus metas
            </p>
            <div className="flex flex-row gap-4">
              <p className="text-[18px] sm:text-[20px]  md:text-[30px] xl:text-[40px] font-bold text-white">
                con nuestro simulador
              </p>
              <Image
                src={Bill}
                alt="bill"
                width={78}
                height={90}
                style={{ height: "auto" }}
              />
            </div>
          </div>
        </div>
        <div className="w-3/5 flex items-center justify-center  2xl:justify-end ">
          <InvestmentForm />
        </div>
      </div>
    </section>
  );
};

export default SimulatorInvestmentSection;
