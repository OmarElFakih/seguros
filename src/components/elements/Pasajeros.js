import React, { useContext, useState } from 'react';
import { Context } from "../../store/appContext";
import Button from "./Button";

const Pasajeros = () => {
    const {store, actions} = useContext(Context);
    const [pasajeros, setPasajeros] = useState(1);
    const [edades , setEdades] = useState([0,0,0,0,0,0,0,0]);
    
    function updateEdades(index, newValue){
        var aux = edades.map((value, j) =>{ 
        
            if(index === j){
                return newValue;
            }else
            {
                return value;
            }
        }
        );

        setEdades(aux);

    }


    return (
        <div>
            <h3 style={{marginTop: "25px", marginBottom: "-1px"}} id="pasajeros">Número de pasajeros</h3>
            <br /> 
            <select className="inputCotizador" onChange = {e => setPasajeros(e.target.value)}>
                <option selected value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
            </select>
            <br />
            <p style={{marginTop: "25px", marginBottom: "-1px"}}>edades</p>
            <div style={{display: "block"}}>
                
                <input className="inputCotizador" type="number" min={1} step={1} onChange={e => updateEdades(0, e.target.value)}/>
                {pasajeros >= 2 ? <input className="inputCotizador" type="number" min={1} step={1} onChange={e => updateEdades(1, e.target.value)}/> : null}
                {pasajeros >= 3 ? <input className="inputCotizador" type="number" min={1} step={1} onChange={e => updateEdades(2, e.target.value)}/> : null}
                {pasajeros >= 4 ? <input className="inputCotizador" type="number" min={1} step={1} onChange={e => updateEdades(3, e.target.value)}/> : null}
                {pasajeros >= 5 ? <input className="inputCotizador" type="number" min={1} step={1} onChange={e => updateEdades(4, e.target.value)}/> : null}
                {pasajeros >= 6 ? <input className="inputCotizador" type="number" min={1} step={1} onChange={e => updateEdades(5, e.target.value)}/> : null}
                {pasajeros >= 7 ? <input className="inputCotizador" type="number" min={1} step={1} onChange={e => updateEdades(6, e.target.value)}/> : null}
                {pasajeros >= 8 ? <input className="inputCotizador" type="number" min={1} step={1} onChange={e => updateEdades(7, e.target.value)}/> : null}
            </div>
             <br />
            <Button tag="a" color="primary" wideMobile onClick={() => {actions.updateTravelData("pasajeros", pasajeros); actions.updateTravelData("edades", edades); actions.changeVisibility(5,true);}}>
                Actualizar
            </Button>
        </div>
        
    );
};

export default Pasajeros;