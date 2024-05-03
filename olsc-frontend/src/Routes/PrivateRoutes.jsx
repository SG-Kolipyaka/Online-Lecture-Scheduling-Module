import { Navigate } from "react-router-dom";

import React from 'react'

const PrivateRoutes = ({ children }) => {
    const isAdmin = localStorage.getItem('isAdmin');
    const isInstructor = localStorage.getItem('isInstructor');
    const user = JSON.parse(localStorage.getItem('user'));

    if (isAdmin) {
        <Navigate to="/adminpanel"  />;
        return children
    } else if (isInstructor) {
        <Navigate to={`/${user._id}`} />;
        return children
    } else {
        return <Navigate to="/login"  />;
    }
}

export default PrivateRoutes;
