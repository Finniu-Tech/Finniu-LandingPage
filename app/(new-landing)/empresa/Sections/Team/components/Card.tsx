"use client"

import { useState } from "react"
import ArrowRight from "@/app/(new-landing)/Home/Theysay/images/icons/ArrowRight"
import ArrowLeft from "@/app/(new-landing)/Home/Theysay/images/icons/ArrowLeft"
import Image, { StaticImageData } from "next/image"
import Background01 from "@/app/(new-landing)/images/backgrounds/background01.png"

interface Props {
  imgSrc: StaticImageData,
  imgAlt: string,
  name: string,
  position: string,
  phrase: string,
}

const Card = ({ imgSrc, imgAlt, name, position, phrase }: Props) => {
  const [flip, setFlip] = useState(false)
  const handleSetFlip = () => {
    setFlip(!flip)
  }

  return (
    <div className="max-w-sm h-full rounded-3xl border-[1px] border-solid bg-white border-whiteSecondary flex flex-col justify-between items-start shadow-sm overflow-hidden">
      <div className="relative w-full h-full md:h-[382px] rounded-t-3xl overflow-hidden">
        {/* Parte con frase */}
        <div className={`
          absolute inset-0 flex items-center justify-center text-center p-6 rounded-t-3xl
          bg-cover bg-center transition-all duration-500 ease-in-out
          ${flip ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
        `}
          style={{ backgroundImage: `url(${Background01.src})` }}
        >
          <p className="text-lg text-white">{phrase}</p>
        </div>

        {/* Imagen (parte frontal) */}
        <Image
          src={imgSrc}
          alt={imgAlt}
          className={`
            rounded-t-3xl w-full h-full object-cover transition-all duration-500 ease-in-out
            ${flip ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}
          `}
        />
      </div>

      <div className="w-full flex justify-between items-center p-6">
        <div className="flex flex-col justify-center items-start">
          <h4 className="text-xl md:text-2xl font-bold">{name}</h4>
          <h5 className="text-lg">{position}</h5>
        </div>
        <button
          onClick={handleSetFlip}
          className="flex items-center justify-center size-14 bg-purplePrincipal rounded-full text-white border-[1px] border-purplePrincipal hover:bg-white hover:text-purplePrincipal transition duration-150 ease"
        >
          {flip ? <ArrowLeft /> : <ArrowRight />}
        </button>
      </div>
    </div>
  )
}

export default Card
