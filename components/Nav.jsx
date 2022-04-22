import Link from "next/link";
import{HiMenu} from "react-icons/hi";
import {AiOutlineClose} from 'react-icons/ai';
import {useState} from 'react';
import Programmes from "../pages/Programmes";
import TailorToggle from "./TailorToggle";

const Nav = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const toggleNavBar = () => {
    setMobileNav(!mobileNav);
  }
  const [componentToggle, setcomponentToggle] = useState(false);

	const componentToggler=function(){
		setcomponentToggle(!componentToggle)
		console.log('get it')
	}
  return (
    <div>
    <nav className="nav-header w-full bg-gray-400  h-20 flex items-center">
      <div className="w-96">
        <h1 className="text-center text-4xl font-bold">
          <span className="project-green-text navbar-logo">HIRE</span> PURCHASE
        </h1>
      </div>
      <div className=" hidden md:flex flex-row flex w-3/4 justify-end items-center mr-20">
        <ul className="flex ">
          <li className="mx-4">
           <span className="project-green-text navbar-home"><a className="text-lg font-normal" href="#">
              HOME
            </a>
            </span>
          </li>
          <li className="mx-4">
            <Link href="/profile">
              <a className="text-lg font-normal text-black">
                PROFILE
              </a>
            </Link>
          </li>
          <li className="mx-4">
            <a className="text-lg font-normal text-black" href="#">
              CONTACT US
            </a>
          </li>

          <li className="mx-4">
            <a className="text-lg font-normal text-black" href="/programmes">
              APPLY
            </a>

          </li>
          <li className="mx-4">
            <a className="text-lg font-normal text-black" href="#">
              REVIEWS
            </a>
          </li>
        </ul>
        </div> 
        <HiMenu 
            className="text-3xl md:hidden ml-5 hover:text-green-500"
            onClick={toggleNavBar}
            /> 
    </nav>
    {
          mobileNav && (
            <div className="flex flex-col h-screen w-(55%) fixed right-0 top-0 bottom-0 bg-black -50 text-green-500 pt-10 text-lg px-100">
          <AiOutlineClose
            className="absolute top-0 right-0 mr-5 cusor-pointer text-xl text-green-500 hover:text-green-900" 
             onClick={toggleNavBar}
            />
        <a href ="/">
        </a>
        <a href ="/" className="flex justify-center mt-10 mb-5">HOME</a>
        <a href ="/" className="flex justify-center mt-10 mb-5">PROFILE</a>
        <a href ="/" className="flex justify-center mt-10 mb-5">CONTACT US</a>
        <a href ="/" className="flex justify-center mt-10 mb-5">APPLY</a>
        <a href ="/" className="flex justify-center mt-10 mb-5">REVIEWS</a>
      </div>
        
          )
        }   
       
    </div>
  );
};

export default Nav;
