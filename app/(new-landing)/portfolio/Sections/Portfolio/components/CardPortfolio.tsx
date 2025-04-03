import Image, { StaticImageData } from "next/image"

interface Props {
  imgSrc: StaticImageData,
  imgAlt: string
}

const CardPortfolio = ({imgSrc, imgAlt}:Props) => {
  return (
    <div className="w-full md:w-60 h-40 rounded-3xl border-[1px] border-solid bg-white border-whiteSecondary px-8 py-6 flex justify-center items-center">
        <Image src={imgSrc} alt={imgAlt} className="w-fit h-fit" />
    </div>
  )
}

export default CardPortfolio