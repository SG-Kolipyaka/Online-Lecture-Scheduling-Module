import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import React from 'react'

const PrivateRoutes = ({ children }) => {
    const { isAdmin, isInstructor } = useSelector((store) => store.authreducer);

    if (isAdmin) {
        <Navigate to="/adminpanel"  />;
        return children
    } else if (isInstructor) {
        <Navigate to="/" />;
        return children
    } else {
        return <Navigate to="/login"  />;
    }
}

export default PrivateRoutes;
