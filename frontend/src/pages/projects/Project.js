import { useParams } from "react-router-dom";
import React from "react";
import './Project.css';

const Project = () => {

    const {id} = useParams();

    return(        

        <h1>(Single project component + {id})</h1>

    );
};

export default Project;