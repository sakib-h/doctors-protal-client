import React from "react";
import "./TestimonialData.css";
const TestimonialData = ({ data }) => {
	return (
		<div className="testimonialData col-md-4">
			<div className="dataContainer">
				<p>{data.comment}</p>
				<div className="profileInfo d-flex align-items-center">
					<div className="picArea">
						<img src={data.pic} alt="" />
					</div>
					<div className="infoArea">
						<h4>{data.name}</h4>
						<h5>{data.address}</h5>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TestimonialData;
