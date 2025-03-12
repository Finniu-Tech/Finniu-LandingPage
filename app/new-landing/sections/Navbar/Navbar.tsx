import Image from "next/image"
import LogoFinniu from "@/images/NavBar/LogoFinniu.png"
import ButtonLink from "@/app/new-landing/components/ButtonLink"

const Navbar = () => {
  return (
    <header className="bg-black border-b-[0.5px] border-solid flex items-center h-20 px-10">
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