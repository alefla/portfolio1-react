import React, { useState } from 'react';
import emailjs from "emailjs-com";
import { useForm } from 'react-hook-form';

const Contact = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, errors } = useForm();

    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_91YImjAnanYO0FzeaT7sc";
    
    const onSubmit = (data, r) => {
        sendEmail(
          serviceID,
          templateID,
          {
            name: data.name,
            phone: data.phone,
            email: data.email,
            subject: data.subject,
            message: data.message
          },
          userID
        )
        r.target.reset();
      }
    
      const sendEmail = (serviceID, templateID, variables, userID) => {
        //e.preventDefault();
        emailjs.send(serviceID , templateID, variables, userID)
        .then(() => {
            setSuccessMessage("Form sent successfully! I'll contact you as soon as possible.");
          }).catch(err => console.error(`Something went wrong ${err}`));
      }
    
    return (
        <div className="contact">
            <div className="text-center">
                <h1>contact me</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, libero.</p>
                <span className="success-message">{successMessage}</span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            <div className="text-center">
                                <input type="text" name="name" className="form-control" placeholder="Name"
                                    ref={
                                    register({
                                    required: "Please enter your name",
                                    maxLength: {
                                        value: 20,
                                        message: "Please enter a name with fewer than 20 characters"
                                    }
                                    })
                                    }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">{errors.name && errors.name.message}</span>
                                                                            
                            <div className="text-center">
                                <input type="text" name="phone" className="form-control" placeholder="Phone no."
                                    ref={
                                    register({
                                    required: "Please add your phone number",
                                    })
                                    }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">{errors.phone && errors.phone.message}</span>
                            <div className="text-center">
                                <input type="email" name="email" className="form-control" placeholder="Email" 
                                    ref={
                                        register({
                                        required: "Please provide you email",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "invalid Email"
                                        }
                                        })
                                    }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.email && errors.email.message}
                            </span>
                            <div className="text-center">
                                <input type="text" name="subject" className="form-control" placeholder="Subject" 
                                    ref={
                                    register({
                                    required: "OOPS, you forget to add the subject.",
                                    })
                                } 
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.subject && errors.subject.message}
                            </span>
                        </div>
                        
                        <div className="col-md-6 col-xs-12">
                            <div className="text-center">{/*give line anim from center*/}
                                <textarea name="message" className="form-control" placeholder="Please describe shortly you project..."
                                ref={
                                    register({
                                    required: "Please describe shortly your project needs...",
                                    })
                                }></textarea>
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.message && errors.message.message}
                            </span>
                            <button className="btn-main-offer contact-btn" type="submit">Contact me</button>
                        </div>
                        
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;
