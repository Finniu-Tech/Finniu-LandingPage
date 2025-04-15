import Card from "@/app/(new-landing)/empresa/Sections/Team/components/Card"
import PERSONS from "@/app/(new-landing)/empresa/Sections/Team/helper/persons"
import ButtonLink from "@/app/(new-landing)/components/ButtonLink"

const Team = () => {
  return (
    <section className="py-10 md:py-40 px-8 md:px-0 w-full bg-whitePrimary text-black flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 justify-items-center content-center gap-4 md:grid-cols-3 md:gap-10">
        {PERSONS.map((person, index) => (
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
      <ButtonLink href="/empresa" text="Volver" className="w-full md:w-60 mt-10 md:mt-20 text-center text-white py-4 px-6 rounded-full bg-purplePrincipal border-solid border-[1px] border-purplePrincipal hover:bg-white hover:text-purplePrincipal hover:border-solid hover:border-[1px] hover:border-purplePrincipal transition duration-150 ease"/>
    </section>
  )
}

export default Team