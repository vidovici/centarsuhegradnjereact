import React from "react";
import './Mps_building.css';

const Mps_building = () => {
    return(
        <section id="mps_building">
            <div class="container">
                <div class="row mx-0 mp_building">
                    <div class="col-lg-4 px-0 leftSide">
                        <div class="content">
                            <h3 class="fontRubikBold">We’ve Been Building For Over 10 Years</h3>
                            <p class="fontOpenSansRegular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. Scelerisque lorem posuere iaculis nunc amet phasellus.</p>
                            <a href="#" class="fontRubikSemiBold">About Us</a>
                        </div>
                    </div>
                    <div class="col-lg-8 px-0 rightSide">
                        <div class="rightSideVideo"></div>
                        <div class="row mx-0 panels">
                            <div class="col-md-6 leftPanel">
                                <span class="text fontRubikBold">Call for a Quote</span>
                                <span class="number fontRubikMedium">(346) 234-6973</span>
                            </div>
                            <div class="col-md-6 rightPanel">
                                <a href="#" class="fontRubikSemiBold">Online estimate form</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Mps_building;