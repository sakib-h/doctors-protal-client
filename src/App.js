import React, { createContext, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Appointment from "./Components/Appointment/Appointment/Appointment";
import Login from "./Components/Login/Login/Login";
import Error from "./Components/Shared/Error/Error";
import SignUp from "./Components/Login/Signup/SignUp";
import PrivateOutlet from "./Components/Login/PrivateOutlet/PrivateOutlet";
import DashboardAppointment from "./Components/Dashboard/Appointment/Appointment/DashboardAppointment";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard/Dashboard";
import Patients from "./Components/Dashboard/Patients/Patients";
import AddDoctors from "./Components/Dashboard/AddDoctors/AddDoctors";

export const UserContext = createContext();

const App = () => {
	const [userInfo, setUserInfo] = useState({});
	return (
		<UserContext.Provider value={[userInfo, setUserInfo]}>
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="home" element={<Home />} />
				<Route path="bookAppointment" element={<Appointment />} />
				<Route path="login" element={<Login />} />
				<Route path="signup" element={<SignUp />} />
				<Route path="" element={<PrivateOutlet />}>
					<Route path="dashboard" element={<Dashboard />} />
					<Route
						path="appointment"n
						element={<DashboardAppointment />}
					/>
					<Route path="Patients" element={<Patients />} />
					<Route path="addDoctors" element={<AddDoctors />} />
				</Route>
				<Route path="*" element={<Error />} />
			</Routes>
		</UserContext.Provider>
	);
};

export default App;
