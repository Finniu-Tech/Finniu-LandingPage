import Image, { StaticImageData } from "next/image"
import ButtonLinkIcon from "@/app/(new-landing)/components/ButtonLinkIcon"
import ArrowUpLeft from "@/app/(new-landing)/Home/Invest/images/icons/ArrowUpLeft"

interface Props {
  imgSrc: StaticImageData,
  imgAlt: string,
  title: string,
  link: string,
}

const CardNote = ({imgSrc, imgAlt, title, link}:Props) => {
  return (
    <div className="max-w-sm h-full rounded-3xl border-[1px] border-solid bg-white border-whiteSecondary flex flex-col justify-between items-start shadow-sm">
      <Image src={imgSrc} alt={imgAlt} className="rounded-t-3xl"/>
      <div className="h-full flex flex-col justify-start items-start p-6">
        <h4 className="text-xl md:text-2xl">
          {title}
        </h4>
        <ButtonLinkIcon href={link} icon={<ArrowUpLeft />} text="Ver más" className="text-lg mt-4 flex gap-2 justify-center items-center text-purplePrincipal bg-transparent"/>
      </div>
    </div>
  )
}

export default CardNote