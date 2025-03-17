import Image from "next/image"
import ButtonLink from "@/app/new-landing/components/ButtonLink"
import Mackbook from "@/app/new-landing/sections/Ready/images/Macbook.webp"

const Ready = () => {
  return (
    <section className="py-40 pl-80 w-full bg-whitePrimary text-black flex justify-between items-center">
      <div className="flex flex-col justify-center items-start gap-8">
        <h3 className="font-bold text-base">LISTOS PARA CRECER CONTIGO</h3>
        <h3 className="w-[30rem] text-6xl leading-tight">Sin requisitos ocultos y sin comisiones</h3>
        <h3 className="w-[30rem]">Regístrate de cualquier celular o computador y obtén más ganancias con tus ahorros. Genera un ingreso extra al mes</h3>
        <ButtonLink href="#" text="Empieza ahora" className="mt-4 text-white py-4 px-6 rounded-full bg-purplePrincipal border-solid border-[1px] border-purplePrincipal hover:bg-white hover:text-purplePrincipal hover:border-solid hover:border-[1px] hover:border-purplePrincipal transition duration-150 ease"/>
      </div>
      <div className="w-[60rem]">
        <Image src={Mackbook} alt="Mackbook Finniu" className="w-full"/>
      </div>
    </section>
  )
}

export default Ready