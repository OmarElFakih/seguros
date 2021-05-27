import React from 'react';
import Button from "../components/elements/Button"
import classNames from 'classnames';
import { SectionProps } from '../utils/SectionProps';

const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

const consulteSuPlan = ({

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
        'section center-content',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );


    return(

        <section
            {...props}
            className={outerClasses}
        >
            <div classname="container" style={{padding: `0px 10%`}}>
                <h3 className="text-color-primary reveal-from-bottom">Consulte su plan</h3>
                <p data-trim-text="353" className="mb20 lheight-30 reveal-from-bottom">
                    Si usted ha comprado uno de nuestros planes y desea verificar su estado o reimprimir su comprobante, complete el siguiente formulario para descargarlo o recibirlo por correo electrónico.
                </p>
                {/*<p data-trim-text="353" class="mb25 lheight-30">
                    Ante cualquier consulta por favor contáctenos haciedo clic <a href="../#contact">aquí</a>.
                </p>*/}


                <form method="POST" action="https://www.orangetravelassist.net/main/voucher/list-vouchers" id="download-voucher" className="background-11 p40 reveal-from-bottom">
                <div class="form-group">
                    <input type="text" id="website_download_first_name" name="website_download[first_name]" required="required" className="inputCotizador" placeholder="Nombre" />
                </div>

                <div class="form-group">
                    <input type="text" id="website_download_last_name" name="website_download[last_name]" required="required" className="inputCotizador" placeholder="Apellido" />
                </div>

                <div class="form-group">
                    <select id="website_download_identification_type" name="website_download[identification][type]" required="required" className="inputCotizador" data-placeholder="Tipo de Identificación" placeholder="Tipo de Identificación" required="required"><option value="" selected="selected">Tipo de Identificación</option><option value="5">PASAPORTE</option><option value="11">DOCUMENTO DE IDENTIDAD</option></select>
                </div>

                <div class="form-group">
                    <input type="text" id="website_download_identification_number" name="website_download[identification][number]" required="required" className="inputCotizador" format="general" data-type="text-number" data-max="20" data-min="5" placeholder="Número" />
                </div>
                
                <Button tag="a" color="primary" wideMobile type="submit">
                    Descargar
                </Button>
                </form>  
            </div>
        </section>
    );


}

export default consulteSuPlan;