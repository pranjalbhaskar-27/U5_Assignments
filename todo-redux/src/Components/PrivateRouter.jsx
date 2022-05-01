import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export default function PrivateRouter({ children }) {
	const auth = useSelector((store) => store.auth.auth);
	if (!auth) {
		return <Navigate to="/login" replace={true} />;
	}
	return children;
}
