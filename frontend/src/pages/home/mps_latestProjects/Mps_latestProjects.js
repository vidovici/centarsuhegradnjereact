import React, { useEffect, useState } from "react";
import './Mps_latestProjects.css';
import ProjectCard from "../../../shared/project/ProjectCard";

const Mps_latestProjects = () => {

    const[projects, setProjects] = useState([]);

    useEffect
    (
      () =>
        {
            fetch('json/Projects.json')
            .then(response => response.json())
            .then(data => setProjects(data))
        }, [projects]
    
    );

    const firstThreeProjects = projects.slice(0, 3);

    //console.log(projects);

    return(
        <section id="mps_latestProjects">
            <div class="container">
                <div class="mx-0 mp_latestProjects">
                    <h3 class="fontRubikBold">Latest Projects</h3>
                    <div class="row projects">
                        {firstThreeProjects.map((project) => (
                            <ProjectCard id={project.Id} projectTitle={project.Title} imageFileName={project.TitleImage} imageAlt={project.Title} projectText={project.ShortDescription} />
                        ))}
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