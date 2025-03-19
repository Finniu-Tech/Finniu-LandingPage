import Image, { StaticImageData } from "next/image"

interface Props {
  imgSrc: StaticImageData,
  imgAlt: string,
  title: string,
  phrase: string,
  name: string,
  occupation: string
}

const CardPerson = ({imgSrc, imgAlt, title, phrase, name, occupation}:Props) => {
  return (
    <div className="max-w-sm h-full rounded-3xl border-[1px] border-solid bg-white border-whiteSecondary px-8 py-6 flex flex-col justify-between items-start">
      <div className="w-full flex flex-col items-start">
        <Image src={imgSrc} alt={imgAlt} className="w-14" />
        <h4 className="text-lg font-bold mt-4">
          “{title}”
        </h4>
        <p className="mt-2">
          {phrase}
        </p>
      </div>
      <div className="w-full flex flex-col items-start border-t-[1px] border-solid border-whiteSecondary mt-4 pt-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <h5>{occupation}</h5>
      </div>
    </div>
  )
}

export default CardPerson