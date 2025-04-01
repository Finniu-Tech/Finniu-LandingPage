import CardPerson from "@/app/(new-landing)/Home/Theysay/components/CardPerson"
import PERSONS from "@/app/(new-landing)/Home/Theysay/helper/persons"
import ArrowLeft from "@/app/(new-landing)/Home/Theysay/images/icons/ArrowLeft"
import ArrowRight from "@/app/(new-landing)/Home/Theysay/images/icons/ArrowRight"


const Theysay = () => {
  return (
    <section className="py-10 pb-24 md:py-40 px-8 md:px-40 xxxl:px-80 z-10 md:z-0 w-full flex items-start justify-center bg-whitePrimary text-black ">
      <div
        id="multi-slide"
        data-carousel='{ "loadingClasses": "opacity-0", "isInfiniteLoop": true, "isDraggable": true, "isAutoPlay": true, "speed": 2000, "slidesQty": { "xs": 1, "lg": 3 } }'
        className="relative w-full"
      >
        <div className="flex flex-col text-center md:text-start items-center md:items-start gap-2 md:gap-4 mb-4 md:mb-6">
          <h3 className="text-4xl md:text-6xl">¿Qué dicen de Finniu?</h3>
          <h3 className="text-lg md:text-2xl">Ellos lograron sus metas, ahora te toca a ti</h3>
          <div className="absolute w-[12rem] md:w-48 bottom-0 md:top-5 md:right-9">
            <button className="carousel-prev size-14 bg-purplePrincipal rounded-full text-white border-solid border-[1px] border-purplePrincipal hover:bg-white hover:text-purplePrincipal hover:border-solid hover:border-[1px] hover:border-purplePrincipal transition duration-150 ease ">
              <ArrowLeft />
            </button>
            <button className="carousel-next size-14 bg-purplePrincipal rounded-full text-white border-solid border-[1px] border-purplePrincipal hover:bg-white hover:text-purplePrincipal hover:border-solid hover:border-[1px] hover:border-purplePrincipal transition duration-150 ease ">
              <ArrowRight />
            </button>
          </div>
        </div>
        <div className="carousel h-auto mb-4 md:mb-0">
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
