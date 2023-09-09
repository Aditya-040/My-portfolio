import React, { useRef } from "react";
import "./Contact.css";
import LinkedIn from '../../assets/linkedin.png'
import Twitter from '../../assets/twitter.png'
import Insta from '../../assets/instagram.png'
import yt from '../../assets/youtube.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_h1inurs', 'template_l0jd3tr', form.current, 'p8VCLFLokFbwBzJxc')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

 

  return (
    <section id="contactpage">
      
      <div id="contact">
        <h1 className="contactpagetitle">Contact Me</h1>
        <span className="contactdesc">
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form id="_form" className="contactform" ref={form} onSubmit={sendEmail}>
            <input  id="input1" type="text" className="name" placeholder="Your Name" name="from_name" />
            <input id="input2" type="email" className="email"  placeholder="Your Email" name="from_email"/>
            <textarea id="input3" name="message"  cols="30" rows="5" className="msg" placeholder="Your Message"></textarea>
            <button type='submit' value='Send'  className="submitbtn" >Submit</button>
            <div className="links">
                <a href="https://www.linkedin.com/in/aditya--srivastava/"><img src={LinkedIn} alt="linkedin" className="link" /></a>
                <a href="https://twitter.com/Aditya_sri_"><img src={Twitter} alt="twitter" className="link" /></a>
                <a href="https://www.instagram.com/_wassup.adii/"><img src={Insta} alt="insta" className="link" /></a>
                <a href="https://www.youtube.com/channel/UCRH5PpTKGF6eiitV2yeCdXw"><img src={yt} alt="yt" className="link" /></a>
            </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
