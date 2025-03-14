import Image from "next/image"
import ButtonLink from "@/app/new-landing/components/ButtonLink"
import ButtonLinkIcon from "@/app/new-landing/components/ButtonLinkIcon"
import LogoFinniu from "@/app/new-landing/images/logos/LogoFinniuLigth.svg"
import Instagram from "@/app/new-landing/sections/Footer/images/icons/Instagram"
import LinkendIn from "@/app/new-landing/sections/Footer/images/icons/LinkendIn"
import Tiktok from "@/app/new-landing/sections/Footer/images/icons/Tiktok"
import Youtube from "@/app/new-landing/sections/Footer/images/icons/Youtube"
import AppStore from "@/app/new-landing/sections/Footer/images/logos/AppStoreLigth.svg"
import GooglePlay from "@/app/new-landing/sections/Footer/images/logos/GooglePlayLigth.svg"

const Footer = () => {
  return (
    <footer className="bg-black py-8 flex flex-col justify-center items-center w-full">
      <div className="w-full text-white pb-8 flex justify-between items-center border-b-[1px] border-solid border-gray-700">
        <nav>
          <h4>Acerca de</h4>
          <ul>
            <li>
              <ButtonLink href="#" text="Blog" className=""/>
            </li>
            <li>
              <ButtonLink href="#" text="Preguntas frecuentes" className=""/>
            </li>
            <li>
              <ButtonLink href="#" text="Compara" className=""/>
            </li>
            <li>
              <ButtonLink href="#" text="Simulador" className=""/>
            </li>
            <li>
              <ButtonLink href="#" text="La mejor tasa" className=""/>
            </li>
          </ul>
        </nav>
        <nav>
          <h4>Nosotros</h4>
          <ul>
            <li>
              <ButtonLink href="#" text="La empresa" className=""/>
            </li>
            <li>
              <ButtonLink href="#" text="Portafolio" className=""/>
            </li>
            <li>
              <ButtonLink href="#" text="Transparencia" className=""/>
            </li>
          </ul>
        </nav>
        <nav>
          <h4>Producto</h4>
          <ul>
            <li>
              <ButtonLink href="#" text="Fondo a plazo fijo" className=""/>
            </li>
          </ul>
        </nav>
        <nav>
          <h4>Legal</h4>
          <ul>
            <li>
              <ButtonLink href="#" text="Términos de servicio" className=""/>
            </li>
            <li>
              <ButtonLink href="#" text="Política de privacidad" className=""/>
            </li>
          </ul>
        </nav>
        <nav>
          <h4>Contactos</h4>
          <ul>
            <li>
              <ButtonLink href="#" text="Términos de servicio" className=""/>
            </li>
            <li>
              <ButtonLink href="#" text="+51 983 796 139" className=""/>
            </li>
            <li>
              <ButtonLink href="#" text="hola@finniu.com" className=""/>
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-full flex pt-8 justify-between items-center">
        <Image src={LogoFinniu} alt="Logo de Finniu" className="w-20"/>
        <div className="flex justify-center items-center gap-8">
          <div className="flex justify-center items-center gap-4">
            <ButtonLinkIcon href="#" icon={<Youtube />} className="text-white"/>
            <ButtonLinkIcon href="#" icon={<Instagram />} className="text-white"/>
            <ButtonLinkIcon href="#" icon={<LinkendIn />} className="text-white"/>
            <ButtonLinkIcon href="#" icon={<Tiktok />} className="text-white"/>
          </div>
          <div className="flex justify-center items-center gap-4">
            <ButtonLinkIcon href="#" icon={<Image src={AppStore} alt="Logo App Store"/>} className=""/>
            <ButtonLinkIcon href="#" icon={<Image src={GooglePlay} alt="Logo GooglePlay"/>} className=""/>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer