import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Image1 from "../../Assets/Image 1.jpg";
import Image2 from "../../Assets/Image 2.jpg";
import Image3 from "../../Assets/Image 3.jpg";      
import Image4 from "../../Assets/Image 4.jpg";
import Image5 from "../../Assets/Image 5.jpg";

import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    emailOrPhone: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.emailOrPhone) newErrors.emailOrPhone = 'Email or phone is required';
    if (!formData.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Logged in with:', formData);
      navigate('/home');
    }
  };

  return (
    <div className="login-container">
        
    <div className="image-grid">
        <img src={Image1} alt=''/>
        <img src={Image2} alt=''/>
        <img src={Image3} alt=''/>
        <img src={Image4} alt=''/>
        <img src={Image5} alt=''/>
    </div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label className='label'>Email or Phone</label>
          <input
            type="text"
            name="emailOrPhone"
            value={formData.emailOrPhone}
            onChange={handleChange}
          />
          {errors.emailOrPhone && <small className="error">{errors.emailOrPhone}</small>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <small className="error">{errors.password}</small>}
        </div>

        <button type="submit" className="login-button">Continue</button>

        {/* Sign up link */}
        <div className="signup-link">
          Got no account? <Link to="/signup">Sign up</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
