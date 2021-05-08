import React from "react";
//import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import Button from './Button';

const FormPage = () => {
return (

    <div>
        <form>
            <p className="h4 text-center mb-4">Contactenos</p>
            <input type="text" id="defaultFormContactNameEx" className="form-control" placeholder="nombre/apellido"/>
            <br />
            <input type="email" id="defaultFormContactEmailEx" className="form-control" placeholder="correo"/>
            <br />
            <input type="text" id="defaultFormContactSubjectEx" className="form-control" placeholder="asunto"/>
            <br />
            <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" placeholder="mensaje"/>
            <div className="text-center mt-4">
            <Button tag="a" color="primary" wideMobile href="#" type="submit">
                    Enviar
                    </Button>
                    </div>
        </form>

    </div>
        
    
       
      );
    };

    export default FormPage;