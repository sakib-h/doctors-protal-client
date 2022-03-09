import React from "react";
import "./Appointment.css";
import doctorImg from "../../../images/doctor.png";

const Appointment = () => {
	return (
		<div className="appointment container">
			<div className="bgContainer row">
				<div className="content d-flex align-content-center justify-content-center">
					<div className="col-md-6 imageArea">
						<img src={doctorImg} alt="" className="img-fluid" />
					</div>
					<div className="col-md-6 textArea">
						<h2>APPOINTMENT</h2>
						<h1>Make an appointment Today</h1>
						<p>
							It is a long established fact that a reader will be
							distractedby the readable content of a page when
							looking at its
						</p>
						<button>Learn More</button>
					</div>
				</div>
				<div className="layer"></div>
			</div>
		</div>
	);
};

export default Appointment;
