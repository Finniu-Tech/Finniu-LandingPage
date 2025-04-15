import Image, { StaticImageData } from "next/image"

interface Props {
  imgSrc: StaticImageData,
  imgAlt: string
  title: string,
  phrase: string,
}

const CardInvest = ({imgSrc, imgAlt, title, phrase} : Props) => {
  return (
    <div className="max-w-lg h-full rounded-3xl border-[1px] border-solid bg-white border-whiteSecondary px-8 py-6 flex flex-col justify-between items-start">
      <div className="w-full flex flex-col items-start gap-2">
        <div className="flex flex-row gap-4 items-center md:flex-col md:items-start">
          <div>
            <Image src={imgSrc} alt={imgAlt} className="w-full" />
          </div>
          <h4 className="text-xl md:text-2xl font-bold">
            {title}
          </h4>
        </div>
        <p className="text-lg">
          {phrase}
        </p>
      </div>
    </div>
  )
}

export default CardInvest