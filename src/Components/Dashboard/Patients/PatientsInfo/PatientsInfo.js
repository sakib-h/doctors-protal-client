import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../App";

const PatientsInfo = () => {
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
		<div className="PatientsInfo container">
			<table class="table container">
				<thead>
					<tr>
						<th scope="col">Sr. No</th>
						<th scope="col">Date</th>
						<th scope="col">Visiting Hour</th>
						<th scope="col">Name</th>
						<th scope="col">Contact</th>
						<th scope="col">Subject</th>
					</tr>
				</thead>
				<tbody>
					{appointmentsInfo.map((appointment, index) => (
						<tr>
							<th scope="row">{index + 1}</th>
							<td>{appointment.date}</td>
							<td>{appointment.visitingHour}</td>
							<td>{appointment.name}</td>
							<td>{appointment.phone}</td>
							<td>{appointment.subject}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default PatientsInfo;
