import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../App";
import "./AppointmentsByDate.css";

const AppointmentsByDate = ({ date, appointments }) => {
	const [userInfo, setUserInfo] = useContext(UserContext);
	const [appointmentsInfo, setAppointmentsInfo] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:5000/appointments?authMail=` + userInfo.email, {
			method: "GET",
			headers: {
				"Content-type": "application/json",
				authorization: `Bearer ${sessionStorage.getItem("token")}`,
			},
		})
			.then((res) => res.json())
			.then((data) => setAppointmentsInfo(data));
	}, []);

	return (
		<div className="appointmentsByDate">
			<div className="container">
				<div className="contentHeader d-flex justify-content-between">
					<h6 className="textHeader">Appointments</h6>
					<h6 className="dateHeader">{date.toDateString()}</h6>
				</div>
				<div className="table">
					<table class="table container">
						<thead>
							<tr>
								<th scope="col">Sr. No</th>
								<th scope="col">Name</th>
								<th scope="col">Subject</th>
							</tr>
						</thead>
						<tbody>
							{appointmentsInfo.map((appointment, index) => (
								<tr>
									<th scope="row">{index + 1}</th>
									<td>{appointments.name}</td>
									<td>{appointments.subject}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default AppointmentsByDate;
