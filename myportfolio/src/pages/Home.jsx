import About from "../pages/About"
import Contact from "../pages/Contact"
import Project from "../pages/Project"
import './Home.css'
import { Outlet } from "react-router-dom"
function Home(){
    return(
        <>
            <div className="body-wrapper" id="about">
                    <About />
            </div>
            <div className="project-board" id="project">
            <h2>My Projects</h2> 
            <Project />
            </div> 
            
            <div className="contact-wrapper" id="contact">
                <Contact />
            </div>
          
        </>
    )
}
export default Home