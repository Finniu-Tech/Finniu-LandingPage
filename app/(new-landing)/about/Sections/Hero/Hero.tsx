import Bounce from "@/app/(new-landing)/Home/Hero/components/Bounce"
import Background01 from "@/app/(new-landing)/images/backgrounds/background01.png"

const Hero = () => {
  return (
    <section
      className="pt-20 px-8 sm:px-0 text-white w-full h-dvh flex flex-col justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${Background01.src})` }}
    >
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-center text-5xl md:text-8xl leading-tight">¿Qué es Finniu?</h2>
        <p className="text-xl text-center sm:text-2xl w-full sm:w-[60rem] text-gray-400">
          Finniu es una empresa gestora de fondos privados que nace con una misión clara: <span className="font-bold">simplificar la forma en que las personas gestionan su capital</span>. Diseñamos una experiencia clara, segura y accesible para quienes buscan crecimiento, estabilidad y una alternativa distinta a lo tradicional.
        </p>
      </div>
      <div className="mt-20">
        <Bounce />
      </div>
    </section>
  )
}

export default Hero