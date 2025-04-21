import Image from "next/image"
import TABLESSOLES from "@/app/(new-landing)/simulador-de-interes/Sections/Background/helpers/soles/table"
import CASESSOLES from "@/app/(new-landing)/simulador-de-interes/Sections/Background/helpers/soles/cases"
import TABLESDOLARES from "@/app/(new-landing)/simulador-de-interes/Sections/Background/helpers/dolares/table"
import CASESDOLARES from "@/app/(new-landing)/simulador-de-interes/Sections/Background/helpers/dolares/cases"
import dolares from "@/app/(new-landing)/simulador-de-interes/Sections/Background/images/money/dolares.png"
import soles from "@/app/(new-landing)/simulador-de-interes/Sections/Background/images/money/soles.png"

const Background = () => {
  const SOLESPDF = "/pdfs/soles/soles.pdf"
  const DOLARESPDF = "/pdfs/dolares/dolares.pdf"

  return ( 
    <section className="py-10 md:py-40 px-8 md:px-0 bg-whitePrimary text-black w-full flex flex-col justify-center items-center gap-4 md:gap-8">
      <div className="w-full flex flex-col items-center justify-center">
        <h3 className="text-4xl md:text-7xl text-center">Fondo de Issnverrrsión Soles</h3>
        <div className="hidden md:inline-block mt-10 w-full md:max-w-5xl border-4 border-solid border-purpleTercero rounded-3xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-purpleTercero text-white text-2xl">
              <tr>
                <th className="p-4">Desde</th>
                <th className="p-4">6 meses</th>
                <th className="p-4">1 año*</th>
                <th className="p-4">2 años</th>
              </tr>
            </thead>
            <tbody className="text-purpleTercero text-xl">
              {TABLESSOLES.map((tableItem, index) => (
                <tr key={index}>
                  <th className="font-normal p-4 border-b-[1px] border-gray-400">{tableItem.from}</th>
                  <th className="p-4 border-b-[1px] border-gray-400">{tableItem.sixMonth}</th>
                  <th className="p-4 border-b-[1px] border-gray-400">{tableItem.oneYear}</th>
                  <th className="p-4 border-b-[1px] border-gray-400">{tableItem.twoYears}</th>
                </tr>
              ))}
            </tbody>
            <tfoot className="text-purpleTercero text-lg">
              <tr>
                <td colSpan={4} className="p-4">
                  <p className="font-semibold">
                    Cláusula de devolución de capital
                  </p>
                  <p className="mt-1">
                    Es decir, en caso se dé algún imprevisto con las inversiones, nos hacemos cargo de pagar el monto que invertiste. Mientras que la rentabilidad ofrecida está sujeta a variaciones del mercado. Rentabilidad anual* de la operación en el portafolio
                  </p>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="hidden md:inline-block mt-10 w-full md:max-w-5xl border-4 border-solid border-purpleTercero rounded-3xl overflow-hidden">
          <table>
            <thead className="bg-purpleTercero text-white text-2xl">
              <tr>
                <th className="p-4">Capital S/</th>
                <th className="p-4"></th>
                <th className="p-4">Int. Anual</th>
                <th className="p-4">Int. Mensual</th>
              </tr>
            </thead>
            <tbody className="text-purpleTercero text-xl">
              {CASESSOLES.map((caseItem, index) => (
                <tr key={index}>
                  <th className="font-normal p-4 border-b-[1px] border-gray-400">{caseItem.capital}</th>
                  <th className="p-4 border-b-[1px] border-gray-400">{caseItem.percent}</th>
                  <th className="font-normal p-4 border-b-[1px] border-gray-400">{caseItem.intAnual}</th>
                  <th className="font-normal p-4 border-b-[1px] border-gray-400">{caseItem.intMonth}</th>
                </tr>
              ))}
            </tbody>
            <tfoot className="text-purpleTercero text-lg">
              <tr>
                <td colSpan={4} className="p-4">
                  <p className="font-semibold">
                    *Interés mensual bruta sin considerar retención
                  </p>
                  <p className="mt-1">
                    Por concepto de Renta de 2DA Categoría, FINNIU SAC realiza una retención de impuesto del 5% para declararlo a nombre del inversionista en SUNAT
                  </p>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="flex md:hidden mt-10 flex-col items-center justify-center gap-10">
          <Image src={soles} alt="Imagen Soles" />
          <a
            href={SOLESPDF}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white py-4 px-6 rounded-full bg-purplePrincipal border-solid border-[1px] border-purplePrincipal hover:bg-white hover:text-purplePrincipal hover:border-solid hover:border-[1px] hover:border-purplePrincipal transition duration-150 ease"
          >
            Descargar el informe
          </a>

        </div>
      </div>
      <div className="mt-10 md:mt-20 w-full flex flex-col items-center justify-center">
        <h3 className="text-4xl md:text-7xl text-center">Fondo de Inversión Dólares</h3>
        <div className="hidden md:inline-block mt-10 w-full md:max-w-5xl border-4 border-solid border-purpleTercero rounded-3xl overflow-hidden">
          <table>
            <thead className="bg-purpleTercero text-white text-2xl">
              <tr>
                <th className="p-4">Desde</th>
                <th className="p-4">6 meses</th>
                <th className="p-4">1 año*</th>
                <th className="p-4">2 años</th>
              </tr>
            </thead>
            <tbody className="text-purpleTercero text-xl">
              {TABLESDOLARES.map((tableItem, index) => (
                <tr key={index}>
                  <th className="font-normal p-4 border-b-[1px] border-gray-400">{tableItem.from}</th>
                  <th className="p-4 border-b-[1px] border-gray-400">{tableItem.sixMonth}</th>
                  <th className="p-4 border-b-[1px] border-gray-400">{tableItem.oneYear}</th>
                  <th className="p-4 border-b-[1px] border-gray-400">{tableItem.twoYears}</th>
                </tr>
              ))}
            </tbody>
            <tfoot className="text-purpleTercero text-lg">
              <tr>
                <td colSpan={4} className="p-4">
                  <p className="font-semibold">
                    Cláusula de devolución de capital
                  </p>
                  <p className="mt-1">
                    Es decir, en caso se dé algún imprevisto con las inversiones, nos hacemos cargo de pagar el monto que invertiste. Mientras que la rentabilidad ofrecida está sujeta a variaciones del mercado
                  </p>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="hidden md:inline-block mt-10 w-full md:max-w-5xl border-4 border-solid border-purpleTercero rounded-3xl overflow-hidden">
          <table>
            <thead className="bg-purpleTercero text-white text-2xl">
              <tr>
                <th className="p-4">Capital USD</th>
                <th className="p-4"></th>
                <th className="p-4">Int. Anual</th>
                <th className="p-4">Int. Mensual</th>
              </tr>
            </thead>
            <tbody className="text-purpleTercero text-xl">
              {CASESDOLARES.map((caseItem, index) => (
                <tr key={index}>
                  <th className="font-normal p-4 border-b-[1px] border-gray-400">{caseItem.capital}</th>
                  <th className="p-4 border-b-[1px] border-gray-400">{caseItem.percent}</th>
                  <th className="font-normal p-4 border-b-[1px] border-gray-400">{caseItem.intAnual}</th>
                  <th className="font-normal p-4 border-b-[1px] border-gray-400">{caseItem.intMonth}</th>
                </tr>
              ))}
            </tbody>
            <tfoot className="text-purpleTercero text-lg">
              <tr>
                <td colSpan={4} className="p-4">
                  <p className="font-semibold">
                    *Interés mensual bruta sin considerar retención
                  </p>
                  <p className="mt-1">
                    Por concepto de Renta de 2DA Categoría, FINNIU SAC realiza una retención de impuesto del 5% para declararlo a nombre del inversionista en SUNAT
                  </p>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="flex md:hidden mt-10 flex-col items-center justify-center gap-10">
          <Image src={dolares} alt="Imagen Dolares" />
          <a
            href={DOLARESPDF}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white py-4 px-6 rounded-full bg-purplePrincipal border-solid border-[1px] border-purplePrincipal hover:bg-white hover:text-purplePrincipal hover:border-solid hover:border-[1px] hover:border-purplePrincipal transition duration-150 ease"
          >
            Descargar el informe
          </a>
        </div>
      </div>
    </section>
  )
}

export default Background