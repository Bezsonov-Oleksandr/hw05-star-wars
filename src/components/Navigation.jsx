import React from 'react';
import Button from "./Button.jsx";

const Navigation = () => {
    return (
        <nav className="fixed-top mt-2 ms-5">
            <ul className="nav">
                <Button name="Home"/>
                <Button name="About me"/>
                <Button name="Star Wars"/>
                <Button name="Contact"/>
            </ul>
        </nav>
    );
};

export default Navigation;