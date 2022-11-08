import React from 'react';
import "./footer.css";
import logo from "../../assets/fieldlushlogo.png";
import {FaPhone, FaHome, FaEnvelope} from "react-icons/fa"
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import {CgEnter} from "react-icons/cg"
import {TiPointOfInterestOutline} from "react-icons/ti";
import footerimage from "../../assets/leave.png";
// import pencilfarm from  "../../assets/pencilfarm.jpg"


function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-top'>
            <Container>
                <div className='row'>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <div className='footer-card'>
                            <div className="sub-topic">  FieldLush Limited </div>
                            <div className='logo-container'>
                                <img src={logo} alt="Fieldlush logo" />
                            </div>

                            <div className="footer-text">Fieldlush Limited is a commercial agribusiness company legally registered with corporate affairs 
                                commission under the Company and Allied Matters Act 2020 of the Federal Republic of Nigeria...

                                <span><NavLink to="/about" className="footer-nav">Read More</NavLink> </span>
                            </div>
                            

                        </div>
                    </div>

                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <div className='footer-card'>
                            <div className="sub-topic">  Services </div>
                            <ul className=''>
                                <li><span><TiPointOfInterestOutline className="point-icon" /></span><NavLink to="/" className="footer-link"> Agriculture investment program </NavLink> </li>
                                <li><span><TiPointOfInterestOutline className="point-icon" /></span><NavLink to="/" className="footer-link"> Farm Establishment </NavLink> </li>
                                <li><span><TiPointOfInterestOutline className="point-icon" /></span><NavLink to="/" className="footer-link"> Farm management </NavLink> </li>
                                <li><span><TiPointOfInterestOutline className="point-icon" /></span><NavLink to="/" className="footer-link"> Seed and seedlings sales </NavLink> </li>
                                <li><span><TiPointOfInterestOutline className="point-icon" /></span><NavLink to="/" className="footer-link"> Farm input sales </NavLink> </li>
                                <li><span><TiPointOfInterestOutline className="point-icon" /></span><NavLink to="/" className="footer-link"> Produce marketing </NavLink> </li>
                                <li><span><TiPointOfInterestOutline className="point-icon" /></span><NavLink to="/" className="footer-link"> Training </NavLink> </li>
                            </ul>

                            <div className="sub-topic sub-topic2"> Quick Link </div>
                            <ul className='ul2'>
                                <li><span><TiPointOfInterestOutline className="point-icon" /></span><NavLink to="/" className="footer-link"> Home </NavLink> </li>
                                <li><span><TiPointOfInterestOutline className="point-icon" /></span><NavLink to="/" className="footer-link"> About us </NavLink> </li>
                                <li><span><TiPointOfInterestOutline className="point-icon" /></span><NavLink to="/" className="footer-link">FAQ </NavLink> </li>
                            </ul>
                            
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-12 col-sm-12'>
                        <div className='footer-card'>
                            <div className="sub-topic">  Contact Info </div>
                            
                            <div className="footer-contact-div">
                                <span><FaHome className='footer-icon' /></span>
                                <div className="footer-details-address">
                                    <div className='title'>Address:</div>
                                    <div className='other'>No 125, ile-anu community off Iworoko road, Adebayo Ado-ekiti</div>
                                </div>
                            </div>
                            <div className="footer-contact-div">
                                <span><FaEnvelope className='footer-icon' /></span>
                                <div className="footer-details-address">
                                    <div className='title'>Email:</div>
                                    <div className='other'>fieldlushlimited@gmail.com</div>
                                </div>
                            </div>
                            <div className="footer-contact-div">
                                <span><FaPhone className='footer-icon' /></span>
                                <div className="footer-details-address">
                                    <div className='title'>Phone:</div>
                                    <div className='other'>+2348068005485, +2349074474922, +2347057432282</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>   

            
        </div>
        <div className='footer-down'>
            <div className='text'>&copy; Copyright {new Date().getFullYear()}. <span>All Rights reserved by FieldLush Limited </span></div>
            <p>Website designed by <a href="https://abratemmy.github.io/myportfolio">Hayteetech</a></p>
        </div>
        <div className='footer-image-design'>
            <img src={footerimage} alt="" />
        </div>
        
    </div>
  )
}

export default Footer