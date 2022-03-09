import React from "react";
import Chair from "../../../images/chair.png";
import "./AppointmentHeader.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const AppointmentHeader = ({ handleDateChange }) => {
	return (
		<main className="AppointmentHeader">
			<div className="container d-flex">
				<div className="col-md-6 calenderArea">
					<h1>Appointment</h1>
					<Calendar
						onChange={handleDateChange}
						value={new Date()}
					/>
				</div>
				<div className="col-md-6 imageArea">
					<img src={Chair} alt="" className="img-fluid" />
				</div>
			</div>
		</main>
	);
};

export default AppointmentHeader;
