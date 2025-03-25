import React from "react";
import './Mps_clientTestimonials.css';
import Testimonial from "../../../shared/testimonial/Testimonial";

const Mps_clientTestimonials = () => {
    return(
        <section id="mps_clientTestimonials">
            <div class="container">
                <div class="mx-0 mp_clientTestimonials">
                    <h3 class="fontRubikBold">Client Testimonials</h3>
                    <div class="row testimonials">
                        <div class="col-lg-4">
                            <Testimonial starsNumber="3" author="Bojan Križaj" testimonial="Bojan Križaj dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed Bojan Križaj." />
                        </div>
                        <div class="col-lg-4">
                            <Testimonial starsNumber="4" author="Jure Franko" testimonial="Jure Franko dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed Bojan Križaj." />
                        </div>
                        <div class="col-lg-4">
                            <Testimonial starsNumber="5" author="Boris Strel" testimonial="Boris Strel dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed Bojan Križaj." />
                        </div>
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