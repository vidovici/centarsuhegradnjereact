import React from "react";
import './Stars.css';

const Stars = ({number}) => {

    return(

        <div className="stars">
            {number} X
            <img src="images/icons/icon-star.png" alt="star" width="24" height="23" />
        </div>

    );
};

export default Stars;