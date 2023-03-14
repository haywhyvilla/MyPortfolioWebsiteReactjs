import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container contact-section">
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
            </form>
          </div>
        </div>
        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5"></div>
      </div>
    </div>
  );
};

export default Contact;
