import React from 'react';
import Background from '../../components/otherpage/background';
import "./about.css";
import {FcCheckmark} from "react-icons/fc";
import {TiPointOfInterestOutline} from "react-icons/ti";
import { NavLink } from 'react-router-dom';
import machinery from "../../assets/machinery.jpg";
import image1 from "../../assets/image1.jpg";
import {GiTreehouse, GiTreeBranch} from "react-icons/gi";
import team1 from "../../assets/team1.jpg"

function About() {
  return (
    <div>
        <Background title="About Us" subtitle="About" />

        <div className='aboutpage'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4 col-md-12 col-sm-12'>
                <div className='about-image'>
                  <img src={machinery} alt="" />
                  <img src={image1} alt=""/>
                </div>
              </div>
              <div className='col-lg-5 col-md-12 col-sm-12'>
                <div className='about-us'>
                  <div className='title'>Fieldlush Limited</div>
                  <p>Fieldlush Limited is a commercial agribusiness company legally registered with corporate affairs commission under 
                    the Company and Allied Matters Act 2020 of the Federal Republic of Nigeria. We've been adding value in the 
                    agriculture value chains since 2018, we're into on-farm production of fruits and vegetables (Pepper, Tomato), 
                    arable crops(Cassava and maize) and cash crops (Oil palm, cashew and citrus).
                  </p>
                  <p>Our business model has been aligned to contribute to the Sustainable Development Goals which are:</p>
                  <ul>
                    <li><FcCheckmark className='icon' /> <span>No Poverty</span></li>
                    <li><FcCheckmark className='icon' /> <span>Zero Hunger</span></li>
                    <li><FcCheckmark className='icon' /> <span>Decent Work & Economic Growth</span></li>
                    <li><FcCheckmark className='icon' /> <span>Responsible Consumption and Production</span></li>
                  </ul>

                  <div className='title title2'>What we do</div>
                    <ul className='list'>
                      <li><TiPointOfInterestOutline className="list-icon2" /> <p>Agric Investment <NavLink to="/" className="about-nav">Read More</NavLink> </p> </li>
                      <li><TiPointOfInterestOutline className="list-icon2" /> <p>Agriculture Consultancy <NavLink to="/" className="about-nav">Read More</NavLink> </p> </li>
                      <li><TiPointOfInterestOutline className="list-icon2" /> <p>Agro-Dealer <NavLink to="/" className="about-nav">Read More</NavLink> </p> </li>
                    </ul>
                </div>
              </div>
              <div className='col-lg-3 col-md-12 col-sm-12'>
                <div className='about-card'>
                  <GiTreeBranch className="icon" />
                  <div className='title'>Our Vision</div>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                </div>

                <div className='about-card about-card2'>
                  <GiTreehouse className='icon' />
                  <div className='title'>Our Mission</div>
                  <p>To promote Sustainable agricultural practices </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className='teams'>
          <div className='container'>
            <div className='subtitle'>Our Farmers</div>
            <h1>Meet our farm Experts</h1>
            <p><span>We invest a great deal of time and energy into exploring and understanding the overall purpose and 
              vision of our company.</span></p>
            <div className='row'>
              <div className='col-lg-4 col-md-4 col-sm-12'>
                <div className='card'>
                  <img src={team1} alt="" />
                  <div>farmer of potato</div>
                  <div className='name'>OlusegunAyo</div>
                </div>
              </div>

              <div className='col-lg-4 col-md-4 col-sm-12'>
                <div className='card'>
                  <img src={team1} alt="" />
                  <div>farmer of potato</div>
                  <div className='name'>OlusegunAyo</div>
                </div>
              </div>

              <div className='col-lg-4 col-md-4 col-sm-12'>
                <div className='card'>
                  <img src={team1} alt="" />
                  <div>farmer of potato</div>
                  <div className='name'>OlusegunAyo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About