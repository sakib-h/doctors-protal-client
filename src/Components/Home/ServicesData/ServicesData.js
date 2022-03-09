import React from "react";
import "./ServicesData.css";

const ServicesData = ({ data }) => {
	return (
		<div className="servicesData col-md-3">
			<div className="dataContainer ">
				<img src={data.icon} alt="" className="img-fluid image" />
				<h5 className="name">{data.name}</h5>
				<small className="description">{data.description}</small>
			</div>
		</div>
	);
};

export default ServicesData;
