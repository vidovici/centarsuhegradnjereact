import React from "react";
import './Mps_first.css';


const Mps_first = () => {
    return(
        <section id="mps_first">
            <div class="container">
                <div class="row mx-0 mp_first">
                    <div class="col-lg-9 px-0 leftSideWrapper">
                        <div class="leftSide">
                            <h1 class="fontRubikBold">Construction</h1>
                            <p class="my-5 fontOpenSansRegular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut. Mi nibh amet viverra id aliquet neque odio.</p>
                            <a href="#" class="fontRubikMedium">View our work</a>
                        </div>
                    </div>
                    <div class="col-lg-3 rightSide">
                        <h3 class="fontRubikBold">Our services</h3>
                        <div class="servicesWrapper iconBuildingConstruction">
                            <h5 class="fontRubikBold">Building Construction</h5>
                            <p class="fontOpenSansRegular">Lorem ipsum dolor sit consectetur adipiscing elit.</p>
                        </div>
                        <div class="servicesWrapper iconFoundationWork">
                            <h5 class="fontRubikBold">Foundation Work</h5>
                            <p class="fontOpenSansRegular">Lorem ipsum dolor sit consectetur adipiscing elit.</p>
                        </div>
                        <div class="servicesWrapper iconSiteManagement">
                            <h5 class="fontRubikBold">Site Management</h5>
                            <p class="fontOpenSansRegular">Lorem ipsum dolor sit consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mps_first;