import React from 'react';
import { useForm } from "react-hook-form";
import './Contact.css'

const Contact = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="contact-section" id="contact">
            <div className="coustom-contact">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Contact With Us</h2>
                            <p>Get Intouch</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <div className="row">

                    <div className="col-md-6 mt-4">

                        <form onSubmit={handleSubmit(onSubmit)} className="form-design rounded shadow-lg">
                            <input type="text" placeholder="Your Name" {...register("example")} className="input-field" />
                            <input type="email" placeholder="Email"  {...register("exampleRequired", { required: true })} className="input-field" />
                            <input type="number" placeholder="Phone No"  {...register("exampleRequired", { required: true })} className="input-field" />
                            <input type="text" placeholder="Your Address"  {...register("exampleRequired", { required: true })} className="input-field" />
                            <input type="submit" className="input-button" />
                        </form>

                    </div>
                
                </div>
            </div>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-6">
                        <h2>Our Story</h2>
                        <p>Consulting represents success at realizing the company is going in the wrong direction. The only time the company fails is when it is not possible to do a turnaround anymore. We help companies pivot into more profitable directions where they can expand and grow. It is inevitable that companies will end up making a few mistakes; we help them correct these mistakes.</p>
                    </div>
                    <div className="col-md-6">

                        <div className="row">
                            <div className="col-md-6"><ul>
                                <li>America, Californa</li>
                                <li>8 Carlton Gardens, St. James,</li>
                                <li>London, United Kingdom</li>
                                <li>Phone: +88 (0) 101 0000 000</li>
                                <li>Fax:+88 (0) 202 0000 001</li>
                                <li>Email: travely@gmail.com</li>
                            </ul></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;