import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const OrangeCarousel = () => {

    return(
    
        <Carousel>
            <div>
                <img src="https://images.app.goo.gl/GF99R1sBvYZr79NN9" />
                <p>donde viajes te cuidamos</p>
            </div>
            <div>
                <img src="https://images.app.goo.gl/UPFt49TgvhLgjg9w5"/>
                <p>cubrimos el covid</p>
            </div>
        </Carousel>

    );

}

export default OrangeCarousel;