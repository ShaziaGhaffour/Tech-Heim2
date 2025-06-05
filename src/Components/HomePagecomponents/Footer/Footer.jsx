import React, { useState, useEffect } from 'react';
import './Footer.css';

import Twitter from '../../../assets/twitter.svg';
import Facebook from '../../../assets/Facebook.svg';
import Instagram from '../../../assets/Instagram.svg';
import Youtube from '../../../assets/Youtube.svg';
import paypal from '../../../assets/paypal.svg';
import copyrightIcon from '../../../assets/copyright.svg';

import locationIcon from '../../../assets/location.svg';
import phoneIcon from '../../../assets/call-calling.svg';
import emailIcon from '../../../assets/sms-edit.svg';

const Footer = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [userEmail, setUserEmail] = useState('');
  useEffect(() => {
    const savedEmail = localStorage.getItem('userEmail');
    if (savedEmail) {
      setUserEmail(savedEmail);
    }
  }, []);

  const toggleSection = (sectionIndex) => {
    setActiveSection(activeSection === sectionIndex ? null : sectionIndex);
  };

  const footerSections = [
    {
      heading: "Company",
      links: ["About Us", "Careers", "Press", "Blog", "Contact"]
    },
    {
      heading: "Info",
      links: ["Help & Support", "Return Policy", "Terms of Service", "Privacy Policy", "FAQ"]
    },
    {
      heading: "Contact us",
      hasIcons: true,
      links: [
        { icon: phoneIcon, text: "+1 (555) 123-4567" },
        { icon: emailIcon, text: "support@company.com" },
        { icon: locationIcon, text: "123 Main Street" },
        { icon: locationIcon, text: "New York, NY 10001" }
      ]
    }
  ];

  return (
    <footer className="footer-container">
      <div className="footer-row">
        <div className="footer-left-column">
          {footerSections.map((section, index) => (
            <div key={index} className="footer-section">
              <div 
                className="heading-link accordion-header"
                onClick={() => toggleSection(index)}
              >
                {section.heading}
                <span className={`accordion-icon ${activeSection === index ? 'active' : ''}`}></span>
              </div>

              <ul className={`footer-list ${activeSection === index ? 'active' : ''}`}>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {section.hasIcons ? (
                      <div className="contact-link">
                        <img src={link.icon} alt="icon" className="contact-icon" />
                        <span>{link.text}</span>
                      </div>
                    ) : (
                      <a href="#" className="footer-link">{link}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-right-column">
          <h3 className="heading-link">Sign up for News and updates</h3>
          <div className="email-container">
            <input 
              type="email" 
              placeholder="E-mail Address" 
              className="email-input"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)} 
            />
          </div>

          <div className="social-icons">
            <img src={Twitter} alt="Twitter" />
            <img src={Facebook} alt="Facebook" />
            <img src={Instagram} alt="Instagram" />
            <img src={Youtube} alt="YouTube" />
          </div>
        </div>
      </div>
      <div className="payment-Paypal">
        <img src={paypal} alt="PayPal" />
        <img src={paypal} alt="American Express" />
        <img src={paypal} alt="Visa" />
        <img src={paypal} alt="MasterCard" />
      </div>
      <div className="footer-bottom">
        <div className="footer-left">
          <img src={copyrightIcon} alt="copyright" />
          <h6>© 2024 Company Name. All rights reserved.</h6>
        </div>
        <div className="footer-right">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
