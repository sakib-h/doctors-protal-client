import React, { useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";
import BookAppointment from "../BookAppointment/BookAppointment";
import "./Appointment.css";
import AppointmentNavbar from "../AppointmentNavbar/AppointmentNavbar";

const Appointment = () => {
	const [selectedDate, setSelectedDate] = useState(new Date());
	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	return (
		<div className="Appointment">
			<AppointmentNavbar />
			<AppointmentHeader handleDateChange={handleDateChange} />
			<BookAppointment date={selectedDate} />
			<Footer />
		</div>
	);
};

export default Appointment;
