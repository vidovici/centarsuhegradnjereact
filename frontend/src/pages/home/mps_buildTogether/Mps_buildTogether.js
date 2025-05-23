import React from "react";
import './Mps_buildTogether.css';

const Mps_buildTogether = () => {
    return(
        <section id="mps_buildTogether">
            <div className="container">
                <div className="mx-0 mp_buildTogether">
                    <div className="row">
                        <div className="col-lg-4 leftSide">
                            <div className="content">
                                <h3 className="fontRubikBold">Let’s Build Something Together</h3>
                                <p className="fontOpenSansRegular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat.</p>
                                <a href="#" className="fontRubikSemiBold">Get in Touch</a>
                            </div>
                        </div>
                        <div className="col-lg-8 rightSide">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item itemWrapper">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button fontRubikBold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Donec rutrum congue leo eget malesuada?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body fontOpenSansRegular text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item itemWrapper">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed fontRubikBold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Vivamus suscipit tortor eget felis porttitor volutpat?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body fontOpenSansRegular text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item itemWrapper">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed fontRubikBold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Curabitur non nulla sit amet nisl tempus?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body fontOpenSansRegular text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item itemWrapper">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed fontRubikBold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            Pellentesque in ipsum id orci porta dapibus?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div className="accordion-body fontOpenSansRegular text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item itemWrapper">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button collapsed fontRubikBold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            Curabitur non nulla sit amet nisl?
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                        <div className="accordion-body fontOpenSansRegular text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mps_buildTogether;