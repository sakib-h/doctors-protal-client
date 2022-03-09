import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../App";
import "./Sidebar.css";
import { getAuth, signOut } from "firebase/auth";

const Sidebar = () => {
	const auth = getAuth();
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);
	let navigate = useNavigate();
	const signOutHandler = () => {
		signOut(auth)
			.then(() => {
				loggedInUser.isSignedIn = false;
			})
			.catch((error) => {
				// An error happened.
			});
	};

	return (
		<div className="sidebar">
			<div className="buttonContainer d-flex ">
				<ion-icon name="apps" className="icon"></ion-icon>
				<Link to="/Dashboard" className="button">
					Dashboard{" "}
				</Link>
			</div>

			<div className="buttonContainer d-flex ">
				<ion-icon
					name="calendar-clear-outline"
					className="icon"
				></ion-icon>
				<Link to="/Appointment" className="button">
					Appointment{" "}
				</Link>
			</div>

			<div className="buttonContainer d-flex ">
				<ion-icon name="people-outline" className="icon"></ion-icon>
				<Link to="/Patients" className="button">
					Patients{" "}
				</Link>
			</div>

			<div className="buttonContainer d-flex ">
				<ion-icon name="reader-outline" className="icon"></ion-icon>
				<Link to="/Prescriptions" className="button">
					Prescriptions{" "}
				</Link>
			</div>

			<div className="buttonContainer d-flex ">
				<ion-icon name="person-add-outline" className="icon"></ion-icon>
				<Link to="/addDoctors" className="button">
					Add Doctors{" "}
				</Link>
			</div>

			<div className="buttonContainer d-flex ">
				<ion-icon name="settings-outline" className="icon"></ion-icon>
				<Link to="/Setting" className="button">
					Setting{" "}
				</Link>
			</div>

			<div className="buttonContainer d-flex setting">
				<ion-icon name="exit-outline" className="icon"></ion-icon>
				<Link to="/" className="button" onClick={signOutHandler}>
					Log Out{" "}
				</Link>
			</div>
		</div>
	);
};

export default Sidebar;
