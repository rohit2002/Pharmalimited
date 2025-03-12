import React, { useState } from 'react'
import "./Careertab1.css"

 

const Careertab1 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    position: "",
    file: null,
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Log the form data (In a real app, send it to the backend)
    console.log("Form Submitted:", formData);

    // Reset the form
    setFormData({
      name: "",
      email: "",
      contactNumber: "",
      position: "",
      file: null,
    });

    // Optionally reset the file input field
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='form1'>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className='name-input'
        />
       
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className='name-input'
        />
        <br />
        <input
          type="tel"
          name="contactNumber"
          placeholder="Contact Number"
          value={formData.contactNumber}
          onChange={handleChange}
           className='name-input'
        />
       
        <input
          type="text"
          name="position"
          placeholder="Position Applied"
          value={formData.position}
          onChange={handleChange}
           className='name-input'
        />
        <br />
        <input
          type="file"
          onChange={handleFileChange}
          className='upload-file'
        />
        <br />
        <button type="submit" className='submit-btn'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Careertab1;
