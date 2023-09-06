import React, {useState} from "react";
import front1 from "../Images/front1.png"
import back2 from "../Images/back2.png"
import "./Header.css"

function Header() {
    const [isFlipped, setIsFlipped] = useState(false);

const flipCard= () =>{
    setIsFlipped(!isFlipped)
}
    return(

<>

<div className=
{`flipCard ${isFlipped ? 'flipped' : ''}`} 
onClick={flipCard}
>
  <div className="cardInner">
    <div className="cardFront">
      <img src={front1} alt="front-businessCard"/>
    </div>
    <div className="cardBack">
        <img src={back2} alt="back-businessCard" />
    </div>
  </div>
</div>



</>

)


}

export default Header