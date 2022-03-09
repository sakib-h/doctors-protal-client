import React from "react";
import "./DashboardInfo.css";

const DashboardInfo = () => {
	return (
		<div className="dashboardInfo d-flex justify-content-between">
			<div className="col-md-3 pe-3 ">
				<div className="bgContainer pendingAppointment d-flex justify-content-center align-items-center">
					<h3>09</h3>
					<h6>
						Pending <br></br> Appointments
					</h6>
				</div>
			</div>
			<div className="col-md-3 pe-3">
				<div className="bgContainer todaysAppointment d-flex justify-content-center align-items-center">
					<h3>19</h3>
					<h6>
						Today’s <br></br> Appointments
					</h6>
				</div>
			</div>
			<div className="col-md-3 pe-3">
				<div className="bgContainer totalAppointment d-flex justify-content-center align-items-center">
					<h3>34</h3>
					<h6>
						Total <br></br> Appointments
					</h6>
				</div>
			</div>
			<div className="col-md-3 pe-3">
				<div className="bgContainer totalPatients d-flex justify-content-center align-items-center">
					<h3>78</h3>
					<h6>
						Total <br></br> Patients
					</h6>
				</div>
			</div>
		</div>
	);
};

export default DashboardInfo;
