import React from "react";
import BookingCard from "../BookingCard/BookingCard";
import "./BookAppointment.css";
const BookAppointment = ({ date }) => {
	const appointmentsData = [
		{
			_id: "5e8df5aee6e8213764dc23e0",
			id: 1,
			subject: "Teeth Orthodontics",
			visitingHour: "8:00 AM - 9:00 AM",
			totalSpace: "10",
		},
		{
			_id: "5e8df5aee6e8213764dc23e1",
			id: 2,
			subject: "Cosmetic Dentistry",
			visitingHour: "10:05 am – 11:30 am",
			totalSpace: "10",
		},
		{
			_id: "5e8df5aee6e8213764dc23e2",
			id: 3,
			subject: "Teeth Cleaning",
			visitingHour: "5:00 pm – 6:30 pm",
			totalSpace: "10",
		},
		{
			_id: "5e8df5aee6e8213764dc23e3",
			id: 4,
			subject: "Cavity Protection",
			visitingHour: "7:00 am – 8:30 am",
			totalSpace: "10",
		},
		{
			_id: "5e8df5aee6e8213764dc23e4",
			id: 5,
			subject: "Teeth Orthodontics",
			visitingHour: "8:00 AM - 9:00 AM",
			totalSpace: "10",
		},
		{
			_id: "5e8df5aee6e8213764dc23e5",
			id: 6,
			subject: "Teeth Orthodontics",
			visitingHour: "8:00 AM - 9:00 AM",
			totalSpace: "10",
		},
	];
	return (
		<section className="BookAppointment container">
			<h1>Available Appointments on {date.toDateString()}</h1>
			<div className="d-flex flex-md-wrap">
				{appointmentsData.map((data) => (
					<BookingCard data={data} date={date} />
				))}
			</div>
		</section>
	);
};

export default BookAppointment;
