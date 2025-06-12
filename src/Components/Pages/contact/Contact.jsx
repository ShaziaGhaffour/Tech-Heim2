import React, { useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import './contact.css';
import arrowDown from "../../../../public/arrow-down.png";
import Footer from '../../HomePagecomponents/Footer/Footer';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
    <div className="contact-container">
       <div className="custom-home">
                <p>Home</p>
         <img src={arrowDown} className="breadcrumb-arrow" alt="Arrow" />
                <p>Contact</p>
                
              </div>
      <div className="contact-wrapper">
        <div className="card-grid">
  <div className="cards">
    <div className="icon-circle">
      <MapPin size={24} color="#2563eb" />
    </div>
    <h3>Office</h3>
    <p>123 Main Street,<br />Anytown USA</p>
  </div>
 <div className="cards">
    <div className="icon-circle">
      <Mail size={24} color="#2563eb" />
    </div>
    <h3>Email</h3>
    <p>info@techheim.com</p>
  </div>

 <div className="cards">
    <div className="icon-circle">
      <Phone size={24} color="#2563eb" />
    </div>
    <h3>Phone</h3>
    <p>+1 (555) 123-4567</p>
  </div>
</div>

        <div className="section-grid">
          <div>
            <h2 className="section-title">Message us</h2>
            <p className="section-text">
              We're here to assist you every step of the way. Whether you have a question,
              need technical support, or simply want to share your feedback, our dedicated team is ready to help.
            </p>
          </div>
          <div>
            <div className="form-section">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleInputChange}
                className="input-field"
              />
              <br /><br />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="input-field"
              />
              <br /><br />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                className="textarea-field"
              />
              <br /><br />
              <div className="form-footer" style={{ textAlign: 'right' }}>
                <button onClick={handleSubmit} className="submit-btn">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
       <Footer />
    </>
  );
}

export default Contact;

