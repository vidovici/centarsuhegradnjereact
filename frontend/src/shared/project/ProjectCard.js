import React from "react";
import { Link } from "react-router-dom";
import './ProjectCard.css';

const ProjectCard = ({id, projectTitle, imageFileName, imageAlt, projectText}) => {
    return(
        <div className="col-lg-4 project">
            <img src={"/images/" + imageFileName} width="100%" alt={imageAlt} />
            <div className="projectContent">
                <h5 className="fontOpenSansBold">{projectTitle}</h5>
                <p className="fontOpenSansRegular">{projectText}</p>
                <Link to={"/projects/" + id} className="fontRubikBold">View project</Link>
            </div>
        </div>
    );
};

export default ProjectCard;