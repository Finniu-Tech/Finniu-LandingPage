import Image from "next/image"
import ButtonLink from "@/app/new-landing/components/ButtonLink"
import Mackbook from "@/app/new-landing/sections/Ready/images/Macbook.webp"

const Ready = () => {
  return (
    <section className="py-10 md:py-40 px-8 pr-0 md:pl-80 w-full bg-whitePrimary text-black flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-col pr-8 md:px-0 justify-center items-center md:items-start gap-2 md:gap-8">
        <h3 className="font-bold text-base">LISTOS PARA CRECER CONTIGO</h3>
        <h3 className="w-full text-center md:text-start md:w-[35rem] text-5xl md:text-6xl leading-none md:leading-tight">
          Una experiencia simple y accesible desde cualquier dispositivo.
        </h3>
        <h3 className="w-full text-center md:text-start md:w-[30rem]">
          Haz que tu dinero crezca con propósito y recibe ingresos mensuales al optimizar tu capital de forma segura.
        </h3>
        <ButtonLink href="#" text="Empieza ahora" className="mt-2 md:mt-4 text-white py-4 px-6 rounded-full bg-purplePrincipal border-solid border-[1px] border-purplePrincipal hover:bg-white hover:text-purplePrincipal hover:border-solid hover:border-[1px] hover:border-purplePrincipal transition duration-150 ease"/>
      </div>
      <div className="w-full md:w-[60rem] mt-6 md:mt-0">
        <Image src={Mackbook} alt="Mackbook Finniu" className="w-full"/>
      </div>
    </section>
  )
}

export default Ready