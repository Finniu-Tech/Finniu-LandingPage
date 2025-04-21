import Carousel from "@/app/(new-landing)/empresa/Sections/Mission/components/Carousel"

const Mission = () => {
  return (
    <section className="pb-10 md:pb-40 px-8 md:px-0 w-full bg-whitePrimary text-black flex flex-col justify-center items-center gap-10 md:gap-20">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10">
        <div className="w-full md:w-[30rem] flex flex-col justify-center items-start gap-2">
          <h4 className="font-bold text-2xl">Nuestra misión</h4>
          <p className="text-lg">
            Acercar oportunidades de inversión privada estructurada a personas que buscan hacer crecer su capital con propósito.
            <br />
            Facilitamos conexiones claras y seguras entre personas y empresas, promoviendo un modelo más accesible, transparente y confiable.
          </p>
        </div>
        <div className="w-full md:w-[30rem] flex flex-col justify-center items-start gap-2">
          <h4 className="font-bold text-2xl">Nuestra visión</h4>
          <p className="text-lg">
            Ser la plataforma de referencia en Latinoamérica para quienes desean canalizar su capital hacia empresas reales mediante operaciones privadas estructuradas.
            <br />
            Aspiramos a transformar el vínculo entre personas y dinero, con impacto social, claridad legal y sostenibilidad financiera.
          </p>
        </div>
      </div>
      <Carousel />
    </section>
  )
}

export default Mission