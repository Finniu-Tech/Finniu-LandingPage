"use client";

import Image from "next/image"
import LogoEmprelatam from "@/app/new-landing/sections/Whoweare/images/logos/emprelatam.webp"
import LogoIncubagraria from "@/app/new-landing/sections/Whoweare/images/logos/incubagraria.webp"
import LogoInnovaul from "@/app/new-landing/sections/Whoweare/images/logos/innovaul.webp"
import LogoInversionsimple from "@/app/new-landing/sections/Whoweare/images/logos/inversionsimple.webp"
import CountUp from "react-countup"


const Whoweare = () => {
  return (
    <section className="pb-10 md:pb-40 bg-black text-white w-full flex flex-col justify-center items-center">
      <section className="mt-10 md:mt-40 flex flex-col justify-center items-center gap-6">
        <h3 className="text-lg text-gray-400">NOS RESPALDAN</h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
          <Image src={LogoInnovaul} alt="Logo de Innovaul" className="w-40" />
          <Image src={LogoIncubagraria} alt="Logo de Incubagraria" className="w-40" />
          <Image src={LogoEmprelatam} alt="Logo de Emprelatam" className="w-40" />
          <Image src={LogoInversionsimple} alt="Logo de Inversiones Simple" className="w-40" />
        </div>
      </section>
      <section className="mt-14 md:mt-28 px-8 md:px-40 xxxl:px-80 w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
        <div className="col-span-1 flex flex-col justify-center items-center md:items-start gap-2 md:gap-4 text-center md:text-start">
          <h3 className="text-4xl md:text-7xl">¿Quiénes somos?</h3>
          <p className="w-full md:w-[35rem]">Somos una empresa Gestora de Fondos Privados con un producto de renta fija. En Finniu, impulsamos el crecimiento de las empresas de nuestro propio portafolio</p>  
        </div>
        <div className="col-span-1 grid grid-cols-1 md:grid-cols-2 text-center md:text-start gap-12">
          <div>
            <CountUp
              start={0}
              end={1200}
              duration={2.5}
              prefix="+"
              style={{
                background: "linear-gradient(260.33deg, #0049FF -13.37%, #00BFD8 109.53%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="text-7xl md:text-[100px]"
            />
            <h4 className="mt-2">OPERACIONES</h4>
          </div>
          <div>
            <CountUp
              start={0}
              end={550}
              duration={2.5}
              prefix="+"
              style={{
                background: "linear-gradient(265.11deg, #00FFB8 -5.84%, #005C90 111.58%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="text-7xl md:text-[100px]"
            />
            <h4 className="mt-2">INVERSIONISTAS</h4>
          </div>
          <div>
            <CountUp
              start={0}
              end={22}
              duration={2.5}
              separator=""
              prefix="+"
              suffix="M"
              style={{
                background: "linear-gradient(261.81deg, #00FF91 -8.01%, #9A00FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="text-7xl md:text-[100px]"
            />
            <h4 className="mt-2">SOLES INVERTIDOS</h4>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Whoweare