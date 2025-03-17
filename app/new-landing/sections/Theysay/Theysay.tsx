import CardPerson from "@/app/new-landing/sections/Theysay/components/CardPerson"
import PERSONS from "@/app/new-landing/sections/Theysay/helper/persons"

const Theysay = () => {
  return (
    <section className="py-40 px-80 w-full flex flex-col items-start gap-6 justify-center bg-whitePrimary text-black ">
      <div className="flex flex-col items-start gap-4">
        <h3 className="text-6xl">¿Qué dicen de Finniu?</h3>
        <h3 className="text-2xl">Ellos lograron sus metas, ahora te toca a ti</h3>
      </div>
      <div
        id="multi-slide"
        data-carousel='{ "loadingClasses": "opacity-0", "isInfiniteLoop": true, "isDraggable": true, "slidesQty": { "xs": 1, "lg": 3 } }'
        className="relative w-full"
      >
        <div className="carousel h-auto">
          <div className="carousel-body px-0 py-2 h-full">
            {PERSONS.map((person, index) => (
              <div key={index} className="carousel-slide">
                <CardPerson
                  imgSrc={person.imgSrc}
                  imgAlt={person.imgAlt}
                  title={person.title}
                  phrase={person.phrase}
                  name={person.name}
                  occupation={person.occupation}
                />
              </div>
            ))}
          </div>
        </div>

        <button type="button" className="carousel-prev">
          <span className="size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow">
            <span className="icon-[tabler--chevron-left] size-5 cursor-pointer rtl:rotate-180"></span>
          </span>
          <span className="sr-only">Previous</span>
        </button>
        <button type="button" className="carousel-next">
          <span className="sr-only">Next</span>
          <span className="size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow">
            <span className="icon-[tabler--chevron-right] size-5 cursor-pointer rtl:rotate-180"></span>
          </span>
        </button>
      </div>
    </section>
  )
}

export default Theysay
