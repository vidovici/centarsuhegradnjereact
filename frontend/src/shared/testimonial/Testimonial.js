import React from "react";
import './Testimonial.css';
import Stars from "../stars/Stars";

const Testimonial = ({starsNumber, testimonial, author}) => {

    return(

        <div class="testimonial">
            <Stars number={starsNumber} />
            <p class="fontOpenSansRegular">“{testimonial}”</p>
            <span class="fontRubikMedium">{author}</span>
        </div>
    );
};

export default Testimonial;