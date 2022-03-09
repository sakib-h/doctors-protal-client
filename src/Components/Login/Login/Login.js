import React, { useContext, useState } from "react";
import { UserContext } from "../../../App";
import "./Login.css";
import loginImg from "../../../images/login.png";
import firebaseConfig from "../Config/Firebase.Config";
import { initializeApp } from "firebase/app";
import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate, useLocation } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import {
	getAuth,
	GoogleAuthProvider,
	FacebookAuthProvider,
	signInWithPopup,
	signInWithEmailAndPassword,
	sendPasswordResetEmail,
	getIdToken,
} from "firebase/auth";

const Login = () => {
	const app = initializeApp(firebaseConfig);
	const [userInfo, setUserInfo] = useContext(UserContext);
	const auth = getAuth(app);
	const [userData, setUserData] = useState({
		isSignedIn: false,
		displayName: "",
		email: "",
		err: "",
	});
	const navigate = useNavigate();
	const location = useLocation();
	const redirectHandler = () => {
		if (location.state?.from) {
			navigate(location.state.from);
		}
	};
	// ---> Used for Form
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);
	// ---> for Form

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
				// Handle Errors here.
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
				// Handle Errors here.
				const errorCode = err.code;
				const errorMessage = err.message;
				const email = err.email;
			});
	};

	const signInHandler = () => {
		signInWithEmailAndPassword(auth, userData.email, userData.password)
			.then((res) => {
				const { displayName, email } = res.user;
				const signedInUser = { ...userData };
				signedInUser.isSignedIn = true;
				signedInUser.displayName = displayName;
				signedInUser.email = email;
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
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
	};

	const resetPassword = (email) => {
		const auth = getAuth();
		sendPasswordResetEmail(auth, email)
			.then((res) => {})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
	};

	return (
		<div>
			{userData.isSignedIn ? (
				<div className="loggedIn">
					<Navigate to="/bookAppointment" />
				</div>
			) : (
				<div className=" login d-flex justify-content-between  align-items-center container">
					<div className="col-md-5">
						<div className="form_Container">
							<form onSubmit={handleSubmit(onSubmit)}>
								<h3>Login</h3>
								<div
									className="mb-3 formGroup"
									controlId="formBasicEmail"
								>
									<label>Email address</label>
									<input
										type="email"
										{...register("email", {
											required: true,
										})}
									/>
									{errors.email && (
										<span>This field is required</span>
									)}
								</div>

								<div
									className="mb-3 formGroup"
									controlId="formBasicPassword"
								>
									<label>Password</label>
									<input
										type="password"
										{...register("password", {
											required: true,
										})}
									/>
									{errors.password && (
										<span>This field is required</span>
									)}
								</div>
								<div className="d-flex flex-row-reverse">
									<button
										className="forgetPassword"
										onClick={() =>
											resetPassword(userData.email)
										}
									>
										Forgotten Password?
									</button>
								</div>
								<input
									type="submit"
									value="Submit"
									className="submit"
									onClick={signInHandler}
								/>
							</form>
							<h4>Or Login with</h4>
							<div className="socialLogin d-flex justify-content-between align-items-center">
								<button
									onClick={googleHandler}
									className="googleBtn socialLoginBtn"
								>
									<div className="d-flex align-items-center justify-content-around">
										<GoogleIcon />
										<p>Sign in with Google</p>
									</div>
								</button>
								<button
									onClick={facebookHandler}
									className="facebookBtn socialLoginBtn"
								>
									<div className="d-flex align-items-center justify-content-around">
										<FacebookIcon />
										<p>Sign in with Facebook</p>
									</div>
								</button>
							</div>
							<h5>
								Not a member?{" "}
								<Link to="/signup">Sign up Now</Link>
							</h5>
						</div>
					</div>
					<div className="col-md-5">
						<div className="imgContainer">
							<img
								src={loginImg}
								alt="login"
								className="img-fluid"
							/>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Login;
