import React from "react";
import './Spps_aboutProject.css';

const Spps_aboutProject = ({about1, about2, img1, img2, img3}) => {
    return(

        <section id="spps_aboutProject">
            <div class="container">
                <div class="spp_aboutProject">
                    <div class="row mx-0">
                        <div class="col-lg-6 leftSide">
                            <h3 class="fontRubikBold">About this Project</h3>
                            <p class="fontOpenSansRegular" dangerouslySetInnerHTML={{__html: about1}}></p>
                        </div>
                        <div class="col-lg-6 rightSide">
                            <img src={ "/images/" + img1} alt="Project Small 1" />
                        </div>
                    </div>
                    <div class="projectLargeImage">
                        <img src={ "/images/" + img2} alt="Project Large " />
                    </div>
                    <div class="row mx-0">
                        <div class="col-lg-6 mb-5 leftPanel">
                            <img src={ "/images/" + img3} alt="Project Small 2" />
                        </div>
                        <div class="col-lg-6 rightPanel">
                            <p class="fontOpenSansRegular" dangerouslySetInnerHTML={{__html: about2}}></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Spps_aboutProject;