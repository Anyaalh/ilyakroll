import React from 'react';
import photo from "../../../assets/images/krrrroll.jpg"
import sPhoto from "../../../assets/images/raaaabbit.png"
import tPhoto from "../../../assets/images/rabbitEating.jpg"
import fPhoto from "../../../assets/images/rabbitFirst.jpg"
import fiPhoto from "../../../assets/images/rabbitJope.jpg"
export const Gallery = () => {
    return (
        <div>
<h2>Gallery</h2>
            <p>Lorem Ipsum is simply dummy text</p>
            <img src={photo} alt={"rabbit"}/>
            <img src={sPhoto} alt={"rabbit"}/>
            <img src={tPhoto} alt={"rabbit"}/>
            <img src={fPhoto} alt={"rabbit"}/>
            <img src={fiPhoto} alt={"rabbit"}/>
            <a href={"#"}>View All Gallery</a>
        </div>
    );
};

