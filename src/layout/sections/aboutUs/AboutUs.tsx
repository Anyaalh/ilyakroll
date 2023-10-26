import React from 'react';
import photo from "./../../../assets/images/bunnyCute.jpg"
import secondPhoto from "../../../assets/images/elsoRabbitEating.jpg"
import thirdPhoto from "../../../assets/images/krolik.jpg"

export const AboutUs = () => {
    return (
        <div>
            <h2>ABOUT US</h2>
            <h4>Lorem Ipsum is simply dummy text</h4>
            <img src={photo} alt={"rabbit"}/>
            <img src={secondPhoto} alt={"rabbit"}/>
            <img src={thirdPhoto} alt={"rabbit"}/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged.</p>
            <p>01</p>
            <p>FAST DELIVERY</p>
            <p>Lorem Ipsum is simply dummy text of the printing</p>
            <p>02</p>
            <p>SECURED SERVICE</p>
            <p>Lorem Ipsum is simply dummy text of the printing</p>
            <p>03</p>
            <p>WORLDWIDE SHIPPING</p>
            <p>Lorem Ipsum is simply dummy text of the printing</p>
        </div>
    );
};

