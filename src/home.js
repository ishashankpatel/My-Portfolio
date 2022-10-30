import React from "react";
import { ReactComponentElement } from "react";
import { Component } from "react";
import './App.css';
import {useState} from 'react';
import ProfileUi from 'react-profile-card';
import Typewriter from "typewriter-effect";
import {  Routes, Route, Link } from 'react-router-dom';
import Socials from "./Social";
import About from "./about.js";
import Projectss from "./Projects";
import App from "./App";
function Homes(){
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
      setIsHovering(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovering(false);
    };
   return(
   <div className="boxx">

    
    <div className="contai" > 
        <ProfileUi 
            imgUrl='https://firebasestorage.googleapis.com/v0/b/myportfolio-f1279.appspot.com/o/InShot_20221028_194340641%20(1).jpg?alt=media&token=a4254996-7175-431e-bdee-026e8930803f'
            name='Shashank Patel' 
            designation= "Student"
         className="box"
            /><t />
            
      </div>
     <div className="containerr">
        <h1>
            
     <Typewriter
  loop={true}
  onInit={(typewriter)=> {

  typewriter
   
  .typeString("Hi 👋, I'm Shashank Patel")
    
  .pauseFor(1000)
  .deleteAll()
  .typeString("Welcomes You")
  .pauseFor(1000)
  .deleteAll()
  .typeString("Hi 👋, I'm Shashank Patel")
  .start();
  }}
 
  />
     </h1>
     </div>
     <div className="containerr">
    
      <a href="/about">
  <div className="btn btn-color">
  print("Click on me");
   </div></a>
  
    
     </div>
    
       {/* 
     <Route path="Social" element={<Socials />} /> */}
    
     
     </div>
   
   );
}
export default Homes;