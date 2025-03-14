import Image from "next/image"
import ButtonLink from "@/app/new-landing/components/ButtonLink"
import LogoFinniu from "@/app/new-landing/images/logos/LogoFinniuLigth.svg"

const Navbar = () => {
  return (
    <header className="fixed z-10 w-full h-20 px-10 bg-black border-b-[1px] border-solid border-gray-700 flex items-center">
      <Image src={LogoFinniu} alt="Logo de Finniu" className="w-20"/>
      <nav className="w-full flex justify-between items-center pl-10">
        <ul className="text-white flex items-center gap-16">
          <li>Home</li>
          <li>Nosotros</li>
          <li>Productos</li>
          <li>Transparencia</li>
          <li>Compara</li>
          <li>Contacto</li>
        </ul>
        <ul className="flex justify-center items-center gap-4">
          <ButtonLink href="#" text="Ingresar" className="text-black py-4 px-6 rounded-full bg-white"/>
          <ButtonLink href="#" text="Crear cuenta" className="text-white py-4 px-6 rounded-full bg-purplePrincipal"/>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar