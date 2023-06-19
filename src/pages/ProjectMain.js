import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { projects } from "../helpers/projectList";



import gitIcon from '../img/github.svg'
import itchIcon from '../img/itch-io.svg'
    
const ProjectMain = () => {
    const {id} = useParams();
    const project = projects[id];
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    
    return ( 
        <div className="container">
            <div className="container-img">
                <img src={project.img} className="title-img-main" alt="dsa"></img>

                <div className="arrow__container"><div className="arrows"></div></div>

            </div>
            <div className="container-project">    
                <div className="project-main">
                    <div className="project-main-title">


                    </div>
                    <div className="project-main-info">
                        <ul className="main-info-list">
                            <h2>Project Details</h2>
                            <li>Roles: {project.roles}</li>
                            <li>Semester: {project.semester}</li>
                            <li>Team Size: {project.teamSize}</li>
                            <li>Time Spent: {project.time}</li>
                            <li>Date: {project.date}</li>
                            <li>Engine: {project.engine}</li>
                        </ul>
                    </div>

                    <div className="project-main-buttons">
                        {project.itch && (
                        <a href={project.itch} target="_blank" rel="noreferrer" className="project-main-btn">
                            <img src={itchIcon} alt="itch-icon" />
                            <p>Go to itch.io</p>
                        </a> )}

                        {project.gitHub && (
                        <a href={project.gitHub} target="_blank" rel="noreferrer" className="project-main-btn"> 
                            <img src={gitIcon} alt="gitHub-icon" />
                            <p>Go to Github</p>
                        </a> )}
                        
                    </div>


                    <div className="project-main-descriptions">

                            <h2 className="title">Description</h2>

                            <div className="project-main-descr-card">
                                <div className="descr-card-img">
                                    <img src={project.img} alt="" />
                                </div>

                                <div className="descr-text">
                                    <p className="descr-text-main" dangerouslySetInnerHTML={{__html: project.descr}}></p>
                                </div>
                            </div>

                            <h2 className="title">What did i Learn?</h2>

                            <div className="project-main-descr-card">
                                <div className="descr-card-img">
                                    <img src={project.img} alt="" />
                                </div>

                                <div className="descr-text">
                                    <p className="descr-text-main" dangerouslySetInnerHTML={{__html: project.info}}></p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ProjectMain;