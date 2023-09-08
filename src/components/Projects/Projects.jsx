import React from "react";
import tribute from "../Images/tribute.png"
import group2 from "../Images/group2.png"
import theatre from "../Images/theatre.png"
import reborn from "../Images/reborn.png"
import "./Projects.css"


const Projects = () =>{

return(
<>

  <h2 className="projects">Projects</h2>

 <div class="scrollContainer">
  <img className = "projectImages resizeImages" src={tribute} alt="tribute-page" />
  <img className = "projectImages" src={group2} alt="group-project" />
  <img className = "projectImages resizeImages" src={theatre} alt="theatre-page" />
  <img className = "projectImages" src={reborn} alt="reborn-page" />
</div> 


</>

)

}

export default Projects
