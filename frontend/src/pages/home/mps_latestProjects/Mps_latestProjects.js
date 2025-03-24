import React from "react";
import './Mps_latestProjects.css';

const Mps_latestProjects = () => {
    return(
        <section id="mps_latestProjects">
            <div class="container">
                <div class="mx-0 mp_latestProjects">
                    <h3 class="fontRubikBold">Latest Projects</h3>
                    <div class="row projects">
                        <div class="col-lg-4 project">
                            <img src="images/project1.png" width="100%" />
                            <div class="projectContent">
                                <h5 class="fontOpenSansBold">Project Title</h5>
                                <p class="fontOpenSansRegular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas.</p>
                                <a href="#" class="fontRubikBold">View Project</a>
                            </div>
                        </div>
                        <div class="col-lg-4 project">
                            <img src="images/project2.png" width="100%" />
                            <div class="projectContent">
                                <h5 class="fontOpenSansBold">Project Title</h5>
                                <p class="fontOpenSansRegular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas.</p>
                                <a href="#" class="fontRubikBold">View Project</a>
                            </div>
                        </div>
                        <div class="col-lg-4 project">
                            <img src="images/project3.png" width="100%" />
                            <div class="projectContent">
                                <h5 class="fontOpenSansBold">Project Title</h5>
                                <p class="fontOpenSansRegular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas.</p>
                                <a href="#" class="fontRubikBold">View Project</a>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col buttonWrapper">
                            <a href="#" class="fontRubikSemiBold viewAll">View all</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mps_latestProjects;