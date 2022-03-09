import React from "react";
import "./DoctorsData.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DoctorsData = ({ data }) => {
	return (
		<div className=" doctorsData col-md-4">
			<img src={data.img} alt="" className="img-fluid" />
			<h3>{data.name}</h3>
			<div className="contactInfo d-flex justify-content-center align-items-center">
				<FontAwesomeIcon icon={data.icon} className="icon" />
				<h5>{data.contact}</h5>
			</div>
		</div>
	);
};

export default DoctorsData;
