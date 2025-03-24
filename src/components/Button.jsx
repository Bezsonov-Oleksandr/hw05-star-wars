import React from 'react';

const Button = (props) => {
    return (
        <li className='nav-item btn btn-danger mx-1'>{props.name}</li>
    );
};

export default Button;