import React,{useState} from 'react';
import "./navbar.css";
import logo from "../../assets/fieldlushlogo.png"
import { NavLink } from 'react-router-dom';
import {FiAlignRight,FiXCircle} from "react-icons/fi";
import {MdOutlineArrowDropDown} from "react-icons/md"

function Navbar() {
  const[click, setClick] = useState(false)
  const handleClick = () =>setClick(!click);

  const[showdropdown, setshowdropdown] = useState(false)
  const handleshowdropdown = () =>setshowdropdown(!showdropdown);

  return (
    <div className='navbar'>
        <div class="container">
          <div className='navbar-container'>
            <NavLink to="/" exact ><img src ={logo} alt=" " /></NavLink>

            <ul  className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                  <NavLink to="/home" exact activeClassName="active" className="nav-link" onClick={handleClick}>Home</NavLink> 
                </li>
                <li className="nav-item">
                  <NavLink to="/about" activeClassName="active" className="nav-link" onClick={handleClick}>About Us</NavLink> 
                </li>
                <li className="nav-item">
                  <a href="#" activeClassName="active" className="nav-link" onClick={handleshowdropdown}>Services <MdOutlineArrowDropDown className='navlink-icon' /></a> 
                  {
                    showdropdown === true ? (
                      <div className="nav-dropdown">
                        <NavLink to="/services/agric_investment" className="nav-dropdown-nav" onClick={handleshowdropdown}>Agric Investment</NavLink>
                        <NavLink to="/services/agric_consultancy" className="nav-dropdown-nav" onClick={handleshowdropdown}>Agriculture Consultancy</NavLink>
                        <NavLink to="/services/agro_dealer" className="nav-dropdown-nav" onClick={handleshowdropdown}>Agro Dealer</NavLink>
                      </div>  
                    ) : null
                  }
                  
                  
                </li>
                <li className="nav-item">
                  <NavLink to="/faq" activeClassName="active" className="nav-link" onClick={handleClick}>Faq</NavLink>

                </li>
                <li className="nav-item">
                  <NavLink to="/contact" activeClassName="active" className="nav-link" onClick={handleClick}>Contact</NavLink> 
                </li>
            </ul>

            <div className='mail'>
              <span>Have any questions?</span>
              <span><a href="mailto:fieldlushlimited@gmail.com" target="_blank"  rel="noopener noreferrer" >fieldlushlimited@gmail.com</a></span>
            </div>


            <div className="nav-icon" onClick={handleClick}>
                {click === true ? <div> 
                  <span className=""  onClick={handleClick} > <FiXCircle className="nav-cancel"/>   </span>
                  </div> : <div> 
                      <span className=""  onClick={handleClick} > <FiAlignRight />   </span>
                  </div>
              }
          </div>
          </div>

          
            
        </div>
    </div>
  )
}

export default Navbar 