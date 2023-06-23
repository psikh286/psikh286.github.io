import ProjectCard from "../components/project/ProjectCard.js";
import { projects } from "../helpers/projectList";

import { Element } from 'react-scroll'


import '../styles/main.css'

const Projects = () => {
    return ( 
        <Element id="section" name="sectionScroll">
            <h1 className="projects__title">Projects</h1>
            <ul className="projects">
                {projects.map((project, index) => {
                    return (
                        <ProjectCard
                            title = {project.coverInfo}
                            img = {project.cover}
                            index = {index}
                        />
                    )
                })}

            </ul>
            
            <div className="projects__container">
                
            </div>
        </Element>
     );
}
 

export default (Projects);