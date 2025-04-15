import COMPANIESENTOGREEN from "@/app/(new-landing)/portafolio-finniu/Sections/Portfolio/helper/companiesEntoGreen"
import { StaticImageData } from "next/image"

interface Props {
  arrowLeft: JSX.Element,
  arrowRight: JSX.Element
  cardPortfolio: (props: { imgSrc: StaticImageData; imgAlt: string }) => JSX.Element
}

const SliderEntoGreen = ({arrowLeft, arrowRight, cardPortfolio}:Props) => {
  return (
    <div
      id="multi-slide"
      data-carousel='{ "loadingClasses": "opacity-0", "isInfiniteLoop": true, "isDraggable": true, "isAutoPlay": true, "speed": 4000, "slidesQty": { "xs": 1, "lg": 3 } }'
      className="relative w-full"
    >
      <div className="flex flex-col text-center md:text-start items-center md:items-start gap-2 md:gap-4 mb-4 md:mb-10">
        <h3
          className="text-4xl md:text-6xl font-semibold"
          style={{
            background: "linear-gradient(261.81deg, #00FF91 -8.01%, #9A00FF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Nuestros Clientes: Ento Green
        </h3>
        <div className="absolute w-[12rem] md:hidden bottom-0 md:top-0 md:right-9">
          <button className="carousel-prev size-14 bg-purplePrincipal rounded-full text-white border-solid border-[1px] border-purplePrincipal hover:bg-white hover:text-purplePrincipal hover:border-solid hover:border-[1px] hover:border-purplePrincipal transition duration-150 ease ">
            {arrowLeft}
          </button>
          <button className="carousel-next size-14 bg-purplePrincipal rounded-full text-white border-solid border-[1px] border-purplePrincipal hover:bg-white hover:text-purplePrincipal hover:border-solid hover:border-[1px] hover:border-purplePrincipal transition duration-150 ease ">
            {arrowRight}
          </button>
        </div>
      </div>
      <div className="carousel h-auto mb-4 md:mb-0">
        <div className="carousel-body px-0 py-2 h-full">
          {COMPANIESENTOGREEN.map((company, index) => (
            <div key={index} className="carousel-slide">
              {cardPortfolio({ imgSrc: company.imgSrc, imgAlt: company.imgAlt })}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SliderEntoGreen