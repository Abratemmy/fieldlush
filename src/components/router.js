import React from 'react';
import {Routes, Route } from 'react-router-dom';
import About from '../pages/about/about';
import Contact from '../pages/contact/contact';
import Faq from '../pages/faq/faq';
import Home from '../pages/home/home';


const Router = ()=>{
    
    return(
    <Routes>
        
        <Route exact path ="/" caseSensitive={false} element={<Home />}  />
        <Route exact path ="/home" caseSensitive={false} element={<Home/>}  />
        <Route exact path="/about" caseSensitive={false} element={<About />} />
        <Route exact path="/contact" caseSensitive={false} element={<Contact />} />
        <Route exact path="/faq" caseSensitive={false} element={<Faq />} />
        {/* <Route exact path='/addpost' caseSensitive={false} element={<Addpost currentId={currentId} setCurrentId={setCurrentId}/>}/>
        <Route exact path="/signup123456" caseSensitive = {false} element={<Register />} />
        <Route exact path="/posts" caseSensitive = {false} element={<Post  setCurrentId={setCurrentId} currentId={currentId}/>} /> */}
    </Routes>
    )
}
export default Router