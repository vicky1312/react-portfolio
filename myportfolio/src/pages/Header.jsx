import { NavLink } from "react-router-dom"
function Header(){
    return (

        <>
              <h1>HELLO</h1>
                <div className="links">
                <NavLink to="/" className="header-link">Home</NavLink>
                <a href="#about" className="header-link">About</a>
                <a href="#contact" className="header-link">Contact</a>
                <a href="#project" className="header-link">Projects</a>
                </div>
        </>
    )
}
export default Header