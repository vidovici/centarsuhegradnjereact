import React from "react";
import './Footer.css';

const Footer = () => {
    return(
        <footer>
            <div class="container">
                <div class="row footer">
                    <div class="col-lg-6 order-lg-2 rightSide">
                        <div class="pt-2 text-center socialNetworks">
                            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="#"><i class="fa-brands fa-instagram"></i></a>
                            <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                            <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                        </div>
                        <div class="contactInfo">
                            <a href="#"><i class="fa-solid fa-location-dot"></i><span class="fontRubikMedium">Lorem ipsum dolor sit amet, consectetur elit.</span></a>
                            <a href="#"><i class="fa-solid fa-phone"></i><span class="fontRubikMedium">+385 98 80 74 29</span></a>
                            <a href="#"><i class="fa-solid fa-envelope"></i><span class="fontRubikMedium">info@centarsuhegradnje.hr</span></a>
                        </div>
                    </div>
                    <div class="col-lg-6 order-lg-1 leftSide">
                        <h4 class="fontRubikBold">Kontaktirajte nas</h4>
                        <div class="row mt-5 mb-3 justify-content-between inputWrapper">
                            <div class="col-6">
                                <input type="text" class="fontOpenSansRegular" placeholder="Ime" />
                            </div>
                            <div class="col-6">
                                <input type="email" class="fontOpenSansRegular" placeholder="Email" />
                            </div>
                        </div>
                        <textarea rows="6" class="fontOpenSansRegular" placeholder="Poruka"></textarea>
                        <div class="row mx-0 justify-content-end">
                            <div class="col-12 buttonWrapper">
                                <button><span class="fontRubikSemiBold">Pošalji poruku</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;