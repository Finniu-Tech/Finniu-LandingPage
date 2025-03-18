import Bounce from "@/app/new-landing/sections/Hero/components/Bounce"
import ButtonLink from "@/app/new-landing/components/ButtonLink"
import Background01 from "@/app/new-landing/images/backgrounds/background01.png"

const Hero = () => {
  return (
    <section 
      className="pt-20 px-8 sm:px-0 text-white w-full h-dvh flex flex-col justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${Background01.src})` }}
    >
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="font-bold text-xl sm:text-2xl">HAZ CRECER TU PATRIMONIO Y</h2>
        <h1 className="text-center text-5xl md:text-8xl leading-tight">Logra tus metas <br /> financieras</h1>
        <h2 className="text-xl text-center sm:text-2xl text-gray-400">Somos Finniu, una empresa gestora de fondos privados</h2>
        <ButtonLink href="#" text="Proyecta tus Metas" className="mt-4 text-white py-4 px-6 rounded-full bg-purplePrincipal hover:bg-white hover:text-purplePrincipal transition duration-150 ease"/>
      </div>
      <div className="mt-20">
        <Bounce />
      </div>
    </section>
  )
}

export default Hero
