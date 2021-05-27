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
  
  const HeroPrivacidad = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    ...props
  }) => {

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
                <h3 className="text-color-primary">Política de privacidad</h3>
                <p class="mb10">
                    <b>ORANGE WELLBEING SERVICES INC</b> 
                        <p>
                            respeta la privacidad de sus suscriptores y los visitantes de &nbsp;
                            <a target="_black" href="http://www.orangetravelassist.com">www.orangetravelassist.com</a>. Por este motivo, a <b>ORANGE WELLBEING SERVICES INC</b> le gustaría
                            que los usuarios conozcan la forma en que ésta usa cualquier información personal que suministren
                            los usuarios al utilizar <a target="_black" href="http://www.orangetravelassist.com">www.orangetravelassist.com</a>.
                        </p>
                        <p>
                            <a target="_black" href="http://www.orangetravelassist.com">www.orangetravelassist.com</a> no reconoce automáticamente ninguna información de un dominio o dirección de correo electrónico cuando se ingresa al sitio.
                        </p>
                        <p>
                            Cualquier información recopilada se usa únicamente:
                        </p>
                        <ul style={{marginLeft: "45px"}}>
                            <li class="mb10">
                                Información del navegador.
                            </li>
                            <li class="mb10">
                                Información recopilada a través de cookies, señalizaciones web (pixel tags) y otras tecnologías.
                            </li>
                            <li class="mb10">
                                información demográfica y otra información suministrada por el usuario; e información
                                consolidada.
                            </li>
                        </ul>
                        <p>
                            No se comparte ninguna información recopilada con otras organizaciones con fines comerciales. La
                            empresa también recopila otras informaciones que no revelan la identidad específica del usuario,
                            como, por ejemplo:
                        </p>
                        <ul style={{marginLeft: "45px"}}>
                            <li class="mb10">
                                Información del navegador.
                            </li>
                            <li class="mb10">
                                Información recopilada a través de cookies, señalizaciones web (pixel tags) y otras tecnologías.
                            </li>
                            <li class="mb10">
                                información demográfica y otra información suministrada por el usuario; e información
                                consolidada.
                            </li>
                        </ul>
                        <p>
                            Otra información obtenida de diversas maneras, incluyendo:
                        </p>
                        <p>
                             través de su navegador de Internet: la mayoría de los sitios web recopilan cierta información, como la dirección IP del usuario (es decir, la dirección de su computadora en Internet), la resolución de su pantalla, el tipo de sistema operativo (Windows o Mac) y la versión, el tipo de navegador de Internet y la versión, la hora de la visita y la página o páginas visitadas. La empresa usa esta información para fines de calcular los niveles de uso del Sitio, ayudar a diagnosticar problemas del servidor y administrar el sitio.
                        </p>
                </p>

                <Accordion key={1} >
                    <Card className="blueBackground">
                        <Card.Header classname="border-bottom">
                            <Accordion.Toggle as={Button} variant="link" eventKey={1} style={{ color: `#faa520` }}>
                                La dirección de coreo electrónico de usuario
                                    </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={1}>
                            <Card.Body>
                                <div>    
                                    La información de la dirección de correo electrónico se recoge solamente cuando un usuario se
                                    comunica con la empresa por correo electrónico o cuando el usuario ofrece voluntariamente esta
                                    información, como en una encuesta y/o al registrarse en el sitio. Si el usuario no desea recibir
                                    información de la empresa por correo electrónico, debe marcar la opción correspondiente en
                                    cualquiera de nuestros formularios de contacto, o ponerse en contacto con la empresa a través de
                                    la dirección que se indica anteriormente.
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <Accordion key={2} >
                    <Card className="blueBackground">
                        <Card.Header classname="border-bottom">
                            <Accordion.Toggle as={Button} variant="link" eventKey={2} style={{ color: `#faa520` }}>
                                La dirección postal del usuario
                                    </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={2}>
                            <Card.Body>
                                <div>    
                                    Si el usuario suministra a la empresa su dirección postal por Internet, es posible que reciba
                                    periódicamente correspondencia de la empresa con información sobre nuevos productos o servicios,
                                    o próximos eventos. Si no desea recibir dicha correspondencia, el usuario puede indicar esta
                                    preferencia cuando realiza su pedido. Como alternativa, también podrá comunicarse con la empresa
                                    a las direcciones que se indican anteriormente.
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <Accordion key={3} >
                    <Card className="blueBackground">
                        <Card.Header classname="border-bottom">
                            <Accordion.Toggle as={Button} variant="link" eventKey={3} style={{ color: `#faa520` }}>
                                El número de teléfono del usuario
                                    </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={3}>
                            <Card.Body>
                            <div>    
                                Si el usuario suministra a la empresa sus números de teléfono por Internet, solamente recibirá
                                comunicaciones telefónicas de la empresa con información sobre pedidos que haya realizado en
                                Internet a nuestra plataforma.
                            </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <Accordion key={4} >
                    <Card className="blueBackground">
                        <Card.Header classname="border-bottom">
                            <Accordion.Toggle as={Button} variant="link" eventKey={4} style={{ color: `#faa520` }}>
                                Cookies
                                    </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={4}>
                            <Card.Body>
                                <div>
                                    Las cookies son fragmentos de información que se guardan directamente en la computadora que
                                    está usando el usuario. Las cookies permiten a la empresa reconocer su computadora y recopilar
                                    información como el tipo de navegador, el tiempo transcurrido en el Sitio, las páginas visitadas y las
                                    preferencias de idioma. La empresa podrá usar la información con fines de seguridad, para facilitar
                                    la navegación, para mostrar información de manera más efectiva, para personalizar su experiencia
                                    mientras visita el Sitio, o para recopilar información estadística sobre el uso del Sitio.
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <Accordion key={5} >
                    <Card className="blueBackground">
                        <Card.Header classname="border-bottom">
                            <Accordion.Toggle as={Button} variant="link" eventKey={5} style={{ color: `#faa520` }}>
                                Servidor de anuncios
                                    </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={5}>
                            <Card.Body>
                            <div>    
                                La empresa no se asocia ni tiene ninguna relación especial con ninguna empresa de servidores de
                                anuncios.
                            </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <Accordion key={6} >
                    <Card className="blueBackground">
                        <Card.Header classname="border-bottom">
                            <Accordion.Toggle as={Button} variant="link" eventKey={6} style={{ color: `#faa520` }}>
                                Los derechos del usuario
                                    </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={6}>
                            <Card.Body>
                            <div>
                                <p>
                                   A solicitud, la empresa proporciona a los visitantes al sitio acceso a toda la información (incluida la
                                    información reservada) que posee sobre ellos, incluyendo
                                </p>
                                <ul style={{marginLeft: "45px"}}>
                                    <li class="mb10">
                                        Información sobre el identificador único (por ejemplo, el número de cliente o la contraseña)
                                    </li>
                                    <li class="mb10">
                                        Información sobre transacciones (por ejemplo, las fechas en las que los clientes realizaron compras, cantidades y tipos de compras)
                                    </li>
                                    <li class="mb10">
                                        Comunicaciones que el consumidor/visitante ha dirigido a nuestro sitio (por ejemplo, mensajes de correo electrónico, consultas de clientes)
                                    </li>
                                    <li class="mb10">
                                        Información de contacto (por ejemplo, nombre, dirección, número de teléfono)
                                    </li>
                                </ul>
                                <p>
                                    A solicitud, la empresa ofrece a los visitantes la posibilidad de corregir los errores de dicha
                                    información. A fin de corregir esta información, los consumidores pueden escribir a la empresa a la
                                    dirección que se indica anteriormente.
                                </p>
                                <p>
                                    La empresa podrá, oportunamente, usar información de los clientes para usos nuevos y no previstos
                                    en el aviso de su política de privacidad. En caso de que las prácticas de la empresa sobre la
                                    información cambien en cualquier momento en el futuro, esta notificará los cambios a los usuarios a
                                    través de su sitio web. El usuario tendrá la oportunidad de no aceptar estos nuevos usos. En caso
                                    de estar preocupado sobre la manera en que se usa su información, el usuario debe revisar el sitio
                                    web de la empresa con frecuencia.
                                </p>
                                <p>
                                    Si considera que este sitio no sigue la política sobre información que se indica, el usuario puede
                                    comunicarse con la empresa a la dirección que se indica anteriormente.
                                </p>
                            </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <Accordion key={7} >
                    <Card className="blueBackground">
                        <Card.Header classname="border-bottom">
                            <Accordion.Toggle as={Button} variant="link" eventKey={7} style={{ color: `#faa520` }}>
                                Seguridad del sitio
                                    </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={7}>
                            <Card.Body>
                                <div>
                    
                                    <p>
                                        <b>ORANGE WELLBEING SERVICES INC</b> usa tecnologías de codificación SSL estándar de la
                                        industria, al transferir y recibir información confidencial (por ejemplo, detalles de tarjetas de crédito e
                                        información personal). Las páginas en las que se intercambia esta información se ubican en un
                                        servidor seguro.
                                    </p>

                                    <p>
                                        Varios de los planes de seguros de la empresa ofrecen una opción de inscripción por Internet. La
                                        empresa entiende las preocupaciones del usuario sobre la seguridad en Internet y trabaja
                                        estrechamente con sus programadores para mantener los formularios en un entorno de pedidos
                                        altamente seguro, para que el usuario pueda inscribirse en los planes de seguros de viaje de la
                                        empresa con confianza.
                                    </p>

                                    <p>
                                        Cuando el usuario esté listo para inscribirse en uno de los planes de la empresa, éste pasará a un
                                        área segura del sitio. Una vez que haya ingresado, el principio de la dirección de la página (URL)
                                        cambiará de http a https, para indicar que el usuario está en un área segura. También aparecerá un
                                        icono con una llave o un candado cerrado en el ángulo inferior derecho de la mayoría de los
                                        navegadores para indicar este cambio. El usuario permanecerá en esta zona segura durante todo el
                                        proceso de compra.
                                    </p>

                                    <p>
                                        La empresa tomará las medidas técnicas, físicas, legales y organizativas que correspondan, que
                                        serán coherentes con las leyes de privacidad y seguridad de datos aplicables. Lamentablemente, no
                                        es posible garantizar que ninguna transmisión de datos a través de Internet o un sistema de
                                        almacenamiento de datos sea 100 % segura. Si el usuario tiene motivos para pensar que su
                                        interacción con la empresa ha dejado de ser segura (por ejemplo, si considera que la seguridad de
                                        cualquier Información Personal que la empresa pueda tener ha sido amenazada), debe notificarlo
                                        inmediatamente a la empresa.
                                    </p>
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <Accordion key={8} >
                    <Card className="blueBackground">
                        <Card.Header classname="border-bottom">
                            <Accordion.Toggle as={Button} variant="link" eventKey={8} style={{ color: `#faa520` }}>
                                Preguntas y comunicaciones adicionales
                                    </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={8}>
                            <Card.Body>
                            <div>
                   
                                <p>
                                    En caso de tener preguntas o para comunicarse con la empresa, enviar un mensaje de correo
                                    electrónico o correspondencia a:
                                </p>

                                <h6>
                                    ORANGE WELLBEING SERVICES INC.
                                </h6>
                                <p>
                                    <b>Dirección:</b> 2893 Executive Park Dr. Suite 202 - 203. Weston, FL 33331.
                                </p>
                                <p>
                                    <b> Teléfono: </b>+1 (954) 453 6060
                                </p>
                                <p>
                                    <b>Correo electrónico:</b> orange@orangetravelassist.net
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

  HeroPrivacidad.propTypes = propTypes;
  HeroPrivacidad.defaultProps = defaultProps;

  export default HeroPrivacidad;