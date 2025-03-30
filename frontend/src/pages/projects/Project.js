import MpsRelatedProjects from "./mps_relatedProjects/Mps_relatedProjects";
import SppsAboutProject from "./spps_aboutProject/Spps_aboutProject";
import SppsFirst from "./spps_first/Spps_first";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Project.css';

const Project = () => {

    const {id} = useParams();
    const[projects, setProjects] = useState([]);
    
    useEffect
    (
      () =>
        {
            fetch('/json/Projects.json')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(err => console.error("Error parsing JSON:", err));
        }, []
    );

    if(projects == 0) return (<h1> nema projekata</h1>);

    const project = projects.find(p => p.Id == id);

    //console.log("start");
    //console.log(project);
    //console.log("end");

    return(
        <>
            <SppsFirst title={project.Title.replace("[#Id]", project.Id)} shortDescription={project.ShortDescription.replace("[#Id]", project.Id)} date={project.Date} client={project.Client} projectType={project.ProjectType.replace("[#Id]", project.Id)} />
            <SppsAboutProject about1={project.About1} about2={project.About2} img1={project.Img1} img2={project.Img2} img3={project.Img3} />
			<MpsRelatedProjects id={project.Id} />
        </>
    );
};

export default Project;