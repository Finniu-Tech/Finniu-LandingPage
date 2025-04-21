"use client"

import CountUp from "react-countup"
import Background01 from "@/app/(new-landing)/images/backgrounds/background01.png"
import Background from "@/app/(new-landing)/portafolio-finniu/Sections/Optimization/images/backgrounds/background.png"

const Optimization = () => {
  return (
    <section
      className="py-10 md:py-40 px-8 md:px-0 w-full text-white flex flex-col justify-center items-center gap-10 md:gap-20"
      style={{ backgroundImage: `url(${Background01.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <h3 className="text-4xl md:text-7xl w-full md:w-[60rem] text-center">
        Facilitamos colocaciones privadas con impacto y propósito
      </h3>
      <div className="flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center content-center gap-10 md:gap-20">
          <div>
            <CountUp
              start={0}
              end={30}
              duration={2.5}
              suffix="%"
              style={{
                background: "linear-gradient(265.11deg, #00FFB8 -5.84%, #005C90 111.58%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="text-7xl md:text-[100px]"
            />
            <h4 className="mt-2 text-center">ALIMENTACIÓN</h4>
          </div>
          <div>
            <CountUp
              start={0}
              end={25}
              duration={2.5}
              suffix="%"
              style={{
                background: "linear-gradient(261.81deg, #00FF91 -8.01%, #9A00FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="text-7xl md:text-[100px]"
            />
            <h4 className="mt-2 text-center">SUMINISTROS</h4>
          </div>
          <div>
            <CountUp
              start={0}
              end={15}
              duration={2.5}
              suffix="%"
              style={{
                background: "linear-gradient(260.33deg, #0049FF -13.37%, #00BFD8 109.53%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="text-7xl md:text-[100px]"
            />
            <h4 className="mt-2 text-center">AGROINDUSTRIA</h4>
          </div>
          <div>
            <CountUp
              start={0}
              end={10}
              duration={2.5}
              suffix="%"
              style={{
                background: "linear-gradient(265.11deg, #00FFB8 -5.84%, #005C90 111.58%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="text-7xl md:text-[100px]"
            />
            <h4 className="mt-2 text-center">MAQUINARIA</h4>
          </div>
        </div>
        <div className="grid grid-cols-1 justify-items-center content-center md:flex justify-center items-center gap-10 md:gap-24">
          <div>
            <CountUp
              start={0}
              end={10}
              duration={2.5}
              suffix="%"
              style={{
                background: "linear-gradient(261.81deg, #00FF91 -8.01%, #9A00FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
              className="text-7xl md:text-[100px]"
            />
            <h4 className="mt-2 text-center">OIL & GAS</h4>
          </div>
          <div>
            <CountUp
              start={0}
              end={10}
              duration={2.5}
              suffix="%"
              style={{
                background: "linear-gradient(260.33deg, #0049FF -13.37%, #00BFD8 109.53%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="text-7xl md:text-[100px]"
            />
            <h4 className="mt-2 text-center">OUTSOURCING</h4>
          </div>
        </div>
      </div>
      <section className="w-full flex flex-col justify-center items-center gap-10 md:gap-20">
        <h3 className="flex flex-col gap-6 text-4xl md:text-7xl w-full text-center">
          Conexión Inteligente de Capital Privado:
          <span className="text-4xl md:text-7xl w-full text-center">
            Descubre Finniu
          </span>
        </h3>
        <div
          className="w-full md:w-[80rem] flex flex-col md:flex-row justify-center items-center rounded-3xl"
          style={{ backgroundImage: `url(${Background.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="w-full h-[210px] md:w-[1800px] md:h-[400px]">
            <iframe
              className="w-full h-full md:h-full rounded-t-3xl md:rounded-none md:rounded-l-3xl"
              src="https://www.youtube.com/embed/Z0OgC2zL00I?si=E6lyMcxcg1qE-p55"
              title="Descubre Finniu"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-10 md:px-10 flex flex-col gap-4 items-center justify-center">
            <h4 className="text-2xl md:text-4xl">
              Descubre Finniu: Cómo conectamos personas con empresas a través de operaciones privadas
            </h4>
            <p className="text-lg md:text-xl">
              En este video, te presentamos Finniu, una fintech que facilita operaciones privadas entre personas que desean colocar su capital y empresas que necesitan financiamiento para crecer, bajo una estructura segura, clara y sin intermediarios tradicionales.
            </p>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Optimization