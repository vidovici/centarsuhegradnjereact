import React from "react";
import './Mps_latestProjects.css';
import ProjectCard from "../../../shared/project/ProjectCard";

const Mps_latestProjects = () => {
    return(
        <section id="mps_latestProjects">
            <div class="container">
                <div class="mx-0 mp_latestProjects">
                    <h3 class="fontRubikBold">Latest Projects</h3>
                    <div class="row projects">
                        <ProjectCard id="1" projectTitle="Project 1 Title" imageFileName="project1.png" imageAlt="project1" projectText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas." />
                        <ProjectCard id="2" projectTitle="Project 2 Title" imageFileName="project2.png" imageAlt="project2" projectText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas." />
                        <ProjectCard id="3" projectTitle="Project 3 Title" imageFileName="project3.png" imageAlt="project3" projectText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas." />
                    </div>
                    <div class="row justify-content-center">
                        <div class="col buttonWrapper">
                            <a href="/projects" class="fontRubikSemiBold viewAll">View all</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mps_latestProjects;