import React from "react";
import { useNavigate } from "react-router-dom";
import chair from "../../../images/chair.png";
import "./Headermain.css";

const HeaderMain = () => {
	let navigate = useNavigate();
	const ClickHandler = () => {
		navigate("/bookAppointment");
	};
	return (
		<main className=" container d-flex  justify-content-between  align-items-center headerMain">
			<div className="col-md-5">
				<h1>Your New Smile Starts Here</h1>
				<p>
					Lorem Ipsum is simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been the industry’s
					standard dummy text ever since the
				</p>
				<button onClick={ClickHandler}>GET APPOINTMENT</button>
			</div>
			<div className="col-md-6">
				<img src={chair} alt="" className="img-fluid" />
			</div>
		</main>
	);
};

export default HeaderMain;
