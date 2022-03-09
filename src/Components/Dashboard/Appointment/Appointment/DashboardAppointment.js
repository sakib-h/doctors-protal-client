import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../App";
import AppointmentCalender from "../AppointmentCalender/AppointmentCalender";
import AppointmentsByDate from "../AppointmentsByDate/AppointmentsByDate";
import Sidebar from "../../Sidebar/Sidebar";
import "./DashboardAppointment.css";
const DashboardAppointment = () => {
	const [userInfo, setUserInfo] = useContext(UserContext);
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [appointments, setAppointments] = useState([]);
	const handleDateChange = (date) => {
		setSelectedDate(date);
	};
	useEffect(() => {
		fetch(`http://localhost:5000/appointmentsByDate`, {
			method: "POST",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify({ date: selectedDate }),
		})
			.then((res) => res.json())
			.then((data) => {
				setAppointments(data);
			});
	}, [selectedDate]);

	return (
		<div className="DashboardAppointment d-flex justify-content-between">
			<div className="col-md-2 pe-5">
				<Sidebar />
			</div>
			<div className="col-md-10">
				<h5> Appointments</h5>
				<div className="d-flex justify-content-between">
					<div className="col-md-6  pe-3">
						<AppointmentCalender
							handleDateChange={handleDateChange}
						/>
					</div>
					<div className="col-md-6 pe-5">
						<AppointmentsByDate
							date={selectedDate}
							appointments={appointments}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardAppointment;
