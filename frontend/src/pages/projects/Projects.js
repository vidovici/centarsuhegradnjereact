import React from "react";
import './Projects.css';
import PpsFirst from "./pps_first/Pps_first";
import PpsProjectsList from "./pps_projectslist/Pps_projectsList";
import PpsProjectInMind from "./pps_projectinmind/Pps_projectInMind";


const Projects = () => {
    
    return(

        <>
            <PpsFirst />
            <PpsProjectsList />
            <PpsProjectInMind />
        </>

    );
};

export default Projects;