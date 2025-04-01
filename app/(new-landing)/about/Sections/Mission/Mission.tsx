import Carousel from "@/app/(new-landing)/about/Sections/Mission/components/Carousel"

const Mission = () => {
  return (
    <section className="pb-10 md:pb-40 px-8 md:px-0 w-full bg-whitePrimary text-black flex flex-col justify-center items-center gap-10 md:gap-20">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10">
        <div className="w-full md:w-[30rem] flex flex-col justify-center items-start gap-2">
          <h4 className="font-bold text-2xl">Nuestra misión</h4>
          <p className="text-lg">
            Simplificar la forma en la que las personas gestionan su capital, brindando soluciones accesibles y seguras que conecten el crecimiento individual con el desarrollo colectivo.
            <br />
            Trabajamos cada día para hacer que la planificación financiera sea más clara, cercana y posible
          </p>
        </div>
        <div className="w-full md:w-[30rem] flex flex-col justify-center items-start gap-2">
          <h4 className="font-bold text-2xl">Nuestra visión</h4>
          <p className="text-lg">
            Ser la empresa líder en gestión de capital privado en Latinoamérica, reconocida por construir oportunidades sostenibles, responsables y de alto impacto.
            <br />
            Queremos transformar la relación de las personas con su dinero, potenciando el bienestar financiero a través de la innovación y la transparencia
          </p>
        </div>
      </div>
      <Carousel />
    </section>
  )
}

export default Mission