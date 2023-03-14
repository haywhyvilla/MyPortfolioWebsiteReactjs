import React from "react";
import "./Contact.css";
import { RiSendPlaneLine } from "react-icons/ri";
import { FaLinkedin, FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="container contact-section" id="contact">
      <div className="section-title bottom">
        <h2>Contact Me</h2>
        <span className="line"></span>
      </div>
      <div className="row">
        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
          <div className="contact-form-design">
            <div className="text-center">
              <h5>Contact</h5>
            </div>
            <form>
              <div className="contact-form">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="contact-form">
                <label className="form-label">E-mail</label>
                <input type="text" className="form-control" />
              </div>
              <div className="contact-form">
                <label className="form-label">Message</label>
                <textarea rows="4" type="text" className="form-control" />
              </div>
              <div className="button-submit">
                <p>
                  Send <RiSendPlaneLine />
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 connect">
          <div className="text">
            <h2>Let's talk about everything web and mobile.</h2>
            <h5>
              If you have any questions about any project, don't hesitate to
              make contact.
            </h5>
            <h5>
              I'm available to grab a snack and chat! Drop a comment, question,
              or a concern by E-mail or WhatsApp.
            </h5>
            <a href="mailto:olatunjiayobami575@gmail.com">
              <AiOutlineMail />
              olatunjiayobami575@gmail.com
            </a>
            <a href="https://wa.me/+2347017521808">
              <BsWhatsapp />
              https://wa.me/+2347017521808
            </a>
          </div>
          <div className="socials">
            <a href="https://www.linkedin.com/in/olatunji-ayobami-853300207/">
              <FaLinkedin />
            </a>
            <a href="https://web.facebook.com/profile.php?id=100073473931605">
              <FaFacebook />
            </a>
            <a href="https://twitter.com/haywhyvilla">
              <FaTwitter />
            </a>
            <a href="https://github.com/haywhyvilla">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
