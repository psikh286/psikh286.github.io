import ProjectCard from "../components/project/ProjectCard.js";
import { projects } from "../helpers/projectList";

// import '../styles/main.css'

const Projects = () => {

    
    return ( 
        <main id="section">
            <h1 className="projects__title">Projects</h1>
            <div className="projects__container">
                <ul className="projects">
                    {projects.map((project, index) => {
                        return (
                            <ProjectCard
                                key={project.id}
                                title={project.title}
                                description={project.description}
                                img={project.img}
                                index={index}
                            />
                        )
                    })}

                    { console.log(projects[0]) }
                </ul>
            </div>
        </main>
     );
}
 
export default Projects;