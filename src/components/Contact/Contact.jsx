import React, { useState } from 'react';
import './Contact.css';
import { motion } from 'framer-motion';
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

      {/* 🔹 Title animation */}
      <motion.div
        className="contact-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </motion.div>

      <div className="contact-content">

        {/* 🔹 Left info panel */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3>Let's talk</h3>
          <p>
            I'm currently available to take on new projects, so feel free to send me a
            message about anything that you want me to work on.
          </p>

          <div className="contact-items">
            {[
              { icon: <Mail size={24} />, text: 'ravindumw99@gmail.com' },
              { icon: <Phone size={24} />, text: '+94 77 65 81 847' },
              { icon: <MapPin size={24} />, text: 'Meemaduma, Baddegama, Galle.' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="contact-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="contact-icon">{item.icon}</div>
                <div className="contact-details">
                  <p>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 🔹 Right form panel */}
        <motion.form
          onSubmit={onSubmit}
          className="contact-form"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="form-group">
            <label>Your Name</label>
            <motion.input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              whileFocus={{ scale: 1.02 }}
              required
            />
          </div>

          <div className="form-group">
            <label>Your Email</label>
            <motion.input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              whileFocus={{ scale: 1.02 }}
              required
            />
          </div>

          <div className="form-group">
            <label>Your Message</label>
            <motion.textarea
              name="message"
              rows="8"
              placeholder="Type your message here..."
              value={formData.message}
              onChange={handleChange}
              whileFocus={{ scale: 1.02 }}
              required
            />
          </div>

          <motion.button
            type="submit"
            className="submit-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>

      </div>
    </section>
  );
};

export default Contact;
