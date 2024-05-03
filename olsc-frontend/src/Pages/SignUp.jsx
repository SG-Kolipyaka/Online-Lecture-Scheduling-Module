import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import '../css/signup.css';
import { signup } from '../Redux/AuthReducer/action';
import { Link } from 'react-router-dom';
import Navbar from '../Routes/NavBar';

const initialState = {
  name: '',
  email: '',
  password: '',
  age: '',
  role: 'admin'
};

const SignUp = () => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const {signupsuccess}=useSelector((state)=>state.authreducer)
  const dispatch = useDispatch();

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    setErrors({
      ...errors,
      [e.target.name]: ''
    });
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      if (!formData[key]) {
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required *`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      setFormData(initialState);
      dispatch(signup(formData));
    }
  };

  return (
    <>
    <Navbar/>
    
    <div className="container">
      <form onSubmit={handleSubmit}>
      <h2 style={{color:"brown"}}>Welcome to IdeaMagix LMS </h2>
        {signupsuccess!=""?<h5 style={{color:"red"}}>{signupsuccess}, Please go to <Link to="/login">Login</Link></h5>:""}
        <h1>Sign Up</h1>
        <div className="form">
          <label>
            Name{errors.name && <span className="error-message">{errors.name}</span>}
          </label>
          <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="form">
          <label>
            Email{errors.email && <span className="error-message">{errors.email}</span>}
          </label>
          <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form">
          <label>
            Password{errors.password && <span className="error-message">{errors.password}</span>}
          </label>
          <input type="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} />
        </div>
        <div className="form">
          <label>
            Age{errors.age && <span className="error-message">{errors.age}</span>}
          </label>
          <input type="number" name="age" placeholder="Enter your age" value={formData.age} onChange={handleChange} />
        </div>
        <div className="form">
          <label>
            Role{errors.role && <span className="error-message">{errors.role}</span>}
            <select name="role" value={formData.role} onChange={handleChange}>
              <option value="admin">Admin</option>
              <option value="instructor">Instructor</option>
            </select>
          </label>
        </div>
        <div className="form">
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
    </>
  );
};

export default SignUp;
