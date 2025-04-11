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
    title: "¿Cómo consiguen una tasa tan competitiva?",
    phrase: "En Finniu ofrecemos tasas competitivas gracias a nuestra diversificación y a la administración directa de capital en sectores estratégicos del holding, evitando intermediarios bancarios"
  },
  {
    title: "¿Cómo aseguran mi capital? ¿Hay alguna garantía?",
    phrase: capital
  },
  {
    title: "¿Quién es su equipo?",
    phrase: team
  },
  {
    title: "¿Cuántos clientes manejan?",
    phrase: "En Finniu, más de 550 personas han confiado en nuestra gestión a lo largo del tiempo. Con más de 700 operaciones realizadas en nuestros primeros dos años y un volumen gestionado que supera los S/15 millones, seguimos creciendo y desarrollando soluciones financieras estratégicas para quienes buscan optimizar su capital de manera segura y eficiente"
  },
  {
    title: "¿Qué riesgo existe al trabajar con ustedes?",
    phrase: "Toda decisión financiera conlleva un nivel de riesgo. En Finniu, gestionamos cada operación bajo estructuras claras y acuerdos contractuales que establecen los términos y condiciones de cada operación. A lo largo de estos tres años, hemos mantenido un historial sólido de cumplimiento, asegurando que cada operación siga criterios estratégicos para optimizar resultados. Además, nuestra estrategia de diversificación permite mantener un equilibrio entre estabilidad y rendimiento, reduciendo la exposición a riesgos y brindando mayor tranquilidad a quienes confían en nuestra gestión"
  },
  {
    title: "¿Qué empresas componen el holding?",
    phrase: holding
  },
  {
    title: "Comparten información financiera de las empresas del holding?",
    phrase: "Sí, cada trimestre enviamos un informe, detallando el avance del fondo privado y cómo estamos implementando las estrategias"
  },
  {
    title: "¿Dónde se ubican sus oficinas?",
    phrase: where
  },
  {
    title: "¿Puedo retirar mi capital en caso de emergencia?",
    phrase: emergency
  }
]

export default QUESTIONS