import React, { useContext, useState } from "react";
import { UserContext } from "../../../App";
import "./SignUp.css";
import loginImg from "../../../images/login.png";
import firebaseConfig from "../Config/Firebase.Config";
import { initializeApp } from "firebase/app";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {
	getAuth,
	GoogleAuthProvider,
	FacebookAuthProvider,
	signInWithPopup,
	createUserWithEmailAndPassword,
	updateProfile,
	sendEmailVerification,
	getIdToken,
} from "firebase/auth";

const SignUp = () => {
	const app = initializeApp(firebaseConfig);
	const [userInfo, setUserInfo] = useContext(UserContext);
	const auth = getAuth(app);

	const [userData, setUserData] = useState({
		isSignedIn: false,
		firstName: "",
		lastName: "",
		displayName: "",
		contactNo: "",
		email: "",
		password: "",
		confirmPassword: "",
		mailErrorMessage: "",
		passwordErrorMessage: "",
		passwordConfirmationErrorMessage: "",
	});

	// --> Contact No
	const [value, setValue] = useState();
	const numberValueHandler = (number) => {
		setValue(number);
		const userNumber = { ...userData };
		userNumber.contactNo = number;
		setUserData(userNumber);
		setUserInfo(userNumber);
	};

	const navigate = useNavigate();
	const location = useLocation();
	const redirectHandler = () => {
		if (location.state?.from) {
			navigate(location.state.from);
		}
	};
	// ---> Form Handler
	let isMailValid = true;
	let isPasswordValid = true;
	let isPasswordMatched = true;
	let errorMessage;
	let formEmail;
	let formPassword;
	let confirmedPassword;

	const dataHandler = (event) => {
		// --> First Name
		if (event.target.id === "formFirstName") {
			const firstUserName = event.target.value;
			const userName = { ...userData };
			userName.firstName = firstUserName;
			setUserData(userName);
			setUserInfo(userName);
		}

		// --> Last Name
		if (event.target.id === "formLastName") {
			const lastUserName = event.target.value;
			const userName = { ...userData };
			userName.lastName = lastUserName;
			setUserData(userName);
			setUserInfo(userName);
		}

		// --> Email validation
		if (event.target.id === "formBasicEmail") {
			isMailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(event.target.value);
			if (isMailValid === false) {
				errorMessage = "Invalid Email Address";
			} else {
				formEmail = event.target.value;
			}
			const updateMail = { ...userData };
			updateMail.email = formEmail;
			updateMail.mailErrorMessage = errorMessage;
			setUserData(updateMail);
			setUserInfo(updateMail);
		}

		// --> Password validation
		if (event.target.id === "formBasicPassword") {
			isPasswordValid =
				/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/.test(
					event.target.value
				);
			if (isPasswordValid === false) {
				errorMessage =
					"Password must contain 8 to 16 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character";
			} else {
				formPassword = event.target.value;
			}
			const updatePassword = { ...userData };
			updatePassword.password = formPassword;
			updatePassword.passwordErrorMessage = errorMessage;
			setUserData(updatePassword);
			setUserInfo(updatePassword);
		}

		// --> Password Confirmation
		if (event.target.id === "formConfirmPassword") {
			isPasswordMatched = event.target.value === userData.password;
			if (isPasswordMatched === false) {
				errorMessage = "Password did not Matched";
			} else {
				confirmedPassword = event.target.value;
			}
			const updateConfirmedPassword = { ...userData };
			updateConfirmedPassword.confirmPassword = confirmedPassword;
			updateConfirmedPassword.passwordConfirmationErrorMessage =
				errorMessage;
			setUserData(updateConfirmedPassword);
			setUserInfo(updateConfirmedPassword);
		}
		event.preventDefault();
	};
	// ---> Google SignIn
	const googleHandler = () => {
		const googleProvider = new GoogleAuthProvider();
		signInWithPopup(auth, googleProvider)
			.then((res) => {
				const { displayName, email } = res.user;
				const signedInUser = {
					isSignedIn: true,
					displayName: displayName,
					email: email,
				};
				setUserData(signedInUser);
				setUserInfo(signedInUser);
				getIdToken(res.user)
					.then((idToken) => {
						sessionStorage.setItem("token", idToken);
						redirectHandler();
					})
					.catch((err) => {
						console.log(err);
					});
			})
			.catch((err) => {
				const errorCode = err.code;
				const errorMessage = err.message;
				console.log(errorMessage);
			});
	};

	// ---> Facebook SignIn
	const facebookHandler = () => {
		const facebookProvider = new FacebookAuthProvider();
		signInWithPopup(auth, facebookProvider)
			.then((res) => {
				const { displayName, email } = res.user;
				const signedInUser = {
					isSignedIn: true,
					displayName: displayName,
					email: email,
				};
				setUserData(signedInUser);
				setUserInfo(signedInUser);
				getIdToken(res.user)
					.then((idToken) => {
						sessionStorage.setItem("token", idToken);
						redirectHandler();
					})
					.catch((err) => {
						console.log(err);
					});
			})
			.catch((err) => {
				const errorCode = err.code;
				const errorMessage = err.message;
				const email = err.email;
			});
	};

	// ---> Used for Form submit
	const { handleSubmit } = useForm();
	const verifyMail = () => {
		sendEmailVerification(auth.currentUser).then((res) => {
			// Email verification sent!
			// ...
		});
	};
	const onSubmit = (data) => {
		if (userData.email && userData.confirmPassword) {
			createUserWithEmailAndPassword(
				auth,
				userData.email,
				userData.password
			)
				.then((res) => {
					const signedUpUser = { ...userData };
					signedUpUser.isSignedIn = true;
					setUserData(signedUpUser);
					setUserInfo(signedUpUser);
					getIdToken(res.user)
						.then((idToken) => {
							sessionStorage.setItem("token", idToken);
							redirectHandler();
						})
						.catch((err) => {
							console.log(err);
						});
					updateProfile(auth.currentUser, {
						displayName:
							userData.firstName + " " + userData.lastName,
						phoneNumber: userData.contactNo,
					})
						.then((res) => {})
						.catch((error) => {});
					verifyMail();
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
				});
		}

		console.log(data);
	};

	return (
		<div className=" signUp d-flex justify-content-between  align-items-center container">
			<div className="col-md-5">
				<div className="form_Container">
					<form onSubmit={handleSubmit(onSubmit)}>
						<h3>Signup</h3>
						<div className="mb-3 formGroup">
							<label>First Name</label>
							<input
								type="text"
								id="formFirstName"
								onInput={dataHandler}
								required
							/>
						</div>
						<div className="mb-3 formGroup">
							<label>Last Name</label>
							<input
								type="text"
								id="formLastName"
								onInput={dataHandler}
								required
							/>
						</div>
						<div className="mb-3 formGroup">
							<label>Contact Number</label>
							<PhoneInput
								id="formContactNo"
								international
								countryCallingCodeEditable={false}
								initialValueFormat="national"
								defaultCountry="US"
								value={value}
								onChange={numberValueHandler}
								required
							/>
						</div>

						<div className="mb-3 formGroup">
							<label>Email address</label>
							<input
								type="email"
								id="formBasicEmail"
								onInput={dataHandler}
								required
							/>
						</div>
						<h6>{userData.mailErrorMessage}</h6>

						<div className="mb-3 formGroup">
							<label>Password</label>
							<input
								type="password"
								id="formBasicPassword"
								onInput={dataHandler}
								required
							/>
						</div>
						<h6>{userData.passwordErrorMessage}</h6>
						<div className="mb-3 formGroup">
							<label>Confirm Password</label>
							<input
								type="password"
								id="formConfirmPassword"
								onInput={dataHandler}
								required
							/>
						</div>
						<h6>{userData.passwordConfirmationErrorMessage}</h6>
						<input
							type="submit"
							value="Submit"
							className="submit"
							id="submit"
						/>
					</form>
					<h4>Or Signup with</h4>
					<div className="socialLogin d-flex justify-content-between align-items-center">
						<button
							onClick={googleHandler}
							className="googleBtn socialLoginBtn"
						>
							<div className="d-flex align-items-center justify-content-around">
								<GoogleIcon />
								<p>Sign Up with Google</p>
							</div>
						</button>
						<button
							onClick={facebookHandler}
							className="facebookBtn socialLoginBtn"
						>
							<div className="d-flex align-items-center justify-content-around">
								<FacebookIcon />
								<p>Sign Up with Facebook</p>
							</div>
						</button>
					</div>
					<h5>
						Already a member? <Link to="/login">Login Now</Link>
					</h5>
				</div>
			</div>
			<div className="col-md-5">
				<div className="imgContainer">
					<img src={loginImg} alt="login" className="img-fluid" />
				</div>
			</div>
		</div>
	);
};

export default SignUp;
