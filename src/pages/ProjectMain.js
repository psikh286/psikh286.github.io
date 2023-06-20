import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { projects } from "../helpers/projectList";



import gitIcon from '../img/github.svg'
import itchIcon from '../img/itch-io.svg'
    
const ProjectMain = () => {
    const {id} = useParams();
    const project = projects[id];
    
    console.log(useParams());
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    
    return ( 
        <div className="container">
            <div className="container-img">
                <img src={project.mainImg} className="title-img-main" alt="dsa"></img>

                <div className="arrow__container"><div className="arrows"></div></div>

            </div>
            <div className="container-project">    
                <div className="project-main">

                {/* INFO & BUTTONS & IMAGES */}

                <div className="project-main-info-btns-img">
                    
                        {/* INFO & BUTTONS */}
                        
                        <div className="project-main-btns_with_info">
    
                            {/*  PROJECT DETAILS */}
                            
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
    
                        {/* BUTTONS */}
                            
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
                            
                        </div>
    
    
                        <div className="project-main-images">
                            <div className="descr-card-img">
                                <img src={project.images[0]} alt="" />
                            </div>                       
                        </div>
    
                </div>
                    {/* DESCRIPTIONS */}

                    <div className="project-main-descriptions">

                            <h2 className="title">Game Description</h2>

                            <div className="project-main-descr-card">
                               
                                <div className="descr-text">
                                    <p className="descr-text-main" dangerouslySetInnerHTML={{__html: project.info}}></p>
                                </div>
                            </div>

                            <h2 className="title">Problems</h2>

                            <div className="project-main-descr-card">

                                <div className="descr-text">
                                    <p className="descr-text-main" dangerouslySetInnerHTML={{__html: project.problems}}></p>
                                </div>
                            </div>

                            <h2 className="title">My Solutions</h2>

                            <div className="project-main-descr-card">

                                <div className="descr-text">
                                    <p className="descr-text-main" dangerouslySetInnerHTML={{__html: project.solutions}}></p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ProjectMain;