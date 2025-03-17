import Image from "next/image"
import ButtonLinkIcon from "@/app/new-landing/components/ButtonLinkIcon"
import LlamaCool from "@/app/new-landing/sections/Invest/images/Llama.webp"
import InvestmentForm from "@/app/components/Section-5/InvestmentForm"
import Background02 from "@/app/new-landing/images/backgrounds/background02.png"
import ArrowUpLeft from "@/app/new-landing/sections/Invest/images/icons/ArrowUpLeft"

const Invest = () => {
  return (
    <section
      className="pt-40 bg-black text-white w-full flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${Background02.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <section className="w-full flex flex-col justify-center items-center gap-10">
        <div className="flex flex-col justify-center items-center gap-8">
          <h3 className="font-bold">CALCULA TU PRESUPUESTO</h3>
          <h3 className="text-6xl">Proyecta tus Metas</h3>
          <h3 className="text-center w-[38rem] text-gray-400">
            Consulta nuestra calculadora de interés compuesto para ver cuanto pueden ayudar el poder del tiempo y el interés compuesto a hacer crecer su dinero
          </h3>
        </div>
        <div className="text-black">
          <InvestmentForm />
        </div>
      </section>
      <section className="pt-40 px-80 w-full flex justify-between items-center">
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
          <ButtonLinkIcon href="#" icon={<ArrowUpLeft />} text="Agendar videollamada" className="mt-4 flex gap-2 justify-center items-center text-white py-4 px-6 rounded-full bg-purplePrincipal hover:bg-white hover:text-purplePrincipal transition duration-150 ease"/>
        </div>
        <div className="w-[30rem]">
          <Image src={LlamaCool} alt="Llama Cool" className="w-full" />
        </div>
      </section>
    </section>
  )
}

export default Invest