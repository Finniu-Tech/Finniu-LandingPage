import Image from "next/image"
import ButtonLinkIcon from "@/app/(new-landing)/components/ButtonLinkIcon"
import ArrowUpLeft from "@/app/(new-landing)/Home/Invest/images/icons/ArrowUpLeft"
import LlamaCool from "@/app/(new-landing)/Home/Invest/images/Llama.webp"
import LlamaCoolMobile from "@/app/(new-landing)/Home/Invest/images/LlamaCoolMobile.webp"
import Background02 from "@/app/(new-landing)/images/backgrounds/background02.png"
import LogoEmprelatam from "@/app/(new-landing)/Home/Whoweare/images/logos/emprelatam.webp"
import LogoIncubagraria from "@/app/(new-landing)/Home/Whoweare/images/logos/incubagraria.webp"
import LogoInnovaul from "@/app/(new-landing)/Home/Whoweare/images/logos/innovaul.webp"
import LogoInversionsimple from "@/app/(new-landing)/Home/Whoweare/images/logos/inversionsimple.webp"

const Partners = () => {
  return (
    <section
      className="pt-10 md:pt-40 pb-10 md:pb-0 px-8 md:px-0 text-white w-full flex flex-col justify-center items-center relative"
      style={{ backgroundImage: `url(${Background02.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <section className="w-full flex flex-col justify-center items-center gap-10 md:gap-20">
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-20">
          <h3 className="text-4xl w-full text-center md:text-start md:w-[25rem] md:text-7xl">
            Socios Estratégicos
          </h3>
          <p className="text-lg w-full md:w-[30rem] text-center md:text-start">
            En Finniu, trabajamos junto a organizaciones que comparten nuestra visión de facilitar el acceso a oportunidades de colocación privada. Su experiencia y respaldo fortalecen nuestro compromiso de ofrecer procesos estructurados, seguros y transparentes para quienes desean canalizar su capital con propósito.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
          <Image src={LogoInnovaul} alt="Logo de Innovaul" className="w-40" />
          <Image src={LogoIncubagraria} alt="Logo de Incubagraria" className="w-40" />
          <Image src={LogoEmprelatam} alt="Logo de Emprelatam" className="w-40" />
          <Image src={LogoInversionsimple} alt="Logo de Inversiones Simple" className="w-40" />
        </div>
      </section>
      <section className="pt-10 md:pt-40 px-0 md:px-80 w-full flex justify-between items-center">
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
      </section>
    </section>
  )
}

export default Partners