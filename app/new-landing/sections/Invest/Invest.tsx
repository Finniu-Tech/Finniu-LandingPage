import Image from "next/image"
import ButtonLink from "@/app/new-landing/components/ButtonLink"
import LlamaCool from "@/app/new-landing/sections/Invest/images/Llama.webp"
import InvestmentForm from "@/app/components/Section-5/InvestmentForm"

const Invest = () => {
  return (
    <section className="pt-40 bg-black text-white w-full flex flex-col justify-center items-center">
      <section className="w-full flex flex-col justify-center items-center gap-8">
        <div className="flex flex-col justify-center items-center gap-8">
          <h3 className="font-bold">CALCULA TU PRESUPUESTO</h3>
          <h3 className="text-6xl">Proyecta tus Metas</h3>
          <h3 className="text-center w-[38rem] text-gray-400">
            Consulta nuestra calculadora de interés compuesto para ver cuanto pueden ayudar el poder del tiempo y el interés compuesto a hacer crecer su dinero
          </h3>
        </div>
        <div className="">
          <InvestmentForm />
        </div>
      </section>
      <section className="pt-40 w-full flex justify-center items-center gap-40">
        <div className="w-[30rem] flex flex-col justify-center items-start gap-6">
          <h3 className="text-6xl leading-tight">Invierte con confianza:</h3>
          <p>
            Cumplimos con los más estándares de seguridad
          </p>
          <p>
            En Finniu, nos aseguramos de operar bajo parámetros estrictos que garantizan la transparencia y confianza en cada inversión
          </p>
          <p>
            Si tienes dudas, agenda una videollamada con uno de nuestros asesores y descubre cómo puede hacer crecer tu dinero de manera segura y estratégica
          </p>
          <ButtonLink href="#" text="Agendar videollamada" className="mt-4 text-white py-4 px-6 rounded-full bg-purplePrincipal" />
        </div>
        <div className="w-[30rem]">
          <Image src={LlamaCool} alt="Llama Cool" className="w-full" />
        </div>
      </section>
    </section>
  )
}

export default Invest