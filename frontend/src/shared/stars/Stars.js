import star from '/public/images/icons/icon-star.png';
import React from "react";
import './Stars.css';

const Stars = () => {

    const {number} = useParams();

    return(

        <div className='stars'>
            <h1>Stars components</h1>

            for (let i = 0; i < number; i++)
            {
                <img src={star} alt="star" width="24" height="23" />
            }
        </div>
    );
};

export default Stars;