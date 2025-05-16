import "./Project.css"
function ProjectCard({project}){
    const {name, image, description} = project
    return (
        <div className="project-card">
            <img src={image} alt={name} className="card-image" />
            <h4>{name}</h4>
            <p className="project-desc">{description}</p>
            <div className="project-link"></div>
        </div>
    )
}
export default ProjectCard