import React from "react";
import './Stars.css';

const Stars = ({number}) => {

    const showStars = (number) => {

        let starsString = "";

        for (let i = 0; i < number; i++)
            starsString += "<img src=\"images/icons/icon-star.png\" alt=\"star\" width=\"24\" height=\"23\" />";

       return starsString;
    }

    return(

        <div className="stars">
            <div dangerouslySetInnerHTML={{__html: showStars(number)}} />
        </div>

    );
};

export default Stars;