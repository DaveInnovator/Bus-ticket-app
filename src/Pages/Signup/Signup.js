import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Image1 from "../../Assets/Image 1.jpg";
import Image2 from "../../Assets/Image 2.jpg";
import Image3 from "../../Assets/Image 3.jpg";      
import Image4 from "../../Assets/Image 4.jpg";
import Image5 from "../../Assets/Image 5.jpg";
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.agree)
      newErrors.agree = 'You must agree to the terms of service';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Signed up with:', formData);
      navigate('/complete-profile');
    }
  };

  return (
    <div className="signup-container">
        <div className="image-grid">
                <img src={Image1} alt=''/>
                <img src={Image2} alt=''/>
                <img src={Image3} alt=''/>
                <img src={Image4} alt=''/>
                <img src={Image5} alt=''/>
            </div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <small className="error">{errors.email}</small>}
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <small className="error">{errors.phone}</small>}
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

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <small className="error">{errors.confirmPassword}</small>
          )}
        </div>

        <div className="form-group checkbox">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
          <label>I agree to the Terms of Service</label>
          {errors.agree && <small className="error">{errors.agree}</small>}
        </div>

        <button type="submit" className="signup-button">Create Account</button>

        <div className="login-link">
          Already have an account? <Link to="/Login">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
