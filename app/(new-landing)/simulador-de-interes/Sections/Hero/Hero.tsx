import Bounce from "@/app/(new-landing)/Home/Hero/components/Bounce"
import Background01 from "@/app/(new-landing)/images/backgrounds/background01.png"

const Hero = () => {
  return (
    <section
      className="pt-20 px-8 sm:px-0 text-white w-full h-dvh flex flex-col justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${Background01.src})` }}
    >
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="w-full md:w-[55rem] text-center text-5xl md:text-8xl leading-tight">
          Simulador de Retorno Proyectado
        </h2>
        <p className="text-xl text-center sm:text-2xl w-full sm:w-[60rem] text-gray-400">
          Descubre de forma referencial cuánto podrías generar al participar en una colocación privada estructurada con respaldo contractual.
En Finniu te conectamos con oportunidades sólidas y de impacto, de forma directa, privada y personalizada, sin captar fondos del público ni ofrecer productos financieros masivos.
        </p>
        <p className="mt-4 text-sm text-center sm:text-base w-full sm:w-[60rem] text-gray-300 font-medium bg-gray-800 bg-opacity-50 p-4 rounded-xl">
          🔒 Importante: Este simulador no constituye una oferta pública ni garantiza resultados. Su finalidad es ilustrativa.
          Toda colocación se realiza de manera individual y bajo contrato privado entre las partes.
        </p>
      </div>
      <div className="mt-20">
        <Bounce />
      </div>
    </section>
  )
}

export default Hero