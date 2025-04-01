"use client"

import { useState } from "react"
import ArrowRight from "@/app/(new-landing)/Home/Theysay/images/icons/ArrowRight"
import Image, { StaticImageData } from "next/image"

interface Props {
  imgSrc: StaticImageData,
  imgAlt: string,
  name: string,
  position: string,
  phrase: string,
}

const Card = ({imgSrc, imgAlt, name, position, phrase} : Props) => {
  const [flip, setFlip] = useState(false)
  const handleSetFlip = () => {
    setFlip(false)
  }
 
  return (
    <div className="flip-card max-w-sm h-full rounded-3xl border-[1px] border-solid bg-white border-whiteSecondary flex flex-col justify-between items-start shadow-sm">
      <Image src={imgSrc} alt={imgAlt} className="rounded-t-3xl"/>
      <div className="w-full h-full flex justify-between items-center px-6 py-6">
        <div className="h-full flex flex-col justify-center items-start">
          <h4 className="text-xl md:text-2xl font-bold">
            {name}
          </h4>
          <h5 className="text-lg">
            {position}
          </h5>
        </div>
        <button
          className="flex items-center justify-center size-14 bg-purplePrincipal rounded-full text-white border-solid border-[1px] border-purplePrincipal hover:bg-white hover:text-purplePrincipal hover:border-solid hover:border-[1px] hover:border-purplePrincipal transition duration-150 ease"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  )
}

export default Card