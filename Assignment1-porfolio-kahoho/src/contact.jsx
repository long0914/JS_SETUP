import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate('/');
  };

  return (
    <div>
      <h1>Contact</h1>
      <p>Feel free to contact me using the form below.</p>

      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} />
        <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} />
        <input type="text" name="contactNumber" placeholder="Contact Number" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email Address" onChange={handleChange} />
        <textarea name="message" placeholder="Message" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;