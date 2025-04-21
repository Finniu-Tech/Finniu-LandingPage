import Link from "next/link"

const Hero = () => {
  return (
    <section className="py-10 md:py-40 px-8 md:px-[25rem] bg-whitePrimary text-black w-full flex flex-col justify-center items-center">
      <div className="w-full max-w-6xl mx-auto px-4 flex flex-col gap-6">
        <h1 className="text-3xl md:text-5xl font-bold">Términos y Condiciones</h1>
        <section className="space-y-8 text-justify text-base text-gray-800">
          <div>
            <h2 className="text-2xl font-semibold">1. Introducción</h2>
            <p>
              FINNIU S.A.C., con RUC N° 20609327210 y con domicilio en Av. San Luis Nro. 2076 Urb. San Borja Norte,
              Oficina 302, distrito de San Borja, provincia y departamento de Lima, (en adelante, “FINNIU”) pone en
              conocimiento de LOS USUARIOS de este portal web (en adelante, “EL USUARIO”, “LOS USUARIOS”, “USUARIO” y/o
              “USUARIOS”) por medio de este documento los términos y condiciones generales del uso (en adelante,
              “Términos y Condiciones”) que serán aplicables a la página web (https://finniu.com/) y aplicativo móvil
              (FINNIU) (en adelante, la “Plataforma”). EL USUARIO y FINNIU serán designados en conjunto como las
              “Partes”. El presente documento contiene las cláusulas que rigen los Términos y Condiciones del uso de la
              Plataforma de FINNIU. Los Términos y Condiciones también podrán ser referidos, indistintamente, como el
              “presente documento”.
            </p>
            <p>
              El contenido de esta página web tiene exclusivamente fines informativos y no constituye de ninguna manera
              una oferta al público, o una invitación a ofrecer, ya sea de servicios o productos financieros dentro de
              la República del Perú. Asimismo, en ninguna circunstancia debe entenderse que la información contenida en
              este sitio es una recomendación de inversión.
            </p>
            <p>
              Al acceder, navegar, rastrear, scrapear o utilizar de cualquier forma en la Plataforma, EL USUARIO acepta
              sin reservas todas las disposiciones incluidas en los presentes Términos y Condiciones y la Política de
              Privacidad de FINNIU y todas las demás directrices o políticas a las que se hace referencia en el presente
              documento (en adelante, el "Acuerdo de Usuario"). Este Acuerdo de Usuario constituye un contrato
              legalmente vinculante entre EL USUARIO y FINNIU.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">2. Definiciones</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Usuario(s):</strong> Toda persona natural que acceda y utilice la Plataforma (Página Web y/o
                aplicativo móvil) siempre que sea mayor de edad.
              </li>
              <li><strong>Contenido:</strong> Cualquier información, datos, textos, imágenes, diseños, audio, vídeo,
                código fuente, programas informáticos, descargas digitales, software, bases de datos, nombres
                comerciales, marcas, logotipos y/o cualquier otro signo distintivo, o cualquier otro material que se
                publique o ponga a disposición en la Plataforma.
              </li>
              <li><strong>Datos Personales:</strong> Cualquier información que permita identificar o hacer identificable
                a un individuo.
              </li>
              <li><strong>Leyes vigentes:</strong> Todas las normas jurídicas aplicables en el Perú.</li>
              <li><strong>Plataforma:</strong> El Sitio Web y aplicativo móvil incluyendo sus herramientas disponibles.
              </li>
              <li><strong>Registro:</strong> Completar el formulario de registro de la Plataforma.</li>
              <li><strong>Autentificación:</strong> Acción de ingresar a la Plataforma con usuario y contraseña.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">3. ¿Quiénes somos?</h2>
            <p>
              Somos una sociedad gestora de fondos de inversión de oferta privada dirigida exclusivamente para
              inversionistas institucionales. Asimismo, brindamos asesoría en educación financiera, contenido sobre las
              tendencias del mercado, información sobre el portafolio de inversiones de FINNIU y brindamos apoyo a
              empresas de alta escalabilidad y/o sobre el acceso global al mercado de capitales.
            </p>
            <p>
              De conformidad con el artículo 12 de la Ley de Fondos de Inversión y sus Sociedades Administradoras,
              nuestra empresa, así como los fondos de inversión que administramos, no se encuentra bajo supervisión
              alguna de la Superintendencia del Mercado de Valores (SMV).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">4. Alcance del uso</h2>
            <p>
              Los servicios de FINNIU se encuentran disponibles tanto en el territorio peruano como en el extranjero, y
              podrán ser adquiridos únicamente por personas naturales.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">5. Funcionalidades de la Plataforma</h2>
            <p>
              El uso de la Plataforma tiene por función principal el permitir al USUARIO realizar préstamos en calidad
              de inversión a FINNIU mediante Fondos de Inversión (en adelante, los “Servicios”) e informar sobre los
              proyectos en los que se enfoca FINNIU, su trayectoria, sección de “finantips”, sección de “mis finanzas”,
              simulación de inversión así como brindar información sobre los canales de contacto y soporte.
            </p>
            <p>
              Sobre la naturaleza de los Servicios realizados en la Plataforma, en primer lugar, LOS USUARIOS declaran
              conocer que estos no corresponden a una modalidad de Financiamiento Participativo Financiero, entendido,
              según el Decreto de Urgencia Nro. 013-2020 (en adelante, el “Decreto”), como aquel mediante el cual se
              conecta a través de una plataforma a inversionistas con receptores que solicitan un financiamiento para un
              proyecto personal y/o empresarial con el que brindarán un retorno para los inversionistas.
            </p>
            <p>
              En esa línea, mediante la comunicación de fecha 16 de septiembre de 2022, la Superintendencia de Mercado
              de Valores (SMV) señaló que el modelo de negocio de FINNIU no califica como Financiamiento Participativo
              Financiero, ya que el obligado principal en los préstamos realizados por LOS USUARIOS es FINNIU, por
              tanto, no se encarga de conectar a inversionistas y receptores, sino que los derechos y obligaciones
              referentes al préstamo se ejecutan entre EL USUARIO y FINNIU.
            </p>
            <p>
              Por lo señalado, los Servicios de FINNIU no se encuentran en el ámbito de aplicación del Decreto ni de la
              Resolución de Superintendente Nro. 00045-2021-SMV/02, el Reglamento de la Actividad de Financiamiento
              Participativo Financiero.
            </p>
            <p>
              En segundo lugar, LOS USUARIOS declaran conocer que los Servicios ofrecidos en la Plataforma tampoco
              tratan de un supuesto de intermediación financiera, entendida en la normativa como la actividad que
              realizan las empresas del sistema financiero consistente en la captación de fondos bajo cualquier
              modalidad, y su colocación mediante la realización de cualquiera de las operaciones permitidas en la Ley
              Nro. 26702, Ley General del Sistema Financiero y del Sistema de Seguros y Orgánica de la Superintendencia
              de Banca y Seguros.
            </p>
            <p>
              Considerando la definición expuesta, los Servicios de FINNIU no están dentro del ámbito de aplicación de
              la Ley mencionada, debido a que, posterior a la obtención del préstamo, no colocará el dinero recibido de
              forma pública, sino que solventará los fines de su giro de negocio, mediante la inversión en determinados
              de manera privada.
            </p>
            <p>
              FINNIU se reserva la facultad de efectuar, en cualquier momento y sin necesidad de previo aviso,
              modificaciones y actualizaciones de la información contenida en la Plataforma o en la configuración y
              presentación de esta.
            </p>
            <p>
              FINNIU se reserva el derecho a cancelar o modificar total o parcialmente, parte o algunos de los productos
              o servicios ofrecidos en la Plataforma o crear nuevas opciones que resulten en mayor o menor medida más o
              menos beneficiosas que las ofrecidas con anterioridad. Esto se hará cuando lo considere conveniente, sin
              más requisito que la publicación de la cancelación, modificación o creación por los mismos medios
              utilizados para comunicar los servicios previos. FINNIU se reserva el derecho a dirigir nuevos y/o
              distintos servicios exclusivos sólo a aquellos USUARIOS que estime corresponder.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">6. Condición de Usuario y Aceptación de los Términos y
              Condiciones</h2>
            <p>
              Si EL USUARIO hace uso de la Plataforma de FINNIU, está aceptando el Acuerdo de Usuario de FINNIU para
              adquirir sus productos y/o servicios y que cumple los requisitos para calificar como tal. Por tanto, EL
              USUARIO declara lo siguiente:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Ser una persona natural mayor o igual a dieciocho (18) años,</li>
              <li>Tener capacidad para discernir y que ha accedido a la Plataforma por su propia voluntad, no habiendo
                sido coaccionado para ello, así como que el uso que lleva a cabo de ella lo hace por su sola y única
                cuenta y riesgo,
              </li>
              <li>Tener domicilio fijo en la República del Perú,</li>
              <li>Aceptar los presentes Términos y Condiciones.</li>
            </ul>
            <p>
              Asimismo, la condición del “USUARIO” de FINNIU es únicamente para inversionistas institucionales, conforme
              este término se define en la Resolución SMV No. 021-2013-SMV/01 y sus normas modificatorias. Este sitio no
              está destinado para y no debe acceder a él otro tipo de inversionistas, ya que su contenido está enfocado
              para inversionistas sofisticados con capacidad de comprender, gestionar y evaluar adecuadamente los
              riesgos asociados a cualquier decisión de inversión que realice de tiempo en tiempo, salvo en lo que se
              refiere a (i) educación financiera y/o (ii) la sección de “Finantips”.
            </p>
            <p>
              Queda claramente establecido que FINNIU podrá modificar sin previo aviso los criterios de admisibilidad a
              la Plataforma, criterios que serán siempre de conocimiento público y que se encontrarán publicados en la
              Plataforma.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">7. Registro y uso de la Plataforma</h2>
            <p>Para que EL USUARIO pueda acceder a la Plataforma (página web “https://finniu.com/” y aplicativo móvil
              “Finniu”), debe haberse registrado completando el formulario de registro con los siguientes datos:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Nombre completo</li>
              <li>Documento de identificación</li>
              <li>Correo electrónico</li>
              <li>Teléfono móvil</li>
            </ul>
            <p>Asimismo, EL USUARIO debe elegir un nombre de usuario y contraseña. Es su responsabilidad mantener la
              seguridad de su cuenta y notificar cualquier actividad sospechosa.</p>
            <p>FINNIU podrá restablecer la contraseña de forma automática a su discreción, notificando a EL USUARIO por
              correo electrónico. Es responsabilidad del USUARIO mantener sus datos actualizados.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">8. Obligación de mantener actualizados los datos personales</h2>
            <p>Los datos personales introducidos por todo USUARIO en la Plataforma deberán ser exactos, completos y
              veraces en todo momento. FINNIU se reserva el derecho de suspender la cuenta de los USUARIOS cuyos datos
              no hayan podido ser confirmados.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">9. Navegación del usuario</h2>
            <p>La navegación en la Plataforma es gratuita. EL USUARIO se compromete a utilizar la Plataforma conforme al
              Acuerdo de Usuario, la moral y el orden público. Queda prohibido el uso con fines fraudulentos o
              ilícitos.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">10. Uso de la Plataforma</h2>
            <p>FINNIU le concede a EL USUARIO el permiso para utilizar la Plataforma sujeto a las restricciones que se
              detallan en el siguiente punto. EL USUARIO no debe usar la Plataforma de manera que distraiga de sus
              responsabilidades legales o de seguridad.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">11. Restricciones de uso y obligaciones del usuario</h2>
            <p>EL USUARIO se compromete a no realizar acciones que perjudiquen la Plataforma o a otros usuarios,
              incluyendo pero no limitándose a:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Usar la Plataforma con fines ilícitos o dañinos</li>
              <li>Modificar o interferir con datos o funcionalidades</li>
              <li>Intentar acceder sin autorización</li>
              <li>Transmitir virus o software malicioso</li>
              <li>Realizar spam o sobrecargar el sistema</li>
              <li>Solicitar información personal de menores</li>
            </ul>
            <p>FINNIU se reserva el derecho de suspender cuentas y tomar las medidas legales necesarias ante cualquier
              uso indebido.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">12. Incumplimiento</h2>
            <p>En caso de incumplimiento de los presentes Términos y Condiciones o de la Política de Privacidad por
              parte de EL USUARIO, FINNIU podrá suspender o denegar el acceso a la Plataforma, así como presentar las
              denuncias o reclamaciones pertinentes ante las autoridades competentes.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">13. Cancelación del contrato por el usuario</h2>
            <p>EL USUARIO puede dar de baja su cuenta en cualquier momento desde la sección “Perfil de Usuario”. Al
              hacerlo, perderá el acceso a la Plataforma, manteniéndose vigentes sólo las obligaciones relacionadas con
              inversiones en curso.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">14. Garantías y exenciones</h2>
            <p>La Plataforma se ofrece "tal cual". FINNIU no garantiza la disponibilidad, exactitud ni resultados
              derivados del uso del servicio. No se hacen garantías sobre rentabilidad, exactitud de la información, ni
              resultados futuros.</p>
            <p>FINNIU garantiza únicamente el cumplimiento del contrato de gestión de fondos, políticas de inversión y
              entrega de información precisa y periódica. Esta garantía no cubre fluctuaciones del mercado ni eventos
              fortuitos.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">15. Limitación de responsabilidad</h2>
            <p className="mb-2">
              FINNIU no garantiza la rentabilidad de ninguna inversión, ni que las mismas se mantendrán en el tiempo.
              Las inversiones en fondos de inversión están sujetas a riesgos de mercado, incluyendo, entre otros, el
              riesgo de pérdida de capital. La decisión de invertir en cualquiera de los fondos de inversión ofrecidos
              es exclusiva del inversionista calificado, quien debe basar su decisión de inversión en su propia
              evaluación y análisis de la información relevante.
            </p>
            <p className="mb-2">
              FINNIU procurará, en todo momento y hasta donde sea posible, resolver las fallas técnicas en la
              Plataforma. Sin perjuicio de ello, FINNIU podrá suspender el uso de la Plataforma, mediante bajas
              programadas de hasta 72 horas. La notificación a LOS USUARIOS se considerará entregada en el momento en
              que se produzca la recepción en su correo electrónico o teléfono registrado en la Plataforma.
            </p>
            <p className="mb-2">
              Si bien FINNIU busca asegurar que la información contenida en esta página web sea precisa y esté
              actualizada, no garantizamos la idoneidad, exactitud, oportunidad o integridad de ésta y no aceptamos
              ninguna responsabilidad derivada de cualquier inexactitud u omisión en el uso o dependencia de la
              información brindada en esta página web.
            </p>
            <p className="mb-2">
              FINNIU no asume responsabilidad por el retraso, borrado, entrega equivocada o falla al guardar cualquier
              información del USUARIO, o sus criterios de personalización.
            </p>
            <p className="mb-2">
              FINNIU no asume responsabilidad por errores técnicos, como fallas del equipo o programas informáticos, o
              fallas de internet o de equipos de impresión que utilice EL USUARIO para acceder a la Plataforma, así como
              tampoco el bloqueo de seguridad por parte de nuestro sistema de cobros por diversos motivos establecidos
              para evitar el fraude que impida el continuar con la compra de manera regular.
            </p>
            <p className="mb-2">
              FINNIU podrá utilizar diversos medios para identificar a LOS USUARIOS, pero no se responsabiliza por la
              certeza de los datos personales que sus USUARIOS pongan a su disposición al registrarse en la Plataforma.
              LOS USUARIOS garantizan y responden, en cualquier caso, de la veracidad, exactitud, vigencia y
              autenticidad de los datos personales puestos a disposición de EL USUARIO.
            </p>
            <p className="mb-2">
              Estamos comprometidos a proporcionarle los más altos estándares de servicio. Puede encontrar información
              sobre nuestro procedimiento de atención de reclamos y quejas en nuestra web <a href="https://finniu.com/"
                                                                                             className="text-blue-600 underline">https://finniu.com/</a> o
              escribirnos un correo a <a href="mailto:hola@finniu.com"
                                         className="text-blue-600 underline">hola@finniu.com</a>. Conforme a lo
              establecido en el Código de Protección y Defensa del Consumidor, Ley Nº 29571, FINNIU pone a su
              disposición en la Plataforma, un libro de reclamaciones virtual donde usted podrá formular una queja o
              reclamo respecto del Servicio ofrecido.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">16. Exclusión de responsabilidad</h2>
            <p>EL USUARIO declara, reconoce y acepta que FINNIU solo administra y gestiona los fondos de inversión, de
              acuerdo a lo descrito en los presentes Términos y Condiciones. Por tanto, reconoce y acepta de manera
              anticipada que FINNIU se encuentra exonerada de todo tipo de responsabilidad en los siguientes
              supuestos:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Respecto de causas ajenas a FINNIU:</strong> FINNIU no será responsable por incumplimientos o
                daños y perjuicios ocasionados a LOS USUARIOS por causas imputables a terceros ajenos.
              </li>
              <li><strong>Respecto a la información, comunicaciones y contenidos:</strong> FINNIU podrá modificar la
                Plataforma sin previo aviso y no será responsable por el contenido generado o difundido por terceros
                accesible desde la Plataforma.
              </li>
              <li><strong>Respecto de errores o virus en la Plataforma:</strong> FINNIU no se hace responsable por daños
                derivados de amenazas externas o tecnológicas.
              </li>
              <li><strong>Respecto de la utilización de la Cuenta y/o claves de acceso:</strong> El uso de la Plataforma
                es bajo responsabilidad del USUARIO, incluyendo fallas técnicas y uso indebido.
              </li>
              <li><strong>Respecto del restablecimiento de contraseña:</strong> FINNIU no responde por pérdidas
                derivadas de la gestión de contraseñas por parte del USUARIO.
              </li>
              <li><strong>Respecto al comportamiento de LOS USUARIOS:</strong> FINNIU no es responsable por actos
                dolosos o negligentes de los USUARIOS o eventos fortuitos.
              </li>
              <li><strong>Respecto de productos y servicios de terceros:</strong> Las transacciones realizadas con
                terceros en la Plataforma son responsabilidad exclusiva de dichos terceros.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">17. Causas de Fuerza Mayor</h2>
            <p>FINNIU no será considerado responsable de incumplimiento en términos del presente Contrato, causados en
              razón de cualquier evento imprevisto, fuerza de su control, en términos de la normativa civil aplicable.
              Tales como desastres naturales, fallas eléctricas, fallas en el servidor, servicio de proveedores terceros
              fallidos, interrupciones del servicio, embargo, disputas laborales, bloqueos y huelgas, disturbios,
              guerras, inundaciones, insurrecciones, modificaciones a la normativa aplicable o decretos y reglamentos de
              la autoridad competente.</p>
            <p>EL USUARIO acepta y se obliga a no reclamar de FINNIU indemnización, daños y perjuicios o cualquier otro
              tipo de menoscabo en su software o reputación por cualquier tipo de falla en los servicios de FINNIU.</p>
            <p>FINNIU bajo ninguna circunstancia y por ningún motivo responderá por el mal uso de la Plataforma por
              parte de la Empresa bien por alguna ilegalidad o uso fraudulento del Software y/o los servicios
              proporcionados por FINNIU.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">18. INDEMNIDAD</h2>
            <p className="mb-2">
              EL USUARIO acepta defender, indemnizar y mantener indemne a FINNIU y cada uno de sus directores,
              funcionarios, agentes, contratistas, socios y empleados, de y contra cualquier pérdida, responsabilidad,
              reclamo, demanda, daños, incluidos los costos y gastos, responsabilidades y honorarios razonables de
              abogados, de cualquier reclamación o demanda presentada por cualquier tercero debido a o que surja de (i)
              su Contenido de Usuario, (ii) cualquier violación de este Acuerdo de Usuario, (iii) cualquier contenido de
              terceros que EL USUARIO publicara o comparta a través de la Plataforma, (iv) su uso del Servicio o de la
              Plataforma, (v) su conducta en relación con el Servicio o la Plataforma, o con otros USUARIOS del Servicio
              o de la Plataforma.
            </p>
            <p>
              FINNIU se reserva el derecho, a su cargo, de asumir la defensa y el control exclusivo de cualquier asunto
              por el que EL USUARIO deba indemnizarnos y EL USUARIO acepta cooperar con la defensa de FINNIU de estas
              reclamaciones. EL USUARIO acepta no llegar a ningún acuerdo sin el consentimiento previo por escrito de
              FINNIU, quien hará todos los esfuerzos razonables para notificarle cualquier reclamación, acción o
              procedimiento apenas tenga conocimiento de ello.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">19. Derechos de propiedad intelectual y derechos de autor</h2>
            <p>Todo el software asociado a la Plataforma, así como todos los contenidos disponibles en el mismo,
              incluyendo, pero sin limitarse al diseño, características interactivas, cabeceras, sus imágenes,
              fotografías, dibujos, representaciones gráficas, íconos, código fuente (HTML, CSS, Javascripts), textos,
              diseños, documentos, audios y/o fragmentos de audio, programas informáticos, descargas digitales, bases de
              datos, vídeos, nombres de servicios de gestión y demás elementos gráficos constitutivos, así como la
              selección y diseño del contenido difundidos a través de éste, así como su presentación y montaje,
              valoraciones agregadas de LOS USUARIOS y todos los demás elementos y componentes de la Plataforma,
              excluyendo el Contenido de Usuario y el Contenido de Terceros, son de titularidad exclusiva de FINNIU,
              quien ostenta los derechos de explotación.</p>
            <p>Por tanto, no pueden ser utilizados ni se pueden copiar, imitar o utilizar, en todo o en parte, sin la
              previa autorización por escrito de FINNIU; al igual que el contenido de la Plataforma y los procesos de
              FINNIU para la prestación de sus servicios. Queda prohibida la reproducción total o parcial del software,
              incluso para uso personal, por cualquier medio y bajo cualquier forma, así como la explotación,
              reproducción, comunicación pública, difusión, divulgación y/o transformación del software, sus contenidos
              y sus Servicios.</p>
            <p>Asimismo, FINNIU es propietaria de los derechos de propiedad intelectual incluyendo derechos de autor,
              marcas comerciales, marcas de servicio, nombres comerciales y otros derechos intelectuales y/o propiedad
              industrial de los Servicios y la Plataforma y de todos sus contenidos que forme o haya formado parte de la
              Plataforma, los mismos que se encuentran debidamente registrados ante el Instituto Nacional de Defensa de
              la Competencia y de la Protección de la Propiedad Intelectual (INDECOPI) y que nos brindan la protección
              dentro del territorio peruano y países miembros de la Comunidad Andina (los "Derechos de PI"); resultando
              de aplicación los tratados internacionales y los derechos de PI aplicables en la República de Perú, según
              la normativa aplicable. EL USUARIO no puede modificar, reproducir, distribuir, crear obras derivadas o
              adaptaciones de, mostrar públicamente o explotar de cualquier manera el Contenido de FINNIU en su
              totalidad o en parte, excepto con la autorización expresa de FINNIU.</p>
            <p>En ningún caso, el acceso y navegación en la Plataforma por EL USUARIO implica la cesión, transmisión,
              licencia, renuncia o cesión total o parcial de los derechos de propiedad intelectual e industrial. LOS
              USUARIOS que accedan a la Plataforma únicamente podrán utilizar los contenidos para su uso personal y
              privado; quedando terminantemente prohibido su utilización para fines comerciales. FINNIU no concede
              licencia o autorización de uso alguna sobre sus derechos de propiedad industrial e intelectual, derechos
              de autor, marcas o sobre cualquier otra propiedad o derecho relacionado con la Plataforma. El uso no
              autorizado de los contenidos y los elementos que conforman la Plataforma pueden suponer el incumplimiento
              de la legislación sobre propiedad intelectual e industrial y de otras normativas aplicables. El
              incumplimiento de lo aquí mencionado sujetará al infractor a todos los reclamos civiles y será materia
              para la presentación de la querella, la denuncia o la reclamación procedente ante las autoridades
              competentes, dentro de la cual se proporcionará la información necesaria para la investigación y
              persecución del ilícito del que se trate.</p>
            <p>En ningún caso se entenderá que el acceso y uso de la Plataforma implica una renuncia, transmisión,
              licencia o cesión, total o parcial, ni autorización de ninguna clase para la explotación, reproducción,
              comunicación pública, difusión, divulgación y/o transformación de la Plataforma, de sus contenidos, ni de
              sus Servicios.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">20. Uso de enlaces</h2>
            <p>
              Con respecto a los enlaces a otros sitios web, FINNIU incluye enlaces a perfiles de redes sociales de su
              propiedad. Sin embargo, recordamos que cada proveedor de servicios referenciado tiene sus propios Términos
              y Condiciones que EL USUARIO debe conocer y respetar. Por lo tanto, FINNIU no se hace responsable por el
              contenido de la información enlazada, ni tampoco por su correcto funcionamiento y fiabilidad.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">21. Acceso no autorizado</h2>
            <p>
              FINNIU se reserva el derecho a ejercer los medios legales que consideremos necesarios para impedir el
              acceso o uso no autorizado de la Plataforma, incluyendo, entre otros, barreras tecnológicas, mapeo de IP,
              scraping, ingeniería inversa y contacto con su Proveedor de Servicios de Internet (ISP) en relación con
              dicho uso no autorizado.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">22. Protección de datos personales y privacidad</h2>
            <p>
              La información recibida por la Plataforma será tratada con máxima confidencialidad, utilizando medios
              tecnológicos que aseguren su conservación e implementando las medidas de seguridad de la información que
              resulten adecuadas y eficaces para salvaguardar los datos personales que LOS USUARIOS envíen sobre sus
              clientes, pero no responderá por aquellos daños, pérdidas o perjuicios no imputables a FINNIU, y que
              pudieran derivarse de la violación de esas medidas por parte de terceros que utilicen las redes públicas o
              internet, alterando los sistemas de seguridad para obtener acceso a la información de LOS USUARIOS.
            </p>
            <p>
              FINNIU no cederá datos a terceros, salvo (i) por mandato de la ley o requerimiento de información de los
              Tribunales y/o Autoridades Competentes, proporcionándole exclusivamente la información necesaria y
              proporcional conforme lo exija la Ley y (ii) lo permitido por la Política de Privacidad de FINNIU.
            </p>
            <p>
              Los datos se conservarán durante el tiempo necesario para cumplir con la finalidad para la que se
              recabaron. Una vez desaparezcan las finalidades para las que se han recogido los datos inicialmente o el
              interesado haya ejercido el derecho de oposición o supresión de sus datos; estos permanecerán bloqueados
              en los sistemas del responsable de conformidad con los plazos de prescripción legalmente establecidos en
              la normativa aplicable.
            </p>
            <p>
              Sin perjuicio de lo anterior, el uso de la Plataforma se encuentra condicionado a la lectura y aceptación
              libre por parte de EL USUARIO de la Política de privacidad que regula el tratamiento de los datos
              personales según la legislación aplicable, que se encuentra a su disposición en la Plataforma. Para mayor
              información, revise la Política de Privacidad de FINNIU.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">23. Confidencialidad</h2>
            <p>
              Tanto FINNIU como EL USUARIO convienen que toda información intercambiada, compartida y/o revelada por
              cualquiera de las partes se considera privilegiada y confidencial. Por lo tanto, las partes se obligan a
              guardar absoluta confidencialidad sobre toda información comercial, técnica, bases de datos,
              especificaciones, valores o cualquier otra información que se encuentre a disposición de las Partes en
              relación a la reserva de los servicios de gestión a través de la Plataforma; comprometiéndose a no ponerla
              a disposición de terceras personas ajenas a FINNIU.
            </p>
            <p>
              Por su parte, FINNIU se obliga a mantener en estricta reserva y confidencialidad la información revelada
              por LOS USUARIOS en el curso de la prestación de los servicios de gestión. Sin perjuicio de ello, EL
              USUARIO acepta y autoriza anticipadamente a FINNIU a compartir la información a sus Asesores y/o
              empleados, o cualquier otra persona tercera, natural y/o jurídica, que sea necesaria a fin de que se usar
              y acceder correctamente a la Plataforma. FINNIU no revelará, compartirá ni utilizará dicha información
              para ningún propósito distinto al de brindar los servicios acordados, a menos que se requiera por ley.
            </p>
            <p>
              La obligación de confidencialidad por parte de EL USUARIO y FINNIU subsistirá por cinco (05) años luego de
              haber culminado la relación entre las Partes. El incumplimiento de esta obligación genera la
              correspondiente responsabilidad civil por daños y perjuicios a favor de FINNIU, independientemente de la
              responsabilidad administrativa y/o penal.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">24. Cesión</h2>
            <p>
              Los derechos y obligaciones del presente documento son personales, por lo que en ningún caso LOS USUARIOS
              podrán ceder ni transferir a terceros los derechos y obligaciones que han obtenido, sin contar con el
              consentimiento previo y por escrito de FINNIU.
            </p>
            <p>
              FINNIU podrá ceder, transferir o delegar cualquiera de sus derechos y obligaciones sin consentimiento
              previo de EL USUARIO, para lo cual LOS USUARIOS aceptan y autorizan anticipadamente una eventual cesión de
              posición contractual de FINNIU a favor de cualquier tercero.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">25. Integridad</h2>
            <p>
              Los presentes Términos y Condiciones sustituyen todas las comunicaciones, propuestas y/o acuerdos
              anteriores o contemporáneos (orales, escritos o electrónicos) entre LOS USUARIOS y FINNIU. Si alguna
              disposición de estos Términos y Condiciones resultara inválida, ello no implicará la invalidez de las
              demás cláusulas. Si FINNIU o EL USUARIO no ejercieran sus derechos y facultades establecidas en el
              presente documento, no se considerará como una renuncia a la continuación de los demás derechos y
              facultades aquí establecidas.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">26. Modificaciones en los Términos y Condiciones</h2>
            <p>
              FINNIU se reserva el derecho de actualizar y/o modificar sus Términos y Condiciones de forma unilateral
              y/o cuando la ley lo requiera. De modificarse aspectos sustanciales y/o de ser requerido por ley, FINNIU
              te notificará sobre ello por correo electrónico.
            </p>
            <p>
              FINNIU publicará la nueva versión en la Plataforma e indicará la fecha de las últimas revisiones. Los
              cambios no se aplicarán con carácter retroactivo y entrarán en vigor no antes de (30) treinta días después
              de su publicación. Sin embargo, los cambios que aborden nuevas funciones para la Plataforma o los cambios
              realizados por motivos legales entrarán en vigor inmediatamente.
            </p>
          </div>
          <div>
          <h2 className="text-2xl font-semibold">27. Terminación</h2>
          <p>
            EL USUARIO tiene derecho a terminar los servicios contratados si no está de acuerdo con las modificaciones
            realizadas, siempre y cuando notifique a FINNIU, para lo cual deberá cursar una comunicación solicitando sea
            dado de baja como USUARIO al momento de, o con anterioridad a que empiecen a regir los nuevos cambios
            implementados.
          </p>
      </div>

          <div>
            <h2 className="text-2xl font-semibold">28. Ley aplicable y jurisdicción</h2>
            <p>
              Estos términos y condiciones se rigen por las leyes de la República del Perú donde opera FINNIU. Cualquier
              disputa o reclamación que surja de o en relación con estos términos y condiciones o del Acuerdo de Usuario
              será sometida a la jurisdicción exclusiva de los tribunales competentes de Lima-Cercado.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">29. Contacto</h2>
            <p>
              Todas las comunicaciones que se realicen en ejecución de este servicio, se realizarán mediante la página web o
              al correo electrónico que EL USUARIO señaló en su registro. Se presume válida la recepción de las
              comunicaciones aun cuando el remitente no reciba el acuse de recibo al que refiere el artículo 1374° del
              Código Civil Peruano; salvo que se acredite lo contrario.
            </p>
            <p>
              Ante cualquier consulta, queja, reclamo, solicitud, comentario o sugerencia respecto a los Términos y
              Condiciones, puedes enviar un correo electrónico a <a href="mailto:hola@finniu.com"
                                                                    className="text-blue-600 underline">hola@finniu.com</a>.
            </p>
          </div>
    </section>
      </div>
    </section>
  )
}

export default Hero