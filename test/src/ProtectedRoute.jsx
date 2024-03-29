import React from 'react';
import { Route, Navigate, Routes, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function ProtectedRoute({ component: Component, ...rest }) {
    const { loggedIn } = useAuth();
    return (
        loggedIn ? <Outlet /> : <Navigate to='/login' />
    )
}
