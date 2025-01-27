import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="contact">
        <h2>Contact</h2>
        <div class="contact-container">
          <form
            class="contact-form"
            action="mailto:your-email@example.com"
            method="post"
            enctype="text/plain"
          >
            <div class="input-container">
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Name"
              />

              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email"
              />
            </div>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              placeholder="Subject"
            />

            <textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
            ></textarea>

            <button type="submit" class="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
