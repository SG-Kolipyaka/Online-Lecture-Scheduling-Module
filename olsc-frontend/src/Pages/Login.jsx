import React from 'react';
import { login } from '../Redux/AuthReducer/action';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Navbar from '../Routes/NavBar';
import '../css/login.css'; 
import { useLocation, useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isAdmin = localStorage.getItem('isAdmin');
  const isInstructor = localStorage.getItem('isInstructor');
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate=useNavigate()
  const location =useLocation()
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const userData = {
      email,
      password
    };
    dispatch(login(userData)).then(()=> navigate(location.state,{replace:true}));
  };
  

  if (isAdmin) {
    return <Navigate to={'/adminpanel'} />;
  } else if (isInstructor) {
    return <Navigate to={`/${user._id}`} />;
  } else {
    return (
      <>
      <Navbar/>
      <h2 style={{color:"brown"}}>Welcome to IdeaMagix LMS <h5 style={{color:"black"}}>Login as Instructor or Admin</h5> </h2>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>User Login</h1>
          <div className="form">
            <label>Email:</label>
            <input type="text" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="form">
            <label>Password:</label>
            <input type="password" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <div className="form">
            <button>Login</button>
          </div>
        </form>
      </div>
      </>
    );
  }
};

export default Login;
