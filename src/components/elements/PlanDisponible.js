import React from 'react';
import PropTypes from 'prop-types';
import Button from "./Button";
import { useMediaQuery } from 'react-responsive';


const propTypes = {
    nombre: PropTypes.string,
    precio: PropTypes.number,
    cobertura: PropTypes.number
}

const defaultProps = {
    nombre: "nombre del plan",
    precio: 1000,
    cobertura: 10000
}


const PlanDisponible = ({
    nombre,
    precio,
    cobertura

}) =>{


    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 750px)' })

    return(
        <div  style={{borderStyle: "solid", borderWidth: "3px", margin: "3px", width: (isTabletOrMobile ? "": "20%")}}>
            <h5>{nombre}</h5>
            <p>cobertura: {cobertura}</p>
            <p>precio: {precio}</p>
            <Button tag="a" color="primary" wideMobile className="planButton">
                Detalles
            </Button>
            <Button tag="a" color="primary" wideMobile className="planButton">
                Beneficios
            </Button>
            <Button tag="a" color="primary" wideMobile className="planButton">
                Descargar
            </Button>
            <Button tag="a" color="primary" wideMobile className="planButton">
                Comprar
            </Button>
        </div>
    );
}

PlanDisponible.propTypes = propTypes;
PlanDisponible.defaultProps = defaultProps;

export default PlanDisponible;