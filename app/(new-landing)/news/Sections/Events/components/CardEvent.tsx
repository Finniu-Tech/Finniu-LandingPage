import Image, { StaticImageData } from "next/image"
import Background from "@/app/(new-landing)/portfolio/Sections/Optimization/images/backgrounds/background.png"
import ButtonLinkIcon from "@/app/(new-landing)/components/ButtonLinkIcon"
import ArrowUpLeft from "@/app/(new-landing)/Home/Invest/images/icons/ArrowUpLeft"

interface Props {
  imgSrc: StaticImageData,
  imgAlt: string,
  title: string,
  phrase: string,
}

const CardEvent = ({imgSrc, imgAlt, title, phrase} : Props) => {
  return (
    <div
      className="w-full h-full flex flex-col md:flex-row justify-center items-center rounded-3xl text-white"
      style={{ backgroundImage: `url(${Background.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="w-full h-full md:w-[1800px]">
        <Image src={imgSrc} alt={imgAlt} className="h-full rounded-t-3xl md:rounded-none md:rounded-l-3xl" />
      </div>
      <div className="p-10 md:px-10 flex flex-col gap-4 items-center md:items-start justify-center">
        <h4 className=" text-3xl md:text-4xl">
          {title}
        </h4>
        <p className="text-lg md:text-xl">
          {phrase}
        </p>
        {/* <ButtonLinkIcon href="#" icon={<ArrowUpLeft />} text="Ver más fotos" className="w-full md:w-fit mt-2 flex gap-2 justify-center items-center text-purplePrincipal py-4 px-6 rounded-full bg-white hover:bg-purplePrincipal hover:text-white transition duration-150 ease"/> */}
      </div>
    </div>
  )
}

export default CardEvent