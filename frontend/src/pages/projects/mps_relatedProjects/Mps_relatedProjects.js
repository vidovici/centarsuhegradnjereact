import React, { useEffect, useState } from "react";
import './Mps_relatedProjects.css';
import ProjectCard from "../../../shared/project/ProjectCard";

const Mps_relatedProjects = ({id}) => {

    const[projects, setProjects] = useState([]);

    useEffect
    (
      () =>
        {
            fetch('/json/Projects.json')
            .then(response => response.json())
            .then(data => setProjects(data))
        }, [projects]
    );

    //  to do ..... 
    //  Ovdje se trebaju selektirati projekti vezani za prikazani projekt prema Id prijekta. 
    //  kako su hibridni podaci, onda sam odabrao sam nasumično tri projekta za prikazati
    //  za to treba koristiti pravi backand

    const relatedThreeProjects = projects.slice(6, 9);

    return(
        <section id="mps_relatedProjects">
            <div class="container">
                <div class="mx-0 mp_relatedProjects">
                    <h3 class="fontRubikBold">Related Projects</h3>
                    <div class="row projects">
                        {relatedThreeProjects.map((project) => (
                            <ProjectCard key={project.Id} id={project.Id} projectTitle={project.Title.replace("[#Id]", project.Id)} imageFileName={project.TitleImage} imageAlt={project.Title.replace("[#Id]", project.Id)} projectText={project.ShortDescription.replace("[#Id]", project.Id)} />
                        ))}
                    </div>
                    <div class="row justify-content-center">
                        <div class="col buttonWrapper">
                            <a href="/projects" class="fontRubikSemiBold viewAll">View all</a>
                        </div>
                        <span>Trebaju biti prikazani projekti vezani za projet Id: {id}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mps_relatedProjects;