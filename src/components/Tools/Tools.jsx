import React from "react";
import tools from "../Images/tools.png"
import "./Tools.css"



const Tools = () => {

    return(
        <>

        <p id="toolss" className="tools">Tools</p> 
        
             <img id="toolSet" src={tools} alt="tools" />
        
        </>
    )
}

export default Tools