import Link from "next/link"

const Hero = () => {
  return (
    <section className="py-10 md:py-40 px-8 md:px-[25rem] bg-whitePrimary text-black w-full flex flex-col justify-center items-center">
      <div className="w-full flex flex-col items-center justify-center gap-10">
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <h3 className="text-4xl md:text-7xl w-full md:w-[60rem] text-center md:text-start">
            Términos & Condiciones
          </h3>
          <p>
            Conste en el presente documento, un Contrato de Términos y Condiciones de Uso de Sitio Web, (en adelante, las “Condiciones Generales” o el “Contrato”) que celebran, de una parte, FINNIU S.A.C., identificada con RUC No. 20609327210, con domicilio legal, en avenida San Luis No. 2076, Oficina No. 302, Distrito de San Borja, Provincia y Departamento de Lima; debidamente representada por su Gerente General, Junior Diego Mallqui Pilco, identificado con DNI No. 73319393, según poderes inscritos en la partida electrónica No. 14943879 del Registro de Personas Jurídicas de Lima, a quien en adelante se llamará “FINNIU”; y, de la otra parte, el “Usuario”, cuyos nombres/denominación o razón social, domicilio y demás generales de ley se completaran vía www.finniu.com; bajo los siguientes términos:
          </p>
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-4">
          <p className="font-semibold text-xl md:text-2xl">PRIMERO: Definiciones</p>
          <ul className="flex flex-col items-start justify-center gap-4">
            <li>
              <p className="font-semibold text-lg">Autentificación:</p>
              <p>
                Es la acción de acceder al Sitio web, mediante el ingreso de su “Nombre de Usuario” y “Contraseña” en la sección de autenticación del Sitio
              </p>
            </li>
            <li>
              <p className="font-semibold text-lg">Código Promocional:</p>
              <p>
                Hace referencia al código que el Inversionista completa como dato solicitado al momento de invertir su dinero. Este código permite al Inversionista acceder a una promoción que afecta directamente a la Tasa de Rentabilidad, mas no al retorno mensual, otorgando más beneficios
              </p>
            </li>
            <li>
              <p className="font-semibold text-lg">Condiciones Generales:</p>
              <p>
                Es el “Contrato de Términos y Condiciones de Uso de Plataforma de Finniu” que el Inversionista ha aceptado al momento de registrarse y que tiene por finalidad regular el uso del Sitio
              </p>
            </li>
            <li>
              <p className="font-semibold text-lg">Contrato de Administración de Dinero:</p>
              <p>
                Es el contrato que el Usuario firma al momento de adquirir un Plan de Inversión en el Sitio. Sin aceptar este contrato el usuario no podrá adquirir el Plan de Inversión seleccionado dentro del Sitio
              </p>
            </li>
            <li>
              <p className="font-semibold text-lg">Constancia de Transferencia:</p>
              <p>
                Hace referencia a un documento adjunto que el Usuario agrega al Sitio para completar los datos obligatorios que solicita el Sitio al adquirir un Plan de Inversión
              </p>
            </li>
            <li>
              <p className="font-semibold text-lg">Cuenta Administrativa:</p>
              <p>
                Es la cuenta bancaria abierta en una entidad del sistema financiero peruano por parte de FINNIU y que tiene como único objetivo facilitar la administración de dinero invertido por parte de Inversionistas para que FINNIU pueda invertir este dinero en los Proyectos que ofrece el Sitio
              </p>
            </li>
            <li>
              <p className="font-semibold text-lg">Cuenta del Inversionista:</p>
              <p>
                Es la cuenta del Usuario dentro del Sitio, en esta cuenta el Inversionista podrá dar un seguimiento a sus inversiones, solicitar el pago de sus intereses y encontrar toda información relacionada a la inversión realizada dentro del Sitio
              </p>
            </li>
            <li>
              <p className="font-semibold text-lg">Cuenta de Retorno:</p>
              <p>
                Es la cuenta bancaria abierta en una entidad del sistema financiero peruano por parte del Inversionista a nombre del Inversionista y que tiene como único objetivo realizar el pago de las Ganancias de Capital que genera el Inversionista.
                <br />
                El Inversionista puede registrar la Cuenta de Retorno de su preferencia en su cuenta dentro del Sitio. La Cuenta de Retorno consta de dos datos: el nombre del banco y la cuenta bancaria o cuenta interbancaria de titularidad del Inversionista
              </p>
              <p>
                El Inversionista puede registrar la Cuenta de Retorno de su preferencia...
              </p>
            </li>
            <li>
              <p className="font-semibold text-lg">Dinero Invertido:</p>
              <p>
                Es el monto dinerario que un Inversionista transfiere a FINNIU para la adquisición de un Plan de Inversión en el Sitio. El monto dinerario invertido se devuelve al Usuario en la Fecha de Finalización de Contrato
              </p>
            </li>
            <li>
              <p className="font-semibold text-lg">Fecha de Inicio de Contrato:</p>
              <p>
                Es la fecha en la que el Inversionista realiza la transferencia bancaria del Dinero Invertido a la Cuenta Administrativa de titularidad de Finniu
              </p>
            </li>
            <li>
              <p className="font-semibold text-lg">Fecha de Finalización de Contrato:</p>
              <p>
                Es la fecha en la que finaliza el contrato y se debe realizar la devolución del dinero invertido en el Plan de Inversión seleccionado por el Inversionista dentro del Sitio
              </p>
            </li>
            <li>
              <p className="font-semibold text-lg">Fecha de Pago:</p>
              <p>
                Hace referencia a la fecha en la que se debe pagar la ganancia de capital solicita por el Inversionista en el Sitio de Finniu
              </p>
            </li>
            <li>
              <p className="font-semibold text-lg">FINNIU:</p>
              <p>Es Finniu S.A.C</p>
            </li>
            <li>
              <p className="font-semibold text-lg">Ganancia de Capital:</p>
              <p>
                Es la ganancia obtenida por el Inversionista al adquirir un Plan de inversión en el Sitio. Esta ganancia resulta de multiplica el Dinero invertido por la Tasa de rentabilidad del Plan de Inversión
              </p>
            </li>
            <li>
              <p className="font-semibold text-lg">Ganancia de Capital Mensual:</p>
              <p>
                Es la ganancia obtenida por el Inversionista de manera mensual, la ganancia de capital mensual resulta de multiplicar el Dinero Invertido por el Retorno Mensual del Plan de Inversión. La Ganancia de Capital Mensual se refleja en la Cuenta del Inversionista como “Ganancia mensual” o “Ganancia generada”.
                <br />
                El Inversionista puede solicitar el retiro de la ganancia de capital mensual a partir del primer mes de inversión registrado su Cuenta de Retorno en el Sitio
              </p>
            </li>
            <li>
              <p className="font-semibold text-lg">Gastos Operativos:</p>
              <p>
                Son los gastos asumidos por FINNIU por concepto de transferencias interbancarias realizadas a favor del Inversionista
              </p>
            </li>
            <li>
              <p className="font-semibold text-lg">Impuesto a la Renta:</p>
              <p>
                Si el Inversionista es una persona natural se cobrará 5% por cada retiro de Ganancia de Capital que solicite por El Sitio. Este Impuesto a la Renta está sujeto al concepto de Rentas de 2da categoría.
                <br />
                Asimismo, si el Inversionista es una persona jurídica tiene como responsabilidad emitir una factura con el monto igual a la cantidad de Ganancia de Capital que desee retirar en el Sitio, esta factura es con IGV, es decir, la persona jurídica se hace responsable del pago del IGV del 18%
              </p>
            </li>
            <li>
              <p className="font-semibold text-lg">Partes:</p>
              <p>
                Son conjuntamente considerados FINNIU y el Inversionista.
              </p>
            </li>
            <li>
              <p className="font-semibold text-lg">Plan de Inversión:</p>
              <p>
                Hace referencia al plan de inversión escogido por el Inversionista. Los planes de inversión variarán en función al monto mínimo de inversión, el enfoque de la inversión, así como el retorno
              </p>
            </li>
            <li>
              <p className="font-semibold text-lg">Término de Plazo de Inversión:</p>
              <p>
                Es el periodo de tiempo que el Inversionista selecciona en el Sitio para su inversión y hace referencia al período de tiempo que deberá transcurrir desde la fecha en la que se otorgue el préstamo hasta la Fecha de Finalización del Contrato
              </p>
            </li>
            <li>
              <p className="font-semibold text-lg">Proyectos:</p>
              <p>
                Son los proyectos empresariales que ofrece el Sitio como oportunidades de inversión alternativas
              </p>
            </li>
            <li>
              <p className="font-semibold text-lg">Retorno Mensual:</p>
              <p>
                Es la tasa de rentabilidad mensual que percibirá el Inversionista por la inversión realizada en el Plan de Inversión que haya adquirido en el Sitio. Esta tasa se publicita en el Sitio, en la Cuenta del Inversionista, como “retorno mensual” o “rentabilidad mensual”
              </p>
            </li>
            <li>
              <p className="font-semibold text-lg">Sitio:</p>
              <p>
                Es El Sitio web de propiedad de FINNIU con la finalidad de que el Inversionista adquiere un Plan de Inversión para invertir su dinero y generar Ganancia de Capital
                <br />
                El Sitio se encuentra disponible en <Link href="https://www.finniu.com" className="hover:font-semibold">www.finniu.com</Link>
              </p>
            </li>
            <li>
              <p className="font-semibold text-lg">Tasa de Rentabilidad:</p>
              <p>
              Es la tasa de rentabilidad del Plan de Inversión adquirido por el Inversionista en el sitio. La tasa de rentabilidad varía en función al Plan de Inversión y el Plazo de Inversión, hace referencia a la tasa de rentabilidad para todo el Plazo de Inversión seleccionado por el Inversionista
              </p>
            </li>
            <li>
              <p className="font-semibold text-lg">Usuario:</p>
              <p>
                Es la persona natural, o jurídica que celebra el presente Contrato
              </p>
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-4">
          <p className="font-semibold text-xl md:text-2xl">SEGUNDO: Acceso y registro</p>
          <ul className="flex flex-col items-start justify-center gap-4">
            <li className="flex flex-col items-start justify-center gap-1">
              <p>
                1. Para poder ser Usuario del Sitio, es indispensable que una persona cumpla con cada uno de los siguientes requisitos:
              </p>
              <ul>
                <li>
                  - Ser mayor de edad y tener capacidad legal para contratar
                </li>
                <li>
                  - Tener domicilio fijo en la República del Perú
                </li>
                <li>
                  - Aceptar los presentes Términos y Condiciones
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Hero