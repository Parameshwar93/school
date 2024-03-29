import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from '../ProtectedRoute';
import { AuthProvider } from '../AuthContext';
import Home from './Home'
import Header from './Header'
import CourseDetail from './CourseDetail'
import Login from './user/Login';
import Register from './user/Register';
import TeacherDashboard from './teacher/TeacherDashboard';
import Logout from './Logout';


export default function Main() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />

            {/* Protected routes */}
            <Route element={<ProtectedRoute />}>
              <Route element={<TeacherDashboard />} path="/teacherdashboard" exact />
              <Route exact path="/dashboard" element={<TeacherDashboard />} />
              <Route exact path="/logout" element={<Logout />} />
            </Route>
            {/* End of protected routes. */}

            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  )
}
// 