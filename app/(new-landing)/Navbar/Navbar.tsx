"use client"

import Image from "next/image"
import ButtonLink from "@/app/(new-landing)/components/ButtonLink"
import LogoFinniu from "@/app/(new-landing)/images/logos/LogoFinniuLigth.svg"
import LogoFinniuBlue from "@/app/(new-landing)/images/logos/LogoFinniuBlue.svg"
import Link from "next/link"
import Like from "@/app/(new-landing)/Navbar/images/icons/Like"
import News from "@/app/(new-landing)/Navbar/images/icons/News"
import Portfolio from "@/app/(new-landing)/Navbar/images/icons/Portfolio"
import Desktop from "@/app/(new-landing)/Navbar/images/icons/Desktop"
import Bar from "@/app/(new-landing)/Navbar/images/icons/Bar"
import Pie from "@/app/(new-landing)/Navbar/images/icons/Pie"
import Burger from "@/app/(new-landing)/Navbar/images/icons/Burger"
import X from "@/app/(new-landing)/Navbar/images/icons/X"
import { useEffect } from "react"

const NavBar = () => {
  useEffect(() => {
    const overlay = document.getElementById("overlay-navigation-example")
  
    const handleOverlayLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest("a") as HTMLAnchorElement | null
  
      if (link && link.href) {
        e.preventDefault()
  
        const href = link.getAttribute("href")
        if (!href || href.startsWith("#")) return
  
        window.scrollTo({ top: 0, behavior: "auto" })

        window.location.href = href
      }
    }
  
    overlay?.addEventListener("click", handleOverlayLinkClick)
  
    return () => {
      overlay?.removeEventListener("click", handleOverlayLinkClick)
    }
  }, [])  
  
  return (
    <header className="fixed z-10 w-full h-20 px-8 md:px-20 xxxl:px-40 bg-black flex justify-between md:justify-normal items-center">
      <Link href="/">
        <Image src={LogoFinniu} alt="Logo de Finniu" className="w-20"/>
      </Link>
      <nav className="w-full h-full hidden md:flex justify-between items-center pl-16">
        <ul className="h-full text-white flex items-center gap-16">
          <ButtonLink href="/" text="Home" className="h-full px-2 flex items-center hover:border-b-[1px] border-solid border-purplePrincipal transition duration-150 ease"/>
          <div className="relative group flex h-full rtl:[--placement:bottom-end]">
            <button
              type="button"
              className="h-full px-2 flex items-center gap-2 hover:border-b-[1px] border-solid border-purplePrincipal transition duration-150 ease"
              aria-haspopup="menu"
              aria-label="Dropdown"
            >
              <h5>Nosotros</h5>
              <span className="icon-[tabler--chevron-down] size-4 transform transition-transform duration-200 group-hover:rotate-180"></span>
            </button>
            <ul
              className="absolute z-50 bg-white rounded-3xl p-4 min-w-[40rem] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition duration-200 mt-20"
              role="menu"
            >
              <li className="border-b-0 mb-2">
                <h6 className="text-base text-gray-400 font-bold tracking-widest">SOBRE NOSOTROS</h6>
              </li>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-0">
                <li>
                  <Link
                    className="text-purplePrincipal flex justify-start items-start gap-4 hover:bg-gray-200 rounded-xl p-2 transition-colors duration-150"
                    href="/about"
                  >
                    <div className="mt-[0.30rem]">
                      <Like />
                    </div>
                    <div className="text-black flex flex-col gap-1 justify-center items-start">
                      <h6 className="font-bold text-lg">La empresa</h6>
                      <span>Conoce más sobre nosotros</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-purplePrincipal flex justify-start items-start gap-4 hover:bg-gray-200 rounded-xl p-2 transition-colors duration-150"
                    href="/portfolio"
                  >
                    <div className="mt-[0.30rem]">
                      <News />
                    </div>
                    <div className="text-black flex flex-col gap-1 justify-center items-start">
                      <h6 className="font-bold text-lg">Portafolio</h6>
                      <span>Empresas y clientes que confían en nosotros</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-purplePrincipal flex justify-start items-start gap-4 hover:bg-gray-200 rounded-xl p-2 transition-colors duration-150"
                    href="/news"
                  >
                    <div className="mt-[0.30rem]">
                      <Portfolio />
                    </div>
                    <div className="text-black flex flex-col gap-1 justify-center items-start">
                      <h6 className="font-bold text-lg">Noticias y Eventos</h6>
                      <span>Mantente al día con nuestras novedades</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </ul>
          </div>
          <div className="relative group flex h-full rtl:[--placement:bottom-end]">
            <button
              type="button"
              className="h-full px-2 flex items-center gap-2 hover:border-b-[1px] border-solid border-purplePrincipal transition duration-150 ease"
              aria-haspopup="menu"
              aria-label="Dropdown"
            >
              <h5>Productos</h5>
              <span className="icon-[tabler--chevron-down] size-4 transform transition-transform duration-200 group-hover:rotate-180"></span>
            </button>
            <ul
              className="absolute z-50 bg-white rounded-3xl p-4 min-w-80 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition duration-200 mt-20"
              role="menu"
            >
              <li className="border-b-0 mb-2">
                <h6 className="text-base text-gray-400 font-bold tracking-widest">NUESTROS PRODUCTOS</h6>
              </li>
              <ul className="grid grid-cols-1">
                <li>
                  <Link
                    className="text-purplePrincipal flex justify-start items-start gap-4 hover:bg-gray-200 rounded-xl p-2 transition-colors duration-150"
                    href="/invest"
                  >
                    <div className="mt-[0.30rem]">
                      <Desktop />
                    </div>
                    <div className="text-black flex flex-col gap-1 justify-center items-start">
                      <h6 className="font-bold text-lg">Inversión a plazo fijo</h6>
                      <span>Explora las soluciones de inversión que ofrecemos</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </ul>
          </div>
          <ButtonLink href="/transparency" text="Transparencia" className="h-full px-2 flex items-center hover:border-b-[1px] border-solid border-purplePrincipal transition duration-150 ease"/>
          <div className="relative group flex h-full rtl:[--placement:bottom-end]">
            <button
              type="button"
              className="h-full px-2 flex items-center gap-2 hover:border-b-[1px] border-solid border-purplePrincipal transition duration-150 ease"
              aria-haspopup="menu"
              aria-label="Dropdown"
            >
              <h5>Compara</h5>
              <span className="icon-[tabler--chevron-down] size-4 transform transition-transform duration-200 group-hover:rotate-180"></span>
            </button>
            <ul
              className="absolute z-50 bg-white rounded-3xl p-4 min-w-80 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition duration-200 mt-20"
              role="menu"
            >
              <li className="border-b-0 mb-2">
                <h6 className="text-base text-gray-400 font-bold tracking-widest">COMPARA Y ELIGE</h6>
              </li>
              <ul className="grid grid-cols-1 gap-4">
                <li>
                  <Link
                    className="text-purplePrincipal flex justify-start items-start gap-4 hover:bg-gray-200 rounded-xl p-2 transition-colors duration-150"
                    href="/simulator"
                  >
                    <div className="mt-[0.30rem]">
                      <Bar />
                    </div>
                    <div className="text-black flex flex-col gap-1 justify-center items-start">
                      <h6 className="font-bold text-lg">Simulador</h6>
                      <span>Calcula y encuentra la mejor versión para tí</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-purplePrincipal flex justify-start items-start gap-4 hover:bg-gray-200 rounded-xl p-2 transition-colors duration-150"
                    href="/bestrate"
                  >
                    <div className="mt-[0.30rem]">
                      <Pie />
                    </div>
                    <div className="text-black flex flex-col gap-1 justify-center items-start">
                      <h6 className="font-bold text-lg">La mejor tasa</h6>
                      <span>Consulta y compara nuestras tasas de inversión</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </ul>
          </div>
          <ButtonLink href="/contact" text="Contacto" className="h-full px-2 flex items-center hover:border-b-[1px] border-solid border-purplePrincipal transition duration-150 ease"/>
        </ul>
        <ul className="flex justify-center items-center gap-4">
          <ButtonLink href="#" text="Ingresar" className="text-white py-4 px-6 rounded-full border-[1px] border-solid bg-transparent hover:bg-white hover:text-black transition duration-150 ease"/>
          <ButtonLink href="#" text="Crear cuenta" className="text-white py-4 px-6 rounded-full bg-purplePrincipal hover:bg-white hover:text-purplePrincipal transition duration-150 ease"/>
        </ul>
      </nav>
        

      <nav className="md:hidden mt-2">
        <button className="text-white" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="overlay-navigation-example" data-overlay="#overlay-navigation-example" >
          <Burger />
        </button>

        <aside id="overlay-navigation-example" className="max-w-full h-full z-10 overlay overlay-open:translate-x-0 drawer drawer-start hidden bg-white">
          <div className="drawer-header h-20 px-8">
            <Link href="/" className="drawer-title">
                <Image src={LogoFinniuBlue} alt="Logo de Finniu" className="w-20"/>
            </Link>
            <button type="button" className="text-black" aria-label="Close" data-overlay="#overlay-navigation-example" >
              <X />
            </button>
          </div>

          <div className="w-full flex flex-col items-center justify-between p-0 leading-none drawer-body">
            <ul className="w-full menu rounded-none bg-white py-6 px-4 flex flex-col gap-4">
              <li className="text-2xl">
                <ButtonLink href="/" text="Home" className="text-black w-full h-full transition duration-150 ease"/>
              </li>
              <li className="text-2xl">
                <button className="text-black collapse-toggle collapse-open:bg-base-content/10" id="nosotros-collapse" data-collapse="#nosotros-collapse-menu" >
                  Nosotros
                  <span className="icon-[tabler--chevron-down] collapse-open:rotate-180 size-4"></span>
                </button>
                <ul id="nosotros-collapse-menu" className="mt-4 collapse hidden w-auto space-y-0.5 overflow-hidden transition-[height] duration-300" aria-labelledby="nosotros-collapse" >
                  <li>
                    <Link
                      className="text-purplePrincipal flex justify-start items-start gap-4 hover:bg-gray-100 rounded-xl p-2 transition-colors duration-150"
                      href="/about"
                    >
                      <div className="mt-[0.30rem]">
                        <Like />
                      </div>
                      <div className="text-black flex flex-col gap-1 justify-center items-start">
                        <h6 className="text-2xl">La empresa</h6>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="mt-4 text-purplePrincipal flex justify-start items-start gap-4 hover:bg-gray-100 rounded-xl p-2 transition-colors duration-150"
                      href="/portfolio"
                    >
                      <div className="mt-[0.30rem]">
                        <News />
                      </div>
                      <div className="text-black flex flex-col gap-1 justify-center items-start">
                        <h6 className="text-2xl">Portafolio</h6>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="mt-4 text-purplePrincipal flex justify-start items-start gap-4 hover:bg-gray-100 rounded-xl p-2 transition-colors duration-150"
                      href="/news"
                    >
                      <div className="mt-[0.30rem]">
                        <Portfolio />
                      </div>
                      <div className="text-black flex flex-col gap-1 justify-center items-start">
                        <h6 className="text-2xl">Noticias y Eventos</h6>
                      </div>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="text-2xl">
                <button className="text-black collapse-toggle collapse-open:bg-base-content/10" id="productos-collapse" data-collapse="#productos-collapse-menu" >
                  Productos
                  <span className="icon-[tabler--chevron-down] collapse-open:rotate-180 size-4"></span>
                </button>
                <ul id="productos-collapse-menu" className="collapse hidden w-auto space-y-0.5 overflow-hidden transition-[height] duration-300" aria-labelledby="productos-collapse" >
                  <li>
                    <Link
                      className="mt-4 text-purplePrincipal flex justify-start items-start gap-4 hover:bg-gray-100 rounded-xl p-2 transition-colors duration-150"
                      href="/invest"
                    >
                      <div className="mt-[0.30rem]">
                        <Desktop />
                      </div>
                      <div className="text-black flex flex-col gap-1 justify-center items-start">
                        <h6 className="text-2xl">Inversión a plazo fijo</h6>
                      </div>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <ButtonLink href="/transparency" text="Transparencia" className="text-2xl text-black w-full h-full transition duration-150 ease"/>
              </li>
              <li className="text-2xl">
                <button className="text-black collapse-toggle collapse-open:bg-base-content/10" id="compara-collapse" data-collapse="#compara-collapse-menu" >
                  Compara
                  <span className="icon-[tabler--chevron-down] collapse-open:rotate-180 size-4"></span>
                </button>
                <ul id="compara-collapse-menu" className="collapse hidden w-auto space-y-0.5 overflow-hidden transition-[height] duration-300" aria-labelledby="compara-collapse" >
                  <li>
                    <Link
                      className="mt-4 text-purplePrincipal flex justify-start items-start gap-4 hover:bg-gray-100 rounded-xl p-2 transition-colors duration-150"
                      href="/simulator"
                    >
                      <div className="mt-[0.30rem]">
                        <Bar />
                      </div>
                      <div className="text-black flex flex-col gap-1 justify-center items-start">
                        <h6 className="text-2xl">Simulador</h6>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="mt-4 text-purplePrincipal flex justify-start items-start gap-4 hover:bg-gray-100 rounded-xl p-2 transition-colors duration-150"
                      href="/bestrate"
                    >
                      <div className="mt-[0.30rem]">
                        <Pie />
                      </div>
                      <div className="text-black flex flex-col gap-1 justify-center items-start">
                        <h6 className="text-2xl">La mejor tasa</h6>
                      </div>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <ButtonLink href="/contact" text="Contacto" className="text-2xl text-black w-full h-full transition duration-150 ease"/>
              </li>
            </ul>
            <ul className="w-full px-8 flex flex-col justify-center items-center gap-4">
              <ButtonLink href="#" text="Ingresar" className="w-full text-center text-purplePrincipal py-4 px-6 rounded-full border-[1px] border-solid border-purplePrincipal bg-transparent hover:bg-purplePrincipal hover:text-white transition duration-150 ease"/>
              <ButtonLink href="#" text="Crear cuenta" className="w-full text-center text-white py-4 px-6 rounded-full border-[1px] border-solid border-purplePrincipal bg-purplePrincipal hover:bg-white hover:text-purplePrincipal transition duration-150 ease"/>
            </ul>
          </div>
        </aside>
      </nav>
    </header>
  )
}

export default NavBar