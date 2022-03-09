import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "../../../App";

const PrivateOutlet = () => {
	const [userInfo, setUserInfo] = useContext(UserContext);
	const location = useLocation();
	return userInfo.isSignedIn ? (
		<Outlet />
	) : (
		<Navigate to="/login" replace state={{ from: location }} />
	);
};

export default PrivateOutlet;
