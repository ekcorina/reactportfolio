import React, {useState} from "react";
import front1 from "../Images/front1.png"
import back2 from "../Images/back2.png"
import Navbar from "../Navbar/Navbar";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Tools from "../Tools/Tools";
import ContactForm from "../ContactForm/ContactForm";
import "./Header.css"

function Header() {

    const [isFlipped, setIsFlipped] = useState(false);

const flipCard= () =>{
    setIsFlipped(!isFlipped)
}
    return(

<>

<div className={`flipCard ${isFlipped ? 'flipped' : ''}`} onClick={flipCard}>
  <div className="cardInner">
    <div className="cardFront">
      <img className ="businessCard-front-back" src={front1} alt="front-businessCard"/>
    </div>
    <div className="cardBack">
        <img className ="businessCard-front-back" src={back2} alt="back-businessCard" />
    </div>
  </div>
</div>

<Navbar />
<AboutMe />
<Skills />
<Projects />
<Tools />
<ContactForm />



</>

)


}

export default Header