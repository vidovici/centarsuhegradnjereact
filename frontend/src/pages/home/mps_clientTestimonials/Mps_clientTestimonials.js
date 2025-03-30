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

    return(
        <section id="mps_clientTestimonials">
            <div className="container">
                <div className="mx-0 mp_clientTestimonials">
                    <h3 className="fontRubikBold">Client Testimonials</h3>
                    <div className="row testimonials">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="col-lg-4">
                                <Testimonial starsNumber={testimonial.StarsNumber} author={testimonial.Author} testimonial={testimonial.Testimonial} />
                            </div>
                        ))}
                    </div>
                    <div className="clients">
                        <img src="images/clients.png" alt="clients" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mps_clientTestimonials;