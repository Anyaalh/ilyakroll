import React from 'react';
import photo from "../../../assets/images/kroll.jpg"

export const HowItsWork = () => {
    return (
        <div>
<img src={photo} alt={"rabbit"}/>
            <h2>How it works?</h2>
            <h4>Lorem Ipsum is simply dummy text of the printing and typesetting</h4>
            <div>
                <p>01</p>
                <h6>ORDER</h6>
                <p>Lorem Ipsum is simply dummy text</p>
            </div>
            <div>
                <p>02</p>
                <h6>Processing</h6>
                <p>Lorem Ipsum is simply dummy text</p>
            </div>
            <div>
                <p>03</p>
                <h6>Delivered</h6>
                <p>Lorem Ipsum is simply dummy text</p>
            </div>
        </div>
    );
};

