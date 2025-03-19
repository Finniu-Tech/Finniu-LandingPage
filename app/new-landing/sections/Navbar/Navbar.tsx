import Image from "next/image"
import ButtonLink from "@/app/new-landing/components/ButtonLink"
import LogoFinniu from "@/app/new-landing/images/logos/LogoFinniuLigth.svg"
import Link from "next/link"
import Like from "@/app/new-landing/sections/Navbar/images/icons/Like"
import News from "@/app/new-landing/sections/Navbar/images/icons/News"
import Portfolio from "@/app/new-landing/sections/Navbar/images/icons/Portfolio"
import Desktop from "@/app/new-landing/sections/Navbar/images/icons/Desktop"
import Bar from "@/app/new-landing/sections/Navbar/images/icons/Bar"
import Pie from "@/app/new-landing/sections/Navbar/images/icons/Pie"
import Burger from "@/app/new-landing/sections/Navbar/images/icons/Burger"

const NavBar = () => {
  return (
    <header className="fixed z-10 w-full h-20 px-8 md:px-40 bg-black border-b-[1px] border-solid border-gray-700 flex justify-between md:justify-normal items-center">
        <Image src={LogoFinniu} alt="Logo de Finniu" className="w-20"/>
        <nav className="w-full h-full hidden md:flex justify-between items-center pl-16">
          <ul className="h-full text-white flex items-center gap-16">
            <ButtonLink href="#" text="Home" className="h-full px-2 flex items-center hover:border-b-[1px] border-solid border-purplePrincipal transition duration-150 ease"/>
            <div className="dropdown relative flex h-full rtl:[--placement:bottom-end]">
              <button id="dropdown-header" type="button" className="dropdown-toggle h-full px-2 flex items-center gap-2 hover:border-b-[1px] border-solid border-purplePrincipal transition duration-150 ease" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                <h5>Nosotros</h5>
                <span className="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"></span>
              </button>
              <ul className="bg-white rounded-3xl p-4 dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-header">
                <li className="dropdown-header border-b-0">
                  <h6 className="text-base text-gray-400 font-bold tracking-widest">SOBRE NOSOTROS</h6>
                </li>
                <div className="grid grid-cols-1 gap-4">
                  <li>
                    <Link className="dropdown-item text-purplePrincipal flex justify-start items-start gap-4" href="#">
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
                    <Link className="dropdown-item text-purplePrincipal flex justify-start items-start gap-4" href="#">
                      <div className="mt-[0.30rem]">
                        <News/>
                      </div>
                      <div className="text-black flex flex-col gap-1 justify-center items-start">
                        <h6 className="font-bold text-lg">Portafolio</h6>
                        <span>Empresas y clientes que confían en nosotros</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item text-purplePrincipal flex justify-start items-start gap-4" href="#">
                      <div className="mt-[0.30rem]">
                        <Portfolio/>
                      </div>
                      <div className="text-black flex flex-col gap-1 justify-center items-start">
                        <h6 className="font-bold text-lg">Noticias y Eventos</h6>
                        <span>Mantente al día con nuestras novedades</span>
                      </div>
                    </Link>
                  </li>
                </div>
              </ul>
            </div>
            <div className="dropdown relative flex h-full rtl:[--placement:bottom-end]">
              <button id="dropdown-header" type="button" className="dropdown-toggle h-full px-2 flex items-center gap-2 hover:border-b-[1px] border-solid border-purplePrincipal transition duration-150 ease" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                <h5>Productos</h5>
                <span className="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"></span>
              </button>
              <ul className="bg-white rounded-3xl p-4 dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-header">
                <li className="dropdown-header border-b-0">
                  <h6 className="text-base text-gray-400 font-bold tracking-widest">NUESTROS PRODUCTOS</h6>
                </li>
                <div className="grid grid-cols-1 gap-4">
                  <li>
                    <Link className="dropdown-item text-purplePrincipal flex justify-start items-start gap-4" href="#">
                      <div className="mt-[0.30rem]">
                        <Desktop />
                      </div>
                      <div className="text-black flex flex-col gap-1 justify-center items-start">
                        <h6 className="font-bold text-lg">Inversión a plazo fijo</h6>
                        <span>Explora las soluciones de inversión que ofrecemos</span>
                      </div>
                    </Link>
                  </li>
                </div>
              </ul>
            </div>
            <ButtonLink href="#" text="Transparencia" className="h-full px-2 flex items-center hover:border-b-[1px] border-solid border-purplePrincipal transition duration-150 ease"/>
            <div className="dropdown relative flex h-full rtl:[--placement:bottom-end]">
              <button id="dropdown-header" type="button" className="dropdown-toggle h-full px-2 flex items-center gap-2 hover:border-b-[1px] border-solid border-purplePrincipal transition duration-150 ease" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                <h5>Compara</h5>
                <span className="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"></span>
              </button>
              <ul className="bg-white rounded-3xl p-4 dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-header">
                <li className="dropdown-header border-b-0">
                  <h6 className="text-base text-gray-400 font-bold tracking-widest">COMPARA Y ELIGE</h6>
                </li>
                <div className="grid grid-cols-1 gap-4">
                  <li>
                    <Link className="dropdown-item text-purplePrincipal flex justify-start items-start gap-4" href="#">
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
                    <Link className="dropdown-item text-purplePrincipal flex justify-start items-start gap-4" href="#">
                      <div className="mt-[0.30rem]">
                        <Pie />
                      </div>
                      <div className="text-black flex flex-col gap-1 justify-center items-start">
                        <h6 className="font-bold text-lg">La mejor tasa</h6>
                        <span>Consulta y compara nuestras tasas de inversión</span>
                      </div>
                    </Link>
                  </li>
                </div>
              </ul>
            </div>
            <ButtonLink href="#" text="Contacto" className="h-full px-2 flex items-center hover:border-b-[1px] border-solid border-purplePrincipal transition duration-150 ease"/>
          </ul>
          <ul className="flex justify-center items-center gap-4">
            <ButtonLink href="#" text="Ingresar" className="text-white py-4 px-6 rounded-full border-[1px] border-solid bg-transparent hover:bg-white hover:text-black transition duration-150 ease"/>
            <ButtonLink href="#" text="Crear cuenta" className="text-white py-4 px-6 rounded-full bg-purplePrincipal hover:bg-white hover:text-purplePrincipal transition duration-150 ease"/>
          </ul>
        </nav>
        <nav className="flex md:hidden navbar w-full">
          <div className="navbar-start">
            <button type="button" className="collapse-toggle btn btn-outline btn-secondary btn-sm btn-square" data-collapse="#multilevel-navbar-collapse" aria-controls="multilevel-navbar-collapse" aria-label="Toggle navigation">
              <span className="icon-[tabler--menu-2] collapse-open:hidden size-4"></span>
              <span className="icon-[tabler--x] collapse-open:block hidden size-4"></span>
            </button>
          </div>
          <div id="multilevel-navbar-collapse" className="md:navbar-end collapse hidden grow basis-full gap-2 overflow-hidden transition-[height] duration-300 max-md:w-full">
            <div className="dropdown relative inline-flex [--auto-close:inside] [--offset:8] [--placement:bottom-end] max-md:[--placement:bottom] max-md:mt-2">
              <button id="nested-dropdown" type="button" className="dropdown-toggle btn btn-text text-base-content/80 dropdown-open:bg-base-content/10 dropdown-open:text-base-content max-md:px-2" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                Pages
                <span className="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"></span>
              </button>
              <div className="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-collapse">
                <div>
                  <a className="dropdown-item" href="#">
                    <span className="icon-[tabler--stack-front]"></span>
                    Landing page
                  </a>
                </div>
                <div>
                  <a className="dropdown-item" href="#">
                    <span className="icon-[tabler--login]"></span>
                    Login page
                  </a>
                </div>
                <div>
                  <button id="nested-collapse-pages" className="collapse-toggle dropdown-item collapse-open:text-base-content collapse-open:bg-base-content/10 justify-between" data-collapse="#nested-collapse-pages-content">
                    <span className="flex items-center gap-x-3.5">
                    <span className="icon-[tabler--users]"></span>
                      Users
                    </span>
                    <span className="icon-[tabler--chevron-down] collapse-open:rotate-180 size-4"></span>
                  </button>
                  <div className="collapse hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="nested-collapse-pages" id="nested-collapse-pages-content">
                    <ul className="py-3 ps-3">
                      <li>
                        <a className="dropdown-item" href="#">
                          <span className="icon-[tabler--point]"></span>
                          User Details
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <span className="icon-[tabler--point]"></span>
                          Teams
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <span className="icon-[tabler--point]"></span>
                          Projects
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <span className="icon-[tabler--point]"></span>
                          Connections
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
  )
}

export default NavBar