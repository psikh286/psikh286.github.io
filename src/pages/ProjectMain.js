import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { projects } from "../helpers/projectList";

import { scroller, Element } from 'react-scroll';
import { NavLink } from 'react-router-dom';


import '../styles/projectPage.css'
import '../styles/downScrollButton.css'

import arrowIcon from '../img/upButton.svg'
import gitIcon from '../img/linkLogos/github.svg'
import itchIcon from '../img/linkLogos/itch-io.svg'
    
const ProjectMain = () => {
    const {id} = useParams();
    const project = projects[id];
        
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    function handleScrollToBlock(){
        scroller.scrollTo('project__body', {
          duration: 600, // Длительность анимации в миллисекундах
          smooth: 'ease-in-out', // Тип анимации
        })
    }

    return ( 
        <div className="project">
            <div className="project__cover">
                <NavLink to ={'/'} className="project__back-button">Go Back</NavLink>
                <img src={project.mainImg} className="project__cover-img" alt="scroll down"></img>
                <div className="down-button down" onClick={handleScrollToBlock}>
                    <div className="down-button__body">
                        <img src={arrowIcon} alt="scrollDown"/>
                    </div>
                    <div className="down-button__effect"></div>
                </div>
            </div>

            <div className="project__body">
                <div className="project__content-container">
                    <ul className="project__details">
                        <div className="project__details-wrapper">
                            <h2>Project Details</h2>
                            <li dangerouslySetInnerHTML={{__html: '<b>Roles: </b>' + project.roles}}></li>
                            {project.semester &&
                                <li dangerouslySetInnerHTML={{__html: '<b>Semester: </b>' + project.semester}}></li>}
                            <li dangerouslySetInnerHTML={{__html: '<b>Team Size: </b>' + project.teamSize}}></li>
                            <li dangerouslySetInnerHTML={{__html: '<b>Time Spent: </b>' + project.time}}></li>
                            <li dangerouslySetInnerHTML={{__html: '<b>Date: </b>' + project.date}}></li>
                            <li dangerouslySetInnerHTML={{__html: '<b>Engine: </b>' + project.engine}}></li>
                        </div>
                    </ul>

                    <div className="project__buttons-container">
                        {project.itch && (
                            <a href={project.itch} target="_blank" rel="noreferrer" className="project__button">
                                <img src={itchIcon} alt="itch-icon" className="project__icon" />
                                <p>Play it!</p>
                            </a> )}

                        {project.gitHub && (
                            <a href={project.gitHub} target="_blank" rel="noreferrer" className="project__button">
                                <img src={gitIcon} alt="gitHub-icon" className="project__icon" />
                                <p>Code!</p>
                            </a> )}
                    </div>

                    <div className="project__image">
                        <img src={project.images[0]} alt="" />
                    </div>
                </div>
                <div className="project__main--container">
                    <div className="project-main-descr-card">
                        <h2>Game Description</h2>
                        <div className="descr-text" dangerouslySetInnerHTML={{__html: project.info}}></div>
                    </div>

                    <div className="project-main-descr-card">
                        <h2>Problems</h2>
                        <div className="descr-text" dangerouslySetInnerHTML={{__html: project.problems}}></div>
                    </div>

                    <div className="project-main-descr-card">
                        <h2>Solutions</h2>
                        <div className="descr-text" dangerouslySetInnerHTML={{__html: project.solutions}}></div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
 
export default ProjectMain;