import React, { useContext } from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Button from '../elements/Button';
import {useHistory} from "react-router-dom";
import { Context } from "../../store/appContext";



const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
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

  const sectionHeader = {
    title: 'Cotiza con nosotros',
    paragraph: ''
  };

  const history = useHistory();

  const { store, actions } = useContext(Context);

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          {/*<SectionHeader data={sectionHeader} className="center-content" />*/}
          <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200" style={{textAlign: 'center'}}>
             <span className="text-color-primary">Cotiza</span> con nosotros
            </h1>
          <div className={splitClasses}>

            <div className="split-item">
              
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  
                  </div>
                <h3 className="mt-0 mb-12">
                  Viajes por dia
                  </h3>
                <p className="m-0">
                  Para personas que viajan por cortos periodos de tiempo, especialmente en viajes de turismo, negocio o placer
                  </p>
                <div style={{ marginTop: `10px` }}>
                  <Button tag="a" color="primary" wideMobile onClick={() => {history.push("/cotizador"); actions.resetVisibility();}}>
                    Cotizar plan
                    </Button>
                </div>
              </div>

              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  
                  </div>
                <h3 className="mt-0 mb-12">
                  Plan anual o multiviajes
                  </h3>
                <p className="m-0">
                  Para personas que estan fuera de su pais por largos periodos de tiempo
                  </p>
                <div style={{ marginTop: `10px` }}> 
                  <Button tag="a" color="primary" wideMobile onClick={() => {history.push("/cotizador"); actions.resetVisibility(); }}>
                    Cotizar plan
                    </Button>
                </div>
              </div>
              
              {/*<div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-01.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>*/}
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  
                  </div>
                <h3 className="mt-0 mb-12">
                  Consulte su plan
                  </h3>
                <p className="m-0">  
                Si usted ha comprado un Plan de Asistencias de Orange Travel Assist y desea consultar sus beneficios y cobertura, imprimir su vaucher y ver las condiciones generales de la poliza.                 
                  </p>
                  <div style={{ marginTop: `10px` }}> 
                  <Button tag="a" color="primary" wideMobile >
                    Consultar plan
                    </Button>
                </div>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-left',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/traveling2.jpg')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  
                  </div>
                <h3 className="mt-0 mb-12">
                  Viaje seguro, Viaje confiado, Viaje tranquilo
                  </h3>
                <p className="m-0">
                  Porque ahora todos nuestros planes incluyen cobertura covid-19 <br /> - Aplica para personas hasta los 70 años de edad <br/> - Para personas mayores de 70 años pueden obtener su cobertura adquiriendo el upgrade Covid +70 <br/> 
                                    Consulte con su asesor de ventas o por mail <br/>
                                    <a href="mailto:agentes@orangetravelassist.com" tabIndex="0">
                                        agentes@orangetravelassist.com
                                    </a>
                                    
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-right',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/covid.jpg')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;