import React from "react";
import BusinessInfo from "../BusinessInfo/BusinessInfo";
import HeaderMain from "../HeaderMain/HeaderMain";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {
	return (
		<div className="header">
			<Navbar className="navbar" />
			<HeaderMain className="header-main" />
			<BusinessInfo />
		</div>
	);
};

export default Header;
