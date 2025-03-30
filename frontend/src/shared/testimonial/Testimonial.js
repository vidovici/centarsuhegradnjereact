import React from "react";
import './Testimonial.css';
import Stars from "../stars/Stars";

const Testimonial = ({starsNumber, testimonial, author}) => {

    return(

        <div className="testimonial">
            <Stars number={starsNumber} />
            <p className="fontOpenSansRegular">“{testimonial}”</p>
            <span className="fontRubikMedium">{author}</span>
        </div>
    );
};

export default Testimonial;