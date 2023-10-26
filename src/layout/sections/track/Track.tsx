import React from 'react';
import photo from "../../../assets/images/kroliks.jpg"

export const Track = () => {
    return (
        <div>
            <img src={photo} alt={"rabbit"}/>
            <div>
                <h3>TRACK YOUR PRODUCT</h3>
                <input type={"text"}/>
                <button>Track</button>
                <p>Now you can track your Order easily</p>
            </div>
        </div>
    );
};
