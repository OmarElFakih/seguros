import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import { Accordion, Card, Button } from "react-bootstrap";

const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}


const HeroCondicionesWeb = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    ...props
}) => {

    const [videoModalActive, setVideomodalactive] = useState(false);

   

    const outerClasses = classNames(
        //'hero section center-content',
        'section',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'hero-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );


    return (
        <section
            {...props}
            className={outerClasses}

        >
            <div classname="container" style={{padding: `0px 10%`}}>
                
                    <h3 className="text-color-primary">Condiciones de uso web</h3>
                    <div className="lheight-30" style={{textAlign: `justify`}}>
                    <p className="fz-12" style={{fontSize: `13px`}}>
                        AL USAR ESTE SITIO WEB, EL USUARIO RECONOCE QUE ACEPTA LAS SIGUIENTES CONDICIONES DE USO SIN LIMITACIÓN NI RESERVAS. FAVOR DE LEER ESTAS CONDICIONES CON ATENCIÓN ANTES DE USAR ESTE SITIO WEB. ESTOS TÉRMINOS Y CONDICIONES PODRÁN MODIFICARSE EN CUALQUIER MOMENTO MEDIANTE UNA ACTUALIZACIÓN DE ESTA PUBLICACIÓN. DICHAS MODIFICACIONES SON OBLIGATORIAS PARA EL USUARIO Y, POR LO TANTO, DEBE VISITAR ESTA PÁGINA PERIÓDICAMENTE PARA REVISAR LOS TÉRMINOS Y CONDICIONES VIGENTES A LOS QUE ESTÁ SUJETO.
                    </p>
                    <p>Como condición de su uso de este Sitio web, el usuario garantiza que:</p>
                    <ol style={{listStyle: `none`}}>
                        <li className="mb10">
                            (i) toda la información que proporcione en este Sitio web será información veraz, exacta, actual y completa,
                        </li>

                        <li className="mb10">
                            (ii) si tiene una cuenta en <a  target="_black" href="https://www.orangetravelassist.net">www.orangetravelassist.net</a> resguardará la información de su cuenta y supervisará y será plenamente responsable por cualquier uso de su cuenta de parte de cualquier persona que no sea el usuario y
                        </li>

                        <li className="mb10">
                            (iii) tiene al menos 18 años de edad para registrarse y obtener una cuenta y contribuir con nuestro sitio web. <a  target="_black" href="https://www.orangetravelassist.net">www.orangetravelassist.net</a> no recopila deliberadamente información de personas menores de 18 años. La empresa se reserva el derecho, a su entera discreción, a negar el acceso a este sitio web y los servicios que ofrece a cualquier persona, en cualquier momento y por cualquier motivo, incluido, entre otros, debido a una violación del presente Acuerdo
                        </li>
                    </ol>
                </div>
                        <Accordion key={1} >
                            <Card style={{backgroundColor: `#1e283c`}}>
                                <Card.Header classname="border-bottom">
                                    <Accordion.Toggle as={Button} variant="link" eventKey={1} style={{color: `#faa520`}}>
                                        Actividades prohibidas
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={1}>
                                    <Card.Body>
                                        <div>
                                        <p>
                                                El contenido y la información que figuran en este Sitio web (incluyendo, pero no taxativamente mensajes, datos, información, textos, música, sonidos, fotos, gráficos, videos, mapas, iconos, software, código u otros materiales), así como la infraestructura utilizada para ofrecer dicho contenido e información, son propiedad de la empresa. El usuario se compromete a no modificar, copiar, distribuir, transmitir, mostrar, ejecutar, reproducir, publicar, otorgar bajo licencia, crear trabajos derivados, transferir ni vender o revender de otro modo cualquier información, software, productos o servicios obtenidos de este Sitio web o a través de este. Asimismo, el usuario se compromete a no hacer lo siguiente:
                                            </p>

                                            <ol style={{listStyle: `none`}}>
                                                <li className="mb10">
                                                    (i) usar este Sitio web o sus contenidos con cualquier fin comercial;
                                                </li>

                                                <li className="mb10">
                                                    (ii) tener acceso, monitorear o copiar cualquier contenido o información de este Sitio web utilizando cualquier robot, araña (spider), recortador (scraper) u otros medios automáticos o cualquier proceso manual con cualquier fin, sin el permiso expreso por escrito de la empresa;
                                                </li>

                                                <li className="mb10">
                                                    (iii) violar las restricciones de cualquier mensaje de encabezado de exclusión de robots en este Sitio web o evitar o eludir otras medidas empleadas para impedir o limitar el acceso a este Sitio web;
                                                </li>

                                                <li className="mb10">
                                                    (iv) tomar cualquier medida que imponga o pueda imponer, a nuestro criterio, una carga de tamaño excesivo o desproporcionado sobre nuestra infraestructura;
                                                </li>

                                                <li className="mb10">
                                                    (v) establecer vínculos profundos a cualquier parte de este Sitio web con cualquier fin sin el permiso expreso por escrito de la empresa; o
                                                </li>

                                                <li className="mb10">
                                                    (vi) hacer un "marco", un "sitio reflejado" o incorporar de otra manera cualquier parte de este Sitio web a cualquier otro sitio web sin la previa autorización por escrito de la empresa.
                                                </li>

                                                <li className="mb10">
                                                    (vii) intentar modificar, traducir, adaptar, editar, descompilar, desmontar o utilizar técnicas de ingeniería inversa sobre cualquier programa de software utilizado por <b>ORANGE WELLBEING SERVICES INC</b> en relación con el Sitio web o los servicios.
                                                </li>
                                            </ol>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion key={2} >
                            <Card style={{backgroundColor: `#1e283c`}}>
                                <Card.Header classname="border-bottom">
                                    <Accordion.Toggle as={Button} variant="link" eventKey={2} style={{color: `#faa520`}}>
                                    Cláusula de extención de la responsabilidad
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={2}>
                                    <Card.Body>
                                        <div>
                                            <p>
                                                EN LA MÁXIMA MEDIDA EN QUE LO PERMITA LA LEGISLACIÓN APLICABLE, LOS MATERIALES DE ESTE SITIO WEB SE PROPORCIONAN EN EL ESTADO EN QUE SE ENCUENTRAN Y SIN GARANTÍAS DE NINGÚN TIPO, NI EXPRESAS NI IMPLÍCITAS, Y <b>ORANGE WELLBEING SERVICES INC</b>. Y SUS FILIALES NIEGAN CUALQUIER GARANTÍA, EXPRESA O IMPLÍCITA, QUE INCLUYEN, PERO NO TAXATIVAMENTE LAS GARANTÍAS IMPLÍCITAS DE COMERCIABILIDAD E IDONEIDAD PARA UN FIN EN PARTICULAR. <b>ORANGE WELLBEING SERVICES INC</b> NO GARANTIZA QUE LAS FUNCIONES CONTENIDAS EN LOS MATERIALES SE REALICEN DE FORMA ININTERRUMPIDA O ESTÉN LIBRES DE ERRORES, QUE SE CORRIJAN LOS DEFECTOS, NI QUE ESTE SITIO WEB O EL SERVIDOR EN EL QUE SE OFRECE ESTÉN LIBRES DE VIRUS U OTROS COMPONENTES PERJUDICIALES. <b>ORANGE WELLBEING SERVICES INC</b> NO GARANTIZA NI REALIZA NINGUNA DECLARACIÓN SOBRE EL USO O LOS RESULTADOS DEL USO DE LOS MATERIALES QUE SE ENCUENTRAN EN ESTE SITIO WEB EN TÉRMINOS DE SU CORRECCIÓN, PRECISIÓN, FIABILIDAD U OTROS. EL USUARIO (Y NO <b>ORANGE WELLBEING SERVICES INC</b>) ASUME LA TOTALIDAD DEL COSTO DE TODO MANTENIMIENTO, REPARACIÓN O CORRECCIÓN NECESARIOS. LA INFORMACIÓN Y LAS DESCRIPCIONES QUE FIGURAN EN EL PRESENTE NO DEBERÁN ENTENDERSE NECESARIAMENTE COMO DESCRIPCIONES COMPLETAS DE TODOS LOS TÉRMINOS, EXCLUSIONES Y CONDICIONES APLICABLES A LOS PRODUCTOS Y SERVICIOS, SINO QUE SE OFRECEN EXCLUSIVAMENTE CON FINES INFORMATIVOS GENERALES. CONSULTE LA POLÍTICA VIGENTE O EL ACUERDO DE PRODUCTOS O SERVICIOS QUE CORRESPONDAN.
                                            </p>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion key={3} >
                            <Card style={{backgroundColor: `#1e283c`}}>
                                <Card.Header classname="border-bottom">
                                    <Accordion.Toggle as={Button} variant="link" eventKey={3} style={{color: `#faa520`}}>
                                        Vínculos a sitios fuera de la página web de la empresa
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={3}>
                                    <Card.Body>
                                        <div>
                                            <p>
                                                Este Sitio web podrá incluir hipervínculos a sitios web operados por terceros que no forman parte de <b>ORANGE WELLBEING SERVICES INC</b>. Estos hipervínculos se ofrecen a modo de referencia únicamente. La empresa no controla dichos sitios web y no es responsable por sus contenidos ni por la privacidad u otras prácticas de estos. Asimismo, corresponde al usuario tomar precauciones para asegurarse de que cualquier vínculo que seleccione o software que descargue (de este Sitio web o cualquier otro sitio web) esté libre de elementos como virus, gusanos, troyanos, defectos y otros elementos de naturaleza perjudicial. El hecho de que se incluyan hipervínculos hacia dichos sitios web, no implica ninguna aprobación del material que figura en los sitios web ni ninguna asociación con sus operadores. En algunos casos es posible que en el sitio de un tercero se solicite al usuario que establezca un vínculo entre su perfil en <b>ORANGE WELLBEING SERVICES INC</b> y un perfil en otro sitio de un tercero. Hacerlo o no es puramente opcional, y la decisión de permitir el vínculo a esta información puede desactivarse (en el sitio del tercero) en cualquier momento.
                                            </p>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion key={4} >
                            <Card style={{backgroundColor: `#1e283c`}}>
                                <Card.Header classname="border-bottom">
                                    <Accordion.Toggle as={Button} variant="link" eventKey={4} style={{color: `#faa520`}}>
                                       Limitación de responsabilidad
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={4}>
                                    <Card.Body>
                                        <div>
                                            <p>
                                                Aunque <b>ORANGE WELLBEING SERVICES INC</b> hace lo posible, dentro de lo razonable, para incluir información precisa y actualizada en este sitio web, a veces pueden producirse errores u omisiones. En la máxima medida en que lo permita la legislación aplicable, <b>ORANGE WELLBEING SERVICES INC</b> no ofrece ninguna garantía ni declaración sobre la precisión del contenido de este sitio web y en ninguna circunstancia, incluida, entre otros, negligencia, ni <b>ORANGE WELLBEING SERVICES INC</b> ni ninguna otra parte que participe en la creación, producción o presentación del sitio web tendrán ninguna responsabilidad frente al usuario por cualesquiera daños directos, secundarios, emergentes, indirectos o punitivos que resulten del uso, o de la imposibilidad de usar, los materiales de este sitio web, aunque se haya notificado a <b>ORANGE WELLBEING SERVICES INC</b> o un representante autorizado de <b>ORANGE WELLBEING SERVICES INC</b> sobre la posibilidad de dichos daños. En ningún caso la responsabilidad total de <b>ORANGE WELLBEING SERVICES INC</b> ante el usuario por todos los daños, pérdidas y pretensiones judiciales superará el monto pagado por el usuario, si alguno, por tener acceso a este sitio web. <b>ORANGE WELLBEING SERVICES INC</b> tampoco asume ninguna responsabilidad, y no será responsable por ningún daño o virus que pueda infectar la computadora, equipo o cualquier otro bien del usuario como resultado del acceso, uso, o navegación del sitio web o la descarga de cualesquiera materiales, datos, texto, imágenes, videos o audio de este sitio web.
                                            </p>

                                            <p>
                                                La limitación de responsabilidad refleja la distribución del riesgo entre las partes. Las limitaciones que se especifican en esta sección seguirán teniendo vigencia y siendo aplicables incluso en caso de que cualquiera de los recursos limitados que se especifican en estos términos no cumpla su objetivo fundamental. Las limitaciones de responsabilidad dispuestas en estos términos redundarán en beneficio de las empresas del grupo <b>ORANGE WELLBEING SERVICES INC</b>.
                                            </p>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion key={5} >
                            <Card style={{backgroundColor: `#1e283c`}}>
                                <Card.Header classname="border-bottom">
                                    <Accordion.Toggle as={Button} variant="link" eventKey={5} style={{color: `#faa520`}}>
                                        Restricciones al uso de materiales
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={5}>
                                    <Card.Body>
                                        <div>
                                            <p>
                                                <b>ORANGE WELLBEING SERVICES INC</b> es propietaria y operadora de este sitio web. Excepto cuando <b>ORANGE WELLBEING SERVICES INC</b> lo permita expresamente, no se podrá copiar, reproducir, reeditar, cargar, publicar, transmitir o distribuir de ninguna manera ningún material de este sitio web o cualquier sitio web que sea de propiedad, o que sea operado o distribuido por <b>ORANGE WELLBEING SERVICES INC</b>. El usuario podrá descargar material que se exhiba en este sitio web únicamente para uso personal, con la condición de que también conserve todos los avisos de derechos de autor o propiedad de otro tipo incluidas en los materiales. El usuario no podrá distribuir, modificar, transmitir, reutilizar, reeditar o utilizar el contenido de este sitio web con fines públicos o comerciales, incluidos el texto, las imágenes, audio y video sin el permiso por escrito de <b>ORANGE WELLBEING SERVICES INC</b>. <b>ORANGE WELLBEING SERVICES INC</b> no garantiza ni declara que el uso de parte del usuario de los materiales que se presentan en este sitio web no infringirá derechos de terceros.
                                            </p>

                                            <p>
                                                La limitación de responsabilidad refleja la distribución del riesgo entre las partes. Las limitaciones que se especifican en esta sección seguirán teniendo vigencia y siendo aplicables incluso en caso de que cualquiera de los recursos limitados que se especifican en estos términos no cumpla su objetivo fundamental. Las limitaciones de responsabilidad dispuestas en estos términos redundarán en beneficio de las empresas del grupo <b>ORANGE WELLBEING SERVICES INC</b>.
                                            </p>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion key={6} >
                            <Card style={{backgroundColor: `#1e283c`}}>
                                <Card.Header classname="border-bottom">
                                    <Accordion.Toggle as={Button} variant="link" eventKey={6} style={{color: `#faa520`}}>
                                        Cueastiones jurisdiccionales
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={6}>
                                    <Card.Body>
                                        <div>
                                            <p>
                                                A menos que se establezca expresamente algo diferente en el presente, <b>ORANGE WELLBEING
                                                SERVICES INC</b> no manifiesta que los materiales de este sitio web sean adecuados o que estén disponibles para su uso en cualquier ubicación. Quienes deseen ingresar a este sitio web lo hacen
                                                por iniciativa propia y son responsables por el cumplimiento de las legislaciones locales. Excepto por
                                                lo que se establece expresamente en el presente, la información incluida en este sitio web no
                                                constituye una oferta de venta o una invitación a comprar ningún valor, producto de seguros u otro
                                                producto o servicio de parte de <b>ORANGE WELLBEING SERVICES INC</b>. <b>ORANGE WELLBEING
                                                SERVICES INC</b> no ofrece ni venderá ningún valor, producto de seguros u otro producto o servicio o,
                                                en caso de que <b>ORANGE WELLBEING SERVICES INC</b> venda cualquier valor, producto de seguros
                                                u otro producto o servicio, este no tendrá validez en ninguna jurisdicción en la que dicha oferta o
                                                invitación, compra o venta sería ilegal en virtud de la legislación sobre valores, seguros u otras leyes de dicha jurisdicción. Es posible que algunos productos y servicios no estén disponibles en todas las jurisdicciones.
                                            </p>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion key={7} >
                            <Card style={{backgroundColor: `#1e283c`}}>
                                <Card.Header classname="border-bottom">
                                    <Accordion.Toggle as={Button} variant="link" eventKey={7} style={{color: `#faa520`}}>
                                        Propiedad de la información
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={7}>
                                    <Card.Body>
                                        <div>
                                            <p>
                                                Con la excepción de datos o información personales, cualquier información que el usuario transmita
                                                a <b>ORANGE WELLBEING SERVICES INC</b> a través de este sitio web, mediante correo electrónico o
                                                de otro modo, incluyendo datos, preguntas, comentarios o sugerencias, se tratarán como no
                                                confidenciales y de dominio público, y pasarán a ser propiedad de <b>ORANGE WELLBEING
                                                SERVICES INC</b>. Con la excepción de datos o información personales, dicha información se podrá
                                                utilizar con cualquier fin, incluyendo, pero no taxativamente su reproducción, invitación, divulgación,
                                                difusión, publicación y transmisión. <b>ORANGE WELLBEING SERVICES INC</b> tiene la libertad de usar
                                                cualesquiera ideas, conceptos, pericia técnica o técnicas incluidas en cualquier comunicación que el
                                                usuario envíe a <b>ORANGE WELLBEING SERVICES INC</b> a través de este sitio web o cualquier otro
                                                medio con cualquier fin, incluyendo, pero no taxativamente el desarrollo y la comercialización de
                                                productos usando dicha información.
                                            </p>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion key={8} >
                            <Card style={{backgroundColor: `#1e283c`}}>
                                <Card.Header classname="border-bottom">
                                    <Accordion.Toggle as={Button} variant="link" eventKey={8} style={{color: `#faa520`}}>
                                       Marcas comerciales y derechos de autor
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={8}>
                                    <Card.Body>
                                        <div>
                                            <p>
                                                Todas las marcas comerciales, marcas de servicios, denominaciones comerciales, logotipos e iconos
                                                son propiedad exclusiva de <b>ORANGE WELLBEING SERVICES INC</b>. Ningún contenido de este sitio
                                                web se habrá de interpretar como una concesión, de manera implícita, por preclusión o de otro modo,
                                                de cualquier licencia o derecho de uso de cualquier marca comercial que figure en este sitio web sin
                                                el permiso por escrito de <b>ORANGE WELLBEING SERVICES INC</b>.
                                            </p>

                                            <p>
                                                Se prohíbe terminantemente el uso por parte del usuario de las marcas comerciales que figuran en
                                                este sitio web o cualquier otro contenido de este sitio web, excepto por lo que se dispone en el
                                                presente.
                                            </p>
                                            <p>
                                                Las imágenes que se muestran en este sitio web son propiedad de <b>ORANGE WELLBEING SERVICES INC</b> o se usan con el permiso de ésta. Se prohíbe el uso de estas imágenes por parte
                                                del usuario, o cualquier persona autorizada por éste, a menos que <b>ORANGE WELLBEING SERVICES INC</b> lo permita específicamente. Cualquier uso no autorizado de imágenes podrá violar leyes sobre derechos de autor, leyes sobre marcas comerciales, las leyes de privacidad y publicidad,
                                                y las normas o leyes sobre comunicaciones.
                                            </p>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion key={9} >
                            <Card style={{backgroundColor: `#1e283c`}}>
                                <Card.Header classname="border-bottom">
                                    <Accordion.Toggle as={Button} variant="link" eventKey={9} style={{color: `#faa520`}}>
                                       Licencias de software
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={9}>
                                    <Card.Body>
                                        <div>
                                            <p>
                                                A menos que se especifique lo contrario, los materiales de los sitios web se presentan únicamente a
                                                fin de promover y brindar información sobre los servicios, sitios web, socios y otros productos de
                                                <b>ORANGE WELLBEING SERVICES INC</b> disponibles en Estados Unidos, sus territorios, posesiones
                                                y protectorados. <b>ORANGE WELLBEING SERVICES INC</b> controla y opera los sitios web de AWA
                                                desde sus oficinas en el estado de Florida en Estados Unidos. <b>ORANGE WELLBEING SERVICES
                                                INC</b> no manifiesta que los materiales que figuran en los sitios web de ORANGE WELLBEING
                                                SERVICES INC sean adecuados o puedan usarse fuera de Estados Unidos. Quienes opten por
                                                ingresar al sitio web de <b>ORANGE WELLBEING SERVICES INC</b> desde fuera de Estados Unidos, lo
                                                hacen por iniciativa propia y son responsables por el cumplimiento de la legislación local, con la
                                                condición y en la medida en que la legislación local sea aplicable. El software de los sitios web de
                                                <b>ORANGE WELLBEING SERVICES INC</b> también está sujeto a los controles a las exportaciones de
                                                Estados Unidos. No se podrá descargar ni exportar o reexportar de otra manera ningún software de
                                                los sitios web de <b>ORANGE WELLBEING SERVICES INC</b> (a) hacia (o a un ciudadano o residente
                                                de) Cuba, Irak, Libia, Corea del Norte, Irán, Siria o cualquier otro país al que Estados Unidos le haya
                                                embargado bienes, o (b) a cualquier persona que se encuentre en la lista de Ciudadanos
                                                Especialmente Designados del Departamento del Tesoro de Estados Unidos, o en la Tabla de
                                                Pedidos a ser Denegados del Departamento de Comercio de Estados Unidos. Al usar los sitios web
                                                de <b>ORANGE WELLBEING SERVICES INC</b>, el usuario declara y garantiza que no está localizado,
                                                ni bajo el control, ni es ciudadano o residente de ninguno de estos países ni se encuentra en ninguna
                                                de dichas listas.
                                            </p>

                                            <p>
                                                Cualquier software que esté disponible para descarga de los sitios web de <b>ORANGE WELLBEING
                                                SERVICES INC</b> ("Software") es una obra registrada de <b>ORANGE WELLBEING SERVICES INC</b>, o
                                                de las filiales de <b>ORANGE WELLBEING SERVICES INC</b>, o es software de terceros, según se
                                                identifique. El uso por parte del usuario de dicho Software se rige por los términos del acuerdo de
                                                licencia de usuario final, si lo hubiera, que acompaña, o se incluye con el Software ("Acuerdo de
                                                Licencia"). El usuario no podrá instalar ni usar ningún Software que esté acompañado por o que
                                                incluya un Acuerdo de Licencia, a menos que acepte en primer lugar los términos del Acuerdo de
                                                Licencia. Por el presente se otorga al usuario, para cualquier Software que esté disponible para
                                                descargar de este Sitio web que no esté acompañado de un Acuerdo de Licencia, una licencia
                                                limitada, personal e intransferible para usar el Software, para ver y usar de otro modo este Sitio web
                                                de conformidad con estos términos y condiciones y con ningún otro fin. Se debe tener en cuenta que
                                                todo Software, incluyendo, pero no taxativamente todos los HTML, XML, códigos Java y controles
                                                de Active X incluidos en este Sitio web, es propiedad de <b>ORANGE WELLBEING SERVICES INC</b> y/o
                                                sus filiales, y está protegido por las leyes y las disposiciones de los tratados internacionales sobre
                                                derechos de autor. Se prohíbe expresamente cualquier reproducción o redistribución del Software,
                                                que podrá resultar en rigurosas sanciones civiles y penales. Se procesará a los infractores en la
                                                máxima medida posible. SIN QUE IMPLIQUE UNA LIMITACIÓN DE LO ANTERIOR, SE PROHÍBE
                                                EXPRESAMENTE COPIAR O REPRODUCIR EL SOFTWARE A CUALQUIER OTRO SERVIDOR
                                                O UBICACIÓN PARA SU POSTERIOR REPRODUCCIÓN O REDISTRIBUCIÓN. EL SOFTWARE
                                                SE GARANTIZA, SI ES QUE SE GARANTIZA, ÚNICAMENTE DE ACUERDO CON LOS TÉRMINOS
                                                DEL ACUERDO DE LICENCIA.
                                            </p>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion key={10} >
                            <Card style={{backgroundColor: `#1e283c`}}>
                                <Card.Header classname="border-bottom">
                                    <Accordion.Toggle as={Button} variant="link" eventKey={10} style={{color: `#faa520`}}>
                                        Destinos de viajes
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={10}>
                                    <Card.Body>
                                        <div>
                                            <p>
                                                Aunque la mayoría de los viajes, incluyendo los viajes a destinos internacionales, finalizan sin
                                                incidentes, los viajes a ciertos destinos pueden implicar mayores riesgos que otros. <b>ORANGE
                                                WELLBEING SERVICES INC</b> recomienda a los pasajeros investigar y analizar las prohibiciones,
                                                advertencias, declaraciones y los anuncios oficiales sobre viajes expedidos por el Gobierno de
                                                Estados Unidos y los gobiernos de los países de destino, antes de reservar viajes a destinos
                                                internacionales. A fin de obtener información sobre las circunstancias en diversos países y el nivel
                                                de riesgo relacionado con los viajes a destinos internacionales específicos, favor de consultar las
                                                siguientes páginas web: <a target="_black" href="https://www.state.gov">www.state.gov</a>, <a target="_black" href="https://www.tsa.gov">www.tsa.gov</a>, <a target="_black" href="https://www.dot.gov">www.dot.gov</a>, <a target="_black" href="https://www.faa.gov">www.faa.gov</a>, <a target="_black" href="https://www.cdc.gov">www.cdc.gov</a>, <a target="_black" href="https://www.treas.gov/ofac">www.treas.gov/ofac</a> y <a target="_black" href="https://www.customs.gov">www.customs.gov</a> y </p>
                                            <p>
                                                AL MENCIONAR INFORMACIÓN RELATIVA A LOS VIAJES A DESTINOS INTERNACIONALES
                                                ESPECÍFICOS, BEST ASSURANCE COMPANY NO DECLARA NI GARANTIZA QUE EL VIAJE A
                                                DICHOS LUGARES SEA CONVENIENTE O ESTÉ LIBRE DE RIESGOS, Y NO ES RESPONSABLE
                                                POR LOS DAÑOS O PÉRDIDAS QUE PUEDAN RESULTAR DE VIAJES A DICHOS DESTINOS.
                                            </p>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion key={11} >
                            <Card style={{backgroundColor: `#1e283c`}}>
                                <Card.Header classname="border-bottom">
                                    <Accordion.Toggle as={Button} variant="link" eventKey={11} style={{color: `#faa520`}}>
                                        Indemnización
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={11}>
                                    <Card.Body>
                                        <div>
                                            <p>
                                                El usuario se compromete a defender e indemnizar a ORANGE WELLBEING SERVICES INC y sus
                                                filiales y cualquiera de sus funcionarios, directores, empleados y agentes ante y contra cualesquiera
                                                reclamaciones, pretensiones judiciales, demandas, medidas de recuperación, pérdidas,
                                                indemnizaciones por daños y perjuicios, multas, sanciones u otros costos o gastos de cualquier tipo
                                                o naturaleza incluyendo pero no taxativamente honorarios de asesores legales y contables
                                                razonables, presentados o solicitados por cualquier tercero como resultado de:
                                            </p>

                                            <ol style={{listStyle: `none`}}>
                                                <li className="mb10">
                                                    (i) el incumplimiento por parte del usuario del presente Acuerdo o de los documentos a los que se hace referencia en el presente;
                                                </li>
                                                <li className="mb10">
                                                    (ii) la violación por parte del usuario de cualquier ley o los derechos de un tercero; o
                                                </li>
                                                <li className="mb10">
                                                    (iii) el uso por parte del usuario de este Sitio Web.
                                                </li>
                                            </ol>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion key={12} >
                            <Card style={{backgroundColor: `#1e283c`}}>
                                <Card.Header classname="border-bottom">
                                    <Accordion.Toggle as={Button} variant="link" eventKey={12} style={{color: `#faa520`}}>
                                        Tasas de cambio
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={12}>
                                    <Card.Body>
                                        <div>
                                            <p>
                                                Las tasas de cambio se basan en diversas fuentes disponibles al público y deben usarse únicamente
                                                como pauta. No se verifica la exactitud de las tasas, y las tasas reales pueden variar. Es posible que
                                                las cotizaciones de las divisas no se actualicen a diario. Se considera que la información
                                                proporcionada por esta aplicación es exacta, pero <b>ORANGE WELLBEING SERVICES INC</b> y/o sus
                                                filiales no garantizan ni avalan dicha exactitud. Se recomienda al usuario que, al usar esta
                                                información con cualquier fin financiero, consulte a un personal calificado para verificar la exactitud
                                                de las tasas de cambio. La empresa no autoriza el uso de esta información con cualquier fin que no
                                                sea su uso personal y se prohíbe expresamente la reventa, redistribución y el uso de esta información
                                                con fines comerciales.
                                            </p>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion key={13} >
                            <Card style={{backgroundColor: `#1e283c`}}>
                                <Card.Header classname="border-bottom">
                                    <Accordion.Toggle as={Button} variant="link" eventKey={13} style={{color: `#faa520`}}>
                                        Contacto
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={13}>
                                    <Card.Body>
                                        <div>
                                            <p>
                                                En caso de preguntas o para comunicarse con nosotros, favor de enviar un mensaje de correo
                                                electrónico o correspondencia a
                                            </p>
                                            <h6>
                                                ORANGE WELLBEING SERVICES INC.
                                            </h6>
                                            <p>
                                                <b>Dirección:</b> 2893 Executive Park Dr. Suite 202 - 203. Weston, FL 33331.
                                            </p>
                                            <p>
                                                <b> Teléfono: </b>+1 954 453 6060
                                            </p>
                                            <p>
                                                <b>Correo electrónico:</b> <a href= "mailto:orange@orangetravelassist.net">orange@orangetravelassist.net</a>
                                            </p>
                                            <p>
                                                <b>Sitio web:</b> <a href="https://www.orangetravelassist.net" target="_black">www.orangetravelassist.net</a>
                                            </p>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                
                
            </div>
        </section>
    );
}

HeroCondicionesWeb.propTypes = propTypes;
HeroCondicionesWeb.defaultProps = defaultProps;

export default HeroCondicionesWeb;