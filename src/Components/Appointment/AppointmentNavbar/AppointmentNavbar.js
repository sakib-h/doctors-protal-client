import React from "react";
import { Link } from "react-router-dom";
import "./AppointmentNavbar.css";

const AppointmentNavbar = () => {
	return (
		<div className="container d-flex justify-content-end navbar">
			<nav class="navbar navbar-expand-lg ">
				<div class="container-fluid ">
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div
						class="collapse navbar-collapse"
						id="navbarSupportedContent"
					>
						<ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
							<li class="nav-item">
								<Link
									class="nav-link mx-4 mr-5 active"
									aria-current="page"
									to="/home"
								>
									Home
								</Link>
							</li>
							<li class="nav-item">
								<Link
									class="nav-link mx-4 mr-5 active"
									aria-current="page"
									to="/dashboard"
								>
									Dashboard
								</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link mx-4  mr-5" to="/about">
									About
								</Link>
							</li>
							<li class="nav-item">
								<Link
									class="nav-link mx-4 "
									to="/dental-services"
								>
									Dental Services
								</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link mx-4" to="/reviews">
									Review
								</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link mx-4" to="/blog">
									Blog
								</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link mx-4" to="/contact-us">
									Contact Us
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default AppointmentNavbar;
