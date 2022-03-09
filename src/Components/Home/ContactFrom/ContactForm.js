import React from "react";
import "./ContactForm.css";
const ContactForm = () => {
	return (
		<div className="contactForm bgContainer">
			<div className="container content">
				<div className="formHeader">
					<h4>CONTACT US</h4>
					<h1>Always Connect with us </h1>
				</div>
				<div className="form">
					<form action="">
						<input
							type="email"
							name=""
							id=""
							placeholder="Email Address*"
							className="formInput"
							required
						/>
						<input
							type="text"
							name=""
							id=""
							placeholder="Subject*"
							className="formInput"
							required
						/>
						<textarea
							name="comment"
							placeholder="YourMessage*"
							className="formInput"
							required
						/>
						<input
							type="submit"
							value="SUBMIT"
							className="submitButton"
						/>
					</form>
				</div>
			</div>
			<div className="colorOverlay"></div>
		</div>
	);
};

export default ContactForm;
