import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import PatientsInfo from "./PatientsInfo/PatientsInfo";
import "./Patients.css";

const Patients = () => {
	return (
		<div className="patients d-flex justify-content-between">
			<div className="col-md-2 pe-5">
				<Sidebar />{" "}
			</div>
			<div className="col-md-10">
				<h5> All Patients</h5>
				<PatientsInfo />
			</div>
		</div>
	);
};

export default Patients;
