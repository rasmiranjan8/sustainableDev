import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="container mt-3">
      <h1 className="text-center">Contact Us</h1>
      <p className="text-center">
        We'd love to hear from you! Whether you have a question about our
        products, services, sustainability efforts, or anything else, our team
        is ready to answer all your questions.
      </p>

      <div className="row">
        <div className="col-md-6">
          <h3>Get in Touch</h3>
          <p>
            <strong>Phone:</strong> +1 (123) 456-7890
          </p>
          <p>
            <strong>Email:</strong> info@sustainabledev.com
          </p>
          <p>
            <strong>Address:</strong> Sustainable Development Inc.
            <br />
            123 Green Street
            <br />
            Eco City, EC 12345
            <br />
            USA
          </p>

          <h3>Follow Us</h3>
          <p>Stay connected and follow our journey on social media!</p>
          <ul className="social-links">
            <li>
              <a href="https://www.facebook.com/globalgoalsUN/">Facebook</a>
            </li>
            <li>
              <a href="https://x.com/sustdev?lang=en">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>
        <div className="col-md-6">
          <h3>Contact Form</h3>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your full name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Your email address"
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                className="form-control"
                id="subject"
                placeholder="Reason for your inquiry"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
                placeholder="Type your message here"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>

      <p className="mt-4">
        <strong>Privacy Notice:</strong> We value your privacy. Your information
        will only be used for the purpose of responding to your inquiry.
      </p>
    </div>
  );
}

export default ContactUs;
