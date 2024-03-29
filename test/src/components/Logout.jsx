import React, { useEffect }from 'react';
import axiosInstance from './Axios';
import { useAuth } from '../AuthContext';
import { useNavigate  } from 'react-router-dom';

export default function Logout() {
    const history = useNavigate();
	const { logout } = useAuth();

	useEffect(() => {
		const handleLogout = async () => {
            await logout();
            history('/login');
        };
        handleLogout();
	}, [history, logout]);
  return (
    <>
      <div>Logout</div>
    </>
  )
}
