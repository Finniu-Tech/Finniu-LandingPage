import Bounce from "@/app/(new-landing)/Home/Hero/components/Bounce"
import Background01 from "@/app/(new-landing)/images/backgrounds/background01.png"

const Hero = () => {
  return (
    <section
      className="pt-20 px-8 sm:px-0 text-white w-full h-dvh flex flex-col justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${Background01.src})` }}
    >
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="w-full md:w-[50rem] text-center text-5xl md:text-8xl leading-tight">
          Mejores Tasas a Plazo Fijo
        </h2>
        <p className="text-xl text-center sm:text-2xl w-full sm:w-[60rem] text-gray-400">
          Compara y encuentra las mejores tasas para tu inversión a plazo fijo
        </p>
      </div>
      <div className="mt-20">
        <Bounce />
      </div>
    </section>
  )
}

export default Hero