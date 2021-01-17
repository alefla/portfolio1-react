import React, { useState } from 'react';
import emailjs from "emailjs-com";
//import { useForm } from 'react-hook-form';

const Contact = () => {

    const serviceID = "";
    const templateID = "";
    const userID = "";
    const sendEmail=(e) =>{
        e.preventDefault();
    
        emailjs.sendForm(serviceID , templateID, e.target, userID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    }
    
    return (
        <div className="contact">
            <div className="text-center">
                <h1>contact me</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, libero.</p>
            </div>
            <div className="container">
                <form onSubmit={sendEmail}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            <div className="text-center">
                                <input type="text" name="name" className="form-control" placeholder="Name" />
                                <div className="line"></div>
                            </div>
                            <div className="text-center">
                                <input type="text" name="phone" className="form-control" placeholder="Phone no." />
                                <div className="line"></div>
                            </div>
                            <div className="text-center">
                                <input type="email" name="email" className="form-control" placeholder="Email" />
                                <div className="line"></div>
                            </div>
                            <div className="text-center">
                                <input type="text" name="subject" className="form-control" placeholder="Subject" />
                                <div className="line"></div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <div className="text-center">{/*give line anim from center*/}
                                <textarea name="message" className="form-control" placeholder="Please describe shortly you project..."></textarea>
                                <div className="line"></div>
                            </div>
                            <button className="btn-main-offer contact-btn" type="submit">Contact me</button>
                        </div>
                        
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;

