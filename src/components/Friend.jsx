import React from 'react';

const Friend = ({number,image}) => {
    const friendName = `Friend ${number}`;
    let imgClass = 'col-sm-4 p-1';
    if (number === 7)
        imgClass += ' bottomLeft';
    else if (number === 9)
        imgClass += ' bottomRight';
    console.log(number,imgClass)
    return (
        <img className={imgClass}
             src={image}
             alt={friendName}>
        </img>
    );
};

export default Friend;