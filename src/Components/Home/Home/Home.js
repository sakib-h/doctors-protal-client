import React from "react";
import Appointment from "../Appointment/Appointment";
import Blog from "../Blog/Blog";
import ContactForm from "../ContactFrom/ContactForm";
import Doctors from "../Doctors/Doctors";
import FeaturedContent from "../FeaturedContent/FeaturedContent";
import Footer from "../../Shared/Footer/Footer";
import Header from "../Header/Header";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
	return (
		<div>
			<Header />
			<Services />
			<FeaturedContent />
			<Appointment />
			<Testimonial />
			<Blog />
			<Doctors />
			<ContactForm />
			<Footer />
		</div>
	);
};

export default Home;
