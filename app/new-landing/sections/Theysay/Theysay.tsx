import CardPerson from "@/app/new-landing/sections/Theysay/components/CardPerson"
import PERSONS from "@/app/new-landing/sections/Theysay/helper/persons"
import ArrowLeft from "@/app/new-landing/sections/Theysay/images/icons/ArrowLeft"
import ArrowRight from "@/app/new-landing/sections/Theysay/images/icons/ArrowRight"


const Theysay = () => {
  return (
    <section className="py-40 px-80 w-full flex items-start justify-center bg-whitePrimary text-black ">
      <div
        id="multi-slide"
        data-carousel='{ "loadingClasses": "opacity-0", "isInfiniteLoop": true, "isDraggable": true, "isAutoPlay": true, "speed": 2000, "slidesQty": { "xs": 1, "lg": 3 } }'
        className="relative w-full"
      >
        <div className="flex flex-col items-start gap-4 mb-6">
          <h3 className="text-6xl">¿Qué dicen de Finniu?</h3>
          <h3 className="text-2xl">Ellos lograron sus metas, ahora te toca a ti</h3>
          
          <div className="absolute w-48 top-5 right-9">
            <button className="carousel-prev size-20 bg-purplePrincipal rounded-full text-white hover:text-white">
              <ArrowLeft />
            </button>
            <button className="carousel-next size-20 bg-purplePrincipal rounded-full text-white hover:text-white">
              <ArrowRight />
            </button>
          </div>
        </div>

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
      </div>
    </section>
  )
}

export default Theysay
