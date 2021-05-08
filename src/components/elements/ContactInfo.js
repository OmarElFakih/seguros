import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ContactInfo = () => {

    return(
    <div>
        <div>
            <h4>USA</h4>
            <p><FontAwesomeIcon icon={faPhone} />  +1 954 453 6060</p>
            <p><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:agentes@orangetravelassist.com" tabindex="0">agentes@orangetravelassist.com</a></p> 
            <p><FontAwesomeIcon icon={faMapMarkerAlt} />  2893 Executive Park Dr.<br/> Suite 202 - 203. Weston,<br/> FL 33331 USA</p>
        </div>
        <div>
            <h4>Peru</h4>
            <p><FontAwesomeIcon icon={faPhone} />  +51 6844818 <br/> +5 925415177</p>
            <p><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:orangeperu@orangetravelassist.com" tabindex="0">orangeperu@orangetravelassist.com</a></p> 
            <p><FontAwesomeIcon icon={faMapMarkerAlt} />  Jr Huancavélica 3963 <br/> Urb. Perú - San Martín de <br/> Porres <br/> Centro Aéreo Comercial <br/>Pabellón B1 - Of. 201 - <br/> Callao</p>
        </div>
    </div>
        

    );

}

export default ContactInfo;