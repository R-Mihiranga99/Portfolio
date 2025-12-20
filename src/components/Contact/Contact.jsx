import React, { useState } from 'react';
import './Contact.css';
import { Mail, Phone, MapPin } from 'lucide-react';
import theme_pattern from '../../assets/theme_pattern.svg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formDataToSend = new FormData(event.target);

    formDataToSend.append("access_key", "5ad99d75-6e4d-4f38-a61c-6b38026938aa");

    const object = Object.fromEntries(formDataToSend);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Let's talk</h3>
          <p>
            I'm currently available to take on new projects, so feel free to send me a 
            message about anything that you want me to work on. You can contact anytime.
          </p>
          <div className="contact-items">
            <div className="contact-item">
              <div className="contact-icon">
                <Mail size={24} />
              </div>
              <div className="contact-details">
                <p>ravindumw99@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <Phone size={24} />
              </div>
              <div className="contact-details">
                <p>+94 77 65 81 847</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <MapPin size={24} />
              </div>
              <div className="contact-details">
                <p>Meemaduma, Baddegama, Galle.</p>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input 
              type="text" 
              id="name"
              name="name" 
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input 
              type="email" 
              id="email"
              name="email" 
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea 
              id="message"
              name="message" 
              placeholder="Type your message here..."
              rows="8"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;