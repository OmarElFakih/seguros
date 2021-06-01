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


const SplitCondicionado = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div classname="container" style={{ padding: `0px 10%` }}>
        <h3 className="text-color-primary reveal-from-bottom">
          condicionado
        </h3>
        <p className="reveal-from-bottom">
          Invitamos a los Beneficiarios de un voucher o plan de asistencia <strong>ORANGE TRAVEL ASSIST</strong> &nbsp; 
          a leer estas condiciones Generales antes de emprender su viaje. En las siguientes páginas, 
          encontrará las Condiciones Generales, Condiciones Particulares y Exclusiones, 
          así como las instrucciones que le permitirán un mejor uso de los beneficios y servicios contratados.
        </p>
        <div className="reveal-from-bottom">
        <Accordion key={1} >
          <Card >
            <Card.Header classname="border-bottom">
              <Accordion.Toggle as={Button} variant="link" eventKey={1} >
                Introduccion
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={1}>
              <Card.Body>
                <div>

                  Todos los servicios proporcionados por este plan de asistencia, son cubiertos a través de <strong>ORANGE TRAVEL ASSIST</strong>
                , compañía cuyo objeto principal es el de proporcionar, entre otros, servicios de asistencia médica, jurídica y personal únicamente en casos de EMERGENCIAS en el transcurso
                de un viaje internacional durante el periodo de vigencia del plan contratado.

                <h5>Aceptación del Beneficiario.</h5>
                  <p>
                    Las presentes Condiciones Generales, junto con la restante documentación se pone a disposición del Beneficiario al momento de la
                  compra del plan, conforman el contrato de asistencia al viajero que brinda <strong>ORANGE TRAVEL ASSIST</strong>. El Beneficiario declara conocer y aceptar las
                  presentes Condiciones Generales, dicha aceptación queda ratificada por medio de cualquiera de los siguientes actos:
                </p>
                  <ol className="list-style-decimal">
                    <li>El pago de los servicios contratados</li>
                    <li>El uso o el intento de uso de cualquiera de los servicios contratados</li>
                  </ol>
                  <p>
                    En ambos casos, el Beneficiario reconoce que ha elegido, leído y que acepta todos los términos y condiciones de los
                    servicios expresados en las presentes Condiciones Generales y que las mismas rigen la relación entre las partes en todo
                    momento convirtiéndose en un contrato de adhesión.
                </p>
                  <p>
                    Es claramente entendido y aceptado por el Beneficiario que los planes de
                  <strong>ORANGE TRAVEL ASSIST</strong>, no constituyen bajo ningún motivo un seguro o producto afín,
                  como tampoco es: un programa de seguridad social o de medicina pre-pagada, un servicio médico a domicilio o
                  servicio médico ilimitado. Por lo tanto, no tienen como objeto principal la sanidad completa, ni el tratamiento
                  definitivo de las dolencias del Beneficiario. Los servicios de asistencia médica a ser brindados por
                  <strong>ORANGE TRAVEL ASSIST</strong> se limitan expresa y únicamente a tratamientos de urgencia de cuadros agudos y
                  están únicamente orientados a la asistencia primaria en viaje de eventos súbitos e imprevisibles donde se haya
                  diagnosticado una enfermedad o condición médica clara, comprobable y aguda que impida la normal continuación de un viaje,
                   siempre y cuando dicha enfermedad o condición médica no se encuentre en la lista de las exclusiones. Estos planes están
                   diseñados para garantizar la recuperación primaria y normal e inicial del Beneficiario y las condiciones físicas que
                   permitan una normal continuación de su viaje. No están diseñados ni se contratan ni se prestan para:
                </p>
                  <ul>
                    <li>Procedimientos médicos electivos</li>
                    <li>Efectuarse chequeos médicos de rutina, ni chequeos que no hayan sido previamente autorizados por la Central de Servicios de Asistencia</li>
                    <li>Adelantar tratamientos o procedimientos benignos o de larga duración</li>
                  </ul>
                  <p>
                    Toda asistencia o tratamiento cesará y no será responsabilidad de
                  <strong>ORANGE TRAVEL ASSIST</strong> una vez que el Beneficiario regrese a su lugar de residencia o
                  cuando expire el período de validez del plan elegido. La adquisición por parte de un Beneficiario de uno o
                  más voucher no produce la acumulación de los beneficios ni del tiempo en ellas contempladas, en estos
                  casos solo podrán aplicarse los topes establecidos en el voucher que primero haya sido emitido.
                </p>
                  <p>
                    <b>NOTA: Es claramente entendido por el Beneficiario que este plan es un producto de asistencia en viajes y
                    que en la eventualidad que sea ofrecido a través de una compañía de seguros no lo hace un seguro médico
                  internacional.</b>
                  </p>
                  <p>
                    Por otra parte, una vez iniciada la vigencia del voucher, el Beneficiario no podrá hacer cambios ni
                    ampliación del producto contratado, tampoco se procederá a la cancelación del voucher por ninguna razón,
                    ni bajo ninguna circunstancia. Sin perjuicio de lo anterior, cuando el Beneficiario prolongue su viaje en
                  forma imprevista, podrá solicitar la emisión de un nuevo voucher. <strong>ORANGE TRAVEL ASSIST</strong>
                  se reserva el derecho de aceptar o negar esta renovación sin dar más explicaciones rigiéndose bajo las
                  siguientes condiciones:
                </p>
                  <ol className="list-style-alpha">
                    <li>El Beneficiario no podrá solicitar la renovación de su voucher si ha hecho uso de cualquiera de los servicios de <strong>ORANGE TRAVEL ASSIST</strong> durante la vigencia del primer voucher.</li>
                    <li>El Beneficiario podrá renovar su voucher con un plan que tenga la misma cobertura del
                            primero o mayor, no se emitirá con coberturas menor a la contratada originalmente. </li>
                    <li>El Beneficiario deberá solicitar autorización para la emisión de un nuevo voucher
                    exclusivamente al agente emisor con el cual contrató la asistencia original o de haber sido
                    comprado en página web, a través del formulario de “Contacto” en la misma, indicando la
                            cantidad de días que desea contratar, el agente emisor está obligado a informar a <strong>ORANGE TRAVEL ASSIST</strong> que se trata de una emisión en destino y solicitará la autorización para el nuevo
                            período de contratación.
                            </li>
                    <li>La solicitud de emisión de un nuevo voucher deberá efectuarse antes de la finalización de la vigencia del voucher original.</li>
                    <li>El Beneficiario deberá realizar el pago del nuevo voucher al momento de la emisión.</li>
                  </ol>
                  <p>
                    El nuevo plan de su servicio de asistencia en viajes y su correspondiente voucher emitido en las condiciones
                    referidas en esta cláusula no podrá ser utilizado bajo ningún concepto, para iniciar o continuar el tratamiento
                    y/o asistencia de problemas que ya hubieran surgido durante la vigencia del primer voucher original y/o anteriores
                    o antes de la vigencia del nuevo plan y/o voucher, independientemente de las gestiones o tratamientos en curso
                  hayan sido autorizados por <strong>ORANGE TRAVEL ASSIST</strong> o por terceros. Toda asistencia médica tratada
                  durante la vigencia del primer voucher pasará automáticamente a ser considerada como preexistencia durante la
                  vigencia del segundo voucher y por lo tanto no será asumida por <strong>ORANGE TRAVEL ASSIST</strong>.
                </p>
                  <p>
                    Cuando la vigencia del voucher anterior haya finalizado al momento de la compra o el pasajero
                    compre en destino, el voucher será expedido con 15 (quince) días de carencia para gastos por
                    COVID-19 y de 3 (tres) días para cualquier otro gasto contemplado dentro de la tabla de coberturas.
                    Lo anterior, únicamente tras haber recibido la agencia emisora/operadora turística y demás,
                    autorización expresa de la Central de Servicios de Asistencia.
                </p>
                  <h5>
                    Definiciones.
                </h5>
                  <p>
                    A continuación, enumeramos las definiciones de los términos usados en estas condiciones generales,
                  para un mayor entendimiento de los Beneficiarios de un plan <strong>ORANGE TRAVEL ASSIST</strong>:
                </p>
                  <h6>A</h6>
                  <dl>
                    <dt>Accidente:</dt>
                    <dd>es el evento generativo de un daño corporal que sufre el Beneficiario,
                    causado por agentes extraños, fuera de control y en movimiento, agentes externos, violentos y visibles y
                    súbitos. Siempre que se mencione el término "accidente", se entenderá que la lesión o dolencia resultante
                    fue provocada directamente por tales agentes e independientemente de cualquier otra causa. Los accidentes
                    cuyo origen es debido a descuido, provocación o la falta de medidas de prevención por parte del
                    Beneficiario se encuentran excluidos de toda asistencia. Si el daño corporal es producido como
                    consecuencia de causas diferentes a las anteriores mencionadas, el Beneficiario tendrá cobertura hasta el
                      monto de Asistencia Médica por Enfermedad del plan adquirido.</dd>
                    <dt>Accidente Grave:</dt> <dd>Aquel que trae como consecuencia amputación de cualquier segmento
                    corporal; fractura de huesos largos (fémur, tibia, peroné, humero, radio y cúbito); trauma
                    craneoencefálico; quemaduras de segundo y tercer grado; lesiones severas de mano, tales
                    como, aplastamiento o quemaduras; lesiones severas de columna vertebral con compromiso
                    de médula espinal; lesiones oculares que comprometan la agudeza o el campo visual o
                    lesiones que comprometan la capacidad auditiva. En general todo accidente en el cual este
                    en riesgo la vida del paciente.
                      </dd>
                  </dl>
                  <h6>C</h6>
                  <dl>
                            <dt>Catástrofe:</dt> <dd>Suceso infausto que altera gravemente el orden regular de las cosas, donde se ven implicadas numerosas personas.</dd>
                            <dt>Central de Servicios de Asistencia:</dt> <dd>Es la oficina que coordina la prestación de los servicios requeridos por el Beneficiario con motivo de su asistencia. Es igualmente el departamento de profesionales que presta los servicios de supervisión, control y coordinación que intervienen y deciden todos aquellos asuntos y/o prestaciones a brindarse o prestarse en virtud de las presentes condiciones generales que están relacionados con temas médicos.</dd>
                        </dl>
                  <h6>D</h6>
                  <dl>
                            <dt>Departamento Médico:</dt> <dd>Grupo de profesionales médicos de <strong>ORANGE TRAVEL ASSIST</strong> que intervienen y toman decisión en todos los asuntos y/o prestaciones brindadas o que vayan a brindarse de conformidad con las presentes Condiciones Generales.</dd>
                            <dt>Deportes Amateur:</dt> <dd>Es el practicado por aficionados, por ocio y/o actividades recreativas.</dd>
                            <dt>Deportes Profesionales:</dt> <dd>E: Es el practicado con o sin ánimo de lucro, realizado en cualquier tipo de competencia como intercolegiados, torneos, campeonatos, deportes que supongan un alto riesgo, entre otros.</dd>
                        </dl>
                  <h6>E</h6>
                  <dl>
                            <dt>Enfermedad o Condición Médica Aguda:</dt> <dd>Proceso corto y relativamente severo de la alteración del estado del cuerpo o alguno de sus órganos, que pudiere interrumpir o alterar el equilibrio de las funciones vitales, pudiendo provocar dolor, debilidad u otra manifestación extraña al comportamiento normal del mismo.</dd>
                            <dt>Enfermedad Congénita:</dt> <dd>Patología presente o existente desde antes del momento de nacer.</dd>
                            <dt>Enfermedad Crónica:</dt> <dd>Todo proceso patológico continuo, repitente y persistente en el tiempo, mayor a 30 días de duración.</dd>
                            <dt>Enfermedad o Condición Médica Preexistente:</dt> <dd>todo proceso físico patológico que reconozca un origen o una etiología anterior a la fecha de inicio de la vigencia del plan o del viaje (o la que sea posterior) y que sea factible de ser objetivado a través de métodos complementarios de diagnóstico de uso habitual, cotidiano, accesible y frecuente en todos los países del mundo (incluyendo, pero no limitado a: Doppler, resonancia nuclear, magnética, Cateterismo, radiología, etc.). Se entiende por preexistencia toda enfermedad, o estado del cuerpo, o proceso conocido o no por el Beneficiario, que haya necesitado o requerido de un periodo de formación, o de una gestación, o de una incubación dentro del organismo del Beneficiario antes de haber iniciado el viaje. Ejemplos claros y comunes de preexistencias solo para citar algunos son: los cálculos renales o biliares, las obstrucciones de arterias o venas por coágulos u otros, enfermedades respiratorias como el asma, problemas pulmonares, enfisemas, el VIH, generalmente problemas relacionados con la tensión arterial, glaucoma, cataratas, nefritis, úlceras o enfermedades gástricas, enfermedades resultantes de deformaciones congénitas, micosis genitales, abscesos hepáticos, cirrosis, azúcar en la sangre, colesterol alto, triglicéridos altos, y otras. Los mismos requieren de un periodo de formación corto o largo, pero en todos los casos superior a unas horas de vuelo, reconociendo que dicho estado o proceso patológico existía dentro del organismo antes de subirse al avión o al medio de transporte en la fecha de la entrada en vigencia del servicio de asistencia, aun cuando la sintomatología se presente por primera vez después de haber iniciado el viaje.</dd>
                            <dt>Enfermedad o Condición Médica Recurrente:</dt> <dd>regreso, repetición u aparición de la misma enfermedad o condición luego de haber sido tratada.</dd>
                            <dt>Enfermedad o Condición Médica Repentina o Imprevista:</dt> <dd>Enfermedad pronta, impensada, no prevista, contraída con posterioridad a la fecha de inicio de vigencia del Beneficiario del servicio de asistencia médico para viajes <strong>ORANGE TRAVEL ASSIST</strong>.</dd>
                            <dt>Enfermedad Grave:</dt> <dd>Es una alteración o desviación del estado fisiológico en una o varias partes del cuerpo, manifestadas por síntomas y unos signos característicos, y cuya evolución es más o menos previsible es decir cualquier dolencia o lesión con secuelas permanentes o no permanentes que limiten parcialmente o impidan totalmente la ocupación o actividad habitual de la persona afectada, o la incapaciten para cualquier actividad y requiera o no la asistencia de otras personas para las actividades más esenciales de la vida.</dd>

                  </dl>
                  <h6>F</h6>
                  <dl>
                    <dt>Fuerza Mayor:</dt> <dd>la que, por no poderse prever o resistir, exime del cumplimiento de alguna obligación y/o que procede de la voluntad de un tercero.</dd>
                  </dl>
                  <h6>G</h6>
                  <dl>
                    <dt>Gastos de Primera Necesidad:</dt> <dd>gastos realizados por la compra de elementos de uso personal e intransferible. Se entienden por estos, única y exclusivamente: ropaje (ropa exterior, ropa interior), zapatos, elementos de aseo personal (shampoo, acondicionador, jabón -líquido, en barra, en polvo-, cepillo de dientes, pasta de dientes, desodorante, crema de afeitar, máquina de afeitar, productos de higiene femenina) y maquillaje. Cualquier otro elemento no considerado dentro del listado anteriormente indicado, se entenderá como excluido de cualquier tipo de cobertura.</dd>
                  </dl>
                  <h6>M</h6>
                  <dl>
                    <dt>Médico Tratante:</dt> <dd>Profesional médico provisto o autorizado por la Central de Servicios de Asistencia de <strong>ORANGE TRAVEL ASSIST</strong> que asiste al Beneficiario en el lugar donde se encuentra este último.</dd>
                  </dl>
                  <h6>P</h6>
                  <dl>
                            <dt>Paciente Estable:</dt> <dd>que no presenta variación de su estado de salud y suele hacer referencia a que los síntomas y signos no han cambiado recientemente.</dd>
                            <dt>Plan o Producto de Asistencia:</dt> <dd>Es el conjunto detallado de los servicios de asistencia en viaje ofrecidos, indicando una enumeración taxativa de las mismas y sus límites monetarios, cuantitativos, geográficos y de edad del Beneficiario.</dd>
                            <dt>Plazo o Período de Carencia:</dt> <dd>Intervalo de tiempo durante el cual no son efectivas las coberturas incluidas dentro del Plan. Dicho plazo se computa por días contados desde la fecha de inicio de vigencia del voucher, siempre que el Beneficiario ya se encuentre fuera del lugar de residencia habitual al momento de contratación.</dd>
                        </dl>
                  <h6>T</h6>
                  <dl>
                    <dt>Topes Máximos:</dt> <dd>Montos máximos de cobertura por parte de <strong>ORANGE TRAVEL ASSIST</strong>, indicados en el voucher para cada prestación y según el producto de asistencia contratado.</dd>
                  </dl>
                  <h6>V</h6>
                  <dl>
                      <dt>Voucher:</dt> <dd>Es el documento que usted recibe al momento de la compra de su producto <strong>ORANGE TRAVEL ASSIST</strong> y que lleva sus datos para ser informados a la central en caso de solicitar asistencia.</dd>
                  </dl>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion key={2} >
          <Card >
            <Card.Header classname="border-bottom">
              <Accordion.Toggle as={Button} variant="link" eventKey={2} >
              Beneficiario/Edad Límite
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={2}>
              <Card.Body>
              <div>
                <p>
                  El Beneficiario es la persona natural cuyo nombre aparece reflejado en el plan de asistencia y es la sola 
                  beneficiaria de todas sus coberturas hasta el día aniversario, inclusive, de su edad límite según el tipo de Plan 
                  adquirido, fecha a partir de la cual el Beneficiario pierde todo derecho a los beneficios y a todas las prestaciones
                  de asistencia definidas en estas condiciones generales, así como derecho a cualquier reembolso o reclamo alguno 
                  originado en eventos posteriores a tal día.
                </p>
                <p>Las prestaciones o beneficios del Plan respectivo los podrá recibir exclusivamente el Beneficiario y son 
                  intransferibles, por lo cual el mismo deberá comprobar y demostrar su identidad, presentar el voucher carta, 
                  o voucher correspondiente y documentos de viajes para determinar la vigencia y aplicabilidad de las prestaciones 
                  o beneficios solicitados.
                </p>
                <p>
                  El Beneficiario podrá hacer uso de los servicios contratados hasta las cero 00:00 horas del día de su 
                  aniversario según el plan contratado. A partir de esa fecha el Beneficiario pierde todo derecho a los 
                  beneficios en cuanto a las prestaciones de Asistencia definidas en estas Condiciones Generales, así como el 
                  derecho a reembolso o reclamo alguno originado en eventos posteriores a tal día. A manera de ejemplo, se 
                  considera que una persona tiene 84 años hasta el día anterior a cumplir los 85 años.
                </p>
              </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion key={3} >
          <Card >
            <Card.Header classname="border-bottom">
              <Accordion.Toggle as={Button} variant="link" eventKey={3} >
              Vigencia - Validez
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={3}>
              <Card.Body>
                <div>
                <p>
                  Es el lapso de tiempo en el que pueden ser obtenidos los beneficios indicados en los planes de un servicio 
                  de asistencia médica <strong>ORANGE TRAVEL ASSIST</strong>, incluyendo éste, es el que transcurre desde las 
                  cero horas del día de comienzo de validez de dicho plan, estando el pasajero en territorio extranjero, 
                  hasta las 24 (23.59) horas del día del fin de dicha validez ambas fechas reflejadas en el voucher adquirido 
                  por el Beneficiario. La finalización de la vigencia, implicará el cese automático de todos los beneficios, 
                  prestaciones, o servicios en curso o no, incluyendo aquellos casos o tratamientos iniciados al momento o antes 
                  del término de la vigencia.
                </p>
                <p>
                  Los planes en la categoría “Viajes Cortos”, tendrán una vigencia máxima de 90 días consecutivos de viaje, 
                  mientras que los planes “Larga Estadía”, tendrán una vigencia total de 365 días consecutivos de cobertura. 
                  Pasados estos períodos, el Beneficiario perderá todo beneficio de los servicios de asistencia contratados 
                  mientras esté en ese viaje.
                </p>
                <p><b>Nota: los planes “Estudiantiles” sólo podrán ser adquiridos por personas que actualmente estén estudiando o 
                  que vayan a cursar algún estudio, por ello se solicitará un certificado o carnet de escolaridad, estudiantil o de 
                  aceptación a una institución educativa a la hora de solicitar asistencia.
                </b></p>
                <p>
                  Los planes de asistencia “Anuales Multiviajes” tienen una vigencia de 365 días en total, sin embargo, 
                  el Beneficiario no podrá permanecer en cada viaje, según lo indicado en el plan de asistencia del producto 
                  que haya adquirido, más de 30, 45, 60 o 90 días en el exterior por cada viaje que realice dentro de su 
                  vigencia. La Central de Servicios de Asistencias de <strong>ORANGE TRAVEL ASSIST</strong> le pedirá al 
                  momento de atenderlo la copia de su pasaporte por fax o e-mail, demostrando la fecha de salida de su país de
                  residencia habitual o la fecha de entrada al país desde donde solicita asistencia.
                </p>
                <p>
                  Los planes <strong>ORANGE TRAVEL ASSIST</strong>, operan bajo la modalidad de días corridos, por lo tanto, 
                  una vez iniciada la vigencia de un plan, no es posible interrumpir la misma, los periodos de días no utilizados 
                  en los voucher no son reembolsables. Una vez interrumpida la vigencia de un plan, éste caduca y no puede 
                  reactivarse posteriormente.
                </p>
                <p>
                  El propósito del viaje tendrá que ser turístico y en ningún momento podrá garantizar a personas que ejerzan 
                  una actividad profesional en el exterior. Si el motivo del viaje del Beneficiario fuese la ejecución de 
                  trabajos o tareas que involucren un riesgo profesional, por realizar tareas de alta especialización en 
                  donde se exponga la vida, se esté expuesto a sustancias peligrosas, al manejo de maquinarias pesadas o que 
                  funcionen con gases, presión de aire o fluidos hidroneumáticos, que requieran habilidades físicas especiales, 
                  o donde se vea expuesto a peligro y como consecuencia de ello sufra un accidente o una enfermedad 
                  consecuencial, <strong>ORANGE TRAVEL ASSIST</strong> quedará eximido de toda responsabilidad de prestar sus 
                  servicios o asumir costos que se deriven de tales circunstancias, y en estos casos será obligación patronal 
                  de asumirlos a través de su plan de responsabilidad de riesgos profesionales. Esta normatividad aplica 
                  igualmente a aquellas personas que no estén ligadas laboralmente con una empresa y que actúan por su cuenta 
                  como trabajadores independientes o en situación migratoria o laboral ilegal.
                </p>
                <p>
                  El propósito del viaje tendrá que ser turístico y en ningún momento podrá garantizar a personas que 
                  ejerzan una actividad profesional en el exterior. Si el motivo del viaje del Beneficiario fuese la 
                  ejecución de trabajos o tareas que involucren un riesgo profesional, por realizar tareas de alta 
                  especialización en donde se exponga la vida, se esté expuesto a sustancias peligrosas, al manejo de 
                  maquinarias pesadas o que funcionen con gases, presión de aire o fluidos hidroneumáticos, que requieran 
                  habilidades físicas especiales, o donde se vea expuesto a peligro y como consecuencia de ello sufra un 
                  accidente o una enfermedad consecuencial, <strong>ORANGE TRAVEL ASSIST</strong> quedará eximido de toda 
                  responsabilidad de prestar sus servicios o asumir costos que se deriven de tales circunstancias, y en estos
                  casos será obligación patronal de asumirlos a través de su plan de responsabilidad de riesgos profesionales. 
                  Esta normatividad aplica igualmente a aquellas personas que no estén ligadas laboralmente con una empresa y 
                  que actúan por su cuenta como trabajadores independientes o en situación migratoria o laboral ilegal.
                </p>
                <ol className="list-style-decimal">
                            <li>Hasta ocho (8) días adicionales contados desde el día de finalización de vigencia del voucher, o</li>
                            <li>Hasta que se haya agotado la cobertura contratada, o</li>
                            <li>Hasta que el médico firme el alta del Beneficiario en el transcurso de los ocho (8) días de ampliación de cobertura</li>
                </ol>
                <p>
                  Toda asistencia o tratamiento cesará y no será responsabilidad de <strong>ORANGE TRAVEL ASSIST</strong> una 
                  vez que el Beneficiario regrese a su lugar de residencia o expire el período de validez del plan elegido salvo 
                  excepciones anteriormente mencionadas.
                </p>
                <p><b>
                  Nota: en los casos que el Beneficiario ya se encuentre en el país destino y solicite la
                  autorización para emitir un plan de asistencia en viajes, siempre y cuando la misma sea
                  autorizada por la Central de Emergencia, dicho plan tendrá 5 días de carencia.
                </b></p>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion key={4} >
          <Card >
            <Card.Header classname="border-bottom">
              <Accordion.Toggle as={Button} variant="link" eventKey={4} >
                Validez Geográfica
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={4}>
              <Card.Body>
              <p>
                La cobertura geográfica será de carácter Mundial o exclusivamente para Europa, dependiendo del voucher comprado. 
                Independientemente de donde se encuentre el Beneficiario, se le dará cobertura en caso de requerir asistencia de 
                acuerdo al respectivo plan adquirido. Se excluye en todo caso el país de residencia habitual del Beneficiario o país 
                donde se emitió el Plan de Asistencia.
              </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion key={5} >
          <Card >
            <Card.Header classname="border-bottom">
              <Accordion.Toggle as={Button} variant="link" eventKey={5} >
                Procedimiento para solicitar asistencia - centrales de asistencia
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={5}>
              <Card.Body>
                <div>
                  <p>
                    De necesitar asistencia, e independientemente de su situación geográfica en estricta concordancia con el resto 
                    de las cláusulas de este condicionado general, el Beneficiario contactará a la Central de Servicios de Asistencia 
                    <strong>ORANGE TRAVEL ASSIST</strong>. Para poder comunicarse con dicha central por vía telefónica, el 
                    Beneficiario debe solicitar la llamada por cobrar o llamar directamente a la Central de Servicios de Asistencia en
                    los números habilitados por los países indicados.
                  </p>
                  <p>
                    En caso tal de existir cobro por llamar a la Central de Servicios de Asistencia, 
                    <strong>ORANGE TRAVEL ASSIST</strong> le reembolsará al Beneficiario el costo de la llamada; para ello 
                    solicitamos guardar el comprobante o factura por el pago de dicha llamada, donde esté reflejado el cobro a 
                    alguno de los números indicados abajo.
                  </p>
                  <p>
                    Es obligación del Beneficiario siempre llamar y reportar la emergencia. En los casos en que el 
                    Beneficiario no pueda hacerlo personalmente deberá y podrá hacerlo cualquier acompañante, amigo o 
                    familiar pero siempre la llamada o aviso deberá hacerse a más tardar dentro de las 24 horas de haber 
                    sucedido la emergencia. Para los casos en que el beneficiario se encuentre en altamar, y por ende impedido 
                    de comunicarse con la Central de Asistencias, deberá informar el hecho médico hasta 24 horas después de 
                    desembarcado en el primer puerto al que arribe. El no cumplimiento de esta norma acarrea la pérdida 
                    automática de cualquier derecho de reclamo de parte del Beneficiario.
                  </p>
                  <table className="table" style={{color: "#9ca9b3"}}>
                            <thead>
                                <tr><th>País</th><th>Teléfono</th><th>País</th><th>Teléfono</th></tr>
                            </thead>
                            <tbody>
                                <tr><th>Alemania</th><td>800-185-9976</td><th>Reino Unido</th><td>808-234-1766</td></tr>
                                <tr><th>Argentina</th><td>800-666-2984</td><th>Costa Rica</th><td>800-013-1372</td></tr>
                                <tr><th>Brasil</th><td>800-891-4530</td><th>Colombia</th><td>571-5938795</td></tr>
                                <tr><th>España</th><td>911-815-905</td><th>República Dominica</th><td>1888-751-8475</td></tr>
                                <tr><th>Francia</th><td>800-905-030</td><th>Estados Unidos</th><td>1-877-889-0149</td></tr>
                                <tr><th>Italia</th><td>800-839-070</td><th>Estados Unidos/Cobro revertido</th><td>+1-954-472-1895</td></tr>
                                <tr><th>Chile</th><td>562-29382411</td><th>E-mail</th><td>assistance@wt-assist.com</td></tr>
                                <tr><th>México</th><td>1866-261-1935</td><th>Skype</th><td>asistencia.internacional</td></tr>
                                <tr><th>Whatsapp</th><td>+ 57 316 763 6033</td></tr>
                            </tbody>
                  </table>
                  <p><b>
                    Nota: Los teléfonos toll free (0800) se deberán marcar tal cual como aparecen desde teléfonos fijos. 
                    En caso que el país donde se encuentre no tenga un teléfono toll free, se deberá llamar a través de la 
                    operadora internacional del país donde se encuentre el Beneficiario solicitando cobro revertido al teléfono 
                    de Estados Unidos indicado en la tabla superior, asimismo, a través de medios electrónicos como E-mail, WhatsApp 
                    y Skype.
                  </b></p>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion key={6} >
          <Card >
            <Card.Header classname="border-bottom">
              <Accordion.Toggle as={Button} variant="link" eventKey={6} >
                Obligaciones del beneficiario
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={6}>
              <Card.Body>
                <div>
                  <p>En todos los casos, para la obtención de los servicios el Beneficiario debe:</p>
                  <ol className="list-style-decimal">
                            <li>Solicitar y obtener la autorización de la Central de Servicios de Asistencia antes de tomar cualquier iniciativa o comprometer cualquier gasto en relación a los beneficios otorgados por el plan de la voucher de asistencia. En los casos donde no se haya solicitado la autorización a la central ni se haya obtenido la autorización, no procederán reembolsos algunos, ni darán derechos a reclamos.</li>
                            <li>Queda claramente entendido que la notificación a la central resulta imprescindible, aun cuando el problema suscitado se encuentre totalmente resuelto, ya que <strong>ORANGE TRAVEL ASSIST</strong> no podrá tomar a su cargo el costo de ninguna asistencia sin el previo conocimiento y autorización de la Central de Servicios de Asistencia.</li>
                            <li>El Beneficiario acepta que <strong>ORANGE TRAVEL ASSIST</strong> se reserva el derecho de grabar y auditar las conversaciones telefónicas que estime necesarias para el buen desarrollo de la prestación de sus servicios. El Beneficiario acepta expresamente la modalidad indicada y manifiesta su conformidad por la eventual utilización de los registros como medio de prueba en caso de existencia de controversias respecto de la asistencia prestada.</li>
                            <li>Si el Beneficiario o una tercera persona no pudiera comunicarse por una circunstancia o razón involuntaria con la Central de Servicios de Asistencia antes de ser asistido, el Beneficiario o una tercera persona, con la obligación ineludible, deberá informar a más tardar dentro de las 24 horas de producido el evento. No notificar dentro de las 24 horas acarrea la pérdida automática de los derechos del Beneficiario a reclamar o solicitar indemnización alguna.</li>
                            <li>Aceptar y acatar las soluciones indicadas y recomendadas por la Central de Servicios de Asistencia y llegado el caso, consentir con la repatriación a su país de origen cuando, según opinión médica, su estado sanitario lo permita y lo requiera.</li>
                            <li>Proveer la documentación que permita confirmar la procedencia del caso, así como todos los comprobantes originales de gastos a ser evaluados para su eventual reembolso por <strong>ORANGE TRAVEL ASSIST</strong> y toda la información médica (incluyendo la anterior al inicio del viaje), que permita a la central la evaluación del caso.</li>
                            <li>En todos aquellos casos en que <strong>ORANGE TRAVEL ASSIST</strong> lo requiera, el Beneficiario deberá otorgar las autorizaciones para revelar su historia clínica completando el Record Release Form que el centro médico solicitará firmar y devolverá por fax a la Central de Servicios de Asistencia. Asimismo, el Beneficiario autoriza en forma absoluta e irrevocable a <strong>ORANGE TRAVEL ASSIST</strong> a requerir en su nombre cualquier información médica a los profesionales tanto del exterior como del país de su residencia, con el objetivo de poder evaluar y eventualmente decidir sobre la aplicabilidad de las restricciones en casos de enfermedades o condiciones preexistentes o de la afección que haya dado origen a su asistencia. Recomendamos en forma especial a los Beneficiarios diligenciar siempre el Formulario cuando se registren en un centro hospitalario, eso será de gran ayuda en los casos de reembolsos y/o en la toma de decisiones sobre determinados casos que requieran del estudio del historial médico del paciente.</li>
                  </ol>
                  <p><b>
                    Nota: En algunos países y principalmente en los Estados Unidos de Norteamérica y Europa, debido a razones de
                    estandarización informática la mayoría de los centros médicos asistenciales tales como hospitales, 
                    consultorios, clínicas, laboratorios suelen enviar facturas y/o reclamos de pago a los pacientes atendidos, 
                    inclusive aun después de que las cuentas o facturas haya sido pagadas y saldadas. En caso de que ello ocurra,
                    el Beneficiario deberá contactar la oficina de la Central de Servicios de Asistencias marcando los números 
                    proporcionados anteriormente o escribiendo a claims@wt-assist.com y notificar esta situación. La Central se 
                    encargará de aclarar dicha situación con el proveedor.
                  </b></p>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion key={7} >
          <Card >
            <Card.Header classname="border-bottom">
              <Accordion.Toggle as={Button} variant="link" eventKey={7} >
                Obligaciones asumidas por <strong>Orange Travel Assist</strong>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={7}>
              <Card.Body>
                <div>
                  <ol className="list-style-decimal">
                              <li>Cumplir las prestaciones y beneficios descritos en las Condiciones Generales de eventos cubiertos en el plan contratado durante la vigencia del voucher.</li>
                              <li><strong>ORANGE TRAVEL ASSIST</strong> queda expresamente liberada, exenta y excusada de cualquiera de sus obligaciones y responsabilidades en caso de que el Beneficiario sufra algún daño o solicite asistencia a consecuencia y/o derivada de caso fortuito o de fuerza mayor, la cuales se citan a título de ejemplo y no taxativamente: catástrofes, sismos, inundaciones, tempestades, guerra internacional o guerra civil declaradas o no, rebeliones, conmoción interior, insurrección civil, actos de guerrilla o anti guerrilla, hostilidades, represalias, conflictos, embargos, apremios, huelgas, movimientos populares, lockout, actos de sabotaje o terrorismo, disturbios laborales, actos de autoridades gubernamentales, etc.; así como problemas y/o demoras que resulten por la terminación, interrupción o suspensión de los servicios de comunicación. Cuando elementos de esta índole interviniesen y una vez superados los mismos, <strong>ORANGE TRAVEL ASSIST</strong> se compromete a ejecutar sus compromisos y obligaciones dentro del menor plazo posible.</li>
                              <li><strong>ORANGE TRAVEL ASSIST</strong> se obliga a analizar cada solicitud de reembolso para determinar si es procedente y en consecuencia reintegrar los montos que correspondieren de acuerdo a las presentes condiciones generales y montos de cobertura del Plan contratado. Todas las compensaciones y/o reintegros y/o demás gastos que vayan a asumirse por <strong>ORANGE TRAVEL ASSIST</strong>, en el marco del presente contrato, podrán ser abonados en moneda local.</li>
                  </ol>
                  <p>Los tiempos establecidos para el procesamiento de un reembolso son:</p>
                  <ol className="list-style-alpha">
                            <li>El Beneficiario tiene hasta treinta (30) días continuos a partir del día finalización de la vigencia del voucher para presentar la documentación y respaldos necesarios para iniciar el proceso del reembolso. Después de ese plazo, no se aceptarán documentos para tramitar ningún reembolso.</li>
                            <li>Una vez recibidos los documentos, <strong>ORANGE TRAVEL ASSIST</strong> tiene hasta cinco (5) días continuos para solicitar cualquier documento faltante que no haya sido entregado por el Beneficiario.</li>
                            <li>Con todos los documentos necesarios en mano, <strong>ORANGE TRAVEL ASSIST</strong> procederá durante los siguientes quince (15) días hábiles a analizar el caso y emitir la carta de aprobación o negación de dicho reembolso.</li>
                            <li>Siendo procedente el reembolso, <strong>ORANGE TRAVEL ASSIST</strong> procederá a efectuar el pago en 15 días hábiles, posteriores a la fecha de recepción de los datos completos vía escrita para la realización de la transferencia.</li>
                  </ol>
                  <p><b>
                    Nota: Los reembolsos pagados directamente por <strong>ORANGE TRAVEL ASSIST</strong> pueden hacerse a 
                    través de transferencia bancaria, giro postal o cheque. <strong>ORANGE TRAVEL ASSIST</strong> asumirá los 
                    gastos generados por la agencia de giro postal, el envío del cheque, así como los cobros directos de su 
                    entidad bancaria; cargos adicionales realizados por el banco del Beneficiario serán cubiertos por el mismo.
                  </b></p>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion key={8} >
          <Card >
            <Card.Header classname="border-bottom">
              <Accordion.Toggle as={Button} variant="link" eventKey={8} >
                Moneda de alcances y servicios
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={8}>
              <Card.Body>
                <div>
                  <p>
                    Los beneficios ofrecidos por <strong>ORANGE TRAVEL ASSIST</strong> se detallan en el punto IX. y sus 
                    límites de cobertura máximos están reflejados en el voucher contratado expresados en Dólares Americanos (USD) o 
                    Euros (EUR), dependiendo del plan elegido y de su cobertura geográfica.
                  </p>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion key={9} >
          <Card >
            <Card.Header classname="border-bottom">
              <Accordion.Toggle as={Button} variant="link" eventKey={9} >
                Definicion de los beneficios
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={9}>
              <Card.Body>
                <div>
                <p>
                  Algunos beneficios se encuentran incluidos solo en algunos productos <strong>ORANGE TRAVEL ASSIST</strong>. 
                  Verifique en su voucher los beneficios y topes contratados. Si en su voucher no figura algún ítem, es porque el 
                  producto por usted elegido no dispone de este servicio.
                </p>
                <h5>Asistencia médica por accidente/enfermedad o condición médica no preexistente</h5>
                <dl>
                            <dt>Consultas Médicas:</dt> <dd>Se prestarán en caso de accidente y enfermedad o condición médica aguda e imprevista no preexistente.</dd>
                            <dt>Atención por Especialistas:</dt> <dd>Se prestará únicamente cuando sea indicada y autorizada por el Departamento Médico de la Central de Servicios de Asistencia de <strong>ORANGE TRAVEL ASSIST</strong> o por el médico tratante de la central.</dd>
                            <dt>Exámenes Médicos Complementarios:</dt> <dd>Únicamente cuando sean indicados y previamente autorizados por el Departamento Médico de la Central de Servicios de Asistencia.</dd>
                            <dt>Internaciones:</dt> <dd>De acuerdo a la naturaleza de la lesión o enfermedad, y siempre que el Departamento Médico de la Central de Servicios de Asistencia de <strong>ORANGE TRAVEL ASSIST</strong> así lo prescriba, se procederá a la internación del Beneficiario en el centro sanitario más próximo al lugar donde éste se encuentre. Este ítem aplicará únicamente al Beneficiario del plan de asistencia, y bajo ningún motivo se cubrirá cama y/o alimentación en el hospital o clínica para una persona acompañante.</dd>
                            <dt>Intervenciones Quirúrgicas:</dt> <dd>Cuando sean autorizadas por el Departamento Médico de la Central de Servicios de Asistencia, en los casos de emergencia que requieran en forma inmediata tratamiento, y que no puedan ser diferidas o postergadas hasta el retorno del Beneficiario a su país de origen.</dd>
                            <dt>Terapia Intensiva y Unidad Coronaria:</dt> <dd>cuando la naturaleza de la enfermedad o lesión así lo requiera, y siempre con la previa autorización del Departamento Médico de la Central de Servicios de Asistencia se autorizará este servicio.</dd>
                </dl>
                <p><b>
                  Nota 1: La Central de Servicios de Asistencia se reserva el derecho de decidir el más adecuado de entre 
                  los tratamientos propuestos por el cuerpo médico y/o la repatriación al país de residencia si su condición 
                  física lo permitiere. Si a juicio de los médicos tratantes de la Central de Servicios de Asistencia fuese 
                  posible el regreso al lugar de origen para recibir en él tratamiento de larga duración, cirugía programable o 
                  cirugías no urgentes, se procederá a la repatriación del Beneficiario, quien está obligado a aceptar tal 
                  solución, perdiendo en caso de rechazo todos los beneficios otorgados por su plan 
                  <strong>ORANGE TRAVEL ASSIST</strong>.
                </b></p>
                <h5>Asistencia médica por COVID-19</h5>
                <p style={{fontSize: "13px", fontWeight: "normal"}}>
                            El Beneficiario deberá siempre y sin excepción entrar en contacto con la Central de Emergencias,
                            quienes a su vez coordinarán una cita virtual por Telemedicina y, de acuerdo al dictamen brindado
                            por el Departamento Médico, si el Beneficiario presenta sintomatología relacionada al COVID-19, la
                            Central de Asistencias coordinará la consulta médica pertinente, de acuerdo a los protocolos de
                            seguridad y salud de cada país, cubriendo los gastos incurridos hasta el tope de cobertura indicado
                            en el voucher. Los siguientes gastos estarán cubiertos bajo el mismo tope:
                </p>
                <ul className="list-style-alpha">
                            <li style={{fontSize: "13px", fontWeight: "normal"}}>
                                <b>Gastos Hospitalarios por COVID-19:</b> En caso de requerir internación hospitalaria para
                                estabilizar la condición del Beneficiario.
                            </li>
                            <li style={{fontSize: "13px", fontWeight: "normal"}}>
                                <b>Gastos de respirador mecánico:</b> Si el Departamento Médico, en conjunto con el médico
                                tratante, considera necesario el uso de un respirador mecánico, la Central autorizará y
                                cubrirá dicho gasto.
                            </li>
                </ul>
                <p style={{fontSize: "13px"}}>
                            ESTE BENEFICIO NO OPERARÁ A MANERA DE REEMBOLSO.
                            <br />
                            <br />
                            Nota1: El límite de edad para este beneficio es de 70 años. Para el caso de beneficiarios hasta
                            los 64 años, la cobertura contratada será igual al tope por enfermedad no preexistente. Los
                            beneficiarios con edades comprendidas entre los 65 a 70 años, tendrán una cobertura
                            máxima de USD 30.000 para emisiones desde país de origen, y para el caso de emisiones en
                            destino la cobertura máxima será de USD 10.000. Los beneficiarios mayores de 70 años, y
                            hasta los 85, podrán adquirir la cobertura adicional por COVID-19, a través de la compra del
                            beneficio, el cual les otorgará un monto máximo de USD 30.000 siempre y cuando el plan
                            contratado sea igual o superior a USD/EUR 30.000. Finalmente, los beneficiarios mayores de
                            85 años, podrán adquirir la cobertura adicional por COVID-19, a través de la compra del
                            beneficio, el cual les otorgará un monto máximo para gastos médicos hasta por un monto
                            máximo de USD 10.000.
                            <br />
                            <br />
                            Nota2: Este producto no cubrirá gastos de cuarentena en hotel, se limitará únicamente a
                            gastos médicos.
                </p>
                <h5>Asistencia médica por enfermedad preexistente.</h5>
                <p>
                  En aquellos casos en que el Beneficiario contrate específicamente la cobertura para emergencias sufridas 
                  por una condición preexistente y/o crónica, se cubrirá hasta el monto que se especifique claramente en su 
                  voucher. La cobertura proporcionada para enfermedades crónicas y/o preexistentes contempla las siguientes 
                  eventualidades:
                </p>
                <p>
                  Episodio agudo o evento no predecible, descompensación de enfermedades crónicas y/o preexistentes conocidas 
                  o previamente asintomáticas. Esta cobertura se proporciona exclusivamente para la atención médica primaria en 
                  el episodio agudo, o caso no predecible, la emergencia debe requerir la asistencia durante el viaje y no puede 
                  aplazarse hasta el retorno al país de residencia, la Central de Asistencias se reserva el derecho de decidir el 
                  tratamiento más adecuado de entre los propuestos por el personal médico y/o la repatriación a su país de 
                  residencia. La repatriación será una solución en los casos en los que los tratamientos requiere evolución a 
                  largo término, cirugías programadas o cirugías no urgentes, el beneficiario está obligado a aceptar esta solución, 
                  perdiendo en caso de rechazo de la solución de todos los beneficios que ofrece el plan de asistencia.
                </p>
                <p>
                  Se excluye de este beneficio el inicio o la continuación de tratamientos, procedimientos diagnósticos, 
                  de investigación, o conducta diagnóstica y terapéutica, que no están relacionados con el episodio agudo e 
                  impredecible.
                </p>
                <p>
                  Se excluye de esta cobertura todas las enfermedades relacionadas con la transmisión sexual, incluyendo, 
                  pero no limitando a la sífilis, la gonorrea, el herpes genital, la clamidia, el virus del papiloma humano 
                  tricomonas vaginalis, tricomoniasis, virus de la inmunodeficiencia humana (VIH), el síndrome de 
                  inmunodeficiencia adquirida (SIDA), entre otros.
                </p>
                <p>
                  No se trata en cualquiera de nuestros planes, procedimientos de diálisis, trasplantes, 
                  tratamiento de oncología ni tratamiento psiquiátrico, audífonos, anteojos, lentes de contacto, puentes 
                  dentales, marcapasos, desfibriladores implantables, respiradores externos, dispositivos implantables, 
                  equipo desechable específico, etc. enfermedades causadas por la ingestión de drogas, estupefacientes, 
                  medicamentos que se toman de forma no fiable sin receta, alcoholismo, etc.
                </p>
                <p>
                  Las lesiones sufridas durante un acto ilícito, no están bajo nuestra cobertura. Obligaciones del beneficiario:
                </p>
                <ol className="list-style-decimal">
                            <li>El Beneficiario deberá seguir todas las instrucciones médicas dadas por el médico tratante asignado por <strong>ORANGE TRAVEL ASSIST</strong> y tomar todos los medicamentos de la forma prescrita y según se requiera.</li>
                            <li>Si el Beneficiario interesado en la contratación de un plan que incluya cobertura de asistencia de emergencia para condiciones pre-existente, sufren alguna(s) de las siguientes condiciones: cualquier tipo de cáncer, enfermedades del corazón, enfermedad pulmonar crónica y/o enfermedad hepática crónica, el beneficiario debe consultar a su médico personal en su país de origen antes de iniciar el viaje y obtener confirmación por escrito que está en condiciones de viajar por todos los días previstos, el destino deseado y puede hacer sin inconvenientes todas las actividades programadas.</li>
                            <li>El beneficiario no podrá iniciar el viaje después de recibir un diagnóstico terminal.</li>
                            <li>Para poder acceder a esta cobertura el beneficiario deberá haber estado estable por más de 12 meses.</li>
                </ol>
                <p>
                  En caso de que se determine la razón del viaje fue el tratamiento en el extranjero para una condición crónica 
                  o preexistente, la Central de Asistencias negará cobertura.
                </p>
                <h5>Medicamentos recetados</h5>
                <p>
                  En los límites de cobertura, <strong>ORANGE TRAVEL ASSIST</strong> se hará cargo de los gastos de los 
                  medicamentos recetados por el Médico Tratante de la Central de Servicios de Asistencia hasta los montos 
                  establecidos en los topes de cobertura del plan contratado. Los desembolsos realizados por el Beneficiario 
                  para la compra de medicamentos previamente autorizados por la Central de Servicios de Asistencia serán 
                  reintegrados, dentro de los límites de cobertura y una vez retornado al país de origen, y contra la previa 
                  presentación de los comprobantes originales de compra, de la copia original del dictamen o informe médico en 
                  donde indique claramente el diagnóstico recibido, así la fórmula o receta médica. Recomendamos a los 
                  Beneficiarios no olvidar solicitar estos documentos al médico tratante, la no presentación de estos documentos 
                  puede resultar en el no reembolso de los gastos.
                </p>
                <p>
                  Se deja constancia y se informa que los gastos de medicamentos por concepto de enfermedades preexistentes no 
                  serán asumidos por <strong>ORANGE TRAVEL ASSIST</strong>, así hayan sido diagnosticados por el Médico 
                  Tratante de la Central de la Central de Servicios de Asistencia. Se encuentran también excluidos los 
                  medicamentos por tratamiento de enfermedades mentales o psíquicas o emocionales, aun en los casos en que la 
                  consulta médica haya sido autorizada por el Departamento Médico de <strong>ORANGE TRAVEL ASSIST</strong>.
                </p>
                <p>
                  Tampoco se cubrirán bajo ningún motivo las pastillas anticonceptivas, inyecciones anticonceptivas, 
                  dispositivos intrauterinos o cualquier otro método de planificación familiar, así hayan sido diagnosticados 
                  por el Médico Tratante de la Central de la Central de Servicios de Asistencia.
                </p>
                <p><b>
                  Nota: Las prescripciones médicas destinadas a la recuperación inicial de los síntomas sólo serán 
                  autorizadas por los primeros 30 días de tratamiento.
                </b></p>
                <h5>Emergencia dental</h5>
                <p>
                  En los límites de cobertura, <strong>ORANGE TRAVEL ASSIST</strong> se hará cargo de los gastos por 
                  atención odontológica derivados de una urgencia, debido o causada por un trauma, accidente o infección, 
                  limitándose únicamente al tratamiento del dolor y/o a la extracción de la pieza dentaria resultante de 
                  infección o trauma únicamente. Los tratamientos odontológicos de conductos, cambios de calzas, coronas, 
                  prótesis, sellamientos, limpiezas dentales, diseños de sonrisa o cualquier otro tratamiento no especificado 
                  claramente en estas condiciones se encuentran excluidos de la cobertura.
                </p>
                <h5>Traslado sanitario y/o repatriación sanitaria</h5>
                <p>
                  En caso de emergencia o de urgencia y si la Central de Servicios de Asistencia lo juzgare necesario, 
                  se organizará el traslado del Beneficiario al centro de salud más cercano, por el medio de transporte que el 
                  Departamento Médico de la Central de Servicios de Asistencia considere más apropiado y según corresponda a la 
                  naturaleza de la lesión o enfermedad. Queda igualmente establecido que aun para los casos de tratamientos y 
                  cirugías que ocurren en casos catalogados como urgencia o emergencia el traslado sanitario debe ser 
                  previamente solicitado y autorizado por la central de <strong>ORANGE TRAVEL ASSIST</strong>. El no 
                  cumplimiento de esta norma exime a <strong>ORANGE TRAVEL ASSIST</strong> de tomar a cargo la cobertura de 
                  dicho traslado.
                </p>
                <p>Se entiende por repatriación sanitaria el traslado del Beneficiario enfermo o accidentado desde el lugar en donde se encuentra hasta el aeropuerto de ingreso del país de residencia habitual y en el que debió ser emitido el voucher. Solamente el Departamento Médico de <strong>ORANGE TRAVEL ASSIST</strong> podrá autorizar a tomar todas las providencias mencionadas en esta cláusula, quedando el Beneficiario o un familiar prohibido de realizarlo por cuenta propia sin la previa autorización escrita de <strong>ORANGE TRAVEL ASSIST</strong>. Adicionalmente la repatriación deberá ser autorizada y justificada médica y científicamente por el Médico Tratante de <strong>ORANGE TRAVEL ASSIST</strong> , en el caso en que el Beneficiario y o sus familiares o acompañantes decidieran efectuar la repatriación dejando de lado o sin solicitar la opinión del Departamento Médico de <strong>ORANGE TRAVEL ASSIST</strong>, de realizarse de esta manera, ninguna responsabilidad recaerá sobre <strong>ORANGE TRAVEL ASSIST</strong> siendo por lo tanto la repatriación así como todos los demás gastos y consecuencias, responsabilidad del Beneficiario o de sus familiares o acompañantes, sin derecho a reclamo contra <strong>ORANGE TRAVEL ASSIST</strong>.</p>
                <p>Cuando el Departamento Médico de <strong>ORANGE TRAVEL ASSIST</strong> en común acuerdo con el Médico Tratante estime necesario y recomiende la repatriación sanitaria, esta se efectuará en primera instancia por el medio de transporte disponible más conveniente para ello, y/o por avión de línea aérea comercial, en clase turista y sujeta a disponibilidad de cupo aéreo, hasta el aeropuerto de ingreso del país de residencia o de compra de la tarjeta. <strong>ORANGE TRAVEL ASSIST</strong> se hará cargo del pago de las diferencias por cambio de fecha del pasaje o la compra de uno nuevo si el original se tratase de un tiquete sin posibilidad de cambio. Esta asistencia comprende su transporte en ambulancia u otro medio de transporte que sea compatible con su estado de salud y aprobado por el Departamento Médico de <strong>ORANGE TRAVEL ASSIST</strong> desde el lugar de internación hasta su lugar de residencia, con la estructura de apoyo necesaria incluyendo camilla, sillas de rueda, caminador, acompañamiento médico, etc.</p>
                <p>No será reconocido ningún gasto por concepto de repatriación cuando la causa que dio origen a ella es a consecuencia de una enfermedad preexistente u obedezca a un evento que figura dentro de las exclusiones generales, salvo en planes que contemplen preexistencias. Este beneficio aplicará única y exclusivamente dentro de las fechas de vigencia de su voucher.</p>
                <h5>Repatriación funeraria</h5>
                <p>En caso de fallecimiento del Beneficiario durante la vigencia de la tarjeta <strong>ORANGE TRAVEL ASSIST</strong> a causa de un evento no excluido en las condiciones generales. <strong>ORANGE TRAVEL ASSIST</strong> organizará y sufragará la repatriación funeraria tomando a su cargo los gastos de: féretro simple obligatorio para el transporte internacional, los trámites administrativos y el transporte del cuerpo por el medio que consideren más conveniente hasta el lugar de ingreso al país de residencia habitual del fallecido, hasta el tope especificado en la tabla de beneficios.</p>
                <p>Si el derechohabiente lo desea, dentro de esta misma cobertura, puede optar por la cremación del cuerpo y también estarán incluidos todos los trámites administrativos a los que haya lugar y traslado de cenizas hasta el país de residencia habitual del fallecido.</p>
                <p>Los gastos de féretro definitivo, trámites funerarios, traslados terrestres o aéreos en el país de residencia e inhumación no estarán a cargo de <strong>ORANGE TRAVEL ASSIST</strong>.</p>
                <p><strong>ORANGE TRAVEL ASSIST</strong> quedará eximido de prestar los servicios y asumir los costos relativos al presente beneficio en caso que el fallecimiento del Beneficiario se origine por causa de un suicidio o fallecimiento por consecuencia de ingesta de alcohol o cualquier tipo de drogas, o por una enfermedad o condición médica preexistente, crónica, o recurrente. Este beneficio no contempla ni incluye bajo ninguna circunstancia gastos de regreso de familiares acompañantes del fallecido, por lo que <strong>ORANGE TRAVEL ASSIST</strong> no tomará a su cargo ningún gasto de terceros.</p>
                <h5>Traslado de un familiar por hospitalización en 1º. Grado de consanguinidad</h5>
                <p>En caso de que la hospitalización de un Beneficiario, viajando solo y no acompañado, fuese superior a diez (10) días, <strong>ORANGE TRAVEL ASSIST</strong> se hará cargo de un pasaje aéreo en clase turista, sujeto a disponibilidad de espacio para un familiar de compañía. En caso de ser contemplado en la tabla de beneficios de los productos, el Beneficiario podrá tener derecho a los gastos de hotel por USD 80.00 (ochenta dólares) diarios para su familiar acompañante durante máximo siete días o hasta el alta del paciente, lo que suceda primero.</p>
                <p><b>Atención: Tanto para esta cláusula como para cualquier otra que cubra gastos de hotelería, se entiende estos limitados al hospedaje simple, sin gastos de restaurante, lavandería, telefonía u otro cualquier como mini bar, alimentación tomada en la habitación, u otro tipo de gasto cualquiera.</b></p>
                <h5>Gastos de hotel por convalecencia</h5>
                <p>Cuando de acuerdo con el médico tratante y en común acuerdo con el Departamento Médico de la Central de Servicios de Asistencia, el Beneficiario hubiese estado internado en un hospital al menos cinco (5) días y que a su salida deba obligatoriamente guardar reposo forzoso, <strong>ORANGE TRAVEL ASSIST</strong> cubrirá los gastos de hotel hasta el monto indicado en su plan de asistencia, con un máximo de 10 (diez) días. Este ítem aplicará únicamente al Beneficiario del plan de asistencia, y bajo ningún motivo se cubrirán los gastos para una persona acompañante.</p>
                <p>Se aclara que <strong>ORANGE TRAVEL ASSIST</strong> no asumirá ningún gasto de hotel por convalecencia cuando la internación haya sido suscitada por una enfermedad o condición médica preexistente.</p>
                <p><b>Atención: Dicho reposo deberá ser ordenado por los médicos de la central exclusivamente y contemplarán únicamente el cubrimiento del costo de la habitación sin ningún tipo de alimentación o gastos de otra índole tales como lavandería, llamadas telefónicas (salvo aquellas efectuadas a la central de <strong>ORANGE TRAVEL ASSIST</strong>.), mini bares, etc.</b></p>
                <h5>Orientación en caso de extravío de equipaje/documentos</h5>
                <p><strong>ORANGE TRAVEL ASSIST</strong> asesorará al Beneficiario para la denuncia del extravío o robo de su equipaje y efectos personales, para lo cual pondrá a su disposición los servicios de la Central de Servicios de Asistencia más próxima. Igualmente, <strong>ORANGE TRAVEL ASSIST</strong> asesorará al Beneficiario en caso de pérdida de documentos de viajes, y o tarjetas de crédito dándole las instrucciones para que el Beneficiario interponga los denuncios respectivos, y tramite la recuperación de los mismos.</p>
                <h5>Viaje de regreso por fallecimiento de familiar en 1° grado</h5>
                <p>Si el Beneficiario debiera retornar a su país de residencia habitual por causa del fallecimiento de un familiar directo (padre, cónyuge, hijo o hermano) allí residente, <strong>ORANGE TRAVEL ASSIST</strong> se hará cargo de la diferencia del costo del pasaje aéreo de regreso del Beneficiario a su país de origen, únicamente cuando su pasaje sea de tarifa reducida por fecha fija o limitada de regreso. Esta asistencia deberá acreditarse mediante certificado de defunción del familiar y documento que acredite el parentesco.</p>
                <h5>Regreso anticipado por siniestro grave en domicilio</h5>
                <p>En caso de incendio, explosión, inundación o robo con daños y violencia en el domicilio de un Beneficiario, mientras éste se encuentre de viaje, si no hubiese ninguna persona que pueda hacerse cargo de la situación y si su pasaje original de regreso no le permitiera el cambio gratuito de fecha, <strong>ORANGE TRAVEL ASSIST</strong> tomará a su cargo la diferencia que correspondiese o el costo de un nuevo pasaje en clase turista desde el lugar en que el Beneficiario se encuentre hasta el aeropuerto más cercano al hogar del Beneficiario en el país de residencia. Esta solicitud de asistencia deberá acreditarse mediante la presentación en la Central de Servicios de Asistencias el original de la denuncia policial correspondiente, dentro de las veinticuatro horas siguientes al suceso. El Beneficiario deberá indefectiblemente comunicarse con la Central de Servicios de Asistencias a fin de ser autorizado. No serán aceptados pedidos de reembolso sin ninguna justificación.</p>
                <h5>Acompañamiento de menores de 15 años</h5>
                <p>Si un Beneficiario viajara como única compañía de menores de quince (15) años también Beneficiarios de un plan de asistencia <strong>ORANGE TRAVEL ASSIST</strong> y por causa de enfermedad o accidente constatado por el Departamento Médico de la Central de Servicios de Asistencia, se viera imposibilitado para ocuparse de ellos, <strong>ORANGE TRAVEL ASSIST</strong> organizará a su cargo el desplazamiento de dichos menores hasta el domicilio habitual en su país de origen, por el medio que considere más adecuado.</p>
                <h5>Cancelación de viaje contratado</h5>
                <p><strong>ORANGE TRAVEL ASSIST</strong> cubrirá hasta el tope de cobertura según el plan contratado las penalidades por cancelar anticipadamente un viaje conocido como tours, paquetes turísticos, excursiones, boletos aéreos y cruceros.</p>
                <p>Para ser acreedor de este beneficio, el Beneficiario del voucher deberá:</p>
                <ol className="list-style-decimal">
                            <li>Contratar el plan con una diferencia de hasta 72 horas siguientes en que se contrate el paquete turístico y/o crucero. Siempre y cuando no haya iniciado el periodo de penalidades publicados por la agencia de viajes o naviera.</li>
                            <li>Dar aviso a la Central de Servicios de Asistencias en un máximo de 24 horas luego de ocurrido el evento que motiva la cancelación.</li>
                            <li>Presentar toda la documentación que <strong>ORANGE TRAVEL ASSIST</strong> considere para evaluar la cobertura de este beneficio, incluyendo, pero no limitando a: documento donde se demuestre de forma clara y fehaciente el motivo de cancelación de viaje (informe médico, partida de defunción, entre otros), cartas de los respectivos prestadores del servicio, facturas, recibos de pago. (Ver requisitos específicos en los casos de cruceros abajo señalados).</li>
                            <li>
                                El Beneficiario tiene hasta treinta (30) días continuos a partir de la fecha de sucedido el evento para presentar la documentación completa y respaldos necesarios para iniciar el proceso del reembolso. Después de ese plazo, no se aceptarán documentos para tramitar ningún reembolso.
                            </li>
                </ol>
                <p><b><u>Nota: para los planes Anuales Multiviajes la cancelación se renovará cada vez que el Beneficiario viaje según indique el plan de asistencia del producto que haya adquirido y aplica siempre y cuando se cumplan los requisitos establecidos para ser acreedor de este beneficio en cada viaje. Este beneficio no aplica para Beneficiarios mayores de 74 años.</u></b></p>
                <p><u>Cancelación de un viaje de Crucero antes de su inicio:</u></p>
                <p>El Beneficiario deberá en este caso:</p>
                <ul>
                            <li>Notificar de inmediato su decisión a la naviera por escrito y obtener de ésta un comprobante que indique en forma inequívoca la fecha de dicha notificación formal de la imposibilidad de iniciar el viaje de crucero en el barco y fecha originalmente contratados.</li>
                            <li>Deberá además obtener de la naviera las Condiciones Generales de contratación de cruceros, en donde se indique claramente el procedimiento de aplicaciones de las penalidades o cláusulas penales por cancelación anticipada de un crucero contratado y totalmente pagado.</li>
                            <li>Deberá obtener de la naviera un comprobante que demuestre el monto de la penalidad aplicable a su contrato de crucero en particular y el monto del reembolso si fuere el caso.</li>
                </ul>
                <p>Una vez obtenida la documentación anterior, deberá demostrar por escrito a <strong>ORANGE TRAVEL ASSIST</strong> en forma clara y fehaciente la causal o causales que ocasionaron la cancelación de viaje y enviar a la Central de Servicios de Asistencia toda dicha documentación para su eventual comprobación por parte de <strong>ORANGE TRAVEL ASSIST</strong> y eventual reembolso de ser procedente.</p>
                <p>Son causas justificadas a los efectos del presente beneficio:</p>
                <ol className="list-style-decimal">
                            <li>El fallecimiento, accidente o enfermedad grave no preexistente del Beneficiario o familiar en primer grado de consanguinidad (padres, hijos o hermanos) o cónyuge, entendiéndose por enfermedad grave una alteración de la salud que, a juicio del Departamento Médico de la Central de Servicios de Asistencias, imposibilite al Beneficiario para iniciar el viaje en la fecha contratada originalmente.</li>
                            <li>La convocatoria como parte, testigo o jurado de un tribunal.</li>
                            <li>Los daños que, por incendio, robo, hurto o por la fuerza de la naturaleza en su residencia habitual o en sus locales profesionales que los hagan inhabitables y justifican ineludiblemente su presencia.</li>
                            <li>Cuarentena médica que obligue al Beneficiario a mantener dentro de su país de origen.</li>
                            <li>Despido laboral comprobado del Beneficiario, con fecha posterior a la contratación del plan de asistencia.</li>
                            <li>Convocatoria de emergencia para prestación de servicio militar, médico o público.</li>
                            <li>Epidemia, catástrofes naturales o cenizas volcánicas.</li>
                            <li>Si la persona que ha de acompañar al Beneficiario en el viaje, entendiéndose como tal(es) a la(s) persona(s) que compartan la misma habitación de hotel o camarote de crucero con el Beneficiario, o sea(n) familiar(es) de primer grado de consanguinidad (padres, hijos o hermanos) o cónyuges, también poseedor(es) de un plan de asistencia en las mismas condiciones que el Beneficiario y dicho(s) acompañante(s) se viese(n) obligado(s) a anular el viaje por alguna de las causas enumeradas anteriormente.</li>
                  </ol>
                  <p>Adquirido el plan en las condiciones antes indicadas, y de ser aplicable el beneficio, la vigencia del mismo comienza en el momento en que el Beneficiario adquiere su plan de asistencia y finaliza en el momento de inicio de la vigencia del voucher. Este beneficio no aplica para Beneficiarios mayores de 74 años.</p>
                  <h5>Cancelación de viaje por COVID-19</h5>
                  <p>
                            En caso de ser contemplado dentro del voucher, el Beneficiario podrá cancelar anticipadamente su
                            viaje por los siguientes motivos:
                  </p>
                  <ol className="list-style-decimal">
                            <li>
                                En caso de diagnóstico positivo de COVID-19 del Beneficiario, acompañante de viaje o familiar en primer grado de consanguinidad.
                            </li>
                  </ol>
                  <p>
                            En todo caso, el Voucher deberá ser emitido con una antelación mínima de 14 días a la fecha de
                            partida, o inicio de vigencia, lo que suceda primero.
                  </p>
                  <p>
                            <b>
                                Nota1: No aplica para Beneficiarios mayores de 65 años. No tendrán cobertura solicitudes de
                                Cancelación de viaje, si la misma se llegase a dar por un cierre de fronteras por parte del
                                Gobierno de origen o destino. Adicionalmente, si el proveedor hotelero, aerolínea o cualquier
                                otro operador turístico le ofrece al Beneficiario la opción de dejar abiertas las fechas,
                                reprogramar, crédito a favor, y entre otras soluciones, aun si el Beneficiario rechaza dicha
                                opción, no habrá lugar a reembolso por gastos incurridos.
                            </b>
                        </p>
                        <p>
                            <b>
                                Nota: Queda excluido de cobertura cualquier evento ocurrido con anterioridad a la emisión
                                del Plan de Asistencia. En caso de un mismo evento que involucre a más de una reserva y
                                cualquiera sea la cantidad de Titulares involucrados en el mismo, la responsabilidad máxima
                                de indemnización de TAGIT por todos los titulares afectados, no será mayor a CUARENTA
                                MIL DÓLARES NORTEAMERICANOS US$40,000.00 como monto máximo global por el mismo
                                siniestro. En caso de que la suma de las indemnizaciones a abonar supere los montos
                                antedichos, cada indemnización individual será efectuada a prorrata de la responsabilidad
                                máxima definida en el Voucher.
                            </b>
                        </p>
                        <h5>Sustitución de ejecutivo</h5>
                        <p>En el caso que el Beneficiario se encontrara en viaje de negocios en el extranjero y fuese internado por una emergencia médica grave que le impida proseguir con su cometido profesional, <strong>ORANGE TRAVEL ASSIST</strong> se hará cargo del pasaje en clase turista, sujeto a disponibilidad de plazas, de la persona que su empresa designe como sustituto y de los gastos de hotel hasta un máximo de USD 80 (ochenta dólares) diarios durante cinco (5) días.</p>
                        <h5>Línea de consultas 24 horas</h5>
                        <p>Los Beneficiarios de un plan <strong>ORANGE TRAVEL ASSIST</strong>, podrán pedir a la Central de Servicios de Asistencia, informaciones relativas a obligaciones consulares, sanitarias, turísticas y otras concernientes al país de destino. Igualmente estará a disposición de los pasajeros el servicio conserje de <strong>ORANGE TRAVEL ASSIST</strong> para ayuda con la reserva de hoteles, restaurantes, eventos deportivos, culturales, entre otros.</p>
                        <h5>Asistencia concierge</h5>
                        <p>El servicio de concierge <strong>ORANGE TRAVEL ASSIST</strong> se encuentra disponible las 24 horas del día, los 365 días del año para asistir a los Beneficiarios en la consecución de información sobre entradas para espectáculos, arreglos de viaje, renta de vehículos, reservaciones para obras de teatro y cualquier otra información que el Beneficiario pueda necesitar en las principales ciudades del mundo. El Beneficiario será responsable por todos los costos y gastos relacionados con la solicitud de los servicios de asistencia concierge; este servicio es netamente informativo.</p>
                        <h5>Transmisión de mensajes urgentes</h5>
                        <p><strong>ORANGE TRAVEL ASSIST</strong> transmitirá los mensajes urgentes y justificados, relativos a cualquiera de los eventos que son objeto de las prestaciones contempladas en estas condiciones generales.</p>
                        <h5>Transferencia de fondos y transferencia de fondos para fianza legal en caso de accidente de tránsito</h5>
                        <p>Durante el viaje, en caso de necesidad imperiosa e imprevista y contra su previo depósito en la oficina de <strong>ORANGE TRAVEL ASSIST</strong>, esta gestionará la entrega al Beneficiario en el país donde se encuentre de cantidades hasta el límite especificado en estas condiciones generales. Si el Beneficiario fuese encarcelado como consecuencia de un accidente de tránsito, <strong>ORANGE TRAVEL ASSIST</strong> gestionará el envío de las cantidades especificadas en estas condiciones generales para hacer frente al pago de la fianza penal, debiendo previamente ser depositado el monto referido en la oficina de <strong>ORANGE TRAVEL ASSIST</strong> por parte de la familia del Beneficiario. El costo asumido por <strong>ORANGE TRAVEL ASSIST</strong> corresponderá únicamente al valor de la transferencia realizada al Beneficiario. Estas coberturas serán aplicadas una sola vez, cualquiera que sea el lapso de validez del plan de voucher de asistencia.</p>
                        <h5>Asistencia legal por accidente de tránsito</h5>
                        <p><strong>ORANGE TRAVEL ASSIST</strong> tomará a cargo hasta los topes indicados en el plan, los gastos de honorarios que ocasione la defensa civil, criminal o penal del Beneficiario, con motivo de imputársele o exculpársele la responsabilidad por un accidente de tránsito.</p>
                        <h5>Compensación por pérdida de equipaje</h5>
                        <p><strong>ORANGE TRAVEL ASSIST</strong> compensará al Beneficiario de forma complementaria, hasta el tope especificado en la tabla de beneficios. Para la obtención de este beneficio rigen los siguientes términos y condiciones:</p>
                        <ul>
                            <li>Que la línea aérea y la Central de <strong>ORANGE TRAVEL ASSIST</strong> hayan sido notificadas del hecho por el Beneficiario antes de abandonar el aeropuerto donde se registró la pérdida siguiendo las instrucciones descritas más abajo.</li>
                            <li>Que el equipaje se haya extraviado durante su transporte en vuelo regular internacional, este beneficio no aplica cuando la pérdida se origina en un trayecto de vuelo nacional, ni de vuelos charters o fletados, aviones particulares o militares, o cualquier vuelo que no tenga un itinerario fijo publicado que opera regularmente, ni tampoco cuando la pérdida se origina en vuelos domésticos en el exterior.</li>
                            <li>Que el mencionado equipaje haya sido debidamente registrado, etiquetado y despachado en la bodega del avión y haya sido debidamente presentado y entregado al personal de la aerolínea en el despacho del terminal. <strong>ORANGE TRAVEL ASSIST</strong>, no indemnizará a los Beneficiarios de un plan, por la pérdida de equipaje de mano o de cabina o cualquier otro bulto que no haya sido debidamente registrado ante la aerolínea y haya sido transportado en la bodega del avión.</li>
                            <li>Que la pérdida del equipaje haya ocurrido entre el momento en que el mismo fue entregado a personal autorizado de la línea aérea para ser embarcado y el momento en que debió ser devuelto al pasajero al finalizar el viaje.</li>
                            <li>Que la línea aérea se haya hecho cargo de su responsabilidad por la pérdida del mencionado equipaje, y haya abonado o pagado al Beneficiario la indemnización prevista por ella. <strong>ORANGE TRAVEL ASSIST</strong> no podrá indemnizar al Beneficiario cuando este no haya aun recibido la indemnización de la aerolínea.</li>
                            <li>No tienen derecho a esta compensación las pérdidas ocurridas en cualquier tipo de transporte terrestre en el extranjero.</li>
                            <li>La compensación por pérdida total del equipaje se limitará a un solo bulto entero y completo faltante en forma definitiva y a un solo Beneficiario damnificado. En el caso de que el bulto faltante estuviera a nombre de varios Beneficiarios, la compensación será prorrateada entre los mismos, siempre que incluya los correspondientes números de billetes de cada uno, así como el número de voucher. No se indemnizan faltantes parciales de las maletas.</li>
                            <li>En caso que la línea aérea ofreciera al Beneficiario como indemnización la posibilidad de optar entre percibir un valor en dinero o uno o más pasajes u otro medio de compensación, <strong>ORANGE TRAVEL ASSIST</strong> procederá a abonar al Beneficiario la compensación económica por extravío de equipaje, una vez que dicha opción sea ejercida.</li>
                        </ul>
                        <p>Es importante anotar que, en los casos de extravío de equipaje, los directos responsables de las mismas son las aerolíneas o empresas transportadoras, por lo tanto, <strong>ORANGE TRAVEL ASSIST</strong> intervendrá en calidad de intermediario facilitador entre la aerolínea y o la compañía transportadora y el pasajero, y por lo tanto no podrá ser considerada ni tomada como responsable directa de dicha pérdida, ni de la búsqueda del equipaje. Las aerolíneas se reservan el derecho de aceptar o no los reclamos a <strong>ORANGE TRAVEL ASSIST</strong>, y en términos generales pueden exigir que las reclamaciones sean puestas directamente por los pasajeros y no permitir la intermediación de <strong>ORANGE TRAVEL ASSIST</strong>.</p>
                        <p>Las indemnizaciones por conceptos de pérdida total de equipaje se abonarán únicamente en el país donde se compró la asistencia <strong>ORANGE TRAVEL ASSIST</strong>.
                        </p>
                        <p>Al regresar a su país de origen, el Beneficiario deberá presentar en las oficinas de <strong>ORANGE TRAVEL ASSIST</strong> la siguiente documentación:</p>
                        <ul>
                            <li>Formulario P.I.R. (Reclamo por Pérdida de Equipaje) Original</li>
                            <li>Documento o Pasaporte</li>
                            <li>Voucher de asistencia</li>
                            <li>Copia original del recibo de la indemnización de la línea aérea (Cheque, comprobante de pago de la misma), pasajes aéreos.</li>
                        </ul>
                        <p><strong>ORANGE TRAVEL ASSIST</strong> solo podrá proceder al reembolso por concepto de indemnización por pérdida de equipaje únicamente después de que la Aerolínea responsable de la pérdida haya debidamente indemnizado al Beneficiario. No se podrá indemnizar al Beneficiario sin el comprobante de pago de la aerolínea.</p>
                        <p><b>NOTA: La indemnización al Beneficiario será complementaria a la abonada por la línea aérea conforme a lo indicado en el voucher correspondiente al plan <strong>ORANGE TRAVEL ASSIST</strong> adquirido. En caso de indemnización complementaria, el importe de la misma se determinará como la diferencia entre lo abonado por la línea aérea y el monto que se determine conforme a lo estipulado en el plan adquirido, y siempre hasta el límite máximo indicado por este concepto en el voucher. No será válida compensación alguna si la indemnización de la compañía aérea iguala o supera el límite máximo establecido en el voucher para este concepto. Por otra parte, la compensación por pérdida de equipaje aplica por bulto o carga y no por persona.</b></p>
                        <h5>Compensación por demora en devolución de equipaje</h5>
                        <p><strong>ORANGE TRAVEL ASSIST</strong> reintegrará al Beneficiario cuyo plan de asistencia así lo establezca, mediante la presentación de los comprobantes originales de compras de elementos de primera necesidad, realizadas durante el lapso de demora en la entrega de su equipaje. Las compras deberán ser hechas después de haber sido realizado el reclamo pertinente con la aerolínea, así como de haber dado aviso a la Central de Servicios de Asistencia y proporcionado el número PIR correspondiente otorgado por la aerolínea. Esta prestación se brindará únicamente si el equipaje no es localizado dentro de las seis (6) horas contadas a partir del arribo del vuelo. El plazo de 6 horas se refiere exclusivamente al tiempo transcurrido hasta la localización del equipaje. El lapso posterior hasta la entrega física del mismo por parte de la aerolínea está fuera de la responsabilidad de <strong>ORANGE TRAVEL ASSIST</strong> y por tanto no será tenido en cuenta en el cómputo de las 6 horas.</p>
                        <p>Si la demora o el extravío del equipaje ocurren en vuelos de conexión, en un vuelo de regreso al país de origen y/o de residencia habitual del Beneficiario, no se otorgará compensación alguna.</p>
                        <p>En caso tal que el equipaje sea declarado como perdido totalmente por parte de la compañía aérea, se deducirá del monto a reembolsar por concepto de “Compensación por pérdida de equipaje”, el total reembolsado por los gastos del presente beneficio.</p>
                        <p>Este servicio opera por reembolso previa autorización de la Central de Servicios de Asistencia y regido por los tiempos establecidos en los trámites de reembolso.</p>
                        <p>En caso de demora de equipaje, siga estas instrucciones:</p>
                        <ol>
                            <li>Inmediatamente constatada la falta de equipaje diríjase a la compañía aérea o persona
                            responsable dentro del mismo recinto al que llegan los equipajes. Solicite y complete el
                            formulario P.I.R Property Irregularity Report.</li>
                            <li>Antes de abandonar el aeropuerto comuníquese telefónicamente con la Central de
                            Asistencia a efectos de notificar el extravío de su equipaje.</li>
                        </ol>
                        <p>Al regresar a su país de origen debe presentar en las oficinas la siguiente documentación:</p>
                        <ol>
                            <li>Formulario P.I.R</li>
                            <li>Comprobantes de pago en razón de gastos de artículos de primera necesidad (elementos
                            de higiene y ropa de primera necesidad).</li>
                            <li>Itinerario original de vuelo</li>
                        </ol>
                        <p><b>Nota: la compensación por demora en devolución de equipaje aplica por bulto o carga y no por persona.</b></p>
                        <h5>Compensación por daño de equipaje</h5>
                        <p>Si las maletas del Beneficiario sufrieran algún tipo de daño que deje expuestos los elementos que se encuentran en su interior, así como la violación de sus cerraduras con los mismos efectos, <strong>ORANGE TRAVEL ASSIST</strong> otorgará al beneficiario la suma indicada según los topes del producto contratado.</p>
                        <p>Para hacer efectivo este beneficio debe verificarse que la rotura haya ocurrido entre el momento en que el equipaje fue embarcado y el momento en que deba ser entregado al Beneficiario al desembarcar, debe haber sido informado a la Central de Servicios de Asistencias de <strong>ORANGE TRAVEL ASSIST</strong> dentro de las 24 horas de ocurrido el siniestro y el Beneficiario deberá presentar a <strong>ORANGE TRAVEL ASSIST</strong> el comprobante de denuncia otorgado por la línea aérea o naviera y los comprobantes originales por el arreglo de las roturas o reposición del equipaje.</p>
                        <p><b>Nota: la compensación por daño de equipaje aplica por bulto o carga y no por persona.</b></p>
                        <h5>Indemnización de vuelo demorado o cancelado</h5>
                        <p>Si el vuelo del Beneficiario fuera demorado por más de seis (6) horas consecutivas a la programada originalmente, y siempre y cuando no exista otra alternativa de transporte durante ellas, <strong>ORANGE TRAVEL ASSIST</strong> reintegrará hasta el tope de cobertura convenido en razón de gastos de hotel, comidas y comunicaciones realizadas durante la demora y contra la presentación de sus comprobantes originales, acompañados de un certificado de la compañía aérea reflejando la demora o cancelación sufrida por el vuelo del Beneficiario.</p>
                        <p>Este beneficio no se brindará si el vuelo fuese en un aeropuerto ubicado en las proximidades de la ciudad de residencia habitual así la distancia sea superior a 100 kms o dentro de la ciudad de residencia habitual del Beneficiario; tampoco si el Beneficiario viajara con un pasaje sujeto a disponibilidad de espacio. Este servicio no se aplica si la cancelación se debe a la quiebra y/o cesación de servicios de la línea aérea.</p>
                        <h5>Continuación de viaje / crucero</h5>
                        <p><strong>ORANGE TRAVEL ASSIST</strong> se hará cargo del costo de un boleto en clase económica, de un solo sentido, desde el puerto de embarque hasta el siguiente puerto de escala del crucero contratado, si el beneficiario inicialmente se perdió la salida programada del crucero debido a un vuelo de conexión retardada por más de (6) horas de la hora programada. Este beneficio se paga como reembolso, previa presentación de los recibos apropiados y el informe de la compañía aérea (PIR).</p>
                        <h5>Deportes amateur</h5>
                        <p>Proporciona cobertura de los deportes ecuestres, deportes de nieve, deportes de equipo, deportes
                        de fuerza, deportes de invierno, las artes marciales, campeonatos de tiro el deporte practicado en
                        rangos reguladas; deportes acuáticos, esquí, surf, kitesurf recreativa, buceo recreativo (hasta 15
                        metros), natación, patinaje, snowboard, cuando se practica como actividades de aficionados. </p>
                        <b>Nota: Queda excluida de cobertura cualquier lesión causada por prácticas profesionales y/o
                        de torneos, competencias, etc.</b>
                        <h5>Asistencia psicológica</h5>
                        <p>Teléfono de apoyo psicológico 24 horas para Beneficiarios que, a causa de repatriación sanitaria, fallecimiento de un familiar o catástrofe natural hayan sido afectados durante su viaje. Este servicio se presta como apoyo psicológico en momentos que pueden generar fuerte tensión emocional, en ningún caso podrá sustituir la atención directa del Psicólogo o Psiquiatra de los Beneficiarios, por lo que no debe utilizarse en ningún caso por parte de los mismos para establecer un diagnóstico o auto-medicarse, debiendo consultar con los referidos profesionales en cada caso particular.</p>
                        <h5>Norton Mobile Security</h5>
                        <p>Algunos planes de larga estadía y Multi-viaje incluyen una membresía por un año para la aplicación Norton Mobile Security, que protegerá los dispositivos contra las amenazas digitales, realizar controles para proteger la privacidad, localizar el dispositivo con geo-localización exacta y en directo, entre otras indispensables herramientas que permitirán al beneficiario para disfrutar de todo el potencial de los dispositivos móviles.</p>
                        <p><b>Nota: este beneficio sólo aplica para los planes larga estadía, estudiantiles y anual multiviajes.</b></p>
                        <h5>Garantía de regreso</h5>
                        <p>En caso que el Beneficiario haya sido hospitalizado debido a un accidente o enfermedad y se haya visto obligado a cambiar la fecha de su tiquete de avión de regreso a su país de origen, <strong>ORANGE TRAVEL ASSIST</strong> se hará cargo del pago de las multas pendientes para el cambio de fecha del tiquete aéreo, o incluso la compra de nuevo tiquete de avión en clase económica.</p>
                        <p>En caso tal que el Beneficiario lo necesite y, cuando sea posible, <strong>ORANGE TRAVEL ASSIST</strong> proporcionará el cambio del vuelo, cubriendo directamente los costos de dicho cambio. De lo contrario, <strong>ORANGE TRAVEL ASSIST</strong> hará el reembolso de dichos gastos al cliente, mediante los comprobantes de pago a la compañía aérea.</p>
                        <p>Esta garantía sólo es válida en caso que la hospitalización haya sido organizada por la Central de Servicios de Asistencia y la continuación de esta internación haya sido indicada por los médicos asistentes y por el departamento médico.</p>
                        <h5>Orientación médica telefónica/videoconferencia</h5>
                        <p>Los Beneficiarios de <strong>ORANGE TRAVEL ASSIST</strong> podrán recibir recomendaciones a través de conferencia telefónica y/o videoconferencia (sujeto a disponibilidad) con un profesional de la salud que brindará orientación sobre qué hacer para aliviar sus síntomas permaneciendo en su hogar, o se recomendará ser asistido en centros de urgencias o salas de emergencias, de acuerdo a la severidad de los síntomas que describen los mismos.</p>
                        <h5>Segunda opinión médica</h5>
                        <p>Cuando durante un viaje al exterior se diagnosticara al Titular una enfermedad como de pronóstico fatal, incurable o que compromete gravemente su calidad de vida, o bien cuando el tratamiento propuesto conlleve un elevado riesgo vital, el mismo podrá solicitar a través de la Central de Asistencias de <strong>ORANGE TRAVEL ASSIST</strong> una segunda opinión médica en el extranjero para que un profesional médico estudie la información procedente de su historia clínica y emita el informe respectivo, que será enviado al solicitante. La segunda opinión médica se realiza con los siguientes fines:</p>
                        <ul>
                            <li>Confirmación diagnóstica de enfermedad degenerativa progresiva sin tratamiento curativo del sistema nervioso central, de una enfermedad neoplásica maligna, excepto cánceres de piel que no sean melanoma.</li>
                            <li>Confirmación de alternativas terapéuticas en todas las neoplasias malignas, incluyendo cánceres de piel, tanto al inicio, como a la recidiva o en el momento de aparición de metástasis.</li>
                            <li>Propuesta terapéutica para enfermedad coronaria avanzada de angioplastia múltiple o simple frente a cirugía cardíaca coronaria convencional.</li>
                            <li>Propuesta de cirugía coronaria convencional en situación de riesgo, con o sin circulación extracorpórea, frente a revascularización transmiocárdica con láser, neoangiogénesis o trasplante.</li>
                            <li>En cardiopatía congénita con indicación de cierre o ampliación de defecto congénito por técnica de cardiología intervencionista frente a cirugía convencional.</li>
                            <li>Confirmación diagnóstica de tumoración cerebral o raquimedular.</li>
                            <li>Propuesta de tratamiento quirúrgico en escoliosis de grado mayor idiopática o no idiopática.</li>
                            <li>Confirmación de diagnóstico de enfermedad rara. Se entenderá por enfermedad rara: aquella enfermedad con peligro de muerte o invalidez crónica, incluidas las de origen genético, que tiene una prevalencia baja, es decir, menor de cinco casos por cada diez mil habitantes.</li>
                            <li>Confirmación de alternativas terapéuticas en todas las neoplasias malignas de piel, tanto al inicio como a la recidiva o en el momento de aparición de la metástasis.</li>
                            <li>Confirmación diagnóstica de parálisis cerebrales infantiles.</li>
                            <li>Confirmación de alternativas terapéuticas en epilepsia refractaria a tratamiento.</li>
                            <li>Confirmación de intervención quirúrgica en los casos de accidentes cerebrovasculares y lesiones tromboembólicas arteriales como alternativa a otro tratamiento.</li>
                            <li>Confirmación diagnóstica o de alternativas terapéuticas sobre patologías oftálmicas que provoquen disminución de la agudeza visual óptima igual o inferior a 0,1 bilateral (Escala de Schnellen) o disminución del campo visual bilateral hasta ser igual o inferior a 10º.</li>
                            <li>Confirmación de alternativa terapéutica quirúrgica en el aneurisma de aorta.</li>
                            <li>Confirmación de alternativas terapéuticas quirúrgicas en cardiopatía isquémica.</li>
                            <li>Propuesta de tratamiento quirúrgico en patologías de la columna vertebral con afectación medular y, en su caso, afectación radicular que afecte gravemente la calidad de vida de los pacientes previamente intervenidos por alguno de los siguientes procedimientos:
                                <ul>
                                    <li>Reapertura de sitio de laminectomía.</li>
                                    <li>Otra exploración y descompresión del canal espinal.</li>
                                    <li>Excisión o destrucción de lesión de médula espinal/meninges espina.</li>
                                    <li>Excisión o destrucción de disco intervertebral no específica.</li>
                                    <li>Artrodesis vertebral.</li>
                                    <li>Refusión vertebral.</li>
                                    <li>Fusión vertebral circunferencial, acceso con incisión única.</li>
                                    <li>Inserción de dispositivo de fusión vertebral intersomático.</li>
                                </ul>
                            </li>
                            <li>Propuesta de tratamiento quirúrgico en patologías del aparato locomotor que comprometa gravemente la calidad de vida de los pacientes previamente intervenidos por alguno de los siguientes procedimientos:
                                <ul>
                                    <li>Sustitución total de cadera.</li>
                                    <li>Sustitución total de rodilla.</li>
                                </ul>
                            </li>
                            <li>Confirmación de alternativas terapéuticas en pacientes incluidos en protocolo de trasplantes.</li>
                        </ul>
                        <p>Este Beneficio podrá ser usado una única vez dentro de la vigencia del voucher, sin importar la duración del mismo. Se incluyen los gastos de envío de la historia clínica y el costo cobrado por el(los) profesional(es) médico(s) para estudiar el caso.</p>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion key={10} >
          <Card >
            <Card.Header classname="border-bottom">
              <Accordion.Toggle as={Button} variant="link" eventKey={10} >
                Beneficios adicionales de compra opcional por el beneficiario
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={10}>
              <Card.Body>
                <div>
                <p>Los Beneficiarios tendrán la opción de adquirir adicionalmente, pero no por separado, beneficios adicionales a los establecidos para cada plan de asistencia en particular de <strong>ORANGE TRAVEL ASSIST</strong>, mediante el pago de un complemento al precio del plan original, todo ello de acuerdo con lo establecido y precios de la oferta pública en la plataforma web de <strong>ORANGE TRAVEL ASSIST</strong>.</p>
                        <p><b><u>Los beneficios adicionales o upgrades sólo podrán ser emitidos para la categoría viajes por días.</u></b></p>
                        <h5>Upgrade de Cancelación Multi Causa</h5>
                        <p>En aquellos casos que el Beneficiario en forma explícita contrate el beneficio de protección de cancelación multi causa que ofrece <strong>ORANGE TRAVEL ASSIST</strong>, se otorgará cobertura hasta el monto específicamente contratado y dicho beneficio deberá constar expresamente en el voucher del Beneficiario. Este beneficio es únicamente válido para viajes internacionales.</p>
                        <p><strong>ORANGE TRAVEL ASSIST</strong> cubrirá hasta el tope de cobertura según el plan contratado las penalidades por cancelar anticipadamente un viaje conocido como tours, paquetes turísticos, excursiones, tiquetes aéreos y cruceros que hayan sido organizadas por un tour operador profesional debidamente acreditado en el destino de dicho viaje. Para ser acreedor de este beneficio el Beneficiario del voucher deberá:</p>
                        <ol className="list-style-decimal">
                            <li>Contratar el plan de asistencia, antes o hasta un máximo de 72 horas posteriores al primer pago de los servicios turísticos que pudieran cancelarse.</li>
                            <li>Dar aviso a la central de asistencia en un máximo de 24 horas luego de ocurrido el evento que motiva la cancelación. Se tomará como base de cálculo de la indemnización, la fecha de ocurrencia de la causa de Cancelación y no la fecha de aviso del Beneficiario a <strong>ORANGE TRAVEL ASSIST</strong>. Al mismo tiempo, el Beneficiario deberá cancelar con el organismo de turismo Crucero, Agencia de viaje, Tour Operador, etc. su viaje, para no incrementar la penalidad que ese mismo organismo le vaya a aplicar.</li>
                            <li>Presentar, hasta 30 días calendario después del día de finalización de la vigencia del voucher, toda la documentación que <strong>ORANGE TRAVEL ASSIST</strong> considere para evaluar la cobertura de este beneficio incluyendo, pero no limitando a: Documento donde se demuestre de forma clara y fehaciente el motivo de cancelación del viaje, cartas de los respectivos prestadores del servicio, facturas y recibos de pago. </li>
                            <li>En caso de planes “Anuales Multiviaje”, este beneficio aplicará una sola vez y corresponde al viaje inicial del pasajero, no podrá ser tenido como aplicable para todos los viajes que pueda realizar el Beneficiario durante la vigencia total del voucher.</li>
                            <li>El Beneficiario tiene hasta treinta (30) días continuos a partir de la fecha de sucedido el
                            evento para presentar la documentación completa y respaldos necesarios para iniciar el
                            proceso del reembolso. Después de ese plazo, no se aceptarán documentos para tramitar
                            ningún reembolso.</li>
                        </ol>
                        <p>Son causas justificadas a los efectos del presente beneficio y contempladas al 100% del tope marcado en el voucher:</p>
                        <ol className="list-style-decimal">
                            <li>El fallecimiento, accidente o enfermedad grave no preexistente del Beneficiario o familiar en primer grado de consanguinidad cónyuge, padres, hijos, hermanos, entendiéndose por enfermedad grave una alteración de la salud que, a juicio del Departamento Médico de la Central de Asistencia, imposibilite al Beneficiario para iniciar el viaje en la fecha contratada originalmente. </li>
                            <li>La convocatoria como parte, testigo o jurado de un tribunal.</li>
                            <li>Los daños que, por incendio, robo, hurto o por la fuerza de la naturaleza en su residencia habitual o en sus locales profesionales que los hagan inhabitables y justifican ineludiblemente su presencia.</li>
                            <li>Cuarentena médica como consecuencia de suceso accidental.</li>
                            <li>Despido laboral comprobado, con fecha posterior a la contratación de asistencia.</li>
                            <li>Convocatoria de emergencia para prestar servicio militar, médico o público.</li>
                            <li>Por epidemia, desastre natural o cenizas volcánicas. En el caso de los productos Crucero no será contemplada como una de las causas justificadas para acceder a este beneficio, las cancelaciones ocasionadas por emanaciones de cenizas volcánicas.</li>
                            <li>Si la persona que ha de acompañar al Beneficiario en el viaje, entendiéndose como tales las personas que compartan la misma habitación de hotel con el Beneficiario, o cabina de crucero, o sean familiares de primer grado de consanguinidad cónyuge, padres, hijos o hermanos también poseedor es de un Plan de Asistencia en las mismas condiciones que el Beneficiario y dichos acompañantes se viesen obligados a anular el viaje por alguna de las causas enumeradas anteriormente.</li>
                            <li>Las agudizaciones imprevistas de enfermedades preexistentes. En cuyo caso el pasajero con dicha enfermedad preexistente deberá haber permanecido estable, sin episodios, durante un periodo mínimo de 6 meses previos al viaje. <strong>ORANGE TRAVEL ASSIST</strong> se reserva el derecho de solicitar la historia clínica original del pasajero previa a la fecha en que éste manifiesta la agudización de la enfermedad. </li>
                            <li>Las complicaciones de embarazos.</li>
                            <li>Cancelación de boda.</li>
                            <li>Entrega de niño en adopción</li>
                            <li>Parto de emergencia</li>
                        </ol>
                        <p>Son causas justificadas a los efectos del presente beneficio y contempladas al 70% del tope marcado en el voucher:</p>
                        <ol className="list-style-decimal" start="14">
                            <li>Secuestro del Beneficiario o familiares directos siempre y cuando sea comprobable, y de conocimiento público.</li>
                            <li>Cancelación de vacaciones por disposición de la empresa</li>
                            <li>Cambio de trabajo.</li>
                            <li>No aprobación de la Visa para ingresar al país de destino. Esta cobertura es válida si la
                            compra del Suplemento se realiza por lo menos 72 horas antes de la cita para la obtención
                            de la visa ante la embajada respectiva. No aplica para los costos de los trámites consulares
                            (costo de la visa).</li>
                        </ol>
                        <p>Adquirido el plan en las condiciones antes indicadas, y de ser aplicable el beneficio, la vigencia del mismo comienza en el momento en que el Beneficiario adquiere su plan de asistencia y finaliza en el momento de inicio de la vigencia del voucher. Este beneficio no aplica para Beneficiarios mayores de 74 años.</p>
                        <h4>Cancelación de viaje por COVID-19</h4>
                        <p>
                            En caso de ser contemplado dentro del voucher, el Beneficiario podrá cancelar anticipadamente su
                            viaje por los siguientes motivos:
                        </p>
                        <ol className="list-style-decimal">
                            <li>
                                En caso de diagnóstico positivo de COVID-19 del Beneficiario, acompañante de viaje o familiar en primer grado de consanguinidad.
                            </li>
                        </ol>

                        <p>
                            En todo caso, el Voucher deberá ser emitido con una antelación mínima de 14 días a la fecha de
                            partida, o inicio de vigencia, lo que suceda primero.
                        </p>

                        <p>
                            <b>
                                Nota1: No aplica para Beneficiarios mayores de 65 años. No tendrán cobertura solicitudes de
                                Cancelación de viaje, si la misma se llegase a dar por un cierre de fronteras por parte del
                                Gobierno de origen o destino. Adicionalmente, si el proveedor hotelero, aerolínea o cualquier
                                otro operador turístico le ofrece al Beneficiario la opción de dejar abiertas las fechas,
                                reprogramar, crédito a favor, y entre otras soluciones, aun si el Beneficiario rechaza dicha
                                opción, no habrá lugar a reembolso por gastos incurridos.
                            </b>
                        </p><br /><br />
                        <b>Nota: Queda excluido de cobertura cualquier evento ocurrido con anterioridad a la emisión
                        del Plan de Asistencia. En caso de un mismo evento que involucre a más de una reserva y
                        cualquiera sea la cantidad de Titulares involucrados en el mismo, la responsabilidad máxima
                        de indemnización de UNSITER por todos los titulares afectados, no será mayor a CUARENTA
                        MIL DÓLARES NORTEAMERICANOS US$40,000.00 como monto máximo global por el mismo
                        siniestro. En caso de que la suma de las indemnizaciones a abonar supere los montos
                        antedichos, cada indemnización individual será efectuada a prorrata de la responsabilidad
                        máxima definida en el Voucher.</b>

                        <br />
                        <h5>Upgrade futura mamá</h5>
                        <p>Toda persona embarazada que desee comprar un plan de asistencia de <strong>ORANGE TRAVEL ASSIST</strong>, lo podrá hacer mediante el pago de un monto adicional. Éste beneficio se puede vender para personas embarazadas que tengan hasta máximo 32 semanas de gestación. El beneficio aplica básicamente para las emergencias que se presenten durante el viaje, incluyendo controles de emergencia, ecografías de urgencia, asistencias médicas por enfermedades ocasionadas por su situación de embarazo, partos de emergencia por enfermedad o accidente que ponga en riesgo la vida de la madre o del hijo, abortos o cualquier tipo y cualquier asistencia médica derivada de la situación de embarazo. Esta prestación solo tendrá una vigencia máxima de 30 días, contados a partir del inicio del viaje al exterior.</p>
                        <p>Exclusiones particulares a este beneficio:</p>
                        <ol className="list-style-alpha">
                            <li>Controles, ecografías, consultas médicas en general, estudios médicos, etc., que sean parte de los controles rutinarios del proceso de embarazo y no sean de emergencia. Asimismo, todas las complicaciones resultantes durante y después del embarazo.</li>
                            <li>Partos y cesáreas de curso normal y en término.</li>
                            <li>Gastos médicos relacionados con el recién nacido.</li>
                            <li>Cuando se compruebe que el motivo del viaje es para atender su parto en el exterior.</li>
                            <li>Cuando se compruebe que la venta del voucher se realizó posterior a la semana 32 de embarazo</li>
                        </ol>
                        <p><b>NOTA: el límite de edad para acceder al beneficio de futura mamá es mínimo de 19 años de edad hasta máximo 45 años de edad.</b></p>
                        <h5>Upgrade Deportes</h5>
                        <p><strong>ORANGE TRAVEL ASSIST</strong> se hará cargo de los costos de atención resultantes de accidentes ocurridos de la práctica recreativa o en competencia profesional (hasta el tope de su cobertura médica contratada sin exceder USD 100.000) de los siguientes deportes:</p>
                        <ol className="list-style-decimal">
                            <li><b>Categoría 2:</b> Esquí acuático, fútbol, ciclismo de velocidad en pista, curling, patinaje artístico sobre hielo, canojate en canales ingleses, buceo autónomo (hasta 30 metros máximo), maratón, gimnasia artística, pony trekking, parascending, roller hockey, cabalgata libre, patinaje en hielo, hockey sobre césped, canotaje niveles 3 y 4, pesca con anzuelo en aguas costeras profundas.</li>
                            <li><b>Categoría 3:</b> Artes marciales, esquí, fútbol galés, fútbol americano, hockey sobre hielo, patinaje de velocidad sobre hielo, patinaje de velocidad sobre pista corta, tobogganing, ciclomontañismo, montañismo, bobsleigh, alpinismo, roller derby, heli-skiing, salto ecuestre, carrera de caballos, competencia de equitación, gimnasia en trampolín, rafting niveles 4 y 5.</li>
                            <li><b>Categoría 4:</b> Paracaidismo, parapente, esquí acrobático, esquí alpino, esquí de fondo, luge, esquí fuera de pistas, rafting por encima de nivel 5, canotaje nivel 5, alpinismo en montaña de hielo, motociclismo, automovilismo, rugby, BMX.</li>
                        </ol>
                        <p><b>NOTA: el límite de edad para los deportes extremos en cualquier categoría es de mínimo 15
                        años y máximo 65 años de edad.</b></p>
                        <h5>Upgrade de asistencia médica por enfermedad preexistente</h5>
                        <p><u>El upgrade por enfermedad preexistente sólo cubrirá el 30% de la cobertura médica, sin exceder USD 30,000.</u></p>
                        <p>Si el beneficiario padeciera de una enfermedad preexistente o crónica al inicio de su viaje al exterior, aun cuando no fuera de su conocimiento, como se ha establecido en estas Condiciones Generales, <strong>ORANGE TRAVEL ASSIST</strong> queda automáticamente exenta de prestar servicios o asistencias a su cargo y con base al plan de asistencia adquirido. No obstante, y en forma excepcional y solo en aquellos casos que así lo establezcan expresamente, <strong>ORANGE TRAVEL ASSIST</strong> asumirá los cargos por asistencia médica por enfermedad preexistente o crónica a favor del beneficiario hasta un máximo del monto determinado en el respectivo plan adquirido. En estos casos <strong>ORANGE TRAVEL ASSIST</strong> reconocerá la primera consulta clínica en la que se determine la preexistencia de la enfermedad hasta por las cantidades que se determinan en la Tabla de Resumen de Beneficios respectiva.</p>
                        <p>Episodio agudo o evento no predecible, descompensación de enfermedades crónicas y / o preexistentes conocidas, oculto o previamente asintomática. Esta cobertura se proporciona exclusivamente para la atención médica primaria en el episodio agudo, o en caso de no predecible, con la cobertura superior especificado por el plan contratado, la emergencia debe requerir la asistencia durante el viaje y no puede aplazarse hasta el retorno al país de residencia, el Centro de Gestión de Emergencias se reserva el derecho de decidir el tratamiento más adecuado entre los propuestos por el personal médico y / o la repatriación a su país de residencia. La repatriación será una solución en los casos en los que los tratamientos requiere evolución a largo tiempo, cirugías programadas o cirugías no urgentes, el beneficiario está obligado a aceptar esta solución, perdiendo en caso de rechazo de la solución de todos los beneficios que ofrece el plan de asistencia.</p>
                        <p>Se excluye de este beneficio el inicio o la continuación de tratamientos, procedimientos de diagnóstico, de investigación, o conducta diagnóstica y terapéutica, que no están relacionados con el episodio agudo y no previsto.</p>
                        <p>Se excluye de esta cobertura toda enfermedad relacionada con la transmisión sexual, incluyendo, pero no limitando a la sífilis, gonorrea, herpes genital, clamidia, el virus del papiloma humano tricomonas vaginalis, tricomoniasis, virus de la inmunodeficiencia humana (VIH), el síndrome de inmunodeficiencia adquirida (SIDA), entre otros.</p>
                        <p>No se trata en cualquiera de nuestros planes, procedimientos de diálisis, trasplantes, oncología y tratamiento psiquiátrico, audífonos, anteojos, lentes de contacto, puentes dentales, marcapasos, desfibriladores implantables, respiradores para pacientes externos, dispositivos implantables, equipo desechable específica, etc. enfermedades causadas por la ingestión de drogas, narcóticos, medicamentos que se toman de forma fiable sin receta, alcoholismo, etc.</p>
                        <p><b>Nota: Este beneficio no cubrirá por ningún motivo el seguimiento o continuación de tratamientos iniciados durante la vigencia del primer voucher de un pasajero que haya decidido renovar su plan de asistencia; además la cobertura no se podrá exceder USD 30,000.</b></p>
                        <p>Obligaciones del Beneficiario:</p>
                        <ol className="list-style-decimal">
                            <li>El Beneficiario deberá seguir todas las instrucciones médicas dadas por el médico tratante asignado por <strong>ORANGE TRAVEL ASSIST</strong> y tomar todos los medicamentos como forma prescrita y necesaria.</li>
                            <li>Si el Beneficiario está interesado en la contratación de un plan que incluye la cobertura de emergencia para preexistente condición médica <strong>ORANGE TRAVEL ASSIST</strong>, y sufre alguna(s) de las siguientes condiciones: cualquier tipo de cáncer, enfermedades del corazón, enfermedad pulmonar crónica y / o enfermedad hepática crónica , el Beneficiario debe consultar a su médico personal en su país de origen antes de iniciar el viaje y obtener una confirmación por escrito de que están en condiciones de viajar por todos los días previstos, el destino deseado y la condición no es un inconveniente para todas las actividades programadas.</li>
                            <li>El Beneficiario no podrá iniciar el viaje después de recibir un diagnóstico terminal.</li>
                            <li>Para poder acceder a esta cobertura el beneficiario deberá haber estado estable por más de 12 meses.</li>
                        </ol>
                        <p>En caso de que se determine que el motivo del viaje fue el tratamiento en el extranjero por una afección crónica o preexistente, el Centro de Manejo de Emergencias denegará la cobertura.</p>
                        <p><b>Nota: el límite de edad para acceder al beneficio de asistencia médica por enfermedad preexistente es máximo 74 años de edad.</b></p>


                        <h5>Upgrade por Coronavirus</h5>

                        <p>En aquellos casos que el Beneficiario en forma explícita contrate el upgrade por gastos referentes al
                        coronavirus, tendrá el acceso a los siguientes beneficios:
                        </p>
                        <ol className="list-style-decimal">
                            <li>
                                Gastos de Hotel y alimentación hasta por 15 días
                            </li>
                            <li>
                                Traslado de un familiar por hospitalización, siempre y cuando el médico tratante autorice la
                                visita hospitalaria o acompañamiento en el hotel.
                            </li>
                            <li>
                                Diferencia de Tarifa o penalidad por viaje de regreso retrasado o anticipado del titular
                            </li>
                            <li>
                                Cancelación de viaje contratado por asistencia intra hospitalaria de Covid-19 y Garantía de
                                Cancelación e Interrupción de Viaje por Diagnostico positivo de Covid-19 que impida el
                                viaje en las fechas designadas del viaje
                            </li>
                            <li>
                                Asistencia a través de telemedicina durante el aislamiento obligatorio, para monitoreo del
                                estado de salud del paciente.
                            </li>
                            <li>
                                Soporte emocional a través de tele psicología.
                            </li>
                        </ol>

                        <p>
                            Para poder acceder a estos beneficios se deberán cumplir las siguientes condiciones.
                        </p>
                        <ol className="list-style-decimal">
                            <li>
                                Informe médico donde se indique que el paciente deberá permanecer en autoaislamiento.
                            </li>
                            <li>
                                Este upgrade garantiza los gastos de hotel por reserva, esto quiere decir que si dos
                                personas o más que comparten la misma habitación son diagnosticadas con covid-19, los
                                gastos a reembolsar corresponderán a esta reserva. Dicho esto, se entiende que no se
                                pagara una habitación por cada reserva.
                            </li>
                            <li>
                                Los gastos de hotel por cuarentena serán cubiertos siempre y cuando la reserva ya paga
                                por el pasajero haya finalizado.
                            </li>
                        </ol>

                        <ul>
                            <li>
                                El producto tendrá un tope de USD 20.000 para grupos
                            </li>
                            <li>
                                El monto máximo de esta cobertura es de USD 1.500
                            </li>
                        </ul>

                        <p>
                            Este producto se podrá adquirir para viajes de corta estadía hasta 90 días, o anuales multiviajes pero
                            por viaje que se realice deberá generar la compra del upgrade.
                        </p>

                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion key={11} >
          <Card >
            <Card.Header classname="border-bottom">
              <Accordion.Toggle as={Button} variant="link" eventKey={11} >
               Exclusión aplicable a todos los servicios y beneficios
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={11}>
              <Card.Body>
                <div>
                <p>Quedan expresamente excluidos del sistema de asistencia <strong>ORANGE TRAVEL ASSIST</strong> los eventos siguientes:</p>
                        <ol className="list-style-decimal">
                            <li>Enfermedades crónicas o preexistentes, definidas, o recurrentes, padecidas con anterioridad al inicio de la vigencia del plan y/o del viaje, sean estas del conocimiento o no por el Beneficiario, así como sus agudizaciones, secuelas y consecuencias directas o indirectas (incluso cuando las mismas aparezcan por primera vez durante el viaje).</li>
                            <li>Enfermedades, lesiones, afecciones o complicaciones médicas resultantes de tratamientos efectuados o llevados a cabo por personas o profesionales no autorizados por el Departamento Médico de la Central de Servicios de Asistencia <strong>ORANGE TRAVEL ASSIST</strong>, o exceptuándose lo determinado en el punto precedente.</li>
                            <li>Los tratamientos homeopáticos, tratamientos de acupuntura, la quinesioterapia, las curas termales, la podología, manicura, pedicura, etc.</li>
                            <li>Las afecciones, las enfermedades o lesiones derivadas de empresa, intento o acción criminal o penal del Beneficiario, directa o indirectamente como peleas, riñas, flagelaciones, etc.</li>
                            <li>Tratamiento de enfermedades o estados patológicos producidos por la ingesta o la administración intencional de tóxicos (drogas), narcóticos, alcohol, o por la utilización de medicamentos sin la respectiva orden médica</li>
                            <li>Gastos incurridos en cualquier tipo de prótesis, incluidas las dentales, lentes, audífonos, sillas de rueda, muletas, anteojos, etc.</li>
                            <li>Eventos ocurridos como consecuencia de simple entrenamientos, prácticas sencillas o participación activa o no activa en competencias deportivas (profesionales o amateurs). Además quedan expresamente excluidas las ocurrencias consecuentes a la práctica de deportes peligrosos o de riesgos o extremos incluyendo pero no limitando a: Motociclismo, Automovilismo, Boxeo, Polo, Ski acuático, Buceo (hasta 30 metros máximo), Ala Deltismo, Kartismo, Cuatrimotos, Alpinismo, Ski , Football, Boxeo, Canotaje, Parapente , Kayak, Bádminton, Básquet ball, Voleibol, Handball, karate do, Kung fú, Judo, Tiro al arco, Tiro fusil, Tejo, Rappel, Buceo, Torrentismo, Montañismo, Escalada, Puenting, Atletismo, Ciclismo, Luge Espeleología, Skeleton, la Caza de animales, Bobsleigh, etc., y otros deportes practicados fuera de pistas reglamentarias y autorizadas por las respectivas federaciones de deportes. </li>
                            <li>Los partos, estados de embarazo, controles ginecológicos, exámenes relacionados con los mismos. Los abortos, o las pérdidas cualquiera sea su etiología u origen. Asimismo, todas las complicaciones resultantes durante y después del embarazo.</li>
                            <li>Todo tipo de enfermedades mentales.</li>
                            <li>Afecciones, enfermedades o lesiones derivadas del consumo de bebidas alcohólicas de cualquier tipo.</li>
                            <li>El Síndrome de inmune deficiencia adquirida (SIDA) y virus de inmunodeficiencia humana (VIH) en todas sus formas, secuelas y consecuencias. Las enfermedades y/o infecciones de transmisión sexual y/o en general todo tipo de prestación, examen y/o tratamiento que no haya recibido la autorización previa de la Central de Servicios de Asistencia.</li>
                            <li>Los Eventos y las consecuencias de desencadenamiento de fuerzas naturales, tsunamis, temblores, terremotos, tormentas, tempestades, huracanes, ciclones, inundaciones, eventos de radiación nuclear y de radioactividad, así como cualquier otro fenómeno natural o no, con carácter extraordinario o evento que, debido a sus proporciones o gravedad, sea considerado como desastre nacional regional o local o catástrofe, sismos, huracanes, inundaciones etc.</li>
                            <li>El suicidio, o el intento de suicidio o las lesiones infringidas a sí mismo por parte del Beneficiario y/o su familia, así como cualquier acto de manifiesta irresponsabilidad o imprudencia grave por parte del Beneficiario de la asistencia en viajes.</li>
                            <li>Los Eventos como consecuencia de actos de guerra, invasión, actos cometidos por enemigos extranjeros o nacionales, terrorismo, hostilidades u operaciones de guerra (sea que haya sido declarada o no la guerra) guerra civil, rebelión, insurrección o poder militar, naval o usurpado, la intervención del Beneficiario en motines, manifestaciones o tumultos que tengan o no carácter de guerra civil, o sea que la intervención sea personal o como miembro de una organización civil o militar; terrorismo u otra alteración grave del orden público.</li>
                            <li>Los actos mal intencionados y/o de mala fe de parte del Beneficiario o de sus apoderados.</li>
                            <li>Los exámenes médicos de rutina, los exámenes de laboratorio para chequeos médicos, los exámenes de diagnóstico y o de controles, exámenes de laboratorio o radiológicos o de otros medios, cuya finalidad es la de establecer si la enfermedad es una preexistencia, tales como los exámenes de radiología, el doppler, las resonancias magnéticas, tomografías, ultrasonidos, imágenes, scanner de toda índole, etc. Los exámenes médicos practicados para establecer si la dolencia corresponde a una enfermedad preexistente o no.</li>
                            <li>Gastos correspondientes a transportes públicos o privados o desplazamientos pagados por el Beneficiario desde su hotel o lugar donde esté hasta el centro hospitalario, o centro médico, o consultorio del médico. A menos que dichos gastos hayan sido expresamente autorizados en forma escrita o verbal por la Central de Servicios de Asistencia.</li>
                            <li>Las enfermedades derivadas o debidas o consecuentes de las deformaciones congénitas conocidas o no por el Beneficiario.</li>
                            <li>Lesiones o accidentes derivados de accidentes aéreos en aviones no destinados ni autorizados como transporte público, incluyendo los vuelos fletados particulares.</li>
                            <li>Afecciones, enfermedades o lesiones derivadas directa o indirectamente de riña o peleas (salvo que se tratase de un caso de legítima defensa comprobada con reporte policial), huelga, actos de vandalismo o tumulto popular en que el Beneficiario hubiese participado como elemento activo. El intento de o la comisión de un acto ilegal y, en general, cualquier acto doloso o criminal del Beneficiario, incluido el suministro de información falsa o diferente de la realidad.</li>
                            <li>Enfermedades endémicas, pandémicas, o epidémicas, Las asistencias por estas enfermedades en países con o sin emergencia sanitaria en caso de que el Beneficiario no haya seguido las sugerencias y/o indicaciones sobre restricciones de viaje y/o tratamiento profiláctico y/o vacunación emanadas de autoridades sanitarias.</li>
                            <li>Cualquier gasto o asistencia médica que no haya sido previamente consultado y autorizado por la Central de Servicios de Asistencia <strong>ORANGE TRAVEL ASSIST</strong>.</li>
                            <li>Las enfermedades, o indisposiciones resultantes de trastornos del periodo menstrual en las mujeres, como adelantos o retrasos, así como sangrados, flujos y otros.</li>
                            <li>Enfermedades Hepáticas, como Cirrosis, Abscesos y otros.</li>
                            <li>Exámenes y/u hospitalizaciones para pruebas de esfuerzo y todo tipo de chequeos preventivos.</li>
                            <li>Cualquier tipo de hernias y sus consecuencias.</li>
                            <li>Secuestro o su intento.</li>
                            <li>Riesgos profesionales: si el motivo del viaje del Beneficiario fuese la ejecución de trabajos o tareas que involucren un riesgo profesional, así como las lesiones clasificadas como lesiones por esfuerzos repetitivos, enfermedades osteomusculares relacionadas al trabajo, lesión por trauma continuado o continuo, etc., o similares, tanto como sus consecuencias post tratamiento inclusive quirúrgicos en cualquier tiempo.</li>
                            <li>Lesiones de conductor o pasajero por el uso de cualquier tipo de vehículos, incluidos bicicletas, motocicletas y velomotores sin licencia de conducir, o sin casco, o sin seguros contratados.</li>
                            <li>Están excluidos los accidentes y enfermedades presentadas en países en guerra civil o extranjera. Ejemplo: Afganistán, Irak, Sudan, Somalia, Corea del Norte, etc.</li>
                            <li>No se brindará asistencia de ningún tipo al Beneficiario en situación migratoria o laboral ilegal (incluyendo trabajo no declarado en el país desde donde se requiere la asistencia, o a estudiantes sorprendidos trabajando en país extranjero sin la respectiva autorización de las autoridades locales).</li>
                            <li><strong>ORANGE TRAVEL ASSIST</strong> no tomará a su cargo costos por fisioterapias referidas para el tratamiento de dolencias relacionadas a accidentes laborales, tareas repetitivas o enfermedades crónicas y/o degenerativas de los huesos o músculos. Las fisioterapias se cubrirán únicamente en caso tal que la dolencia haya sido ocasionada por un accidente no laboral bajo autorización previa del Departamento Médico de la Central de Servicios de Asistencia en caso tal que se determine que con las mismas el pasajero podrá mejorar su condición actual y bajo ningún motivo, podrá exceder las diez (10) sesiones.</li>
                        </ol>
                        <p>En caso de constatarse que el motivo del viaje fuera el tratamiento en el extranjero de una enfermedad de base, y que el tratamiento actual tenga alguna vinculación directa o indirecta con la dolencia previa motivo del viaje, <strong>ORANGE TRAVEL ASSIST</strong> quedará relevada de prestar sus servicios. A tal fin <strong>ORANGE TRAVEL ASSIST</strong> se reserva el derecho de investigar la conexión del hecho actual con la dolencia previa.</p>
                        <p>Convenio de Competencia: Queda expresamente convenido entre las partes, en lo relativo a la relación contractual entre el Beneficiario del voucher y el proveedor que cualquier problema de interpretación sobre los alcances de la misma y/o reclamación judicial, que no puedan ser resueltos en forma amistosa entre las partes, deberán ser sometidos a la jurisdicción de los tribunales de Doral, Florida, con exclusión de cualquier otro foro y jurisdicción que pudiera corresponder.</p>
                        <p>Servicios no acumulativos y/o Intervención de otras empresas: En ningún caso <strong>ORANGE TRAVEL ASSIST</strong> prestará los servicios de asistencia al Beneficiario establecidos en el PLAN DE ASISTENCIA MÉDICA del CERTIFICADO DE VIAJE, ni efectuará reembolso de gastos de ningún tipo, en tanto y en cuanto el Beneficiario solicite o haya solicitado prestaciones por el mismo problema y/o afección a cualquier otra empresa, antes, durante o después de haberlas solicitado al proveedor.</p>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion key={12} >
          <Card >
            <Card.Header classname="border-bottom">
              <Accordion.Toggle as={Button} variant="link" eventKey={12} >
                Subrogación y cesión de derechos
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={12}>
              <Card.Body>
                <div>
                <p>Hasta la concurrencia de las sumas desembolsadas en cumplimiento de las obligaciones emanadas de las presentes condiciones generales, <strong>ORANGE TRAVEL ASSIST</strong> y/o las compañías de seguro que asumen el riesgo como fruto del encargo de <strong>ORANGE TRAVEL ASSIST</strong> quedarán automáticamente subrogadas en los derechos y acciones que puedan corresponder al Beneficiario o a sus herederos contra terceras personas físicas o jurídicas en virtud del evento que motive la asistencia prestada y/o beneficio pagado.</p>
                        <p>El Beneficiario se compromete a reembolsar en el acto a <strong>ORANGE TRAVEL ASSIST</strong> todo importe que haya recibido
                        de parte del sujeto causante y/o responsable del accidente y/o de su(s) compañía(s) de seguro(s)
                        en concepto de adelanto(s) a cuenta de la liquidación de la indemnización final a la cual el titular
                        pudiere tener derecho. Ello a concurrencia de los importes a cargo de <strong>ORANGE TRAVEL ASSIST</strong>  en el caso ocurrido.</p>
                        <p>Sin que la siguiente enunciación deba entenderse limitativa, quedan expresamente comprendidos
                        en la subrogación los derechos y acciones susceptibles de ser ejercitados frente a las siguientes
                        personas:</p>
                        <ol className="list-style-alpha">
                            <li>Terceros responsables de un accidente (de tránsito o de cualquier otro tipo) y/o sus
                            compañías de seguro.</li>
                            <li>Empresas de transporte, en lo atinente a la restitución -total o parcial- del precio de pasajes
                            no utilizados, cuando <strong>ORANGE TRAVEL ASSIST</strong> haya tomado a su cargo el traslado del titular o de sus restos.</li>
                            <li>Otras compañías que cubran el mismo riesgo.</li>
                        </ol>
                        <p><b>IMPORTANTE:</b> El titular cede irrevocablemente a favor de <strong>ORANGE TRAVEL ASSIST</strong> los derechos y acciones
                        comprendidos en la presente Cláusula, obligándose a llevar a cabo la totalidad de los actos jurídicos
                        que a tal efecto resulten necesarios y a prestar toda la colaboración que le sea requerida con motivo
                        del hecho ocurrido. En tal sentido, se compromete y obliga a formalizar la subrogación o cesión a
                        favor de <strong>ORANGE TRAVEL ASSIST</strong> dentro de los tres (3) días calendario siguientes de intimado el Titular/es al efecto. De negarse a suscribir y/o prestar colaboración para ceder tales derechos a <strong>ORANGE TRAVEL ASSIST</strong>, esta última quedara automáticamente eximida de pagar los gastos de asistencia originados</p>
                        <p>Además, <strong>ORANGE TRAVEL ASSIST</strong> estará subrogada, entendiéndose que cualquier seguro, asistencia en viaje y/o seguro médico tendrá la obligación en primera instancia del pago ya sea de la totalidad o parte de los gastos que puedan desencadenarse a causa del evento sufrido por el Beneficiario. </p>

                        <p><strong>ORANGE TRAVEL ASSIST</strong> quedará subrogado en los derechos y acciones que correspondan al Beneficiario, por
                        hechos que hayan motivado la intervención de aquel y hasta el total del costo de los servicios
                        prestados.</p>
                        <p>De igual forma <strong>ORANGE TRAVEL ASSIST</strong> se reserva el derecho de poder ceder en todo o en parte tanto los derechos
                        que le asistieran derivados de la relación contractual con el Beneficiario, así como la ejecución,
                        prestación de servicios y demás obligaciones a su cargo a terceras personas jurídicas profesionales
                        en el ramo de la asistencia a empresas del ramo. </p>
                        <p>En tal sentido el Beneficiario está consciente de dicho derecho y por tanto renuncia expresamente a ser notificado o comunicado previamente de dichas cesiones.</p>
                       
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion key={13} >
          <Card >
            <Card.Header classname="border-bottom">
              <Accordion.Toggle as={Button} variant="link" eventKey={13} >
                Circunstancias excepcionales de inejecución iniputable
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={13}>
              <Card.Body>
                <div>
                <p>Ni <strong>ORANGE TRAVEL ASSIST</strong>, ni su red de prestadores de servicios, serán responsables, exigibles o ejecutables por casos fortuitos, que originen retrasos o incumplimientos inimputables debidos a catástrofes naturales, huelgas, guerras, invasiones, actos de sabotaje, hostilidades, rebelión, insurrección, terrorismo o pronunciamientos, manifestaciones populares, radioactividad, o cualquier otra causa de fuerza mayor. Cuando elementos de esta índole interviniesen, <strong>ORANGE TRAVEL ASSIST</strong> se compromete a ejecutar sus compromisos dentro del menor plazo que fuera posible y siempre y cuando una vez sea factible dicha prestación de servicios, se mantenga la contingencia que la justifique.</p>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion key={14} >
          <Card >
            <Card.Header classname="border-bottom">
              <Accordion.Toggle as={Button} variant="link" eventKey={14} >
                Recurso
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={14}>
              <Card.Body>
                <div>
                <p><strong>ORANGE TRAVEL ASSIST</strong> se reserva el derecho de exigir al Beneficiario el reembolso de cualquier gasto efectuado por éste en forma indebida, en caso de habérsele prestado servicios no contemplados por este contrato o fuera del período de vigencia del plan de asistencia contratado, así como cualquier pago realizado por cuenta del Beneficiario.</p>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion key={15} >
          <Card >
            <Card.Header classname="border-bottom">
              <Accordion.Toggle as={Button} variant="link" eventKey={15} >
                Responsabilidad
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={15}>
              <Card.Body>
                <div>
                <p>El servicio brindado por <strong>ORANGE TRAVEL ASSIST</strong> de conformidad a los términos de las presentes condiciones
                        generales y al contrato de asistencia en viaje, se circunscribe única y exclusivamente a facilitar al
                        Beneficiario el acceso a profesionales para la prestación por parte de éstos últimos, bajo su única y
                        exclusiva responsabilidad, servicios médicos, odontológicos, farmacéuticos, legales y/o de asistencia
                        en general. De esta forma, <strong>ORANGE TRAVEL ASSIST</strong> no será responsable en forma alguna, ya sea directa o
                        indirectamente, de cualquier reclamo que pudiere realizar el Beneficiario por la prestación de los
                        servicios llevada a cabo por cualquiera de los profesionales antes mencionados</p>
                        <p><strong>ORANGE TRAVEL ASSIST</strong>, no será responsable y no indemnizará al Beneficiario por ningún tipo de daño, perjuicio, lesión o enfermedad causada por haberle brindado al Beneficiario a su solicitud, personas o profesionales para que lo asistan médica, odontológica, farmacéutica o legalmente. En estos casos, la persona o personas designadas por <strong>ORANGE TRAVEL ASSIST</strong> serán tenidas como agentes del Beneficiario, sin posible recurso de naturaleza o circunstancia alguna contra <strong>ORANGE TRAVEL ASSIST</strong>, en razón de tal designación. <strong>ORANGE TRAVEL ASSIST</strong> se esfuerza para poner a disposición de los pasajeros los mejores profesionales de la salud y los mejores medios, sin embargo <strong>ORANGE TRAVEL ASSIST</strong>, no podrá nunca ser tenida ni total ni parcialmente como responsable por la disponibilidad, la calidad, los resultados, falta de atención, servicios médicos y/o mala praxis de dichos profesionales o entidades, pues son condiciones que se encuentran totalmente fuera del control de <strong>ORANGE TRAVEL ASSIST</strong>.</p>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion key={16} >
          <Card >
            <Card.Header classname="border-bottom">
              <Accordion.Toggle as={Button} variant="link" eventKey={16} >
                Caducidad - Resolución - Modificación 
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={16}>
              <Card.Body>
                <div>
                <p>Toda reclamación tendiente a hacer efectivas las obligaciones que <strong>ORANGE TRAVEL ASSIST</strong>, asume a través de las presentes condiciones generales, deberá formularse en debida forma y por escrito dentro del plazo máximo improrrogable de treinta (30) días continuos calendario, contados a partir de la fecha de finalización de la vigencia del voucher. Transcurrido el plazo indicado, se producirá la automática caducidad de todos los derechos no ejercidos oportunamente.</p>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        </div>
      </div>

    </section>

  );
}

SplitCondicionado.propTypes = propTypes;
SplitCondicionado.defaultProps = defaultProps;

export default SplitCondicionado;