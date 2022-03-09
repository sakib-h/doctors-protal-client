import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import DashboardData from "../DashboardData/DashboardData";
import DashboardInfo from "../DashboardInfo/DashboardInfo";
import "./Dashboard.css";
const Dashboard = () => {
	return (
		<div className="dashboard d-flex">
			<div className="col-md-2 pe-3">
				<Sidebar />
			</div>

			<div className="col-md-10 container">
				<h5> Dashboard </h5>
				<DashboardInfo />
				<DashboardData />
			</div>
		</div>
	);
};

export default Dashboard;
