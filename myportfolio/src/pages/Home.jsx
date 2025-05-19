import About from "../pages/About"
import Contact from "../pages/Contact"
import Project from "../pages/Project"
import Header from "../pages/Header"
import './Home.css'
import { Outlet } from "react-router-dom"
function Home(){
    return(
        <div className="home-wrapper">
             <header>
                <Header />
            </header>
            <div className="body-wrapper" id="about">
                    <About />
            </div>
            <div className="project-board" id="project">
            <h2>My Projects</h2> 
            <Project />
            </div> 
            
            <footer className="contact-wrapper" id="contact">
                <Contact />
            </footer>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
export default Home