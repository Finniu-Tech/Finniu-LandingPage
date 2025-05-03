import CardInvest  from "@/app/(new-landing)/colocacion-privada/Sections/Invest/components/CardInvest"
import INVESTS from "@/app/(new-landing)/colocacion-privada/Sections/Invest/helpers/invest"

const Invest = () => {
  return (
    <section className="py-10 md:py-40 px-8 md:px-0 w-full bg-whitePrimary text-black flex flex-col justify-center items-center gap-10 md:gap-20">
      <h3 className="text-4xl md:text-7xl w-full text-center">
        Colocaciones Privadas con Plazo Estructurado
      </h3>
      <div className="grid grid-cols-1 justify-items-center content-center gap-4 md:grid-cols-2 md:gap-10">
        {INVESTS.map((invest, index) => (
          <CardInvest
            key={index}
            imgSrc={invest.imgSrc}
            imgAlt={invest.imgAlt}
            title={invest.title}
            phrase={invest.phrase}
          />
        ))}
      </div>
    </section>
  )
}

export default Invest