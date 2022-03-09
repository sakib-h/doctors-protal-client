import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import "./BusinessInfo.css";
import {
    faClock,
    faMapMarkerAlt,
    faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
const dataInfo = [
    {
        title: "Opening Hours",
        description: "We are open 247 in a week",
        icon: faClock,
        background: "primary",
    },
    {
        title: "Visit our Location",
        description: "Brooklyn, NY 10036, United States",
        icon: faMapMarkerAlt,
        background: "dark",
    },
    {
        title: "Contact us now",
        description: "+000 123 456789",
        icon: faPhoneAlt,
        background: "primary",
    },
];
const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-around container businessInfo">
            {dataInfo.map((info) => (
                <InfoCard info={info} />
            ))}
        </section>
    );
};

export default BusinessInfo;
