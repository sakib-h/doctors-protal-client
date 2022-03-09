import React from "react";
import featuredImage from "../../../images/treatment.png";
import "./FeaturedContent.css";

const FeaturedContent = () => {
	return (
		<div className="FeaturedContent container d-flex align-content-center">
			<div className="col-md-3 imgArea">
				<img
					src={featuredImage}
					alt="featured"
					className="fluid featuredImg"
				/>
			</div>
			<div className="col-md-6 textArea">
				<h2>
					Exceptional Dental <br></br> Care, on Your Terms
				</h2>
				<p>
					It is a long established fact that a reader will be
					distracted by the readable content of a page when looking at
					its layout. The point of using Lorem Ipsumis that it has a
					more-or-less normal distribution of letters,as opposed to
					using ‘Content here, content here’, making it look like
					readable English. Many desktop publishing packages and web
					page
				</p>
				<button>Learn More</button>
			</div>
		</div>
	);
};

export default FeaturedContent;
