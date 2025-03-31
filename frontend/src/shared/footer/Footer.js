
import React from "react";
import { useLocation } from "react-router-dom";
import './Footer.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn, faXTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {

    const location = useLocation();
    if(location.pathname === "/contact") return null;
    
    return(
        <footer>
            <div className="container">
                <div className="row footer">
                    <div className="col-lg-6 order-lg-2 rightSide">
                        <div className="pt-2 text-center socialNetworks">
                            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            <a href="#"><FontAwesomeIcon icon={faXTwitter} /></a>
                            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                        </div>
                        <div className="contactInfo">
                            <a href="#"><FontAwesomeIcon icon={faLocationDot} /><span className="fontRubikMedium">Lorem ipsum dolor sit amet, consectetur elit.</span></a>
                            <a href="#"><FontAwesomeIcon icon={faPhone} /><span className="fontRubikMedium">+385 98 80 74 29</span></a>
                            <a href="#"><FontAwesomeIcon icon={faEnvelope} /><span className="fontRubikMedium">info@centarsuhegradnje.hr</span></a>
                        </div>
                    </div>
                    <div className="col-lg-6 order-lg-1 leftSide">
                        <h4 className="fontRubikBold">Kontaktirajte nas</h4>
                        <div className="row mt-5 mb-3 justify-content-between inputWrapper">
                            <div className="col-6">
                                <input type="text" className="fontOpenSansRegular" placeholder="Ime" />
                            </div>
                            <div className="col-6">
                                <input type="email" className="fontOpenSansRegular" placeholder="Email" />
                            </div>
                        </div>
                        <textarea rows="6" className="fontOpenSansRegular" placeholder="Poruka"></textarea>
                        <div className="row mx-0 justify-content-end">
                            <div className="col-12 buttonWrapper">
                                <button><span className="fontRubikSemiBold">Pošalji poruku</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;