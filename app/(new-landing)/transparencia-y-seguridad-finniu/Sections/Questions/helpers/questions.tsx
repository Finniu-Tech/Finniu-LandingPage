import Link from "next/link"

const capital = () => {
  return (
    <div className="flex flex-col gap-4">
      <p>
        En Finniu aseguramos tu capital a través del contrato de administración de capital y con cheque diferido
      </p>
      <ul className="list-disc flex flex-col gap-4 ml-4">
        <li>
          El contrato de administración de capital, el cual es un documento legal que asegura el monto de tu patrimonio transferido. En caso de incumplimiento, puedes hacer valer tus derechos a través de vías legales, este se genera automáticamente a través de la app
        </li>
        <li>
          El contrato con cheque diferido se otorga a clientes de montos desde S/.50,000 soles, su función es la misma que el de administración de capital, pero adicional a ello se otorga un cheque por el monto del capital invertido añadiendo una capa adicional de seguridad sobre tu capital
        </li>
      </ul>
    </div>
  )
}

const team = () => {
  return (
    <p>
      Puedes ver quién compone nuestro equipo desde la sección de
      <Link href="/about/team" className="ml-[0.30rem] border-b-[1px] border-black hover:border-b-purplePrincipal hover:text-purplePrincipal transition duration-150 ease">
        Nosotros
      </Link>
    </p>
  )
}

const holding = () => {
  return (
    <div className="flex flex-col gap-4">
      <p>
        En Finniu, diversificamos tu capital en sectores como alimentos, agroindustria, energía y servicios industriales, maximizando rentabilidad y reduciendo riesgos. Te presentamos las empresas de nuestro holding
      </p>
      <ul className="list-disc flex flex-col gap-4 ml-4">
        <li>
          Ento Green SAC: Producción de fertilizantes orgánicos y asesoría agroindustrial
          <br />
          RUC: 20606715073
        </li>
        <li>
          Distribuidora Industrial Carter SAC : Suministros e instalación de maquinaria industrial
          <br />
          RUC: 20609766108
        </li>
        <li>
          Proteína Sostenible SAC: Suplementos alimenticios con certificación de la FDA, bajo las marcas DEMOLITOR y PIRUW
          <br />
          RUC: 20605009531
        </li>
        <li>
          New Energy Corporation SAC: Mantenimiento y construcción dentro de los sectores industrial y energético
          <br />
          RUC: 20604850810
        </li>
      </ul>
      <p>
        Puedes ver más a detalle las empresas de nuestro portafolio
        <Link href="/about/team" className="ml-[0.30rem] border-b-[1px] border-black hover:border-b-purplePrincipal hover:text-purplePrincipal transition duration-150 ease">
          aquí
        </Link>  
      </p>
    </div>
  )
}

const where = () => {
  return (
      <p>
        Nuestras oficinas se ubican en
        <Link href="https://maps.app.goo.gl/bZRWWzyG6fpHmUc87" className="ml-[0.30rem] border-b-[1px] border-black hover:border-b-purplePrincipal hover:text-purplePrincipal transition duration-150 ease">
        Av. San Luis 2076, San Borja - Lima
      </Link>
      </p>
  )
}

const emergency = () => {
  return (
    <p>
      Actualmente, los retiros anticipados no están contemplados dentro de los acuerdos establecidos en el contrato, ya que estos determinan los plazos y condiciones bajo los cuales se gestiona el capital.
      <br />
      Estos acuerdos están diseñados para garantizar el cumplimiento de los compromisos asumidos y mantener la estabilidad de cada operación. Respetar los plazos establecidos permite optimizar los resultados y asegurar el cumplimiento de las condiciones pactadas.
      <br />
      Entendemos que pueden surgir imprevistos, por lo que, si necesitas evaluar alternativas, nuestro equipo está disponible para brindarte orientación y acompañamiento en el proceso
    </p>
  )
}

