import React from 'react';
import "./home.css";
import design from "../../assets/design.png"
import { NavLink } from 'react-router-dom';
import Partner from '../partner/partner';
import {productData} from "../data/productsdata";
import agricinvestment from "../../assets/agricinvestment.jpg";
import agricconsultant from "../../assets/agricconsultant.jpg";
import agricdealer from "../../assets/agricdealer.jpg";
import imgdesign from "../../assets/leave.png";
import contract from "../../assets/banner.jpg";
import farmmanagement from "../../assets/farmmanagement.jpg";
import training from "../../assets/training.jpg";
import machinery from "../../assets/machinery.jpg"

import {FaTelegram} from "react-icons/fa"

import Numbercounter from "number-counter"

function Home() {
  return (
    <div className="homepage">
        <div className='banner'>
            <div className='rough-edges'> </div>
            <div className='container'>
                <h1>Agriculture Matte<span className='design'>r<img src={design} alt="fieldlush img" /></span></h1>
                <p>We help transform lives and livelihoods around the world through our <span>Investment plans</span></p>

                <p>FieldLush also provides quality services to improve crops yield </p>

                <div className='div-nav'><NavLink to="/about" className="nav-btn">Discover More</NavLink></div>
            </div>
        </div>

        <div className="container">
          <div className='home-products'>
            {productData.map((product)=>(
                <div className='category'>
                    <img src={product.image} alt="" />
                    <div className='home-product-content'>
                      <div className="name">{product.name} </div>
                      <div className="price">N{product.price} </div>
                      <p className="subtitle">{product.subtitle} </p>
                      <p className='profit'>Profit Per Hectare: {product.profit}</p>
                      <p className='duration'>Duration: {product.duration}</p>
                      <p className='season'>Season: {product.season}</p>

                      <div className='div-nav' style={{marginBottom:"20px"}}><button  className="nav-btn">Invest Now</button></div>
                    </div>
                </div>
            ))}
          </div>
        </div>

        <div className='whatwedo'>
          <div className="page-leave-design">
              <img src={imgdesign} alt="" />
          </div>

          <div className='container'>
            <h1>What we do</h1>

            <div className='row'>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="card">
                  <img src={agricinvestment} alt=""/>
                  <div className='content'>
                    <div className='name'>Agric Investment</div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <div className='div-nav' style={{marginBottom:"20px"}}><NavLink to="/services/agric_investment" className="nav-btn">Read More</NavLink></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="card">
                  <img src={agricconsultant} alt=""/>
                  <div className='content'>
                    <div className='name'>Agric Consultancy</div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <div className='div-nav' style={{marginBottom:"20px"}}><NavLink to="/services/agric_consultancy" className="nav-btn">Read More</NavLink></div>
                  </div>
                </div>

              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="card">
                  <img src={agricdealer} alt=""/>
                  <div className='content'>
                    <div className='name'>Agric Dealer</div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <div className='div-nav' style={{marginBottom:"20px"}}><NavLink to="/services/agric_dealer" className="nav-btn">Read More</NavLink></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='home-other-products'>
          <div className='rough-edges'> </div>
          <div className="container">
            <h1>Our Products and other services</h1>
            <div className='subtitle'>We give the best fare price for all our services. contact us today!!!</div>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="card">
                  <div className=""><img src={contract} alt="fieldlush img" /> </div>
                  <div className="content">
                    <div className='name'>Contract Farming</div>
                    <p>We help companies and individuals to farm and return either cash or 
                    farm produce base on our agreement</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="card">
                  <div className=""><img src={farmmanagement} alt="fieldlush img" /> </div>
                  <div className="content">
                    <div className='name'>Farm Management & Establishment</div>
                    <p>We help companies and individual to establish and manage their farm
                      for maximum production and profit.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="card">
                  <div className=""><img src={machinery} alt="fieldlush img"/> </div>
                  <div className="content">
                    <div className='name'>Farm equipment rentals</div>
                    <p>We lease out tractors and other farm equipments to farming cooperatives, 
                      large scale farmers and companies to enhance their own farm yields</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="card">
                  <div className=""><img src={training} alt="fieldlush img"/> </div>
                  <div className="content">
                    <div className='name'>Training</div>
                    <p>We train and improve young farmer skills and knowledge in areas such as planting
                      techniques, irrigation, pesticides, crop rotation e.t.c</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='achievment'>
          <div className="container">
            <div className='row'>
              <div className='col-lg-4 col col-md-12 col-sm-12 line'>
                <div className="subtitle">Achivements</div>
                <div className='title'>Delivering value since 2015</div>
              </div>
              <div className='col-lg-8 col col-md-12 col-sm-12'>
                <div className="numbercounter">
                  <div className='number'><span>
                      <Numbercounter end={207213} start={200000} delay="3" preFix="+" /></span><span>Hectares farm land</span>
                  </div>

                  <div className='number'><span>
                      <Numbercounter end={1500} start={500} delay="5" preFix="+" /></span><span>Aggregated farm equipment</span>
                  </div>

                  <div className='number'><span>
                      <Numbercounter end={1000} start={450} delay="5" preFix="+" /></span><span>Jobs Created</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Partner />

        <div className='home-social'>
          <div className='container'>
            <div className="title">Our Community</div>
            <span><FaTelegram className="icon" /> </span>
            <p>Join our fasy growing community</p>
            <p className='p2'>Get realtime updates on our products and services</p>
            <div className='div-nav'><a href="https://telegram.com" className="nav-btn">Join Now</a></div>
          </div>
        </div>
    </div>
  )
}

export default Home