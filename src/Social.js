import React from "react";
import "./social.css"
import my from "./assests/s.jpg";
function Socials()
{
    return(
<div >
 
<div class="container bodyprt">
<h1>Connect With Me</h1>
  <div class="card cardd">
  
    <img src={my} alt="Person" class="card__image" />
    <p class="card__name">Shashank Patel</p>
    <div class="grid-container">

    </div>
    <ul class="social-icons">
      <li><a href="https://www.instagram.com/_shashank.patel/" target="_blank" rel="noopener noreferrer"><i class="fa fa-instagram"></i></a></li>
      <li><a href="https://twitter.com/0__Shashank__0" target="_blank" rel="noopener noreferrer"><i class="fa fa-twitter"></i></a></li>
      <li><a href="https://www.linkedin.com/in/pshashankp/" target="_blank" rel="noopener noreferrer"><i class="fa fa-linkedin"></i></a></li>
    <li><a href="https://github.com/Shashankfeeling" target="_blank" rel="noopener noreferrer"><i class="fa fa-github"></i></a></li>
    </ul>
    <a href="https://github.com/Shashankfeeling" target="_blank" rel="noopener noreferrer">   <button class="btnn draw-border">Follow</button></a>
   <a href="mailto:patelshashank715@gmail.com"  target="_blank" rel="noopener noreferrer"><button class="btnn draw-border">Message</button></a>

  </div>
  
</div>


</div>
    );
}
export default Socials;