import React from 'react';
import Hero from "./Hero.jsx";
import Info from "./Info.jsx";
import DreamTeam from "./DreamTeam.jsx";

const Main = () => {
    return (
        <main className="clearfix">
            <Hero/>
            <DreamTeam/>
            <Info/>
        </main>
    );
};

export default Main;