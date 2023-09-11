import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <>


    <nav className="navBar">
      <span className="hamburgerIcon">&#9776;</span>
    <div className="navLinks">
    <span className="closeBtn">&times;</span>
    <a id="aboutMeLink" href="#">About Me</a>
    <a id="projects" href="#">Projects</a>
    <a id="techSkills" href="#">Technical Skills</a>
    <a id="toolss" href="#">Tools</a>
    <a id="contactMe" href="#">Contact Me</a>
  </div>
  </nav>

{/* <div id="main">
  
</div> */}
</>
  );
};

export default Navbar;
