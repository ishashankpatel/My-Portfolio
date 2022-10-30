import React from "react";
import Css from "./assests/css.svg"; 
import Html from "./assests/html.svg";
import Java from "./assests/javascript.svg";  
import Mongodb from "./assests/mongodb.svg"; 
import Nodejs from "./assests/nodejs.svg"; 
import Npm from "./assests/npmjs.svg"; 
import Reactjs from "./assests/react.svg"; 
import Bootstrap from "./assests/bootstrap.svg"; 
import fltr from "./assests/fltr.svg"
import cpp from "./assests/cpp.svg"
import jv from "./assests/java.svg"
import pth from "./assests/pth.svg"
import dart from "./assests/dart.svg"
import fire from "./assests/fire.svg"





import "./skill.css"
import { css } from "@emotion/react";
// import Java from "../img/javascript.svg"; 
// import Man2 from "../img/Man2.png";

function Technologies(){
    return(

        <div className="bodyprt" >
        <div >
        <h1 className="bodyprt">
        Technologies/Skills
       </h1>
       <ul className="showcase">
      
      <li> <div className="mbi"> <img className="tech-icon " src={fltr} alt="icons"/>
      <p className="bodyprt brdr">Flutter</p></div>
        </li>
       
       <li><div className="mbi">
       <img className="tech-icon " src={dart} alt="icons"/>
       <p className="bodyprt brdr">Dart</p></div>
       </li>
         <li><div className="mbi">
         <img className="tech-icon " src={cpp} alt="icons"/>
         <p className="bodyprt brdr">C++</p></div>
         </li>
         <li><div className="mbi">
         <img className="tech-icon " src={pth} alt="icons"/>
         <p className="bodyprt brdr">Python</p></div>
         </li>
         <li><div className="mbi">
         <img className="tech-icon " src={jv} alt="icons"/>
         <p className="bodyprt brdr">Java</p></div>
         </li>
         <li><div className="mbi">
         <img className="tech-icon " src={fire} alt="icons"/>
         <p className="bodyprt brdr">Firebase</p></div>
         </li>
          
          
          </ul>
          <ul className="showcase2">
          <li><div className="mbi">
          <img className="tech-icon " src={Html} alt="icons"/>
          <p className="bodyprt brdr">Html</p></div>
          </li>
          <li><div className="mbi">
          <img className="tech-icon " src={Css} alt="icons"/>
          <p className="bodyprt brdr">CSS</p></div>
          </li>
          <li><div className="mbi">
          <img className="tech-icon " src={Nodejs} alt="icons"/>
          <p className="bodyprt brdr">Nodejs</p></div>
          </li>
          <li><div className="mbi">
          <img className="tech-icon " src={Reactjs} alt="icons"/>
          <p className="bodyprt brdr">Reactjs</p></div>
          </li>
          <li><div className="mbi">
          <img className="tech-icon " src={Bootstrap} alt="icons"/>
          <p className="bodyprt brdr">Bootstrap</p></div>
          </li>
          <li><div className="mbi">
          <img className="tech-icon  " src={Java} alt="icons"/>
          <p className="bodyprt brdr">javascript</p></div>
          </li>
        </ul>
        </div>
           {/* <div className="man">
            <img src={Man2} className="man2" alt="Man2"/>
           </div> */}
        </div>
       
    )
}
export default Technologies;


