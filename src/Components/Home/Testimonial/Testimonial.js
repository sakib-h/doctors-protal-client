import React from "react";
import quotes from "../../../images/quotes.png";
import TestimonialData from "../TestimonialData/TestimonialData";
import herry from "../../../images/people-1.png";
import wilson from "../../../images/people-2.png";
import winson from "../../../images/people-3.png";
import "./Testimonial.css";
const Testimonial = () => {
	const testimonialData = [
		{
			name: "Winson Herry",
			address: "California",
			pic: herry,
			comment:
				"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content",
		},
		{
			name: "Winson Herry",
			address: "California",
			pic: wilson,
			comment:
				"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content",
		},
		{
			name: "Winson Herry",
			address: "California",
			pic: winson,
			comment:
				"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content",
		},
	];
	return (
		<div className="testimonial container">
			<div className="testimonialHeader d-flex justify-content-between">
				<div className="heading col-md-5">
					<h2>TESTIMONIAL</h2>
					<h1>What’s Our Patients Says</h1>
				</div>
				<div className="icon col-md-2">
					<img src={quotes} alt="" className="img-fluid" />
				</div>
			</div>
			<div className=" d-flex align-content-center justify-content-center">
				{testimonialData.map((data) => (
					<TestimonialData data={data} />
				))}
			</div>
		</div>
	);
};

export default Testimonial;
