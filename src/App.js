// TODO: Activate caret active animation
import React from "react";
import { ReactComponentElement } from "react";
import { Component } from "react";
import {useState} from 'react';
import ProfileUi from 'react-profile-card';
import Homes from "./home";
import About from "./about";
import Projectss from "./Projects";
import Technologies from "./Skills";
import Socials from "./Social";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {

 return(
<div className="mainnnn">
<Routes>
<Route path="/" element={<Homes />} />
              <Route path="about" element={<About />} />
              <Route path="Projects" element={<Projectss />} />
              <Route path="Social" element={<Socials />} />
             
          </Routes>
   
</div>


 );
}
export default App;