const QUESTIONS = [
  {
    title: "¿Qué es Finniu Capital S.A.C. y cuál es su modelo de negocio?",
    phrase: "Finniu Capital es una plataforma digital que conecta a inversionistas con empresas que buscan financiamiento privado mediante contratos estructurados. No administramos directamente el dinero ni captamos fondos del público; facilitamos la conexión entre ambas partes de forma segura, transparente y legal."
  },
  {
    title: "¿Finniu Capital S.A.C. cobra alguna comisión?",
    phrase: "No. El uso de la plataforma es completamente gratuito para los inversionistas. Los costos operativos son asumidos por las empresas que publican oportunidades de financiamiento."
  },
  {
    title: "¿Ofrecen créditos?",
    phrase: "No. Finniu no otorga préstamos. Solo conecta a inversionistas con empresas que ofrecen oportunidades de inversión privada mediante contratos formales."
  },
  {
    title: "¿Finniu Capital S.A.C. está inscrito en la SBS?",
    phrase: "Sí. Finniu Capital S.A.C. está registrada como entidad de préstamos en la SBS, y supervisada por la UIF en materia de prevención de lavado de activos. No captamos capital como fondo de inversión privado."
  },
  {
    title: "¿Finniu está inscrito en la SMV?",
    phrase: "No. Finniu opera bajo el régimen de oferta privada, por lo que no requiere inscripción ante la SMV. No difundimos condiciones específicas de inversión públicamente y respetamos los límites normativos."
  },
  {
    title: "¿Cómo seleccionan a las empresas que solicitan financiamiento?",
    phrase: "Cada empresa pasa por un proceso de análisis que evalúa sus estados financieros, historial crediticio, modelo de negocio, capacidad de pago y reputación de sus representantes legales antes de ser aprobada."
  },
  {
    title: "¿Qué tipo de contratos respaldan mi inversión?",
    phrase: "Las inversiones se respaldan con contratos de facilidades crediticias firmados entre el inversionista y la empresa receptora. Estos pueden incluir pagarés, letras u otras garantías adicionales según cada operación."
  },
  {
    title: "¿Qué pasa si la empresa no cumple con los pagos?",
    phrase: "El contrato establece mecanismos legales como cobranza judicial, ejecución de pagarés o arbitraje. Finniu ofrece orientación inicial gratuita y puede conectarte con un abogado especializado para iniciar el proceso legal."
  },
  {
    title: "¿Puedo perder mi dinero?",
    phrase: "Toda inversión privada conlleva riesgo. Aunque Finniu realiza un análisis riguroso de cada empresa, no se puede garantizar la recuperación total del capital. Recomendamos revisar bien la información y consultar con un asesor financiero si lo consideras necesario."
  },
  {
    title: "¿Qué pasa con mi contrato si fallezco?",
    phrase: "En caso de fallecimiento, el contrato forma parte del patrimonio del inversionista y será transferido a sus herederos conforme al proceso de sucesión establecido en el Código Civil."
  },
  {
    title: "¿Por qué estas empresas no van a un banco?",
    phrase: "Muchas empresas encuentran en Finniu mayor agilidad, menores requisitos y condiciones más flexibles que las ofrecidas por la banca tradicional."
  },
  {
    title: "¿Tengo que declarar esta renta ante SUNAT?",
    phrase: "Si la empresa retiene y paga el Impuesto a la Renta a nombre del inversionista, no es necesario declarar. Finniu solicita a las empresas cumplir con esta obligación y entregar el certificado respectivo. Recomendamos siempre consultar con tu contador."
  },
  {
    title: "¿Qué sucede si la empresa cambia de representante legal?",
    phrase: "El contrato sigue siendo válido mientras el representante haya estado facultado al momento de la firma. Si se desea extender la relación contractual, el nuevo representante debe firmar una adenda."
  },
  {
    title: "¿Qué nivel de respaldo tienen las operaciones en la plataforma?",
    phrase: "Cada operación se formaliza mediante contrato de facilidades crediticias, con evaluación previa de la empresa. Algunas incorporan pagarés o garantías adicionales, aunque el riesgo no se elimina por completo."
  },
  {
    title: "¿Qué ocurre si la empresa no cumple con el contrato?",
    phrase: "El inversionista puede ejecutar las acciones legales contempladas en el contrato, como arbitraje o cobranza judicial. La recuperación del capital dependerá de la solvencia de la empresa al momento de la ejecución."
  },
  {
    title: "¿Finniu inicia el proceso legal en caso de incumplimiento? ¿Quién asume los costos?",
    phrase: "Finniu no actúa como parte en los contratos. Brinda orientación inicial y puede referirte a un abogado. Los costos del proceso legal son asumidos por el inversionista, salvo que se indique lo contrario en el contrato."
  }
]

export default QUESTIONS