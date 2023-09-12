import React, { useState } from 'react';
import './Navbar.css'; 

const Navbar = () => {

  const [navOpen, setNavOpen] = useState(false)


  const handleCancel = () => {
    setNavOpen(false);
  }




  return (
    <>

<span onClick={()=>setNavOpen(true)}className="hamburgerIcon">&#9776;</span>



{navOpen && <nav className="navBar" >

      

   
 <div className="navLinks">
    <span onClick={handleCancel} className="closeBtn">&times;</span>

    <a  href="/">About Me</a>
    <a  href="#project">Projects</a>
    <a  href="#techSkills">Technical Skills</a>
    <a  href="#toolss">Tools</a>
    <a  href="#contactMe">Contact Me</a>
    
  </div>
  </nav>}

<div className="main">
  
</div>
</>
  );
};


export default Navbar;
