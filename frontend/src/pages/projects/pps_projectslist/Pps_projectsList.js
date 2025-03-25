import ProjectCard from "../../../shared/project/ProjectCard";
import React from "react";
import './Pps_projectsList.css';

const Pps_projectsList = () => {

    return(

        <section id="pps_projectsList">
            <div class="container">
                <div class="mx-0 pp_projectsList">
                    <div class="row projects">
                        
                        <ProjectCard id="1" projectTitle="Project 1 Title" imageFileName="project1.png" imageAlt="project1" projectText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas." />
                        <ProjectCard id="2" projectTitle="Project 2 Title" imageFileName="project2.png" imageAlt="project2" projectText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas." />
                        <ProjectCard id="3" projectTitle="Project 3 Title" imageFileName="project3.png" imageAlt="project3" projectText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas." />
                        
                    </div>
                    <div class="row projects">

                        <ProjectCard id="4" projectTitle="Project 4 Title" imageFileName="project4.png" imageAlt="project4" projectText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas." />
                        <ProjectCard id="5" projectTitle="Project 5 Title" imageFileName="project5.png" imageAlt="project5" projectText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas." />
                        <ProjectCard id="6" projectTitle="Project 6 Title" imageFileName="project6.png" imageAlt="project6" projectText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas." />

                    </div>
                    <div class="row projects">

                        <ProjectCard id="7" projectTitle="Project 7 Title" imageFileName="project7.png" imageAlt="project7" projectText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas." />
                        <ProjectCard id="8" projectTitle="Project 8 Title" imageFileName="project8.png" imageAlt="project8" projectText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas." />
                        <ProjectCard id="9" projectTitle="Project 9 Title" imageFileName="project9.png" imageAlt="project9" projectText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas." />

                    </div>
                </div>
            </div>
        </section>
       
    );
};

export default Pps_projectsList;