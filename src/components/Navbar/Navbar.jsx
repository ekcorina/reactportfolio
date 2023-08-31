import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <>


    <nav className="navbar">
      <span className="hamburgerIcon">&#9776;</span>
    <div className="navLinks">
    <span className="closeBtn">&times;</span>
    <a id="aboutMe" href="#">About Me</a>
    <a id="projects" href="#">Projects</a>
    <a id="techSkills" href="#">Technical Skills</a>
    <a id="tools" href="#">Tools</a>
    <a id="contactMe" href="#">Contact Me</a>
  </div>
  </nav>

<div id="main">
  
</div>
</>
  );
};

export default Navbar;
