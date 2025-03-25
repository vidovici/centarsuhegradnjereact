import React from "react";
import { Link } from "react-router-dom";
import './ProjectCard.css';

const ProjectCard = ({id, projectTitle, imageFileName, imageAlt, projectText}) => {
    return(
        <div class="col-lg-4 project">
            <img src={ "images/" + imageFileName} width="100%" alt={imageAlt} />
            <div class="projectContent">
                <h5 class="fontOpenSansBold">{projectTitle}</h5>
                <p class="fontOpenSansRegular">{projectText}</p>
                <Link to={"/projects/" + id} className="fontRubikBold">View project</Link>
            </div>
        </div>
    );
};

export default ProjectCard;