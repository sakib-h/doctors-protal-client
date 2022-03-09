import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<div className="Footer ">
			<div className="container content ">
				<div className="header d-flex">
					<div className="col-md-3"></div>
					<div className="col-md-3">
						<h4>Services</h4>
					</div>

					<div className="col-md-3">
						<h4>Oral Health</h4>
					</div>
					<div className="col-md-3">
						<h4>Our Address</h4>
					</div>
				</div>
				<div className="links d-flex">
					<div className="col-md-3">
						<ul>
							<li>Emergency Dental Care</li>
							<li>Check Up</li>
							<li>Treatment of Personal Diseases</li>
							<li>Tooth Extraction</li>
							<li>Check Up</li>
						</ul>
					</div>
					<div className="col-md-3">
						<ul>
							<li>Emergency Dental Care</li>
							<li>Check Up</li>
							<li>Treatment of Personal Diseases</li>
							<li>Tooth Extraction</li>
							<li>Check Up</li>
							<li>Check Up</li>
							<li>Check Up</li>
						</ul>
					</div>
					<div className="col-md-3">
						<ul>
							<li>Emergency Dental Care</li>
							<li>Check Up</li>
							<li>Treatment of Personal Diseases</li>
							<li>Tooth Extraction</li>
							<li>Check Up</li>
							<li>Check Up</li>
							<li>Check Up</li>
						</ul>
					</div>
					<div className="col-md-3">
						<p>New York - 101010 Hudson</p>
						<div className="socialIcon">
							<ion-icon
								name="logo-facebook"
								className="icon"
								size="large"
							></ion-icon>
							<ion-icon
								name="logo-google"
								className="icon"
								size="large"
							></ion-icon>
							<ion-icon
								name="logo-twitter"
								className="icon"
								size="large"
							></ion-icon>
						</div>
						<div className="contactNo">
							<p>Call Now</p>
							<button>+2025550295</button>
						</div>
					</div>
				</div>
				<div className="copyright">
					<p>Copyright &#169; 2022 All Rights Reserved</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
