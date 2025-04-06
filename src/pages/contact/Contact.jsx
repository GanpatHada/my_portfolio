import React, { useState } from "react";
import "./Contact.css";
import { toast } from "react-toastify";
import { sendMessage } from "../../services/ContactService";
import {
  checkEmptyFields,
  checkValidEmail,
  initialMessage,
} from "../../utils/ContactUtils";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaWhatsapp,
} from "react-icons/fa6";
import { FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { SiGmail } from "react-icons/si";

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
      <div id="main-links">
        <a
          id="location-box"
          target="_blank"
          href="https://www.google.com/maps/place/Bengaluru,+Karnataka"
          className="main-link"
        >
          <span className="all-centered">
            <FaLocationDot />
          </span>
          <h4>Location</h4>
          <p>Bengaluru,Karnataka</p>
        </a>
        <div id="phone-box" className="main-link">
          <span className="all-centered">
            <FaPhoneAlt />
          </span>
          <h4>Phone</h4>
          <p>+91 9179373806</p>
        </div>
        <div id="language-box" className="main-link">
          <span className="all-centered">
            <MdLanguage />
          </span>
          <h4>Languages</h4>
          <p>Hindi, English</p>
        </div>
        <a
          id="gmail-box"
          className="main-link"
          target="_blank"
          href="mailto:hadaganpat42@gmail.com"
        >
          <span className="all-centered">
            <SiGmail />
          </span>
          <h4>Gmail</h4>
          <p>hadaganpat42@gmail.com</p>
        </a>
        <a
          id="github-box"
          className="main-link"
          target="_blank"
          href="https://github.com/GanpatHada"
        >
          <span className="all-centered">
            <FaGithub />
          </span>
          <h4>Github</h4>
          <p>@GanpatHada</p>
        </a>
        <a
          id="linkedin-box"
          className="main-link"
          target="_blank"
          href="https://www.linkedin.com/in/ganpathada/"
        >
          <span className="all-centered">
            <FaLinkedin />
          </span>
          <h4>Linkedin</h4>
          <p>@ganpathada</p>
        </a>
        <a
          id="gmail-box"
          className="main-link"
          target="_blank"
          href="https://www.instagram.com/ganpat_hada/"
        >
          <span className="all-centered">
            <FaInstagram />
          </span>
          <h4>Instagram</h4>
          <p>@ganpat_hada</p>
        </a>
        <a
          id="gmail-box"
          className="main-link"
          target="_blank"
          href="https://t.me/GanpatHada"
        >
          <span className="all-centered">
            <FaTelegramPlane />
          </span>
          <h4>Telegram</h4>
          <p>@GanpatHada</p>
        </a>
        <a
          id="gmail-box"
          className="main-link"
          target="_blank"
          href="https://wa.me/9179373806"
        >
          <span className="all-centered">
            <FaWhatsapp />
          </span>
          <h4>Whatsapp</h4>
          <p>+91 9179373806</p>
        </a>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <div id="contact" className="home-sections">
      <header>
        <h1>
          <span>{"<"}</span>Contact<span>{" />"}</span>
        </h1>
      </header>
      <div id="contact-content">
        <ContactDisclaimer />
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
