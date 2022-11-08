import React from 'react';
import "./background.css";
import {FaHome} from "react-icons/fa"
import { NavLink } from 'react-router-dom';
import {MdKeyboardArrowRight} from "react-icons/md"

function Background({title, subtitle}) {
  return (
    <div className="otherpage-bg">
        <div className='rough-edges'> </div>
        <div className="container">
            <h1>{title}</h1>
            <div className='otherpage-text'>
                <span><FaHome className='icon' /><NavLink to="/" className="other-nav">Home</NavLink></span>
                <span><MdKeyboardArrowRight className="icon2" /></span> <p className='subtitle'> {subtitle} </p>
            </div>
        </div>
        
    </div>
  )
}

export default Background