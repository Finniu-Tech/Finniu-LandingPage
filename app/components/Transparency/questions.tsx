import Link from "next/dist/client/link";
import React from "react";

const textStyle = "md:text-lg font-normal text-black xs:text-xs";
const textListStyle = "md:text-lg font-normal text-black xs:text-xs";
const listStyle = "md:text-lg font-normal text-black list-disc list-outside ml-4 xs:text-xs";
const linkStyle = "md:text-lg font-bold text-darkBlueColor xs:text-xs";
const containerStyle = "flex flex-col px-4 py-3";
const rateLink = "https://finniu.tawk.help/article/%E2%AD%90%C2%BFc%C3%B3mo-consiguen-una-tasa-tan-competitiva";
const capitalLink = "https://finniu.tawk.help/article/%C2%BFcomo-aseguramos-el-capital-de-nuestros-inversionistas";
const teamLink = "/about";
const riskLink = "https://finniu.tawk.help/article/%C2%BFcomo-aseguramos-el-capital-de-nuestros-inversionistas";
const holdingLink = "https://finniu.tawk.help/article/%C2%BFa-d%C3%B3nde-va-el-dinero-de-tu-inversi%C3%B3n";
const calendarLink = "https://calendly.com/finniumeet/20min";

export const questionIdRate = (
    <div className={containerStyle}>
        <p className={textStyle}>
            En Finniu ofrecemos tasas competitivas gracias a nuestra diversificación y a la administración directa de capital en sectores estratégicos del holding, evitando intermediarios bancarios.
        </p>
        <div className="h-4"></div>
        <p className={textStyle}>
            Se puede revisar el artículo completo <Link href={rateLink} className={linkStyle} target="_blank" rel="noopener noreferrer">aquí.</Link>
        </p>
    </div>
);
export const questionCapital = (
    <div className={containerStyle}>
        <p className={textStyle}>
            En Finniu aseguramos tu capital a través del contrato de administración de capital y con cheque diferido.
        </p>
        <div className="h-4"></div>
        <ul className={listStyle}>
            <li>
                El contrato de administración de capital, el cual es un documento legal que asegura el monto de tu patrimonio transferido. En caso de incumplimiento, puedes hacer valer tus derechos a través de vías legales, este se genera automáticamente a través de la app.
            </li>
        </ul>

        <div className="h-4"></div>
        <ul className={listStyle}>
            <li>
                El contrato con cheque diferido se otorga a clientes de montos desde S/.50,000 soles, su función es la misma que el de administración de capital, pero adicional a ello se otorga un cheque por el monto del capital invertido añadiendo una capa adicional de seguridad sobre tu capital.
            </li>
        </ul>

        <div className="h-4"></div>

        <p className={textStyle}>
            Se puede revisar el artículo completo <Link href={capitalLink} className={linkStyle} target="_blank" rel="noopener noreferrer" >aquí.</Link>
        </p>
    </div>
);

