import React from "react";
import './Testimonial.css';
import Stars from "./stars/Stars";

const Testimonial = (starsNumber, testimonial, author) => {

    return(

        <div>
            <h1>Testimonial components</h1>
            <Stars number={starsNumber} />
            <p class="fontOpenSansRegular">“{testimonial}”</p>
            <span class="fontRubikMedium">{author}</span>
        </div>
    );
};
export default Testimonial;