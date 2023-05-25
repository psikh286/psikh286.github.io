import { useParams } from "react-router-dom";
import { projects } from "../helpers/projectList";

const ProjectMain = () => {
    const {id} = useParams();
    const project = projects[id]

    return ( 
        <div className="container">
            <div className="container-project">    
                <div className="project-main">
                    <div className="project-main-title">
                        <h1 className="title-1">{project.title}</h1>
    
                        <img 
                        src={project.img} 
                        alt={project.title} 
                        className="project-main-img"/>
                        
                        <div className="project-main-descr">
                            <p>{project.descr}</p>
                            <p>{project.info}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ProjectMain;