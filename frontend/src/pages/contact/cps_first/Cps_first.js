import React from "react";
import './Cps_first.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn, faXTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Cps_first = () => {
    return(
        <section id="cps_first">
            <div class="container">
                <div class="row mx-0 cp_first">
                    <div class="col-lg-9 px-0 leftSideWrapper">
                        <div class="leftSide">
                            <h1 class="fontRubikBold">Kontaktirajte nas</h1>
                            <p class="my-5 fontOpenSansRegular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut. Mi nibh amet viverra id aliquet neque odio.</p>
                            <a href="#" class="fontRubikMedium">Send a Message</a>
                        </div>
                    </div>
                    <div class="col-lg-3 rightSide">
                        <h3 class="fontRubikBold">Kontakt info</h3>
                        <div class="servicesWrapper">
                            <h5 class="fontRubikBold">Our Office</h5>
                            <p class="fontOpenSansRegular">
                                Ivane Lang 16,<br />
                                10360 Sesvete
                            </p>
                        </div>
                        <div class="servicesWrapper">
                            <h5 class="fontRubikBold">Open Office Hours</h5>
                            <p class="fontOpenSansRegular">
                                Radni dani: 08 - 16 sati<br />
                                Vikend: Ne radimo
                            </p>
                        </div>
                        <div class="servicesWrapper">
                            <h5 class="fontRubikBold">Get in Touch</h5>
                            <p class="fontOpenSansRegular">
                                centarsuhegradnje.hr<br />
                                +385 98 80 74 29
                            </p>
                        </div>
                        <div class="pt-1 socialNetworks">
                            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>							
                            <a href="#"><FontAwesomeIcon icon={faXTwitter} /></a>
                            <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cps_first;