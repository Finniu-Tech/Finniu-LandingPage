"use client"

import Background01 from "@/app/(new-landing)/images/backgrounds/background01.png"
import CountUp from "react-countup"
import InvestmentForm from "@/app/components/Section-5/InvestmentForm"

const OurNumbers = () => {
  return (
    <section
      className="py-10 md:py-40 px-8 md:px-0 text-white w-full flex flex-col justify-center items-center"
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
      <section className="pt-10 md:pt-40  w-full flex flex-col justify-center items-center gap-6 md:gap-10">
        <div className="flex flex-col justify-center items-center gap-2 md:gap-8" id="projectYourGoals">
          <h3 className="text-4xl md:text-7xl text-center">Proyecta tus Metas</h3>
          <h3 className="text-center w-full text-base md:text-lg md:w-[38rem] text-gray-400">
            Consulta nuestra <span className="font-bold">calculadora financiera</span> y visualiza cómo hacer crecer tu dinero de forma estratégica a través del tiempo.
          </h3>
        </div>
        <div className="w-full md:px-40 xxxl:px-80 text-black mt-2">
          <InvestmentForm />
        </div>
      </section>
    </section>
  )
}

export default OurNumbers