import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
import ButtonLinkIcon from "@/app/new-landing/components/ButtonLinkIcon"
import Background01 from "@/app/new-landing/images/backgrounds/background01.png"
import ArrowUpLeft from "@/app/new-landing/sections/Invest/images/icons/ArrowUpLeft"

const Questions = () => {
  return (
    <section
      className="py-10 md:py-40 px-8 md:px-0 text-white w-full flex flex-col justify-center items-center gap-2 md:gap-8"
      style={{ backgroundImage: `url(${Background01.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="flex flex-col justify-center items-center text-center gap-2 md:gap-6">
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
              ¿Cobran algún tipo de comisión?
            </AccordionTitle>
            <AccordionContent className="px-0">
              Finniu no cobra comisiones por mantener, retirar o invertir tu capital.
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle className="py-8 px-0 text-white hover:bg-transparent !bg-transparent">
              ¿Cuándo pagan los intereses?
            </AccordionTitle>
            <AccordionContent className="px-0">
              Al invertir en Finniu, nos proporcionas una cuenta de ahorros para programar el pago de intereses. Recibirás tu primer pago 30-45 días después de la validación de tu inversión y, luego, cada 30-45 días durante la vigencia de tu contrato.
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle className="py-8 px-0 text-white hover:bg-transparent !bg-transparent">
              ¿Garantizan la devolución de capital?
            </AccordionTitle>
            <AccordionContent className="px-0">
              Sí, bajo contrato de mutuo dinerario Finniu garantiza el capital invertido. Pregunta por nuestros contratos de mutuo o cheque diferido.
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
        <ButtonLinkIcon href="#" icon={<ArrowUpLeft />} text="Ver más preguntas" className="mt-4 flex gap-2 justify-center items-center text-white py-4 px-6 rounded-full border-[1px] border-solid bg-transparent hover:bg-white hover:text-black transition duration-150 ease"/>
      </div>
    </section>
  )
}

export default Questions