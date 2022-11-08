import React from "react";
import "./contact.css";
import Background from '../../components/otherpage/background';
import {BsTelephoneFill, BsEnvelopeOpenFill} from "react-icons/bs";
import {MdLocationOn} from "react-icons/md"
import imgdesign from "../../assets/leave.png"

function Contact() {
    return(
        <div className="">
            <Background title="Contact Fieldlush" subtitle="contact us" />

            <div className="contactpage">
                <div className="page-leave-design">
                    <img src={imgdesign} alt="" />
                </div>
                <div className="container">
                    <div className="title">Get in touch </div>
                    <div className="sub-title"><span>Do you have any questions or want to make an enquiries about our services, kindly send us a message.
                        Our teams are always available to respond to you</span>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="contact">
                                <h2>Send us a message</h2>
                                <form>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <input type="text" placeholder="Full Name" name="name" required className="input" />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <input type="email" placeholder="Email" name="email" required className="input" />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <input type="phone" placeholder="Phone" name="phone" required className="input" />
                                        </div>
                                        <div className="col-12">
                                            <textarea rows="6"placeholder="Send us a message"></textarea>
                                        </div>
                                        
                                    </div>
                                    <button type="submit" className="nav-btn">Submit </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="contact contact2">
                                <h2>Contact information</h2>
                                <div className="contact-div">
                                    <div><BsTelephoneFill className="icon icon1" /></div>
                                    <p><span>Hotline</span><span>+2348068005485, +2349074474922, +2347057432282</span></p>
                                </div>

                                <div className="contact-div">
                                    <div><MdLocationOn className="icon icon2" /></div>
                                    <p><span>Our Location</span><span>No 125, ile-anu community off Iworoko road, Adebayo Ado-ekiti</span></p>
                                </div>

                                <div className="contact-div contact-div2">
                                    <div><BsEnvelopeOpenFill className="icon icon3" /></div>
                                    <p><span>Official Email</span><span><a href="mailto:fieldlushlimited@gmail.com" target="_blank"  rel="noopener noreferrer" >fieldlushlimited@gmail.com</a></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Contact