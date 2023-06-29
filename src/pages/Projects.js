import ProjectCard from "../components/project/ProjectCard.js";

import { projects } from "../helpers/projectList";

import '../styles/projects.css'
import ScrollButton from "../components/utils/ScrollButton";

const Projects = () => {
    return ( 
        <div id="portfolio">
            <p className="section__header block">RECENT PROJECTS</p>
            <ul className="portfolio__best">
                {projects.map((project, index) => {
                    if(index >= 3) return null;

                    return (
                        <ProjectCard
                            descr = {project.coverInfo}
                            img = {project.cover}
                            index = {index}
                        />
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