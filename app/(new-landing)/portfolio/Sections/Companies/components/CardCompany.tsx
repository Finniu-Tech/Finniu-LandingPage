import Image, { StaticImageData } from "next/image"

interface Props {
  imgSrc: StaticImageData,
  imgAlt: string,
  title: string,
  phrase: string,
  enterprise: string,
  ruc: string
}

const CardCompany = ({imgSrc, imgAlt, title, phrase, enterprise, ruc}:Props) => {
  return (
    <div className="max-w-sm h-full rounded-3xl border-[1px] border-solid bg-white border-whiteSecondary px-8 py-6 flex flex-col justify-between items-start">
      <div className="w-full flex flex-col items-start">
        <Image src={imgSrc} alt={imgAlt} className="h-full" />
        <h4 className="text-2xl font-bold mt-4">
          {title}
        </h4>
        <p className="mt-2">
          {phrase}
        </p>
      </div>
      <div className="w-full flex flex-col items-start  mt-4 pt-4">
        <h3 className="text-lg font-bold">{enterprise}</h3>
        <h5>{ruc}</h5>
      </div>
    </div>
  )
}

export default CardCompany