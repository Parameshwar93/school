import React, { createContext, useState, useContext, useEffect } from 'react';
import axiosInstance from './components/Axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [loggedIn, setLoggedIn] = useState(() => {
        // Check if there is an access token stored in localStorage
        const accessToken = localStorage.getItem('access_token');
        console.log(!!accessToken)
        return !!accessToken;
    });



    useEffect(() => {
        // Update axios headers when loggedIn state changes
        if (loggedIn) {
            axiosInstance.defaults.headers['Authorization'] = 'JWT ' + localStorage.getItem('access_token');
        } else {
            delete axiosInstance.defaults.headers['Authorization'];
        }
    }, [loggedIn]);

    const login = async (username, password) => {
        try {
            const res = await axiosInstance.post(`token/`, {
                username: username,
                password: password,
            });

            localStorage.setItem(`access_token`, res.data.access);
            localStorage.setItem(`refresh_token`, res.data.refresh);
            setLoggedIn(true);
        } catch (error) {
            console.error('Login failed:', error);
            // Handle login failure here
        }
    };

    const logout = async () => {
        // Perform logout logic, set loggedIn to false
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        axiosInstance.defaults.headers['Authorization'] = null;
        setLoggedIn(false);
        return Promise.resolve();
    };

    return (
        <AuthContext.Provider value={{ loggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
