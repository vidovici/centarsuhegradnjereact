import React from "react";
import './Mps_building.css';

const Mps_building = () => {
    return(
        <section id="mps_building">
            <div className="container">
                <div className="row mx-0 mp_building">
                    <div className="col-lg-4 px-0 leftSide">
                        <div className="content">
                            <h3 className="fontRubikBold">We’ve Been Building For Over 10 Years</h3>
                            <p className="fontOpenSansRegular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. Scelerisque lorem posuere iaculis nunc amet phasellus.</p>
                            <a href="#" className="fontRubikSemiBold">About Us</a>
                        </div>
                    </div>
                    <div className="col-lg-8 px-0 rightSide">
                        <div className="rightSideVideo"></div>
                        <div className="row mx-0 panels">
                            <div className="col-md-6 leftPanel">
                                <span className="text fontRubikBold">Call for a Quote</span>
                                <span className="number fontRubikMedium">(346) 234-6973</span>
                            </div>
                            <div className="col-md-6 rightPanel">
                                <a href="#" className="fontRubikSemiBold">Online estimate form</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mps_building;