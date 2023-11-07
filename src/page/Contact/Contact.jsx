import React, { useState } from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import "../../page/landing/Landing.css";
import "./Contact.css";
import contact from "../../asset/contact/contact.png";

export const Contact = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <div className="home">
      <div className="left">
        <Sidebar />
      </div>

      <div className="right">
        <div className="msgff-heading">
          <span className="heading2">Contact Us</span>
        </div>

        <div className="contact-text">
          <span>
            Want to join my mission. Please fill out the form to get in touch
            with us.
          </span>
        </div>

        <div className="contact-form">
          <form action="">
            <div className="contact-form-field">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                value={inputs.name}
                onChange={handleChange}
              />
            </div>

            <div className="contact-form-field">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                name="email"
                value={inputs.email}
                onChange={handleChange}
              />
            </div>

            <div className="contact-form-field">
              <label htmlFor="number">Your Phone Number</label>
              <input
                type="number"
                placeholder="+91- 1234567890"
                name="number"
                value={inputs.number}
                onChange={handleChange}
              />
            </div>

            <div className="contact-form-field">
              <label htmlFor="subject">Your Subject</label>
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                value={inputs.subject}
                onChange={handleChange}
              />
            </div>

            <div className="contact-form-field">
              <label htmlFor="message">Your Message</label>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="Message"
                value={inputs.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button className="contact-form-btn" onClick={handleSubmit}>
              Submit
            </button>
          </form>
          <div className="contact-img-container">
            <img src={contact} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
