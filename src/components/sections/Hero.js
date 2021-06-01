import React, { useState , useContext} from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';

import backgroundImage from '../../assets/images/traveling.jpg'
import {useHistory} from "react-router-dom";
import { Context } from "../../store/appContext";

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
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

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
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

  const history = useHistory();

  const { store, actions } = useContext(Context);

  return (
    <section
      {...props}
      className={outerClasses}
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: `bottom`,
        backgroundPositionX: `-333px`,
        backgroundPositionY: `-391px`
       
        }}>
    <div style={{backgroundColor: 'rgba(63, 63, 63, 0.71)'} }>


      <div className="container-sm" >
        <div className={innerClasses}>
          <div className="hero-content" >
            <h1 className="mt-0 mb-16 reveal-from-bottom white" data-reveal-delay="200">
             <span className="orange">Orange</span> Travel Assist
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom white" data-reveal-delay="400">
                Donde quiera que viaje, ¡estaremos allí!
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                {/*<ButtonGroup>*/}
                  <Button tag="a" color="primary" wideMobile onClick={() => {history.push("/cotizador"); actions.resetVisibility();}}>
                    Cotizar plan
                    </Button>
                {/*</ButtonGroup>*/}
              </div>
            </div>
          </div>
        {/*  <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <a
              data-video="https://player.vimeo.com/video/174002812"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require('./../../assets/images/video-placeholder.jpg')}
                alt="Hero"
                width={896}
                height={504} />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe" />
            */}
       </div>
      </div>
    </div>
  
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;