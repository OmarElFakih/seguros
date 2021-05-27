import React, { useContext, useState } from 'react';
import { Context } from "../../store/appContext";
import Button from "./Button";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import PropTypes from 'prop-types';

import { DateTime } from 'luxon';

function CustomOverlay({ children, ...props }) {
    return (
      <div
        style={{ marginLeft: -50 }}
        {...props}
      >
          {children}
        
      </div>
    );
}

CustomOverlay.propTypes = {
    children: PropTypes.node.isRequired
};
  


const DuracionMaxima = () => {

    const {store, actions} = useContext(Context);
    const [duracion, setDuracion] = useState(0);
    var inicio = DateTime.local();

    function handleDayClick(day) {
        
        inicio = DateTime.local(day.getFullYear(), day.getMonth() + 1, day.getDate());
        console.log(inicio.toLocaleString({locale: "en-gb"}));
    }


    function getRetorno(){
        var aux = inicio.plus({days: duracion});
        console.log(aux.toString());
        return aux.toLocaleString({locale: "en-gb"});
    }

   const FORMAT = 'MM/dd/yyyy';


    return(
        <div>
            <select className="inputCotizador" onChange={e => setDuracion(e.target.value)}>
                <option selected value=" ">Duración máxima</option>
                <option value={30}>30 días</option>
                <option value={45}>45 días</option>
                <option value={60}>60 días</option>
                <option value={90}>90 días</option>
            </select>
            <br />
            <p style={{marginTop: "25px", marginBottom: "-1px"}}>
                Fecha de inicio
            </p>
            <DayPickerInput 
                format={FORMAT}
                inputProps={{style: {width: "100%", padding: "10px 0px", borderRadius: "10px", margin: "13px 0px"}}}
                overlayComponent={CustomOverlay}
                //className="Selectable"
                //numberOfMonths={2}
                //selectedDays={inicio}
                //onDayClick={handleDayClick}
                onDayChange={handleDayClick}
            />
            <br />
            
            <Button tag="a" color="primary" wideMobile onClick={() => {actions.changeVisibility(4, true); actions.updateTravelData("duracion", duracion); actions.updateTravelData("partida", inicio.toLocaleString({locale: "en-gb"})); actions.updateTravelData("retorno", getRetorno())}}>
                Actualizar
            </Button>
            
        </div>

    );
};

export default DuracionMaxima;