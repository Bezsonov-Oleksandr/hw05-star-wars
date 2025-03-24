import React from 'react';
import Friend from "./Friend.jsx";
import friend1 from "../assets/friend1.jpg";
import friend2 from "../assets/friend2.jpg";
import friend3 from "../assets/friend3.jpg";
import friend4 from "../assets/friend4.jpg";
import friend5 from "../assets/friend5.jpg";
import friend6 from "../assets/friend6.jpg";
import friend7 from "../assets/friend7.jpg";
import friend8 from "../assets/friend8.jpg";
import friend9 from "../assets/friend9.jpg";

const DreamTeam = () => {
    const imgFriends = [];
    imgFriends.push(friend1);
    imgFriends.push(friend2);
    imgFriends.push(friend3);
    imgFriends.push(friend4);
    imgFriends.push(friend5);
    imgFriends.push(friend6);
    imgFriends.push(friend7);
    imgFriends.push(friend8);
    imgFriends.push(friend9);
    return (
        <div className={'float-end w-50 row border rounded-bottom-4 ms-2 me-0'}>
            <h2 className="col-sm-12 text-center">
                Dream Team
            </h2>

            {imgFriends.map((item,index) =>
                <Friend key={(index+1)} number={(index+1)} image={item}/>
            )}

        </div>
    );
};

export default DreamTeam;
