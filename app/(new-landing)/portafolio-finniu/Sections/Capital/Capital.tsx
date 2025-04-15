import Image from "next/image"
import ButtonLinkIcon from "@/app/(new-landing)/components/ButtonLinkIcon"
import ArrowUpLeft from "@/app/(new-landing)/Home/Invest/images/icons/ArrowUpLeft"
import LlamaCool from "@/app/(new-landing)/Home/Invest/images/Llama.webp"
import LlamaCoolMobile from "@/app/(new-landing)/Home/Invest/images/LlamaCoolMobile.webp"
import Background02 from "@/app/(new-landing)/images/backgrounds/background02.png"

const Capital = () => {
  return (
    <section
      className="pt-10 md:pt-20 pb-10 md:pb-0 px-8 md:px-0 text-white w-full flex flex-col justify-center items-center relative"
      style={{ backgroundImage: `url(${Background02.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="pt-10 md:pt-0 px-0 md:px-80 w-full flex justify-between items-center">
        <div className="w-[70%] md:w-[30rem] flex flex-col justify-center items-start gap-4 md:gap-6">
          <h3 className="text-white text-[2.50rem] md:text-6xl leading-none md:leading-tight">
            Haz crecer tu capital con confianza
          </h3>
          <p className="text-white">
            En Finniu, operamos con <span className="font-bold">exigentes estándares de seguridad</span>, con procesos diseñados para proteger cada paso de tu operación.
          </p>
          <ButtonLinkIcon href="#" icon={<ArrowUpLeft />} text="Agendar videollamada" className="mt-4 flex gap-2 justify-center items-center text-white py-4 px-6 rounded-full bg-purplePrincipal hover:bg-white hover:text-purplePrincipal transition duration-150 ease"/>
        </div>
        <div className="hidden md:flex w-[30rem] -right-[11rem] -bottom-6">
          <Image src={LlamaCool} alt="Llama Cool" className="w-full" />
        </div>
        <div className="absolute sm:hidden w-40 right-0 -bottom-0">
          <Image src={LlamaCoolMobile} alt="Llama Cool Mobile" className="w-full"/>
        </div>
      </div>
    </section>
  )
}

export default Capital