import Image from "next/image";
import SanBernardo from "@/app/(new-landing)/colocacion-privada/Sections/Invest/images/san_bernardo.png";
import Medisben from "@/app/(new-landing)/colocacion-privada/Sections/Invest/images/medisben.png";
import Rtc from "@/app/(new-landing)/colocacion-privada/Sections/Invest/images/rtccorp.png";
import Future from "@/app/(new-landing)/colocacion-privada/Sections/Invest/images/futurefoods.png";
import cheque from "@/app/(new-landing)/colocacion-privada/Sections/Invest/images/icons/cheque.png"
import contrato from "@/app/(new-landing)/colocacion-privada/Sections/Invest/images/icons/contrato.png"
const operations = [
  {
    title: "2da. operación",
    company: "Inversiones agropecuarias San Bernardo",
    purpose: "Engorde y Comercialización de Ganado Vacuno",
    rate: "22.00%",
    duration: "12 a 36 meses",
    minimum: "Desde S/ 50,000.00 o S/ 20,000.00",
    interest: "Intereses mensuales + capital al finalizar",
    amount: "PEN 1,500,000.00",
    progress: 65,
    logo: SanBernardo
  },
  {
    title: "2da. operación",
    company: "MEDISBEN (Farmed Servicios SAC)",
    purpose: "Implementación y Puesta en Marcha de Clínica con Especialidades Médicas",
    rate: "20.00%",
    duration: "12 a 36 meses",
    minimum: "Desde S/ 30,000.00 o S/ 10,000.00",
    interest: "Intereses mensuales + capital al finalizar",
    amount: "PEN 1,000,000.00",
    progress: 40,
    logo: Medisben
  },
  {
    title: "4ta. operación",
    company: "Proteína Sostenible SAC",
    purpose: "Producción y comercialización de Marler (Alimentación para mascotas)",
    rate: "16.00%",
    duration: "6 a 18 meses",
    minimum: "Desde S/ 5,000.00 o S/ 2,000.00",
    interest: "Intereses mensuales + capital al finalizar",
    amount: "PEN 1,200,000.00",
    progress: 25,
    logo: Future
  },
  {
    title: "5ta. operación",
    company: "RCT Corp SAC",
    purpose: "Adquisición de Flota Vehicular para Sector Oil & Gas",
    rate: "18.00%",
    duration: "6 a 18 meses",
    minimum: "Desde S/ 20,000.00 o S/ 5,000.00",
    interest: "Intereses mensuales + capital al finalizar",
    amount: "PEN 500,000.00",
    progress: 45,
    logo: Rtc
  },
]

export default function InvestmentCards() {
  return (
    <section className="w-full py-12 px-6">
      <h2 className="text-white text-3xl md:text-5xl text-center font-bold mb-12">
        Oportunidades disponibles
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {operations.map((op, index) => (
          <div key={index} className="bg-[#061c42] text-white rounded-2xl shadow-xl flex flex-col justify-between">
            <div className="flex flex-col gap-4 p-6">
              <div className="flex justify-end items-start gap-6">
                <div className="flex flex-col items-center">
                  <Image src={cheque.src} alt="Cheque" width={20} height={20} className="object-contain" />
                  <p className="text-[10px] text-white mt-1">Cheque</p>
                </div>
                <div className="flex flex-col items-center">
                  <Image src={contrato.src} alt="Contrato" width={20} height={20} className="object-contain" />
                  <p className="text-[10px] text-white mt-1">Contrato</p>
                </div>
              </div>
              <div className="flex justify-center items-center">
              <Image src={op.logo.src} alt={op.company} width={160} height={160} className="object-contain" />

              </div>
              <div className="text-xs text-center">
                <p className="bg-[#00bcd4] text-white px-3 py-1 rounded-full font-medium inline-block">
                  {op.title}
                </p>
              </div>
              <div className="mt-2">
                <p className="text-sm font-semibold uppercase leading-tight">Propuesta: {op.company}</p>
                <p className="text-sm text-gray-300 leading-tight">Objetivo declarado: {op.purpose}</p>
              </div>
              <div className="text-sm mt-4 space-y-1">
                <p>

                    <span className="text-gray-400 ">Hasta <span className="font-semibold text-white">{op.rate}</span> de retorno anual, sujeto a condiciones contractuales</span></p>
                <p><span className="font-semibold">{op.duration}</span> <span className="text-gray-400">Plazo estimado de ejecución</span></p>
                <p className="text-sm mt-2">{op.minimum}</p>
                <p className="text-xs text-gray-300 mt-2">{op.interest}</p>
              </div>
              <div className="mt-4">
                {/*<p className="text-sm">Monto objetivo de colocación: <span className="font-semibold">{op.amount}</span></p>*/}
                {/*<div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">*/}
                {/*  <div className="bg-cyan-400 h-2.5 rounded-full" style={{width: `${op.progress}%`}}></div>*/}
                {/*</div>*/}
                {/*<p className="text-xs text-gray-400 mt-1">{op.progress}% financiado</p>*/}
                <div className="mt-4">
                  <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-medium px-4 py-2 rounded-full transition duration-300">
                    Elegir
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
