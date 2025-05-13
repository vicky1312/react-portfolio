import ProjectCard from "./ProjectCard"
import "./Project.css"

function Project(){
        const projects = ["Project 1", "Project 2", "Project 3", "Project 4"]

    return (
        <div className="project-wrapper">
            {projects.map((project) => (
            <ProjectCard key={project} project={project}/>
        )
        )}
                
        </div>
        
    )
}
export default Project