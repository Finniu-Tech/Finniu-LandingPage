"use client"

import Image from "next/image"
import ButtonLinkIcon from "@/app/(new-landing)/components/ButtonLinkIcon"
import LlamaCool from "@/app/(new-landing)/Home/Invest/images/Llama.webp"
import LlamaCoolMobile from "@/app/(new-landing)/Home/Invest/images/LlamaCoolMobile.webp"
import Background01 from "@/app/(new-landing)/images/backgrounds/background01.png"
import ArrowUpLeft from "@/app/(new-landing)/Home/Invest/images/icons/ArrowUpLeft"
import CountUp from "react-countup"

const OurNumbers = () => {
  return (
    <section
      className="pt-10 md:pt-40 pb-10 md:pb-0 px-8 md:px-0 text-white w-full flex flex-col justify-center items-center relative"
      style={{ backgroundImage: `url(${Background01.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <section className="w-full flex flex-col justify-center items-center gap-6 md:gap-10">
        <h3 className="text-4xl md:text-7xl w-full md:w-[60rem] text-center">
          Nuestros números hablan por sí mismos
        </h3>
        <div className="grid grid-cols-1 justify-items-center content-center gap-4 md:grid-cols-4 md:gap-0">
          <div>
            <CountUp
              start={0}
              end={3}
              duration={2.5}
              prefix="+"
              suffix=" años"
              style={{
                background: "linear-gradient(265.11deg, #00FFB8 -5.84%, #005C90 111.58%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="text-7xl md:text-[100px]"
            />
            <h4 className="mt-2 text-center">EN EL MERCADO</h4>
          </div>
          <div>
            <CountUp
              start={0}
              end={18}
              duration={2.5}
              prefix="+"
              suffix="M"
              style={{
                background: "linear-gradient(261.81deg, #00FF91 -8.01%, #9A00FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="text-7xl md:text-[100px]"
            />
            <h4 className="mt-2 text-center">TOTAL DE CAPITAL <br /> ADMINISTRADO</h4>
          </div>
          <div>
            <CountUp
              start={0}
              end={450}
              duration={2.5}
              prefix="+"
              style={{
                background: "linear-gradient(260.33deg, #0049FF -13.37%, #00BFD8 109.53%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="text-7xl md:text-[100px]"
            />
            <h4 className="mt-2 text-center">INVERSIONISTAS <br /> ACTIVOS</h4>
          </div>
          <div className="text-center">
            <CountUp
              start={0}
              end={18}
              duration={2.5}
              prefix="+"
              suffix="%"
              style={{
                background: "linear-gradient(265.11deg, #00FFB8 -5.84%, #005C90 111.58%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="text-7xl md:text-[100px]"
            />
            <h4 className="mt-2 text-center">DE RENTABILIDAD BRINDADA</h4>
          </div>
        </div>
      </section>
      <section className="pt-10 md:pt-40 px-0 md:px-80 w-full flex justify-between items-center">
        <div className="w-[70%] md:w-[30rem] flex flex-col justify-center items-start gap-4 md:gap-6">
          <h3 className="text-[2.50rem] md:text-6xl leading-none md:leading-tight">
            Haz crecer tu capital con confianza
          </h3>
          <p>
            En Finniu, operamos con <span className="font-bold">exigentes estándares de seguridad</span>, con procesos diseñados para proteger cada paso de tu operación.
          </p>
          <ButtonLinkIcon href="#" icon={<ArrowUpLeft />} text="Agendar videollamada" className="mt-4 flex gap-2 justify-center items-center text-white py-4 px-6 rounded-full bg-purplePrincipal hover:bg-white hover:text-purplePrincipal transition duration-150 ease"/>
        </div>
        <div className="hidden md:flex w-[30rem] -right-[11rem] -bottom-6">
          <Image src={LlamaCool} alt="Llama Cool" className="w-full" />
        </div>
        <div className="absolute sm:hidden w-36 right-0 bottom-0">
          <Image src={LlamaCoolMobile} alt="Llama Cool Mobile" className="w-full"/>
        </div>
      </section>
    </section>
  )
}

export default OurNumbers