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
        <h3 className="text-color-primary">
          condicionado
              </h3>
        <Accordion key={1} >
          <Card style={{ backgroundColor: `#1e283c` }}>
            <Card.Header classname="border-bottom">
              <Accordion.Toggle as={Button} variant="link" eventKey={1} style={{ color: `#faa520` }}>
                Introduccion
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={1}>
              <Card.Body>contenido</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion key={2} >
          <Card style={{ backgroundColor: `#1e283c` }}>
            <Card.Header classname="border-bottom">
              <Accordion.Toggle as={Button} variant="link" eventKey={2} style={{ color: `#faa520` }}>
              Beneficiario/Edad Límite
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={2}>
              <Card.Body>contenido</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion key={3} >
          <Card style={{ backgroundColor: `#1e283c` }}>
            <Card.Header classname="border-bottom">
              <Accordion.Toggle as={Button} variant="link" eventKey={3} style={{ color: `#faa520` }}>
              Vigencia - Validez
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={3}>
              <Card.Body>contenido</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion key={4} >
          <Card style={{ backgroundColor: `#1e283c` }}>
            <Card.Header classname="border-bottom">
              <Accordion.Toggle as={Button} variant="link" eventKey={4} style={{ color: `#faa520` }}>
                Validez Geográfica
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={4}>
              <Card.Body>contenido</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion key={5} >
          <Card style={{ backgroundColor: `#1e283c` }}>
            <Card.Header classname="border-bottom">
              <Accordion.Toggle as={Button} variant="link" eventKey={5} style={{ color: `#faa520` }}>
                Procedimiento para solicitar asistencia - centrales de asistencia
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={5}>
              <Card.Body>contenido</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion key={6} >
          <Card style={{ backgroundColor: `#1e283c` }}>
            <Card.Header classname="border-bottom">
              <Accordion.Toggle as={Button} variant="link" eventKey={6} style={{ color: `#faa520` }}>
                Obligaciones del beneficiario
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={6}>
              <Card.Body>contenido</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion key={7} >
          <Card style={{ backgroundColor: `#1e283c` }}>
            <Card.Header classname="border-bottom">
              <Accordion.Toggle as={Button} variant="link" eventKey={7} style={{ color: `#faa520` }}>
                Obligaciones asumidas por <strong>Orange Travel Assist</strong>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={7}>
              <Card.Body>contenido</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion key={8} >
          <Card style={{ backgroundColor: `#1e283c` }}>
            <Card.Header classname="border-bottom">
              <Accordion.Toggle as={Button} variant="link" eventKey={8} style={{ color: `#faa520` }}>
                Moneda de alcances y servicios
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={8}>
              <Card.Body>contenido</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion key={9} >
          <Card style={{ backgroundColor: `#1e283c` }}>
            <Card.Header classname="border-bottom">
              <Accordion.Toggle as={Button} variant="link" eventKey={9} style={{ color: `#faa520` }}>
                Definicion de los beneficios
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={9}>
              <Card.Body>contenido</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion key={10} >
          <Card style={{ backgroundColor: `#1e283c` }}>
            <Card.Header classname="border-bottom">
              <Accordion.Toggle as={Button} variant="link" eventKey={10} style={{ color: `#faa520` }}>
                Beneficios adicionales de compra opcional por el beneficiario
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={10}>
              <Card.Body>contenido</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion key={11} >
          <Card style={{ backgroundColor: `#1e283c` }}>
            <Card.Header classname="border-bottom">
              <Accordion.Toggle as={Button} variant="link" eventKey={11} style={{ color: `#faa520` }}>
               Exclusión aplicable a todos los servicios y beneficios
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={11}>
              <Card.Body>contenido</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion key={12} >
          <Card style={{ backgroundColor: `#1e283c` }}>
            <Card.Header classname="border-bottom">
              <Accordion.Toggle as={Button} variant="link" eventKey={12} style={{ color: `#faa520` }}>
                Subrogación y cesión de derechos
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={12}>
              <Card.Body>contenido</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion key={13} >
          <Card style={{ backgroundColor: `#1e283c` }}>
            <Card.Header classname="border-bottom">
              <Accordion.Toggle as={Button} variant="link" eventKey={13} style={{ color: `#faa520` }}>
                Circunstancias excepcionales de inejecución iniputable
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={13}>
              <Card.Body>contenido</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion key={14} >
          <Card style={{ backgroundColor: `#1e283c` }}>
            <Card.Header classname="border-bottom">
              <Accordion.Toggle as={Button} variant="link" eventKey={14} style={{ color: `#faa520` }}>
                Recurso
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={14}>
              <Card.Body>contenido</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion key={15} >
          <Card style={{ backgroundColor: `#1e283c` }}>
            <Card.Header classname="border-bottom">
              <Accordion.Toggle as={Button} variant="link" eventKey={15} style={{ color: `#faa520` }}>
                Responsabilidad
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={15}>
              <Card.Body>contenido</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion key={16} >
          <Card style={{ backgroundColor: `#1e283c` }}>
            <Card.Header classname="border-bottom">
              <Accordion.Toggle as={Button} variant="link" eventKey={16} style={{ color: `#faa520` }}>
                Caducidad - Resolución - Modificación 
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={16}>
              <Card.Body>contenido</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>

      </div>

    </section>

  );
}

SplitCondicionado.propTypes = propTypes;
SplitCondicionado.defaultProps = defaultProps;

export default SplitCondicionado;