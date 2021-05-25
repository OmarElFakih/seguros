import React, { useContext, useState } from 'react';
import { Context } from "../../store/appContext";
import Button from "./Button";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

const DuracionMaxima = () => {

    const {store, actions} = useContext(Context);
    const [duracion, setDuracion] = useState(0);
    const [inicio, setInicio] = useState(undefined);

    function handleDayClick(day) {
        
        setInicio(day);
    }
    

    return(
        <div>
            <select onChange={e => setDuracion(e.target.value)}>
                <option selected value=" ">Duración máxima</option>
                <option value={30}>30 días</option>
                <option value={45}>45 días</option>
                <option value={60}>60 días</option>
                <option value={90}>90 días</option>
            </select>
            <br />
            <DayPickerInput 
                //className="Selectable"
                //numberOfMonths={2}
                //selectedDays={inicio}
                //onDayClick={handleDayClick}
                onDayChange={handleDayClick}
            />
            <br />
            <Button tag="a" color="primary" wideMobile onClick={() => {actions.changeVisibility(4, true); actions.updateTravelData("duracion", duracion); actions.updateTravelData("partida", inicio);}}>
                Actualizar
            </Button>

        </div>

    );
};

export default DuracionMaxima;