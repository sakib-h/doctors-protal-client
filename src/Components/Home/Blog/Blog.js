import React from "react";
import "./Blog.css";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import doc1 from "../../../images/people-1.png";
import doc2 from "../../../images/people-4.png";
import quotes from "../../../images/quotes-2.png";
const Blog = () => {
	return (
		<div className="blog container">
			<div className="text">
				<h4>OUR BLOG</h4>
				<h1>From Our Blog News</h1>
			</div>
			<div className="news d-flex justify-content-between">
				<div className="col-md-4">
					<div className="blogContainer special">
						<h5>Rashed Kabir</h5>
						<h6>22 Aug 2018</h6>
						<p>Check at least a doctor in a year for your teeth</p>
						<FontAwesomeIcon
							icon={faLongArrowAltRight}
							className="icon"
						/>
						<img src={quotes} alt="" className=" quotes " />
					</div>
				</div>
				<div className="col-md-4">
					<div className="blogContainer">
						<div className="proInfo d-flex align-items-center">
							<div className="img">
								<img src={doc1} alt="" className="img-fluid" />
							</div>
							<div className="proText">
								<h5>Dr. Caudi</h5>
								<h6>23 April 2019</h6>
							</div>
						</div>
						<h3>2 times of brush in a day can Keep you healthy</h3>
						<p>
							It is a long established fact that by the readable
							content of a lot layout. The point{" "}
						</p>
					</div>
				</div>
				<div className="col-md-4">
					<div className="blogContainer">
						<div className="proInfo  d-flex align-items-center">
							<div className="img">
								<img src={doc2} alt="" className="img-fluid" />
							</div>
							<div className="proText">
								<h5>Dr. John Mitchel</h5>
								<h6>23 April 2019</h6>
							</div>
						</div>
						<h3>
							The tooth <br /> cancer is taking a challenge
						</h3>
						<p>
							It is a long established fact that by the readable
							content of a lot layout. The point{" "}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
