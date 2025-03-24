import React from "react";
import './Mps_project.css';

const Mps_project = () => {
    return(
        <section id="mps_project">
            <div class="container">
                <div class="row mx-0 mp_project">
                    <div class="col-lg-4 px-0 leftSide"></div>
                    <div class="col-lg-8 px-0 rightSide">
                        <div class="content">
                            <h3 class="fontRubikBold">No Project Too Big Or Too Small</h3>
                            <div class="row contentWrapper">
                                <div class="col-md-6 contentLeft">
                                    <p class="fontOpenSansRegular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. Scelerisque lorem posuere iaculis nunc amet phasellus.</p>
                                    <p class="fontOpenSansRegular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam.</p>
                                </div>
                                <div class="col-md-6 contentRight">
                                    <p class="fontOpenSansRegular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. Scelerisque lorem posuere iaculis nunc amet phasellus.</p>
                                    <a href="#" class="fontRubikSemiBold">Learn more</a>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex panels">
                            <div class="leftPanel">
                                <span class="number fontRubikBold">12</span>
                                <span class="text fontRubikBold">Years Established</span>
                            </div>
                            <div class="rightPanel">
                                <span class="number fontRubikBold">250</span>
                                <span class="text fontRubikBold">Completed Projects</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mps_project;