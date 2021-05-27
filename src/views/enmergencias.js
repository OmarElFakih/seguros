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

const enmergencias = ({

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


    return (

        <section
            {...props}
            className={outerClasses}
        >

                <div classname="container" style={{padding: `0px 10%`}}>
                <h3 className="text-color-primary reveal-from-bottom">En caso de enmergencia</h3>
                        <table className="table reveal-from-bottom" style={{color: "#9ca9b3"}}>
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
                </div>
        </section>

    );

}

export default enmergencias;