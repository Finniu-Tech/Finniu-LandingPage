import Bounce from "@/app/(new-landing)/Home/Hero/components/Bounce"
import Background01 from "@/app/(new-landing)/images/backgrounds/background01.png"

const Hero = () => {
  return (
    <section 
      className="pt-20 px-8 sm:px-0 text-white w-full h-dvh flex flex-col justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${Background01.src})` }}
    >
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="w-full md:w-[80rem] text-center text-5xl md:text-8xl leading-tight">
          Transparencia y
          seguridad
        </h2>
        <p className="text-xl text-center sm:text-2xl w-full sm:w-[60rem] text-gray-400">
          Conoce cómo desde Finniu asesoramos y recomendamos oportunidades de rentabilización de capital con empresas previamente evaluadas, detallando los riesgos asociados y los procesos que aplicamos para garantizar respaldo y seguridad en cada etapa.
        </p>
      </div>
      <div className="mt-20">
        <Bounce />
      </div>
    </section>
  )
}

export default Hero
