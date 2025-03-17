import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
import ButtonLinkIcon from "@/app/new-landing/components/ButtonLinkIcon"
import Background01 from "@/app/new-landing/images/backgrounds/background01.png"
import ArrowUpLeft from "@/app/new-landing/sections/Invest/images/icons/ArrowUpLeft"

const Questions = () => {
  return (
    <section
      className="py-40 text-white w-full flex flex-col justify-center items-center gap-8"
      style={{ backgroundImage: `url(${Background01.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="flex flex-col justify-center items-center gap-6">
        <h3 className="text-6xl">Preguntas frecuentes</h3>
        <h3 className="text-xl">Obtén las respuestas a tus preguntas sobre Finniu</h3>
      </div>
      <div className="w-[35rem] flex flex-col justify-center items-center gap-4">
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
              ¿Por qué las tasa pueden cambiar?
            </AccordionTitle>
            <AccordionContent className="px-0">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis nam quibusdam odio laborum accusamus? Enim eveniet aliquam ullam ea, mollitia ipsam saepe fugit odio distinctio nesciunt iusto ipsa assumenda doloribus.
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle className="py-8 px-0 text-white hover:bg-transparent !bg-transparent">
              ¿Cuándo pagan los intereses?
            </AccordionTitle>
            <AccordionContent className="px-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, nulla, suscipit in dolore error ex magni maxime labore aliquam consectetur velit soluta reprehenderit repudiandae veritatis laudantium sunt assumenda est iste!
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