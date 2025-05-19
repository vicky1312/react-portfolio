import { FaLinkedin } from "react-icons/fa"
import { FaXTwitter} from "react-icons/fa6"
import { FaGithub } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"
import { BsTelephone } from "react-icons/bs"

function Contact(){
    return (
        < div className="footer-content">
        <h2>Contact me</h2>
            <div className="socials">
            <a href ="https://github.com/vicky1312" target="_blank" rel="noopener noreferrer" className="icon-link">
            <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/victory-abayomi-70b431201" target="_blank" rel="noopener noreferrer" className="icon-link" >
            <FaLinkedin /> 
            </a>
           
            <a href="https://x.com/Justheretolurkp" target="_blank" rel="noopener noreferrer" className="icon-link">
            <FaXTwitter />
            </a>
        
            </div>
            <div className="contacts">
            <p> <AiOutlineMail /> victoryabayomi@gmail.com</p>
            <p> <BsTelephone /> +2348022075698 </p>
            </div>
           
        
        </div>
    )
}
export default Contact