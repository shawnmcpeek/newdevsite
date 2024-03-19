import React from "react";
import "./contact.component.css";

function ContactForm() {
  return (
    <div className="contact-container">
      <div className="contact">
        <h1>Contact Us</h1>
        <form
          action="https://formsubmit.co/20c19594e4968d8f15c6bc5f4993ea75"
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              autoComplete="name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              autoComplete="email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone"
              autoComplete="mobile"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <input type="hidden" name="+captcha" value="false" />
          <input type="hidden" name="_next" value="./thanks.jsx" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
