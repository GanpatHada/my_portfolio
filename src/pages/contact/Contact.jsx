import React, { useState } from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";

const ContactForm = () => {
  const[message,setMessage]=useState({
    clientName:'Mohit',
    clientEmail:'mohit@gmail.com',
    clientNumber:'5454124578',
    clientMessageText:'Hi,Ganpat',
  })

  const {clientEmail,clientName,clientMessageText,clientNumber}=message;

  const handleFieldChange=({target:{name,value}})=>{ 
      return(setMessage({...message,[name]:value}))
  }

  const handleSendMessage=()=>{
        toast.warning("field is empty");
        return ;
        console.log('clicked')
        emailjs.send('service_yxn0g3t','template_1m040mn',{
          clientName,clientEmail,clientNumber,clientMessageText
        },{
          publicKey: 'AiK4kUvNXDFMXPi0k',
        }).then(()=>console.log('success')),(error)=>{console.log(error)};
  }
  return (
    <section id="form-section">
      <h2>Send a message</h2>
      <p>
        Get in touch! Feel free to send me a message and I'll get back to you as
        soon as possible
      </p>
      <input
        className="form-inputs"
        onChange={(e)=>handleFieldChange(e)}
        type="text"
        maxLength={100}
        name="clientName"
        value={clientName}
        id="clientName"
        placeholder="Full Name*"
      />
      <input
        className="form-inputs"
        onChange={(e)=>handleFieldChange(e)}
        type="text"
        name="clientEmail"
        value={clientEmail}
        id="clientEmail"
        maxLength={100}
        placeholder="Email*"
      />
      <input
        className="form-inputs"
        onChange={(e)=>handleFieldChange(e)}
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
        onChange={(e)=>handleFieldChange(e)}
        name="clientMessageText"
        id="clientMessageText"
        value={clientMessageText}
        placeholder="Type your message (maximum 300 words)*"
      ></textarea>
      <button id="send-message-button" onClick={handleSendMessage}>Send Message</button>
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
          <section id="info-section">
            <div id="contact-recommend">
              If you want to write to me, the best way is to approach me via
              somebody I know. The second best way is to message me through{" "}
              <span className="app-links">LinkedIn</span>.
            </div>
            <h4>
              I'd love to hear about what you're working on and how I could
              help. I'm currently looking for a new role and open to
              opportunities in the domain of web development. I'm also open to
              discussing ideas and doing a project together. Feel free to drop a
              message{" "}
            </h4>
          </section>
          <ContactForm/>
        </div>
      </main>
    </div>
  );
};

export default Contact;
