import React, { useContext } from "react";
import Modal from "react-modal";
import "./BookingForm.css";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { UserContext } from "../../../App";

const customStyles = {
	content: {
		width: "50%",
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		borderRadius: "10px",
		backgroundColor: "#ffffff",
	},
};

Modal.setAppElement("#root");

const BookingForm = ({ modalIsOpen, closeModal, info, date }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);

	const OnSubmit = (data) => {
		data.subject = info.subject;
		data.date = date.toDateString("dd-mm-yyyyy");
		data.visitingHour = info.visitingHour;
		data.created = new Date();
		data.authMail = loggedInUser.email;
		fetch(`http://localhost:5000/addAppointment`, {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((success) => {
				if (success) {
					closeModal();
					alert("Appointment created Successfully");
					data = "";
				}
			});
	};

	return (
		<div className="bookingForm">
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Example Modal"
			>
				<h4>
					{info.subject} ({info.visitingHour})
				</h4>
				<p> On {date.toDateString()}</p>

				<div className="formContainer">
					<Form onSubmit={handleSubmit(OnSubmit)} className="form">
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Control
								type="text"
								placeholder="Your Name"
								{...register("name", { required: true })}
							/>
							{errors.name && (
								<span className="text-danger">
									This field is required
								</span>
							)}
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Control
								type="text"
								placeholder="Enter Phone Number"
								{...register("phone", { required: true })}
							/>
							{errors.phone && (
								<span className="text-danger">
									This field is required
								</span>
							)}
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Control
								type="email"
								placeholder="Enter email"
								{...register("email", { required: true })}
							/>
							{errors.email && (
								<span className="text-danger">
									This field is required
								</span>
							)}
						</Form.Group>
						<div className="d-flex">
							<Form.Group
								className="mb-3 col-4 pe-3"
								controlId="formBasicEmail"
							>
								<Form.Select
									aria-label="Default select example"
									{...register("gender", { required: true })}
								>
									<option value="" disabled>
										Select Gender
									</option>
									<option value="male">Male</option>
									<option value="female">Female</option>
									<option value="other">Other</option>
								</Form.Select>
								{errors.gender && (
									<span className="text-danger">
										This field is required
									</span>
								)}
							</Form.Group>
							<Form.Group
								className="mb-3 col-4 pe-3"
								controlId="formBasicEmail"
							>
								<Form.Control
									type="number"
									placeholder="Your Age"
									{...register("age", { required: true })}
								/>
								{errors.age && (
									<span className="text-danger">
										This field is required
									</span>
								)}
							</Form.Group>
							<Form.Group
								className="mb-3 col-4"
								controlId="formBasicEmail"
							>
								<Form.Control
									type="number"
									placeholder="Weight(KG) "
									{...register("weight", { required: true })}
								/>
								{errors.weight && (
									<span className="text-danger">
										This field is required
									</span>
								)}
							</Form.Group>
						</div>

						<div className="submitContainer d-flex flex-row-reverse">
							<input
								type="submit"
								value="Send"
								className="button "
							/>
						</div>
					</Form>
				</div>
			</Modal>
		</div>
	);
};

export default BookingForm;
