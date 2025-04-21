import Card from "@/app/(new-landing)/empresa/Sections/Private/components/Card"
import OBJECTIVES from "@/app/(new-landing)/empresa/Sections/Private/helper/objectives"

const Private = () => {
  return (
    <section className="py-10 md:py-40 px-8 md:px-0 w-full bg-whitePrimary text-black flex flex-col justify-center items-center gap-10 md:gap-20">
      <h3 className="text-4xl md:text-7xl w-full text-center">
        Conecta tu capital con empresas reales, de forma privada y con propósito
      </h3>
      <div className="grid grid-cols-1 justify-items-center content-center gap-4 md:grid-cols-2 md:gap-10">
        {OBJECTIVES.map((objective) => (
          <Card
            key={objective.number}
            number={objective.number}
            title={objective.title}
            phrase={objective.phrase}
          />
        ))}
      </div>
    </section>
  )
}

export default Private