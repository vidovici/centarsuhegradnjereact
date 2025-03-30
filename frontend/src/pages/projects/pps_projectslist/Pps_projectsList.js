import ProjectCard from "../../../shared/project/ProjectCard";
import React, { useEffect, useState } from "react";	
import './Pps_projectsList.css';

const Pps_projectsList = () => {

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
    
    const firstRowProjects = projects.slice(0, 3);
    const secondRowProjects = projects.slice(3, 6);
    const thirdRowProjects = projects.slice(6, 9);

    return(
        <section id="pps_projectsList">
            <div className="container">
                <div className="mx-0 pp_projectsList">
                    <div className="row projects">
                        {firstRowProjects.map((project) => (
                            <ProjectCard key={project.Id} id={project.Id} projectTitle={project.Title.replace("[#Id]", project.Id)} imageFileName={project.TitleImage} imageAlt={project.Title.replace("[#Id]", project.Id)} projectText={project.ShortDescription.replace("[#Id]", project.Id)} />
                        ))}
                    </div>
                    <div className="row projects">
                        {secondRowProjects.map((project) => (
                            <ProjectCard key={project.Id} id={project.Id} projectTitle={project.Title.replace("[#Id]", project.Id)} imageFileName={project.TitleImage} imageAlt={project.Title.replace("[#Id]", project.Id)} projectText={project.ShortDescription.replace("[#Id]", project.Id)} />
                        ))}
                    </div>
                    <div className="row projects">
                        {thirdRowProjects.map((project) => (
                            <ProjectCard key={project.Id} id={project.Id} projectTitle={project.Title.replace("[#Id]", project.Id)} imageFileName={project.TitleImage} imageAlt={project.Title.replace("[#Id]", project.Id)} projectText={project.ShortDescription.replace("[#Id]", project.Id)} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pps_projectsList;