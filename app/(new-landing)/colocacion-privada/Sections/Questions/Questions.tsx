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
              ¿Qué es Finniu Capital y cuál es su función?
            </AccordionTitle>
            <AccordionContent className="px-0">
              <p>
                Finniu Capital S.A.C. es una empresa fintech que facilita la conexión entre personas interesadas en colocar su capital de forma privada y empresas que presentan necesidades de financiamiento. No captamos fondos del público ni administramos portafolios; actuamos como una plataforma de contacto entre partes que celebran contratos privados bajo condiciones libremente pactadas.
              </p>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle className="py-8 px-0 text-white hover:bg-transparent !bg-transparent">
              ¿Finniu está supervisado por la SBS o la SMV?
            </AccordionTitle>
            <AccordionContent className="px-0">
              Finniu Capital S.A.C. está registrada en la SBS como empresa que realiza actividades de préstamos, y cumple con las obligaciones correspondientes en materia de prevención de lavado de activos. No se encuentra bajo el ámbito de supervisión directa de la SMV, ya que no realiza oferta pública de valores ni administra fondos colectivos. Todas las operaciones que facilitamos se enmarcan dentro del régimen de ofertas privadas, conforme a lo previsto en la Ley del Mercado de Valores.
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle className="py-8 px-0 text-white hover:bg-transparent !bg-transparent">
              ¿Qué tipo de respaldo tienen las operaciones que facilita Finniu?
            </AccordionTitle>
            <AccordionContent className="px-0">
              Las operaciones se formalizan mediante contratos de facilidades crediticias celebrados directamente entre la persona que aporta capital y la empresa que lo recibe. Estos contratos pueden incluir instrumentos adicionales como pagarés, garantías personales o contractuales, según el caso. Finniu no garantiza rendimientos ni actúa como parte en dichos contratos, pero vela por que exista información clara, trazabilidad y documentación adecuada.
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle className="py-8 px-0 text-white hover:bg-transparent !bg-transparent">
              ¿Qué sucede si la empresa que recibe el capital incumple el contrato?
            </AccordionTitle>
            <AccordionContent className="px-0">
              El contrato establece mecanismos de exigibilidad legal, que incluyen la posibilidad de iniciar procesos de cobranza judicial o arbitral, conforme a lo acordado entre las partes. Si ocurriera un incumplimiento, Finniu puede brindar orientación inicial sin costo, y derivar al aportante a un abogado especializado. Los costos legales son asumidos por el titular del contrato, salvo que se haya pactado lo contrario.
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle className="py-8 px-0 text-white hover:bg-transparent !bg-transparent">
              ¿Puedo perder el capital que coloque en una operación privada?
            </AccordionTitle>
            <AccordionContent className="px-0">
              Como en toda colocación de capital no garantizada, existe un nivel de riesgo. Finniu realiza un análisis previo de las empresas que presentan propuestas, pero no puede asegurar el cumplimiento ni garantizar retorno alguno. Recomendamos revisar cada operación con criterio y, de ser necesario, consultar con un asesor financiero o legal independiente antes de comprometer recursos.
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle className="py-8 px-0 text-white hover:bg-transparent !bg-transparent">
              ¿Puedo acceder a este tipo de oportunidades si no soy inversionista profesional?
            </AccordionTitle>
            <AccordionContent className="px-0">
              Las operaciones que facilita Finniu están dirigidas a personas naturales o jurídicas que actúan por cuenta propia bajo relaciones privadas, y que comprenden el tipo de contrato que están celebrando. No realizamos publicidad masiva ni establecemos condiciones generales de inversión en canales públicos. Si deseas explorar estas oportunidades, puedes registrarte en nuestra web y solicitar una llamada informativa para conocer si calificas, sin compromiso.
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
        <ButtonLinkIcon href="/transparency" icon={<ArrowUpLeft />} text="Ver más preguntas" className="mt-4 flex gap-2 justify-center items-center text-white py-4 px-6 rounded-full border-[1px] border-solid bg-transparent hover:bg-white hover:text-black transition duration-150 ease"/>
      </div>
    </section>
  )
}

export default Questions