export const questionIdTeam = (
    <div className={containerStyle}>
        <p className={textStyle}>
            Puedes ver quién compone nuestro equipo desde la sección de <Link href={teamLink} className={linkStyle}>Nosotros</Link>
        </p>
    </div>
);
export const questionIdClient = (
    <div className={containerStyle}>
        <p className={textStyle}>
            En Finniu, más de personas han confiado en nuestra gestión a lo largo del tiempo. Con más de 700 operaciones realizadas en nuestros primeros dos años y un volumen gestionado que supera los S/10 millones, seguimos creciendo y desarrollando soluciones financieras estratégicas para quienes buscan optimizar su capital de manera segura y eficiente.
        </p>
    </div>
);
export const questionIdRisk = (
    <div className={containerStyle}>
        <p className={textStyle}>
            Toda decisión financiera conlleva un nivel de riesgo. En Finniu, gestionamos cada operación bajo estructuras claras y acuerdos contractuales que establecen los términos y condiciones de cada operación.
A lo largo de estos tres años, hemos mantenido un historial sólido de cumplimiento, asegurando que cada operación siga criterios estratégicos para optimizar resultados. Además, nuestra estrategia de diversificación permite mantener un equilibrio entre estabilidad y rendimiento, reduciendo la exposición a riesgos y brindando mayor tranquilidad a quienes confían en nuestra gestión.        </p>
        <div className="h-4"></div>
        <p className={textStyle}>
            Revisa las garantías <Link href={riskLink} className={linkStyle} target="_blank" rel="noopener noreferrer">aquí.</Link>
        </p>
    </div>
);
export const questionIdHolding = (
    <div className={containerStyle}>
        <p className={textStyle}>
            En Finniu, diversificamos tu capital en sectores como alimentos, agroindustria, energía y servicios industriales, maximizando rentabilidad y reduciendo riesgos. Te presentamos las empresas de nuestro holding</p>
        <div className="h-4"></div>
        <ul className={listStyle}>
            <li>
                Ento Green SAC: Producción de fertilizantes orgánicos y asesoría agroindustrial.
            </li>
            <p className={textListStyle}>
                RUC: 20606715073
            </p>
        </ul>
        <div className="h-4"></div>
        <ul className={listStyle}>
            <li>
                Distribuidora Industrial Carter SAC : Suministros e instalación de maquinaria industrial.
            </li>
            <p className={textListStyle}>
                RUC: 20609766108
            </p>
        </ul>
        <div className="h-4"></div>
        <ul className={listStyle}>
            <li>
                Proteína Sostenible SAC: Suplementos alimenticios con certificación de la FDA, bajo las marcas DEMOLITOR y PIRUW.
            </li>
            <p className={textListStyle}>
                RUC: 20605009531
            </p>
        </ul>
        <div className="h-4"></div>
        <ul className={listStyle}>
            <li>
                New Energy Corporation SAC: Mantenimiento y construcción dentro de los sectores industrial y energético.
            </li>
            <p className={textListStyle}>
                RUC: 20604850810
            </p>
        </ul>
        <div className="h-4"></div>
        <p className={textStyle}>
            Revisa las garantias <Link href={holdingLink} className={linkStyle} target="_blank" rel="noopener noreferrer">aquí.</Link>
        </p>

    </div>
);
export const questionIdInformation = (
    <div className={containerStyle}>
        <p className={textStyle}>
            Sí, cada trimestre enviamos un informe, detallando el avance del fondo privado y cómo estamos implementando las estrategias. Haz una simulación desde el Home de nuestra web y recibirás esta información en nuestro newsletter.</p>
    </div>
);

export const questionIdLocation = (
    <div className={containerStyle}>
        <p className={textStyle}>
            Sí, contamos con oficinas ubicadas en Av. San Luis 2076, San Borja, Lima ¡Nos encantaría recibirte si deseas
            conocer más sobre Finniu!
        </p>
        <div className="h-4"></div>
        <p className={textStyle}>
            Agenda tu visita en este link: <Link href={calendarLink} className={linkStyle} target="_blank" rel="noopener noreferrer">https://calendly.com/finniumeet/20min</Link>
        </p>
    </div>
);

export const questionIdCapital = (
    <div className={containerStyle}>
        <p className={textStyle}>
            Actualmente, los retiros anticipados no están contemplados dentro de los acuerdos establecidos en el contrato, ya que estos determinan los plazos y condiciones bajo los cuales se gestiona el capital.
        </p>
        <div className="py-4">
            <p className={textStyle}>
                Estos acuerdos están diseñados para garantizar el cumplimiento de los compromisos asumidos y mantener la estabilidad de cada operación. Respetar los plazos establecidos permite optimizar los resultados y asegurar el cumplimiento de las condiciones pactadas.
            </p>
        </div>
        <div className="py-4">
            <p className={textStyle}>
                Entendemos que pueden surgir imprevistos, por lo que, si necesitas evaluar alternativas, nuestro equipo está disponible para brindarte orientación y acompañamiento en el proceso.
            </p>
        </div>
    </div>
);