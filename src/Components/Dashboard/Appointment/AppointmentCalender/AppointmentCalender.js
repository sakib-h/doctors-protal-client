import React, { useState } from "react";
import "./AppointmentCalender.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const AppointmentCalender = ({ handleDateChange }) => {
	return (
		<div className="AppointmentCalender calenderArea">
			<Calendar onChange={handleDateChange} value={new Date()} />
		</div>
	);
};

export default AppointmentCalender;
