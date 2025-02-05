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
const calendarLink = "https://calendly.com/finniumeet/30min";

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
                El contrato de administración de capital, el cual es un documento legal que asegura el monto de tu inversión. En caso de incumplimiento, puedes hacer valer tus derechos a través de vías legales, este se genera automáticamente a través de la app.
            </li>
        </ul>

        <div className="h-4"></div>
        <ul className={listStyle}>
            <li>
                El contrato con cheque diferido se otorga a inversiones de montos desde S/.50,000 soles, su función es la misma que el de administración de capital, pero adicional a ello se otorga un cheque por el monto del capital invertido añadiendo una capa adicional de seguridad sobre tu capital.
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
            Contamos con más de 350 inversionistas que han depositado su confianza en Finniu a lo largo del tiempo. Con más de 700 inversiones realizadas en nuestros primeros dos años manejando más de S/10 millones, seguimos creciendo y ofreciendo oportunidades seguras y rentables para nuestros inversionistas.
        </p>
    </div>
);
export const questionIdRisk = (
    <div className={containerStyle}>
        <p className={textStyle}>
            Toda inversión conlleva riesgos. Sin embargo, contamos con contratos de mutuo dinerario que respaldan cada inversión y aseguran la devolución del capital al final del plazo. En estos 3 años, hemos cumplido con el 100% de rentabilidad, logrando un historial sólido de cumplimiento. Además, nuestra estrategia de diversificación nos permite mantener un buen equilibrio entre rentabilidad y seguridad, minimizando riesgos y ofreciendo estabilidad a nuestros inversionistas.        </p>
        <div className="h-4"></div>
        <p className={textStyle}>
            Revisa las garantias <Link href={riskLink} className={linkStyle} target="_blank" rel="noopener noreferrer">aquí.</Link>
        </p>
    </div>
);
export const questionIdHolding = (
    <div className={containerStyle}>
        <p className={textStyle}>
            En Finniu, diversificamos tu inversión en sectores como alimentos, agroindustria, energía y servicios industriales, maximizando rentabilidad y reduciendo riesgos. Te presentamos las empresas de nuestro holding</p>
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
            Sí, cada trimestre enviamos un informe a los inversionistas, detallando el avance del fondo y cómo estamos implementando las estrategias de inversión. Haz una simulación desde el Home de nuestra web y recibirás esta información en nuestro newsletter.        </p>
    </div>
);
export const questionIdBack = (
    <div className={containerStyle}>
        <p className={textStyle}>
            Finniu Capital SAC está inscrita en la Superintendencia de Banca, Seguros y AFP (SBS).
            Puedes verificar esta información directamente en la página oficial de la SBS buscando Finniu Capital SAC en el campo de Nombre o Razón Social.

        </p>
        <button
            onClick={() => window.open("https://www.sbs.gob.pe/supervisados-y-registros/registros/otros-registros/casas-de-cambio-prestamos-y-empenos/empresas-de-prestamos-y-o-empeno", "_blank")}
            className="mt-5 px-6 py-3 bg-[#0D3A5C] text-white rounded-lg hover:bg-[#104D7C] font-bold"
        >
            Ver
            Aquí
        </button>
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
            Agenda tu visita en este link: <Link href={calendarLink} className={linkStyle} target="_blank" rel="noopener noreferrer">https://calendly.com/finniumeet/30min</Link>
        </p>
    </div>
);

export const questionIdCapital = (
    <div className={containerStyle}>
        <p className={textStyle}>
            Actualmente no es posible hacer el retiro del capital en caso de emergencia debido a los acuerdos
            establecidos en el contrato generado al inicio de la inversión.


        </p>
        <div className="py-4">
            <p className={textStyle}>
                Estos acuerdos están diseñados para asegurar que todos los compromisos se cumplan de manera adecuada,
                tanto para el inversionista como para la entidad que gestiona los fondos.

            </p>
        </div>
        <div className="py-4">
            <p className={textStyle}>
                Al mantener el capital invertido durante
                el tiempo estipulado, se protege el rendimiento esperado y la estabilidad de las inversiones.

            </p>
        </div>
        <div className="py-4">
            <p className={textStyle}>
                Entendemos
                que
                pueden surgir situaciones inesperadas, pero estas reglas existen para garantizar que todo funcione de
                manera
                segura y equitativa para todos los participantes.
            </p>
        </div>
    </div>
);