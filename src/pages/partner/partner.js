import React from 'react';
import "./partner.css";
import {CgEnter} from "react-icons/cg"
function Partner() {
  return (
    <div className=''>
        <div className='partner-container'>
            <div className='rough-edges'> </div>
            <div className='container'>
                <div className='partner'>
                    <h1 className='title'>Partner <span>FieldLush </span> today</h1>
                    <p>Our business model ensures we work with experienced farmers to promote scalability and profitability</p>

                    <div className='div-nav'><a href="" className="nav-btn">As a Sponsor</a><span></span><a href="" className="nav-btn">As a Farmer</a></div>
                </div>
            </div>
        </div>

        <div className='partner-newsletter'>
            <div className='news-container'>             
                <div className='newsletter'>Subscribe to get latest updates on our Products</div>
                <form>
                    <input type="email" placeholder='Enter email address' required />
                    <button type="submit">Subscribe <span><CgEnter /></span></button>
                </form> 
            </div>                           

        </div>
    </div>
  )
}

export default Partner