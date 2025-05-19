import myimg from "../assets/me.jpeg"
import { IoLogoHtml5 } from "react-icons/io"
import { FaReact } from "react-icons/fa"
import { FaNodeJs } from "react-icons/fa6"
import { IoLogoJavascript } from "react-icons/io"
import { IoLogoCss3 } from "react-icons/io"
function About(){
    return (
        <>
        <div className="left-wrapper">
        <h2>Welcome to my portfolio</h2>
        <p className="intro">My name is <span>ABAYOMI VICTORY OPEOLUWA</span> a full-stack web engineer with certifications from Zuri and Ibt Learning
        </p>
        <div className="mobile-profile-img">
            <img src= {myimg}></img>
        </div>
        <ul className="app-list">
            My skills include:
            <li>HTML</li>
            <li>Javascript</li>
            <li>React</li>
            <li>ExpressJS</li>
            <li>Nodejs</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>API development</li>
            <li>TailwindCSS</li>
        </ul>
        <div className="logos">
            <IoLogoHtml5 className="html-logo" />
            <IoLogoCss3  className="css-logo"/>
            <IoLogoJavascript  className="js-logo"/>
            <FaReact className="react-logo" />
            <FaNodeJs className="node-logo" />
        </div>
        </div>
        <div className="profile-img">
            <img src= {myimg}></img>
        </div>
        </>
    )
}
export default About