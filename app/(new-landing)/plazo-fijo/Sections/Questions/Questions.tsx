import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
import ButtonLinkIcon from "@/app/(new-landing)/components/ButtonLinkIcon"
import ButtonLink from "@/app/(new-landing)/components/ButtonLink"
import Background01 from "@/app/(new-landing)/images/backgrounds/background01.png"
import ArrowUpLeft from "@/app/(new-landing)/Home/Invest/images/icons/ArrowUpLeft"

const Questions = () => {
  return (
    <section
      id="questions"
      className="py-10 md:py-40 px-8 md:px-0 text-white w-full flex flex-col justify-center items-center gap-4 md:gap-8"
      style={{ backgroundImage: `url(${Background01.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="flex flex-col justify-center items-center text-center gap-4 md:gap-8">
        <h3 className="text-4xl md:text-6xl">Preguntas frecuentes</h3>
        <h3 className="text-lg md:text-xl">Obtén las respuestas a tus preguntas sobre Finniu</h3>
      </div>
      <div className="w-full md:w-[35rem] flex flex-col justify-center items-center gap-2 md:gap-4">
        <Accordion className="border-0 w-full">
          <AccordionPanel>
            <AccordionTitle className="py-8 px-0 text-white hover:bg-transparent !bg-transparent">
              ¿Cuál es el monto mínimo de inversión?
            </AccordionTitle>
            <AccordionContent className="px-0">
              <p>
                El monto mínimo de inversión en Finniu es de <span className="font-semibold">S/ 1,000</span> para el Fondo Soles y <span className="font-semibold">USD 1,000</span> para el Fondo Dólares
              </p>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle className="py-8 px-0 text-white hover:bg-transparent !bg-transparent">
              ¿Cuánto gano si deposito 1.000 soles a plazo fijo?
            </AccordionTitle>
            <AccordionContent className="px-0">
              Si decides que Finniu gestione tu capital y eliges un pazo de 12 meses, puedes recibir hasta S/1120 soles con una tasa del 12% anual
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle className="py-8 px-0 text-white hover:bg-transparent !bg-transparent">
              ¿Qué banco paga más intereses a plazo fijo en 2025 en Perú?
            </AccordionTitle>
            <AccordionContent className="px-0">
              El Banco Ripley, es el banco que paga más intereses a plazo fijo en 2025 para Perú, con tasas de interés hasta de 4.88%
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle className="py-8 px-0 text-white hover:bg-transparent !bg-transparent">
              ¿Garantizan la devolución de capital?
            </AccordionTitle>
            <AccordionContent className="px-0">
              Sí, bajo contrato de mutuo dinerario Finniu garantiza el capital invertido. Pregunta por nuestros contratos de mutuo o cheque diferido
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-2 md:gap-10">
          <ButtonLink href="#" text="Empieza ahora" className="w-fit mt-4 flex justify-center items-center text-black py-4 px-6 rounded-full border-[1px] border-solid bg-white hover:bg-transparent hover:text-white transition duration-150 ease"/>
          <ButtonLinkIcon href="/transparency" icon={<ArrowUpLeft />} text="Ver más preguntas" className="w-fit mt-4 flex gap-2 justify-center items-center text-white py-4 px-6 rounded-full border-[1px] border-solid bg-transparent hover:bg-white hover:text-black transition duration-150 ease"/>
        </div>
      </div>
    </section>
  )
}

export default Questions