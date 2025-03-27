import React, { useEffect, useState } from "react";
import './Mps_clientTestimonials.css';
import Testimonial from "../../../shared/testimonial/Testimonial";

const Mps_clientTestimonials = () => {

    const[testimonials, setTestimonials] = useState([]);

    useEffect
    (
      () =>
        {
            fetch('json/Testimonials.json')
            .then(response => response.json())
            .then(data => setTestimonials(data))
        }, [testimonials]
    );

    //console.log(testimonials);


    return(
        <section id="mps_clientTestimonials">
            <div class="container">
                <div class="mx-0 mp_clientTestimonials">
                    <h3 class="fontRubikBold">Client Testimonials</h3>
                    <div class="row testimonials">
                        {testimonials.map(testimonial => (
                            <div class="col-lg-4">
                                <Testimonial starsNumber={testimonial.StarsNumber} author={testimonial.Author} testimonial={testimonial.Testimonial} />
                            </div>
                        ))}
                    </div>
                    <div class="clients">
                        <img src="images/clients.png" alt="clients" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mps_clientTestimonials;