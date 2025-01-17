import React, { useState } from "react";
import "./Contact.css";
import { toast } from "react-toastify";
import { sendMessage } from "../../services/ContactService";
import {
  checkEmptyFields,
  checkValidEmail,
  initialMessage,
} from "../../utils/ContactUtils";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const ContactForm = () => {
  const [message, setMessage] = useState({ ...initialMessage });
  const [loading, setLoading] = useState(false);

  const { clientEmail, clientName, clientMessageText, clientNumber } = message;

  const handleFieldChange = ({ target: { name, value } }) => {
    return setMessage({ ...message, [name]: value });
  };

  const handleSendMessage = async () => {
    let areFieldsEmpty = checkEmptyFields(message);
    if (areFieldsEmpty) return toast.warning("required* fields are mandatory");
    let emailVerified = checkValidEmail(message.clientEmail);
    if (!emailVerified) return toast.warning("Invalid email");
    try {
      setLoading(true);
      await sendMessage(message);
      toast.success("Message sent successfuly");
      setMessage({ ...initialMessage });
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section id="form-section">
      {/* <h2>Send a message</h2>
      <p>
        Get in touch! Feel free to send me a message and I'll get back to you as
        soon as possible
      </p> */}
      <input
        className="form-inputs"
        onChange={(e) => handleFieldChange(e)}
        type="text"
        maxLength={100}
        name="clientName"
        value={clientName}
        id="clientName"
        placeholder="Full Name*"
      />
      <input
        className="form-inputs"
        onChange={(e) => handleFieldChange(e)}
        type="text"
        name="clientEmail"
        value={clientEmail}
        id="clientEmail"
        maxLength={100}
        placeholder="Email*"
      />
      <input
        className="form-inputs"
        onChange={(e) => handleFieldChange(e)}
        type="text"
        maxLength={10}
        value={clientNumber}
        name="clientNumber"
        id="clientNumber"
        placeholder="Mobile (optional)"
      />
      <textarea
        maxLength={300}
        className="form-inputs"
        onChange={(e) => handleFieldChange(e)}
        name="clientMessageText"
        id="clientMessageText"
        value={clientMessageText}
        placeholder="Type your message (maximum 300 words)*"
      ></textarea>
      <button
        disabled={loading}
        id="send-message-button"
        onClick={handleSendMessage}
      >
        {loading ? "Sending Message ..." : "Send Message"}
      </button>
    </section>
  );
};

const ContactDisclaimer = () => {
  return (
    <section id="contact-recommend">
      By providing your contact information, you agree to allow us to use it to
      respond to your inquiries or provide relevant information. We respect your
      privacy and will not share your information with third parties without
      your consent, except as required by law.
    </section>
  );
};

const ContactInfo = () => {
  return (
    <section id="info-section">
      <h4>
        I'd love to hear about what you're working on and how I could help. I'm
        currently looking for a new role and open to opportunities in the domain
        of web development. I'm also open to discussing ideas and doing a
        project together. Feel free to drop a message{" "}
      </h4>
      <div id="social-links">
        <a
          target="blank"
          href="https://github.com/GanpatHada"
          className="social-link all-centered"
        >
          <FaGithub />
        </a>
        <a
          target="blank"
          href="https://www.linkedin.com/in/ganpathada/"
          className="social-link all-centered"
        >
          <FaLinkedin />
        </a>
        <a
          target="blank"
          href="https://www.instagram.com/ganpat_hada/"
          className="social-link all-centered"
        >
          <FaInstagram />
        </a>
        <a
          target="blank"
          href="mailto:hadaganpat42@gmail.com"
          className="social-link all-centered"
        >
          <BiLogoGmail />
        </a>
        <a
          target="blank"
          href="https://wa.me/9179373806"
          className="social-link all-centered"
        >
          <FaWhatsapp />
        </a>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <div id="contact-page" className="app-pages">
      <header>
        <h1>Contact me</h1>
      </header>
      <main>
        <div id="contact-form-wrapper">
          <ContactDisclaimer />
          <ContactInfo />
          <ContactForm />
        </div>
      </main>
    </div>
  );
};

export default Contact;
