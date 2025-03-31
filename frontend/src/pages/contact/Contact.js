import React, { useEffect } from "react";
import './Contact.css';
import CpsFirst from "./cps_first/Cps_first";
import CpsCallUs from "./cps_callUs/Cps_callUs";
import CpsContactUs from "./cps_contactUs/Cps_contactUs";
import CpsMap from "./cps_map/Cps_map";

const Contact = () => {

    useEffect(() => {
        document.title = "Kontakt | Centar suhe gradnje";
    }, []);

    return(
        <>
            <CpsFirst />
            <CpsCallUs />
            <CpsContactUs />
            <CpsMap />
        </>
    );
};

export default Contact;