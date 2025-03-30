import React from "react";
import './Mps_first.css';


const Mps_first = () => {
    return(
        <section id="mps_first">
            <div className="container">
                <div className="row mx-0 mp_first">
                    <div className="col-lg-9 px-0 leftSideWrapper">
                        <div className="leftSide">
                            <h1 className="fontRubikBold">Construction</h1>
                            <p className="my-5 fontOpenSansRegular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut. Mi nibh amet viverra id aliquet neque odio.</p>
                            <a href="#" className="fontRubikMedium">View our work</a>
                        </div>
                    </div>
                    <div className="col-lg-3 rightSide">
                        <h3 className="fontRubikBold">Our services</h3>
                        <div className="servicesWrapper iconBuildingConstruction">
                            <h5 className="fontRubikBold">Building Construction</h5>
                            <p className="fontOpenSansRegular">Lorem ipsum dolor sit consectetur adipiscing elit.</p>
                        </div>
                        <div className="servicesWrapper iconFoundationWork">
                            <h5 className="fontRubikBold">Foundation Work</h5>
                            <p className="fontOpenSansRegular">Lorem ipsum dolor sit consectetur adipiscing elit.</p>
                        </div>
                        <div className="servicesWrapper iconSiteManagement">
                            <h5 className="fontRubikBold">Site Management</h5>
                            <p className="fontOpenSansRegular">Lorem ipsum dolor sit consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mps_first;