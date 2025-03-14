import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
import ButtonLink from "@/app/new-landing/components/ButtonLink"

const Questions = () => {
  return (
    <section className="py-40 bg-black text-white w-full flex flex-col justify-center items-center gap-8">
      <div className="flex flex-col justify-center items-center gap-6">
        <h3 className="text-6xl">Preguntas frecuentes</h3>
        <h3 className="text-xl">Obtén las respuestas a tus preguntas sobre Finniu</h3>
      </div>
      <div className="w-[35rem] flex flex-col justify-center items-center gap-4">
        <Accordion className="border-0 w-full">
          <AccordionPanel className="text-white">
            <AccordionTitle>
              ¿Cuál es el monto mínimo de inversión?
            </AccordionTitle>
            <AccordionContent>
              <p>
                El monto mínimo de inversión en Finniu es de <span className="font-semibold">S/ 1,000</span> para el Fondo Soles y <span className="font-semibold">USD 1,000</span> para el Fondo Dólares
              </p>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle>
              ¿Por qué las tasa pueden cambiar?
            </AccordionTitle>
            <AccordionContent>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis nam quibusdam odio laborum accusamus? Enim eveniet aliquam ullam ea, mollitia ipsam saepe fugit odio distinctio nesciunt iusto ipsa assumenda doloribus.
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle>
              ¿Cuándo pagan los intereses?
            </AccordionTitle>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, nulla, suscipit in dolore error ex magni maxime labore aliquam consectetur velit soluta reprehenderit repudiandae veritatis laudantium sunt assumenda est iste!
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle>
              ¿Cómo contacto con Finniu si tengo más preguntas?
            </AccordionTitle>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae saepe est eos delectus? Ea consequuntur alias blanditiis eaque? Doloremque reiciendis cum modi corporis labore asperiores commodi aspernatur dignissimos est incidunt.
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
        <ButtonLink href="#" text="Ver más preguntas" className="mt-4 text-white py-4 px-6 rounded-full border-[1px] border-solid bg-transparent"/>
      </div>
    </section>
  )
}

export default Questions