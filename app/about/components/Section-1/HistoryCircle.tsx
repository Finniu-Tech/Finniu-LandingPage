import React from "react";
import Image from "next/image";
import EyesArrow from "@/images/About/Section-1/EyesArrow.png";

const HistoryCircle = () => {
  return (
    <div className="flex flex-col items-center h-full relative  top-0 justify-center  mt-0  2xl:mt-[40px] ">
      <p className="text-white  text-[20px] 2xl:text-4xl ">
        Conoce nuestra historia aquí
      </p>
      {/* <div className=" mt-10">
        <Image src={EyesArrow} alt="eyes-arrow" height={170} />
      </div> */}
      <div className=" bg-blueDarkColor text-white 2xl:rounded-full  mb-0 2xl:mb-[68px] flex items-center justify-center  w-[354px] 2xl:w-[675px] h-[556px] 2xl:h-[735px]">
        <Image
          src={EyesArrow}
          alt="eyes-arrow"
          height={140}
          className="absolute  2xl:top-[14%] top-24  h-[109px] 2xl:h-[140px] "
        />
        <div className=" w-[529px] flex justify-center items-center ">
          <div className=" w-[287px]     2xl:w-[407px]">
            <p className=" text-[18px]  2xl:text-[20px] text-center mt-16  2xl:mt-[50%]  leading-9  2xl:leading-10 ">
              Somos una gestora de fondos privados con la misión de democratizar el acceso a las oportunidades financieras. Nuestra prioridad es cuidar tu futuro brindándote experiencia y tranquilidad, por eso nos esforzamos para que crecer financieramente sea lo más sencillo y transparente posible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryCircle;
