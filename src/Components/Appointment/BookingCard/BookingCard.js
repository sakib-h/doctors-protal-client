import React, { useState, useContext } from "react";
import { UserContext } from "../../../App";
import BookingForm from "../BookingForm/BookingForm";
import "./BookingCard.css";
import { useNavigate } from "react-router-dom";
const BookingCard = ({ data, date }) => {
	const [modalIsOpen, setIsOpen] = useState(false);

	const [loggedInUser, setLoggedInUser] = useContext(UserContext);
	let navigate = useNavigate();
	const openModal = () => {
		loggedInUser.isSignedIn ? setIsOpen(true) : navigate("/login");
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<div className="bookingCard col-md-4">
			<div className="bgContainer">
				<h4>{data.subject}</h4>
				<h5>{data.visitingHour}</h5>
				<p>{data.totalSpace} SPACES AVAILABLE</p>
				<button onClick={openModal}>BOOK APPOINTMENT</button>
				<BookingForm
					modalIsOpen={modalIsOpen}
					closeModal={closeModal}
					info={data}
					date={date}
				/>
			</div>
		</div>
	);
};

export default BookingCard;
