import Image from "next/image"
import ButtonLink from "@/app/(new-landing)/components/ButtonLink"
import ButtonLinkIcon from "@/app/(new-landing)/components/ButtonLinkIcon"
import LogoFinniu from "@/app/(new-landing)/images/logos/LogoFinniuLigth.svg"
import Instagram from "@/app/(new-landing)/Footer/images/icons/Instagram"
import LinkendIn from "@/app/(new-landing)/Footer/images/icons/LinkendIn"
import Tiktok from "@/app/(new-landing)/Footer/images/icons/Tiktok"
import Youtube from "@/app/(new-landing)/Footer/images/icons/Youtube"
import Mappin from "@/app/(new-landing)/Footer/images/icons/Mappin"
import Phone from "@/app/(new-landing)/Footer/images/icons/Phone"
import Mail from "@/app/(new-landing)/Footer/images/icons/Mail"
import AppStore from "@/app/(new-landing)/Footer/images/logos/AppStoreLigth.svg"
import GooglePlay from "@/app/(new-landing)/Footer/images/logos/GooglePlayLigth.svg"

const Footer = () => {
  return (
    <footer className="bg-black px-8 md:px-20 xxxl:px-40 py-8 flex flex-col justify-center items-center w-full">
      <div className="w-full text-white pb-8 grid grid-cols-2 gap-y-10 gap-x-4 md:gap-0 md:flex justify-between items-start border-b-[1px] border-solid border-gray-700">
        <nav className="flex flex-col gap-4">
          <h4 className="font-semibold text-lg">Acerca de</h4>
          <ul className="flex flex-col justify-center items-start gap-4">
            <li>
              <ButtonLink href="https://blog.finniu.com" text="Blog" className="text-gray-400 hover:text-white transition duration-150 ease"/>
            </li>
            <li>
              <ButtonLink href="/#questions" text="Preguntas frecuentes" className="text-gray-400 hover:text-white transition duration-150 ease"/>
            </li>
            <li>
              <ButtonLink href="/transparency" text="Transparencia" className="text-gray-400 hover:text-white transition duration-150 ease"/>
            </li>
            <li>
              <ButtonLink href="/" text="Contacto" className="text-gray-400 hover:text-white transition duration-150 ease"/>
            </li>
            <li>
              <ButtonLink href="/" text="Ayuda" className="text-gray-400 hover:text-white transition duration-150 ease"/>
            </li>
          </ul>
        </nav>
        <nav className="flex flex-col gap-4">
          <h4 className="font-semibold text-lg">Nosotros</h4>
          <ul className="flex flex-col justify-center items-start gap-4">
            <li>
              <ButtonLink href="/about" text="La empresa" className="text-gray-400 hover:text-white transition duration-150 ease"/>
            </li>
            <li>
              <ButtonLink href="/portfolio" text="Portafolio" className="text-gray-400 hover:text-white transition duration-150 ease"/>
            </li>
            <li>
              <ButtonLink href="/news" text="Noticias y Eventos" className="text-gray-400 hover:text-white transition duration-150 ease"/>
            </li>
          </ul>
        </nav>
        <nav className="flex flex-col gap-4">
          <h4 className="font-semibold text-lg">Producto</h4>
          <ul className="flex flex-col justify-center items-start gap-4">
            <li>
              <ButtonLink href="/invest" text="Fondo a plazo fijo" className="text-gray-400 hover:text-white transition duration-150 ease"/>
            </li>
          </ul>
        </nav>
        <nav className="flex flex-col gap-4">
          <h4 className="font-semibold text-lg">Compara</h4>
          <ul className="flex flex-col justify-center items-start gap-4">
            <li>
              <ButtonLink href="#" text="Simulador" className="text-gray-400 hover:text-white transition duration-150 ease"/>
            </li>
            <li>
              <ButtonLink href="#" text="La mejor tasa" className="text-gray-400 hover:text-white transition duration-150 ease"/>
            </li>
          </ul>
        </nav>
        <nav className="flex flex-col gap-4">
          <h4 className="font-semibold text-lg">Legal</h4>
          <ul className="flex flex-col justify-center items-start gap-4">
            <li>
              <ButtonLink href="#" text="Términos & Condiciones" className="text-gray-400 hover:text-white transition duration-150 ease"/>
            </li>
            <li>
              <ButtonLink href="#" text="Política & privacidad" className="text-gray-400 hover:text-white transition duration-150 ease"/>
            </li>
          </ul>
        </nav>
        <nav className="flex flex-col gap-4">
          <h4 className="font-semibold text-lg">Contactos</h4>
          <ul className="flex flex-col justify-center items-start gap-4">
            <li className="flex items-start gap-2">
              <div>
                <Mappin />
              </div>
              <ButtonLink href="https://www.google.com/maps/place/Finniu/@-12.090882,-76.9979061,18z/data=!4m6!3m5!1s0x9105c7c6dd9c6801:0x32bb4f0eff87fa1f!8m2!3d-12.0910965!4d-76.9961964!16s%2Fg%2F11wxl5x3hl?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D" text="Av. San Luis 2076, San Borja, Lima - Perú" className="text-gray-400 hover:text-white transition duration-150 ease"/>
            </li>
            <li className="flex items-center gap-2">
              <Phone />
              <ButtonLink href="https://api.whatsapp.com/send?phone=51983796139&text=Hola!%20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20info%20sobre%20Finniu.%20Mi%20nombre%20es%20" text="+51 983 796 139" className="text-gray-400 hover:text-white transition duration-150 ease"/>
            </li>
            <li className="flex items-center gap-2">
              <Mail />
              <ButtonLink href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=hola@finniu.com" text="hola@finniu.com" className="text-gray-400 hover:text-white transition duration-150 ease"/>
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-full flex flex-row gap-8 md:gap-0 md:flex-row pt-8 justify-between items-center">
        <Image src={LogoFinniu} alt="Logo de Finniu" className="w-20"/>
        <div className="flex justify-center items-center gap-8">
          <div className="flex justify-center items-center gap-4">
            <ButtonLinkIcon href="https://www.youtube.com/channel/UCgVwc69xSrUxicjf3VIJpig" icon={<Youtube />} className="text-gray-400 hover:text-white transition duration-150 ease"/>
            <ButtonLinkIcon href="https://www.instagram.com/finniu.app/" icon={<Instagram />} className="text-gray-400 hover:text-white transition duration-150 ease"/>
            <ButtonLinkIcon href="https://www.linkedin.com/company/finniu/" icon={<LinkendIn />} className="text-gray-400 hover:text-white transition duration-150 ease"/>
            <ButtonLinkIcon href="https://www.tiktok.com/@finniu.app" icon={<Tiktok />} className="text-gray-400 hover:text-white transition duration-150 ease"/>
          </div>
          <div className="hidden md:flex justify-center items-center gap-4">
            <ButtonLinkIcon href="https://apps.apple.com/pe/app/finniu/id6449205870" icon={<Image src={AppStore} alt="Logo App Store"/>} className="w-full"/>
            <ButtonLinkIcon href="https://play.google.com/store/apps/details?id=com.finniu&hl=es_PE" icon={<Image src={GooglePlay} alt="Logo GooglePlay"/>} className="w-full"/>
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