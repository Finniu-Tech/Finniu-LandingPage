import Bounce from "@/app/(new-landing)/Home/Hero/components/Bounce"
import Background01 from "@/app/(new-landing)/images/backgrounds/background01.png"

const Hero = () => {
  return (
    <section
      className="pt-20 px-8 sm:px-0 text-white w-full h-dvh flex flex-col justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${Background01.src})` }}
    >
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-center text-5xl md:text-8xl leading-tight">¿Quiénes Somos?</h2>
        <p className="text-xl text-center sm:text-2xl w-full sm:w-[60rem] text-gray-400">
          Finniu es una fintech que facilita la conexión entre personas interesadas en colocar su capital de forma privada y empresas que buscan financiamiento para crecer. <span className="font-bold">Nuestro objetivo es simplificar el acceso a oportunidades reales</span> mediante estructuras claras, seguras y sin intermediarios tradicionales. Todas las operaciones se realizan de manera privada, sin captar fondos del público ni ofrecer productos financieros regulados.
        </p>
      </div>
      <div className="mt-20">
        <Bounce />
      </div>
    </section>
  )
}

export default Hero