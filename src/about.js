import React from "react";
import "./about.css";
import Homes from "./home";
import Projectss from "./Projects";
import Socials from "./Social";
import sp from "./assests/s.jpg"
function About(){
  //Selecting the eye div

    return(
      <div className="main">
<h1 className="bodyprt"> Hello!!</h1>
      <div className="body">
     
      <div class="containerrr">
<div class="glass">
  <h1 className="hover-underline-animation">
    About Me
  </h1>
  <p>
  I am a web and android developer with experience in building engaging and user-friendly applications. I have a strong understanding of the latest web and mobile technologies and have a proven track record in delivering successful projects. I am a motivated self-starter who is always keen to learn new skills and technologies. I am a great team player and have the ability to work independently when required. I am looking for a challenging role where I can utilise my skills and knowledge to make a positive contribution to the team.
   </p>
</div>

<div class="contai">
  <div class="testimonial-card">
    <p className="txt">If you only do what you can do, you will never be more than who you are. <i class="fa fa-quote-right quote"></i></p>
    
    
    
    <div class="footer">
      <div class="image">
       
      </div>
       <h3 class='person'>Shashank Patel</h3>
      
      
    </div>
  </div>
</div></div>

</div>
<Projectss />
</div>
    );
}
export default About;