import React from 'react'
import { useAuth } from '../middleware/authMiddleware';
import { Navigate } from 'react-router-dom';

const Protectedroutes = ({ children }) => {
    const isAuthenticated = useAuth();

    if (!isAuthenticated)
        return <Navigate to="/login" replace />;

    return children;
}

export default Protectedroutes