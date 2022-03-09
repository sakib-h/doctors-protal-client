import React from "react";
import ServicesData from "../ServicesData/ServicesData";
import "./Services.css";
import Fluoride from "../../../images/fluoride.png";
import Cavity from "../../../images/cavity.png";
import Whitening from "../../../images/whitening.png";

const Services = () => {
	const serviceData = [
		{
			name: "Fluoride Treatment",
			description:
				"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the ",
			icon: Fluoride,
		},
		{
			name: "Cavity Filling",
			description:
				"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the ",
			icon: Cavity,
		},
		{
			name: "Teeth Whitening",
			description:
				"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the ",
			icon: Whitening,
		},
	];
	return (
		<section>
			<div className="services container">
				<div className="text">
					<h4>OUR SERVICES</h4>
					<h1>Services We Provide</h1>
				</div>
				<div className="data d-flex justify-content-between">
					{serviceData.map((data) => (
						<ServicesData data={data} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
