import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar/Sidebar";

const AddDoctors = () => {
	const [info, setInfo] = useState({});
	const [file, setFile] = useState();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const handleInput = (event) => {
		const newInfo = { ...info };
		newInfo[event.target.name] = event.target.value;
		setInfo(newInfo);
	};
	const handleFileChange = (event) => {
		const newFile = event.target.files[0];
		setFile(newFile);
	};

	const handleFormSubmit = (event) => {
		const formData = new FormData();
		formData.append("file", file);
		formData.append("name", info.name);
		formData.append("email", info.email);

		fetch(`http://localhost:5000/addDoctor`, {
			method: "POST",
			body: formData,
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<div className="addDoctors d-flex justify-content-between">
			<div className="col-md-2 pe-5">
				<Sidebar />{" "}
			</div>
			<div className="col-md-10 container">
				<Form
					onSubmit={handleSubmit(handleFormSubmit)}
					className="form w-90"
				>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<label htmlFor="name">Your Name</label>
						<Form.Control
							type="text"
							id="name"
							name="name"
							onInput={handleInput}
							{...register("name", { required: true })}
						/>
						{errors.name && (
							<span className="text-danger">
								This field is required
							</span>
						)}
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<label htmlFor="number">Enter Phone Number</label>
						<Form.Control
							type="tel"
							id="number"
							name="number"
							onInput={handleInput}
							{...register("phone", { required: true })}
						/>
						{errors.phone && (
							<span className="text-danger">
								This field is required
							</span>
						)}
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<label htmlFor="email">Enter Email</label>
						<Form.Control
							type="email"
							id="email"
							name="email"
							onInput={handleInput}
							{...register("email", { required: true })}
						/>
						{errors.email && (
							<span className="text-danger">
								This field is required
							</span>
						)}
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<label htmlFor="file">Upload a Image</label>
						<Form.Control
							type="file"
							id="file"
							name="file"
							onInput={handleFileChange}
							{...register("file", { required: true })}
						/>
						{errors.file && (
							<span className="text-danger">
								This field is required
							</span>
						)}
					</Form.Group>

					<div className="submitContainer">
						<input
							type="submit"
							value="Submit"
							className="button "
						/>
					</div>
				</Form>
			</div>
		</div>
	);
};

export default AddDoctors;
