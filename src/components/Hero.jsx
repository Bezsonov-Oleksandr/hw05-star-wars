import React from 'react';
import main from "../assets/main.jpg";

const Hero = () => {
    return (
        <div className={'float-start w-25 me-3'}>
            <img className="w-100" src={main} alt="Hero"/>
        </div>
    );
};

export default Hero;