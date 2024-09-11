import './projects.css'

import ProjectCard from "../projectCard/ProjectCard.js";
import LinkButton from "../linkButton/LinkButton.js";
import { projects } from "../../helpers/ProjectList";

const Projects = () => {
    return ( 
        <div className="section" id="portfolio">
            <p className="section__header block">RECENT PROJECTS</p>
            <ul className="portfolio__best">
                {projects.map((project, index) => {
                    if(index >= 3) 
                        return null;
                    
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

                                <LinkButton
                                    project={project}
                                />
                            </div>
                        </div>
                    )
                })}
            </ul>

            <p className="section__header block">OTHER PROJECTS</p>
            <ul className="portfolio__cards">
                {projects.map((project, index) => {
                    if (index < 3)
                        return null; 
                    
                    return (
                        <ProjectCard
                            descr = {project.coverInfo}
                            img = {project.cover}
                            index = {index}
                        />
                    )
                })}
            </ul>
        </div>
     );
}

export default (Projects);