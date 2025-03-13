import Bounce from "@/app/new-landing/sections/Hero/components/Bounce"
import ButtonLink from "@/app/new-landing/components/ButtonLink"


const Hero = () => {
  return (
    <section className="pt-20 bg-black text-white w-full h-dvh flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="font-bold text-2xl">HAZ CRECER TU PATRIMONIO Y</h2>
        <h1 className="text-center text-8xl">Logra tus metas <br /> financieras</h1>
        <h2 className="text-2xl text-gray-500">Somos Finniu una empresa gestora de fondos privados</h2>
        <ButtonLink href="#" text="Proyecta tus Metas" className="mt-4 text-white py-4 px-6 rounded-full bg-purpleSecondary"/>
      </div>
      <div className="mt-20">
        <Bounce />
      </div>
    </section>
  )
}

export default Hero