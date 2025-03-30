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

    return(
        <section id="mps_latestProjects">
            <div className="container">
                <div className="mx-0 mp_latestProjects">
                    <h3 className="fontRubikBold">Latest Projects</h3>
                    <div className="row projects">
                        {firstThreeProjects.map((project) => (
                            <ProjectCard key={project.Id} id={project.Id} projectTitle={project.Title.replace("[#Id]", project.Id)} imageFileName={project.TitleImage} imageAlt={project.Title.replace("[#Id]", project.Id)} projectText={project.ShortDescription.replace("[#Id]", project.Id)} />
                        ))}
                    </div>
                    <div className="row justify-content-center">
                        <div className="col buttonWrapper">
                            <a href="/projects" className="fontRubikSemiBold viewAll">View all</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mps_latestProjects;