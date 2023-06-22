import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { projects } from "../helpers/projectList";

import { scroller, Element } from 'react-scroll';


import gitIcon from '../img/github.svg'
import itchIcon from '../img/itch-io.svg'
    
const ProjectMain = () => {
    const {id} = useParams();
    const project = projects[id];
    
    console.log(useParams());
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    

  const handleScrollToBlock = (text) => {
    scroller.scrollTo(text, {
      duration: 600, // Длительность анимации в миллисекундах
      smooth: 'easeInOutQuart', // Тип анимации
    })
  }

    return ( 
        <div className="container">
            <div className="container-img">
                <img src={project.mainImg} className="title-img-main" alt="dsa"></img>
                <div className="arrow__container" onClick={() => handleScrollToBlock('container_project')}>
                    <div className="arrows"></div>
                </div>
            </div>

            <Element className="container_project">
                <div className="project-main">
                    <div className="project-main-details">
                        <ul className="main-info-list">
                                <h2>Project Details</h2>
                                <li dangerouslySetInnerHTML={{__html: '<b>Roles: </b>' + project.roles}}></li>
                                <li dangerouslySetInnerHTML={{__html: '<b>Semester: </b>' + project.semester}}></li>
                                <li dangerouslySetInnerHTML={{__html: '<b>Team Size: </b>' + project.teamSize}}></li>
                                <li dangerouslySetInnerHTML={{__html: '<b>Time Spent: </b>' + project.time}}></li>
                                <li dangerouslySetInnerHTML={{__html: '<b>Date: </b>' + project.date}}></li>
                                <li dangerouslySetInnerHTML={{__html: '<b>Engine: </b>' + project.engine}}></li>
                        </ul>
                        
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
    
                        <div className="project-main-images">
                            <div className="descr-card-img">
                                <img src={project.images[0]} alt="" />
                            </div>                       
                        </div>
                    </div>
                    <div className="project-main-descriptions">
                        <div className="project-main-descr-card">
                            <h2 className="title">Game Description</h2>
                            <div className="descr-text" dangerouslySetInnerHTML={{__html: project.info}}></div>
                        </div>
                        
                        <div className="project-main-descr-card">
                            <h2 className="title">Problems</h2>
                            <div className="descr-text" dangerouslySetInnerHTML={{__html: project.problems}}></div>
                        </div>
                        
                        <div className="project-main-descr-card">
                            <h2 className="title">Solutions</h2>
                            <div className="descr-text" dangerouslySetInnerHTML={{__html: project.solutions}}></div>
                        </div>
                    </div>
                </div>
            </Element>
        </div>
    );
}
 
export default ProjectMain;