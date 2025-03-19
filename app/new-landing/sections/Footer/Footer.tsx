import Image from "next/image"
import ButtonLink from "@/app/new-landing/components/ButtonLink"
import ButtonLinkIcon from "@/app/new-landing/components/ButtonLinkIcon"
import LogoFinniu from "@/app/new-landing/images/logos/LogoFinniuLigth.svg"
import Instagram from "@/app/new-landing/sections/Footer/images/icons/Instagram"
import LinkendIn from "@/app/new-landing/sections/Footer/images/icons/LinkendIn"
import Tiktok from "@/app/new-landing/sections/Footer/images/icons/Tiktok"
import Youtube from "@/app/new-landing/sections/Footer/images/icons/Youtube"
import Mappin from "@/app/new-landing/sections/Footer/images/icons/Mappin"
import Phone from "@/app/new-landing/sections/Footer/images/icons/Phone"
import Mail from "@/app/new-landing/sections/Footer/images/icons/Mail"
import AppStore from "@/app/new-landing/sections/Footer/images/logos/AppStoreLigth.svg"
import GooglePlay from "@/app/new-landing/sections/Footer/images/logos/GooglePlayLigth.svg"

const Footer = () => {
  return (
    <footer className="bg-black px-8 md:px-40 py-8 flex flex-col justify-center items-center w-full">
      <div className="w-full text-white pb-8 grid grid-cols-2 gap-y-10 gap-x-4 md:gap-0 md:flex justify-between items-start border-b-[1px] border-solid border-gray-700">
        <nav className="flex flex-col gap-4">
          <h4 className="font-semibold text-lg">Acerca de</h4>
          <ul className="flex flex-col justify-center items-start gap-4">
            <li>
              <ButtonLink href="#" text="Blog" className="text-gray-400 hover:text-white transition duration-150 ease"/>
            </li>
            <li>
              <ButtonLink href="#" text="Preguntas frecuentes" className="text-gray-400 hover:text-white transition duration-150 ease"/>
            </li>
            <li>
              <ButtonLink href="#" text="Compara" className="text-gray-400 hover:text-white transition duration-150 ease"/>
            </li>
            <li>
              <ButtonLink href="#" text="Simulador" className="text-gray-400 hover:text-white transition duration-150 ease"/>
            </li>
            <li>
              <ButtonLink href="#" text="La mejor tasa" className="text-gray-400 hover:text-white transition duration-150 ease"/>
            </li>
          </ul>
        </nav>
        <nav className="flex flex-col gap-4">
          <h4 className="font-semibold text-lg">Nosotros</h4>
          <ul className="flex flex-col justify-center items-start gap-4">
            <li>
              <ButtonLink href="#" text="La empresa" className="text-gray-400 hover:text-white transition duration-150 ease"/>
            </li>
            <li>
              <ButtonLink href="#" text="Portafolio" className="text-gray-400 hover:text-white transition duration-150 ease"/>
            </li>
            <li>
              <ButtonLink href="#" text="Transparencia" className="text-gray-400 hover:text-white transition duration-150 ease"/>
            </li>
          </ul>
        </nav>
        <nav className="flex flex-col gap-4">
          <h4 className="font-semibold text-lg">Producto</h4>
          <ul className="flex flex-col justify-center items-start gap-4">
            <li>
              <ButtonLink href="#" text="Fondo a plazo fijo" className="text-gray-400 hover:text-white transition duration-150 ease"/>
            </li>
          </ul>
        </nav>
        <nav className="flex flex-col gap-4">
          <h4 className="font-semibold text-lg">Legal</h4>
          <ul className="flex flex-col justify-center items-start gap-4">
            <li>
              <ButtonLink href="#" text="Términos de servicio" className="text-gray-400 hover:text-white transition duration-150 ease"/>
            </li>
            <li>
              <ButtonLink href="#" text="Política de privacidad" className="text-gray-400 hover:text-white transition duration-150 ease"/>
            </li>
          </ul>
        </nav>
        <nav className="flex flex-col gap-4">
          <h4 className="font-semibold text-lg">Contactos</h4>
          <ul className="flex flex-col justify-center items-start gap-4">
            <li className="flex items-center gap-2">
              <Mappin />
              <ButtonLink href="#" text="Términos de servicio" className="text-gray-400 hover:text-white transition duration-150 ease"/>
            </li>
            <li className="flex items-center gap-2">
              <Phone />
              <ButtonLink href="#" text="+51 983 796 139" className="text-gray-400 hover:text-white transition duration-150 ease"/>
            </li>
            <li className="flex items-center gap-2">
              <Mail />
              <ButtonLink href="#" text="hola@finniu.com" className="text-gray-400 hover:text-white transition duration-150 ease"/>
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-full flex flex-row gap-8 md:gap-0 md:flex-row pt-8 justify-between items-center">
        <Image src={LogoFinniu} alt="Logo de Finniu" className="w-20"/>
        <div className="flex justify-center items-center gap-8">
          <div className="flex justify-center items-center gap-4">
            <ButtonLinkIcon href="#" icon={<Youtube />} className="text-gray-400 hover:text-white transition duration-150 ease"/>
            <ButtonLinkIcon href="#" icon={<Instagram />} className="text-gray-400 hover:text-white transition duration-150 ease"/>
            <ButtonLinkIcon href="#" icon={<LinkendIn />} className="text-gray-400 hover:text-white transition duration-150 ease"/>
            <ButtonLinkIcon href="#" icon={<Tiktok />} className="text-gray-400 hover:text-white transition duration-150 ease"/>
          </div>
          <div className="hidden md:flex justify-center items-center gap-4">
            <ButtonLinkIcon href="#" icon={<Image src={AppStore} alt="Logo App Store"/>} className="w-full"/>
            <ButtonLinkIcon href="#" icon={<Image src={GooglePlay} alt="Logo GooglePlay"/>} className="w-full"/>
          </div>
        </div>
      </div>
      <div className="mt-8 w-full flex sm:hidden justify-between items-center gap-4">
        <ButtonLinkIcon href="#" icon={<Image className="w-full" src={AppStore} alt="Logo App Store"/>} className="w-full"/>
        <ButtonLinkIcon href="#" icon={<Image className="w-full" src={GooglePlay} alt="Logo GooglePlay"/>} className="w-full"/>
      </div>
    </footer>
  )
}

export default Footer