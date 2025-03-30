import React from "react";
import './Spps_first.css';

const Spps_first = ({title, shortDescription, date, client, projectType}) => {
    return(
        <section id="spps_first">
            <div className="container">
                <div className="row mx-0 spp_first">
                    <div className="col-lg-8 leftSide">
                        <h1 className="fontRubikBold">{title}</h1>
                        <p className="my-5 fontOpenSansRegular">{shortDescription}</p>
                    </div>
                    <div className="col-lg-4 rightSide">
                        <p className="fontOpenSansRegular">
                            <strong>Date: </strong>{date}<br />
                            <strong>Client: </strong>{client}<br />
                            <strong>Project Type: </strong>{projectType}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Spps_first;