import React from "react";
import "./Styles4.css";
import {FcGoogle} from "react-icons/fc"
export const Footer = () => {
  return (
 <footer>
   <div className="content">
     <div className="left box">
       <div className="upper">
         <div className="topic">About us</div>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus unde vitae odio officiis neque sunt natus pariatur placeat alias necessitatibus aperiam labore obcaecati, quisquam reiciendis.</p>
       </div>
       <div className="lower">
         <div className="topic">Contact us</div>
         <div className="phone">
           <a href="#"><i className="fas fa-phone-volume"></i>+007 9089 6767</a>
         </div>
         <div className="email">
           <a href="#"><i className="fas fa-envelope"></i>abc@gmail.com</a>
         </div>
       </div>
     </div>
     <div className="middle box">
       <div className="topic">Our Services</div>
       <div><a href="#">reiciendis,reiciendis</a></div>
       <div><a href="#">reiciendis, reiciendis</a></div>
       <div><a href="#">reiciendis</a></div>
       <div><a href="#">reiciendis</a></div>
       <div><a href="#">reiciendis</a></div>
       <div><a href="#">reiciendis & reiciendis</a></div>
     </div>
     <div className="right box">
       <div className="topic">Subscribe us</div>
       <form action="#">
         <input type="text" placeholder="Enter email address"/>
         <input type="submit" name="" value="Send"/>
         <div className="media-icons">
           <a href="#">{FcGoogle}</a>
           <a href="#"><i className="fab fa-instagram"><FcGoogle/></i></a>
           <a href="#"><i className="fab fa-twitter">
               <FcGoogle/></i></a>
           <a href="#"><i className="fab fa-youtube"><FcGoogle/></i></a>
           <a href="#"><i className="fab fa-linkedin-in"><FcGoogle/></i></a>
         </div>
       </form>
     </div>
   </div>
   <div className="bottom">
     <p>Copyright © 2020 <a href="#">Medicare</a> All rights reserved</p>
   </div>
 </footer>
  );}