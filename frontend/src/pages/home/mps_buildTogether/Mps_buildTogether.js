import React from "react";
import './Mps_buildTogether.css';

const Mps_buildTogether = () => {
    return(
        <section id="mps_buildTogether">
            <div class="container">
                <div class="mx-0 mp_buildTogether">
                    <div class="row">
                        <div class="col-lg-4 leftSide">
                            <div class="content">
                                <h3 class="fontRubikBold">Let’s Build Something Together</h3>
                                <p class="fontOpenSansRegular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat.</p>
                                <a href="#" class="fontRubikSemiBold">Get in Touch</a>
                            </div>
                        </div>
                        <div class="col-lg-8 rightSide">
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item itemWrapper">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button fontRubikBold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Donec rutrum congue leo eget malesuada?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body fontOpenSansRegular text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item itemWrapper">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed fontRubikBold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Vivamus suscipit tortor eget felis porttitor volutpat?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body fontOpenSansRegular text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item itemWrapper">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed fontRubikBold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Curabitur non nulla sit amet nisl tempus?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body fontOpenSansRegular text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item itemWrapper">
                                    <h2 class="accordion-header" id="headingFour">
                                        <button class="accordion-button collapsed fontRubikBold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            Pellentesque in ipsum id orci porta dapibus?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div class="accordion-body fontOpenSansRegular text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item itemWrapper">
                                    <h2 class="accordion-header" id="headingFive">
                                        <button class="accordion-button collapsed fontRubikBold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            Curabitur non nulla sit amet nisl?
                                        </button>
                                    </h2>
                                    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                        <div class="accordion-body fontOpenSansRegular text">
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