import React from 'react';
import photo from "../../../assets/images/rabrab.jpg"
import sPhoto from "../../../assets/images/rrab.jpg"
import tPhoto from "../../../assets/images/springRabbit.jpg"
import fPhoto from "../../../assets/images/veryBigRabbit.jpg"
import fiPhoto from "../../../assets/images/bunny.jpg"

export const Testymony = () => {
    return (
        <div>
            <img src={photo} alt={"rabbit"}/>
            <img src={sPhoto} alt={"rabbit"}/>
            <img src={tPhoto} alt={"rabbit"}/>
            <img src={fPhoto} alt={"rabbit"}/>
            <img src={fiPhoto} alt={"rabbit"}/>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
            <h3>Abigail Irene</h3>
        </div>
    );
};
