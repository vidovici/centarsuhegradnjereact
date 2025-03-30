import React from "react";
import './Mps_project.css';

const Mps_project = () => {
    return(
        <section id="mps_project">
            <div className="container">
                <div className="row mx-0 mp_project">
                    <div className="col-lg-4 px-0 leftSide"></div>
                    <div className="col-lg-8 px-0 rightSide">
                        <div className="content">
                            <h3 className="fontRubikBold">No Project Too Big Or Too Small</h3>
                            <div className="row contentWrapper">
                                <div className="col-md-6 contentLeft">
                                    <p className="fontOpenSansRegular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. Scelerisque lorem posuere iaculis nunc amet phasellus.</p>
                                    <p className="fontOpenSansRegular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam.</p>
                                </div>
                                <div className="col-md-6 contentRight">
                                    <p className="fontOpenSansRegular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. Scelerisque lorem posuere iaculis nunc amet phasellus.</p>
                                    <a href="#" className="fontRubikSemiBold">Learn more</a>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex panels">
                            <div className="leftPanel">
                                <span className="number fontRubikBold">12</span>
                                <span className="text fontRubikBold">Years Established</span>
                            </div>
                            <div className="rightPanel">
                                <span className="number fontRubikBold">250</span>
                                <span className="text fontRubikBold">Completed Projects</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mps_project;