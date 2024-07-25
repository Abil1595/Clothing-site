import React, { useState } from 'react';
import { Button } from 'reactstrap';
import bg from '../Images/google-logo.png';


export default function LoginModal() {

  const [formData, setFormData] = useState({  
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {  
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const validationErrors = validateForm(formData);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      console.log('Form is valid:', formData);
      setFormData({
        username: '',
        password: '',
      });

     
    
    } catch (err) {
      console.error('Error during form submission:', err);
      
    }
  };

  const validateForm = (formData) => {
    const errors = {};

    if (!formData.username.trim()) {
      errors.username = 'Username is required';
    }

    if (!formData.password.trim()) {
      errors.password = 'Password is required';
    }

    return errors;
  };

  return (
    <div>     
      <div className='form-container'>       
        <form onSubmit={handleSubmit}>
          <label>USERNAME</label><br />
          <input type='text' name='username' value={formData.username} onChange={handleChange} /><br />
          {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}<br />

          <label>PASSWORD</label><br />
          <input type='password' name='password' value={formData.password} onChange={handleChange} /><br />
          {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}<br />

          <center><Button type='submit'>Login</Button></center>
        </form>   
      </div><br />
      <div className='google-signin'>
        <img src={bg} className='gimage' alt='Google Logo' />Login with Google
       </div><br /><br />
    </div>
  );
}


