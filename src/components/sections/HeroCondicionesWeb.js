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
                        <Accordion key={1} >
                            <Card style={{backgroundColor: `#1e283c`}}>
                                <Card.Header classname="border-bottom">
                                    <Accordion.Toggle as={Button} variant="link" eventKey={1} style={{color: `#faa520`}}>
                                        Actividades prohibidas
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={1}>
                                    <Card.Body>contenido</Card.Body>
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
                                    <Card.Body>contenido</Card.Body>
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
                                    <Card.Body>contenido</Card.Body>
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
                                    <Card.Body>contenido</Card.Body>
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
                                    <Card.Body>contenido</Card.Body>
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
                                    <Card.Body>contenido</Card.Body>
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
                                    <Card.Body>contenido</Card.Body>
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
                                    <Card.Body>contenido</Card.Body>
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
                                    <Card.Body>contenido</Card.Body>
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
                                    <Card.Body>contenido</Card.Body>
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
                                    <Card.Body>contenido</Card.Body>
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
                                    <Card.Body>contenido</Card.Body>
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
                                    <Card.Body>contenido</Card.Body>
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