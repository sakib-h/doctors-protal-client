import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./InfoCard.css";

const InfoCard = ({ info }) => {
    return (
        <div className="col-md-4 infoCard">
            <div
                className={`infoCardContainer d-flex justify-content-center align-items-center mx-3 info-${info.background}`}
            >
                <div className="infoIcon">
                    <FontAwesomeIcon icon={info.icon} />
                </div>
                <div className="infoText">
                    <h4>{info.title}</h4>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;
