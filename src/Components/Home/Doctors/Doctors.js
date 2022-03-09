import React from "react";
import DoctorsData from "../DoctorsData/DoctorsData";
import "./Doctors.css";
import doctorImg from "../../../images/doctor-small.png";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const Doctors = () => {
	const doctorsData = [
		{
			img: doctorImg,
			name: "Dr. Caudi",
			contact: "+61 452 200 126",
			icon: faPhoneAlt,
		},
		{
			img: doctorImg,
			name: "Dr. Saudi",
			contact: "+61 452 200 126",
			icon: faPhoneAlt,
		},
		{
			img: doctorImg,
			name: "Dr. Baudi",
			contact: "+61 452 200 126",
			icon: faPhoneAlt,
		},
	];
	return (
		<div className="doctors container">
			<h4>OUR DOCTORS</h4>
			<div className="data d-flex justify-content-center">
				{doctorsData.map((data) => (
					<DoctorsData data={data} />
				))}
			</div>
		</div>
	);
};

export default Doctors;
