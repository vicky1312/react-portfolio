import ProjectCard from "./ProjectCard"
import "./Project.css"
import Dark from "../assets/dark.avif"
import Emoji from "../assets/emoji.avif"
import Quotes from "../assets/quotes.jpeg"
import Todo from "../assets/Todo.jpeg"
import { useRef } from "react"

function Project(){
        const projects = [
           { name:"Quotes", link: "https://ayproject.netlify.app/", image: Quotes, description: "A random quote generator app built with react using web-apis"},
           {name:"Todo", link: "https://aytodoapp.netlify.app/", image: Todo, description: "A react todo app with clear user interface "},
            {name: "Display", link: "https://68216215ee86c805f00f960e--splendorous-sawine-55d6cc.netlify.app/", image: Dark, description: "Using cookies to create a dark mode and light mode website"}, 
            {name:"Emoji", link: "https://vickyprojects.netlify.app/", image: Emoji, description: "An emoji website built using react"}, 
        ]
            
    return (
        <div className="project-wrapper">
            {projects.map((project, index) => (
                <a 
                    key={index}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{textDecoration: "none", color: "inherit"}}
                >
                    <ProjectCard className="card-info" project={project} />
                </a>
            
        )
        
        )}
                
        </div>
        
    )
}
export default Project