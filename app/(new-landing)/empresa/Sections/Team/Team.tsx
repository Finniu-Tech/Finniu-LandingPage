import Card from "@/app/(new-landing)/empresa/Sections/Team/components/Card"
import PERSONS from "@/app/(new-landing)/empresa/Sections/Team/helper/persons"
import ButtonLink from "@/app/(new-landing)/components/ButtonLink"

const Team = () => {
  return (
    <section className="pb-10 md:pb-40 px-8 md:px-0 w-full bg-whitePrimary text-black flex flex-col justify-center items-center gap-10 md:gap-20">
      <h3 className="text-4xl md:text-7xl w-full text-center">
        Conoce a nuestro equipo
      </h3>
      <div className="hidden md:grid grid-cols-1 justify-items-center content-center gap-4 md:grid-cols-3 md:gap-10">
        {PERSONS.slice(0, 6).map((person, index) => (
          <Card
            key={index}
            imgSrc={person.imgSrc}
            imgAlt={person.imgAlt}
            name={person.name}
            position={person.position}
            phrase={person.phrase}
          />
        ))}
      </div>
      <div className="grid md:hidden grid-cols-1 justify-items-center content-center gap-4 md:grid-cols-3 md:gap-10">
        {PERSONS.slice(0, 3).map((person, index) => (
          <Card
            key={index}
            imgSrc={person.imgSrc}
            imgAlt={person.imgAlt}
            name={person.name}
            position={person.position}
            phrase={person.phrase}
          />
        ))}
      </div>
      <ButtonLink href="/empresa/team" text="Ver todo el equipo" className="text-white py-4 px-6 rounded-full bg-purplePrincipal border-solid border-[1px] border-purplePrincipal hover:bg-white hover:text-purplePrincipal hover:border-solid hover:border-[1px] hover:border-purplePrincipal transition duration-150 ease"/>
    </section>
  )
}

export default Team