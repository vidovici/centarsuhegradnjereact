import React, { useEffect } from "react";
import './Home.css';
import Mpsfirst from "./mps_first/Mps_first";
import MpsgetQuote from "./mps_getQuote/Mps_getQuote";
import Mpsproject from "./mps_project/Mps_project";
import MpslatestProjects from "./mps_latestProjects/Mps_latestProjects";
import Mpsbuilding from "./mps_building/Mps_building";
import MpsbuildTogether from "./mps_buildTogether/Mps_buildTogether";
import MpsclientTestimonials from "./mps_clientTestimonials/Mps_clientTestimonials";

const Home = () => {

    useEffect(() => {
        document.title = "Centar suhe gradnje";
    }, []);

    return(
        <>
            <Mpsfirst />
            <MpsgetQuote />
            <Mpsproject />
            <MpslatestProjects />
            <Mpsbuilding />
            <MpsbuildTogether />
            <MpsclientTestimonials />
        </>
    );
};

export default Home;