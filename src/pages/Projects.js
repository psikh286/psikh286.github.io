import ProjectCard from "../components/project/ProjectCard.js";

import { projects } from "../helpers/projectList";

import '../styles/projects.css'

import ScrollButton from "../components/utils/ScrollButton";
import itchIcon from "../img/linkLogos/itch-io.svg";
import gitIcon from "../img/linkLogos/github.svg";

const Projects = () => {
    return ( 
        <div id="portfolio">
            <p className="section__header block">RECENT PROJECTS</p>
            <ul className="portfolio__best">
                {projects.map((project, index) => {
                    if(index >= 3) return null;

                    return (
                        <div className="portfolio__best-container">
                            <ProjectCard
                                descr = {project.coverInfo}
                                img = {project.cover}
                                index = {index}
                            />
                            
                            <div className="portfolio__wid block">
                                <h2>MY CONTRIBUTIONS</h2>
                                <ul dangerouslySetInnerHTML={{__html:project.contribution}}></ul>
                                <div className="portfolio__buttons">
                                    {project.gitHub && (
                                        <a href={project.gitHub} target="_blank" rel="noreferrer" className="portfolio__button">
                                            <img src={gitIcon} alt="gitHub-icon" className="project__icon" />
                                            <p>Code!</p>
                                        </a> )}
                                    
                                    {project.itch && (
                                        <a href={project.itch} target="_blank" rel="noreferrer" className="portfolio__button">
                                            <img src={itchIcon} alt="itch-icon" className="project__icon" />
                                            <p>Play it!</p>
                                        </a> )}                                    
                                </div>
                            </div>

                            
                        </div>
                    )
                })}
            </ul>

            <p className="section__header block">OTHER PROJECTS</p>
            <ul className="portfolio__cards">
                {projects.map((project, index) => {
                    if(index < 3) return null; 
                    
                    return (
                        <ProjectCard
                            descr = {project.coverInfo}
                            img = {project.cover}
                            index = {index}
                        />
                    )
                })}

            </ul>

            <ScrollButton dir={"up"} dest={"about"}/>
        </div>
     );
}
 

export default (Projects);