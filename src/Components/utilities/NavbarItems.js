import React, { useRef } from "react";
import logo from "../../Assets/img/SFS Academy Logo (14).png";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../Assets/css/NavStyle.css";
import { useNavigate } from 'react-router-dom';

function NavbarItems() {

  const navRef = useRef();
  const navigate = useNavigate();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  const handleGotoLogin = () => {
    navigate('/register');
  };

  const handleGoToMain = () => {
    navigate("/");
  };

  const handleGoToCourse = () => {
    navigate("/course");
  };

  const handleGotoResources = () => {
    navigate("/loginnotes");
  };

  const handleGotoReviews = () => {
    navigate("/reviews");
  };


  const handleGoToComingSoon = () => {
    navigate("/comingsoon")
  }


  return (
    <header>
      <img onClick={handleGoToMain} src={logo} width={250} />
      <nav ref={navRef}>
        <a onClick={handleGoToMain}>Home</a>
        <a onClick={handleGoToCourse}>Course</a>
        <a onClick={handleGotoResources}>Resources</a>
        <a onClick={handleGotoReviews}>Reviews</a>
        <button onClick={handleGotoLogin} className="button-login">Register/SignIn</button>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}><FaBars /></button>
      </nav>
      <button className="nav-btn nav-open-btn" onClick={showNavbar}><FaBars /></button>
    </header>
  );
}           

export default NavbarItems;