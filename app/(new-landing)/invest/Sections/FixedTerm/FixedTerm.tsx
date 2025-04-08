import Image from "next/image"
import FixedTermImage from "@/app/(new-landing)/invest/Sections/FixedTerm/images/FixedTerm.webp"
import ButtonLink from "@/app/(new-landing)/components/ButtonLink"

const FixedTerm = () => {
  return (
    <section className="py-10 md:py-40 px-8 md:px-0 w-full bg-whitePrimary text-black flex flex-col-reverse md:flex-row justify-center items-center gap-10 md:gap-20">
      <Image src={FixedTermImage} alt="Image Fixed Term" className="w-full md:w-[30rem]"/>
      <div className="flex flex-col justify-center items-center md:items-start gap-4 md:gap-8">
        <h3 className="font-bold text-base">LISTOS PARA CRECER CONTIGO</h3>
        <h3 className="w-full text-center md:text-start md:w-[25rem] text-4xl md:text-6xl leading-none md:leading-tight">
          Inversión a Plazo Fijo
        </h3>
        <h3 className="w-full text-center md:text-start md:w-[30rem]">
          En Finniu, gestionamos fondos privados con responsabilidad, asignando el capital a los sectores estratégicos con mayor crecimiento, previamente evaluados por nuestro equipo.
          <br />
          Ofrecemos una rentabilidad de hasta 18% anual, con pagos mensuales fijos y la posibilidad de empezar desde S/1,000.
        </h3>
        <ButtonLink href="#" text="Empieza ahora" className="w-fit mt-2 md:mt-4 text-center text-white py-4 px-6 rounded-full bg-purplePrincipal border-solid border-[1px] border-purplePrincipal hover:bg-white hover:text-purplePrincipal hover:border-solid hover:border-[1px] hover:border-purplePrincipal transition duration-150 ease"/>
      </div>
    </section>
  )
}

export default FixedTerm