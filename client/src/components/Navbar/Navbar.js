import React,{useState,} from "react";
import "./Navbar.css";
import { AiOutlineFacebook } from "react-icons/ai";
import  Logo1 from "./Logo.png";
import { Navi } from "./Navi";
import {Header} from "./Header";
import { Header1 } from "./Header1";
import {Modal} from './Modal'
export const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div className="sticky">
      <li className="pr1">
        <ul className="pr4">medical@example.com</ul>
        <ul className="pr4"> Find our Location </ul>
        <ul className="pr3">

          <AiOutlineFacebook className="pr5"/>
          <AiOutlineFacebook className="pr5" />
          <AiOutlineFacebook className="pr5"/>
          <AiOutlineFacebook className="pr5"/>
        </ul>
      </li>
      <Navi className='nvi' isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
     {isModalOpen&&
     <Modal setIsModalOpen={setIsModalOpen}/>}
      
      <Header1/>
      {/* <Header/> */}

      
    </div>
  );
};
