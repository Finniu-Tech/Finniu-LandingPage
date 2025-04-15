import Image from "next/image"
import BANCOS from "@/app/(new-landing)/mejores-tasas-a-plazo-fijo/Sections/Comparator/helpers/bancos/bancos"
import CAJAS from "@/app/(new-landing)/mejores-tasas-a-plazo-fijo/Sections/Comparator/helpers/cajas/cajas"
import Background01 from "@/app/(new-landing)/mejores-tasas-a-plazo-fijo/Sections/Comparator/images/backgrounds/background01.png"
import LlamaCool from "@/app/(new-landing)/Home/Invest/images/Llama.webp"
import Link from "next/link"


const Comparator = () => {
  return (
    <section className="py-10 md:py-40 bg-whitePrimary text-black w-full flex flex-col justify-center items-center gap-4 md:gap-8">
      <div className="px-8 md:px-0 mb-10 md:mb-40 w-full flex flex-col items-center justify-center">
        <h3 className="text-4xl md:text-7xl text-center w-full md:w-[80rem]">Comparador de tasas de interés a plazo fijo de <span className="font-semibold">Bancos</span></h3>
        <div className="mt-10 w-full md:max-w-5xl border-4 border-solid border-purpleTercero rounded-3xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-purpleTercero text-white text-base md:text-2xl">
              <tr>
                <th className="p-2 md:p-4">Banco</th>
                <th className="p-2 md:p-4">Tasa de Interés Anual TEA</th>
                <th className="p-2 md:p-4">Plazo</th>
                <th className="hidden md:table-cell p-4">Monto mínimo</th>
              </tr>
            </thead>
            <tbody className="text-purpleTercero text-base md:text-xl">
              {BANCOS.map((bank, index) => (
                <tr key={index}>
                  <th className="font-normal p-2 md:p-4 border-b-[1px] border-gray-400">{bank.bank}</th>
                  <th className="p-2 md:p-4 border-b-[1px] border-gray-400">{bank.rate}</th>
                  <th className="font-normal p-2 md:p-4 border-b-[1px] border-gray-400">{bank.term}</th>
                  <th className="hidden md:table-cell font-normal p-4 border-b-[1px] border-gray-400">{bank.minimum}</th>
                </tr>
              ))}
            </tbody>
            <tfoot className="text-purpleTercero text-base">
              <tr>
                <td colSpan={4} className="p-4">
                  <p className="font-semibold">
                    *Nota
                  </p>
                  <p className="mt-1">
                    Las tasas y condiciones pueden varias según la entidad y el tiempo. Se recomienda verificar directamente con cada banco antes de tomar una decisión
                    <br />
                    <br />
                    Fuente: <Link className="hover:font-black" href="https://rpp.pe/economia/economia/que-caja-o-financiera-paga-mas-este-es-el-ranking-de-las-mejores-tasasde-interes-para-depositos-a-plazo-fijo-noticia-1590440?ref=rpp">Link</Link>
                    <br />
                    Información al 2024
                  </p>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <Link href="/simulator/#projectYourGoals" className="w-full">
        <div
          className="w-full text-white hidden md:flex justify-center items-center gap-10"
          style={{ backgroundImage: `url(${Background01.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="flex flex-col justify-center items-start gap-4">
            <p className="text-4xl md:text-5xl">
              Haz crecer tus ahorros <span className="font-semibold">con Finniu</span> y logra tus metas 🚀
            </p>
            <p className="text-4xl md:text-5xl">
              <span className="font-semibold">Hasta 18%</span> de Rentabilidad Anual
            </p>
          </div>
          <div className="w-60">
            <Image src={LlamaCool} alt="Llama Cool" className="w-full" />
          </div>
        </div>
      </Link>
      <Link  href="/simulator/#projectYourGoals" className="w-full">
        <div
          className="w-full px-8 md:px-0 py-10 text-white flex md:hidden justify-center items-center gap-10"
          style={{ backgroundImage: `url(${Background01.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="flex flex-col justify-center items-start gap-10">
            <p className="text-4xl md:text-5xl">
              Haz crecer tus ahorros <span className="font-semibold">con Finniu</span> y logra tus metas 🚀
            </p>
            <p className="text-4xl flex flex-col gap-2">
              <span className="font-semibold text-5xl">Hasta 18%</span>
              <span>
                de Rentabilidad Anual
              </span>
            </p>
          </div>
        </div>
      </Link>
      <div className="px-8 md:px-0 mt-10 md:mt-40 w-full flex flex-col items-center justify-center">
        <h3 className="text-4xl md:text-7xl text-center w-full md:w-[80rem]">Comparador de tasas de interés a plazo fijo entre <span className="font-semibold">Cajas</span></h3>
        <div className="mt-10 w-full md:max-w-5xl border-4 border-solid border-purpleTercero rounded-3xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-purpleTercero text-white text-base md:text-2xl">
              <tr>
                <th className="p-2 md:p-4">Entidad Financiera</th>
                <th className="p-2 md:p-4">Tasa de Interés Anual TEA</th>
                <th className="p-2 md:p-4">Plazo</th>
                <th className="hidden md:table-cell p-4">Monto mínimo</th>
              </tr>
            </thead>
            <tbody className="text-purpleTercero text-base md:text-xl">
              {CAJAS.map((caja, index) => (
                <tr key={index}>
                  <th className="font-normal p-2 md:p-4 border-b-[1px] border-gray-400">{caja.entity}</th>
                  <th className="p-2 md:p-4 border-b-[1px] border-gray-400">{caja.rate}</th>
                  <th className="font-normal p-2 md:p-4 border-b-[1px] border-gray-400">{caja.term}</th>
                  <th className="hidden md:table-cell font-normal p-4 border-b-[1px] border-gray-400">{caja.minimum}</th>
                </tr>
              ))}
            </tbody>
            <tfoot className="text-purpleTercero text-base">
              <tr>
                <td colSpan={4} className="p-4">
                  <p className="font-semibold">
                    *Nota
                  </p>
                  <p className="mt-1">
                    Las tasas y condiciones pueden varias según la entidad y el tiempo. Se recomienda verificar directamente con cada banco antes de tomar una decisión
                    <br />
                    <br />
                    Fuente: <Link className="hover:font-black" href="https://rpp.pe/economia/economia/que-caja-o-financiera-paga-mas-este-es-el-ranking-de-las-mejores-tasasde-interes-para-depositos-a-plazo-fijo-noticia-1590440?ref=rpp">Link</Link>
                    <br />
                    Información al 2024
                  </p>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Comparator