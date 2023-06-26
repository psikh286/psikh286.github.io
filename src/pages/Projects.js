import ProjectCard from "../components/project/ProjectCard.js";

import { projects } from "../helpers/projectList";
import { Element } from 'react-scroll'

import '../styles/projects.css'

const Projects = () => {
    return ( 
        <Element id="section" name="sectionScroll">
            <p className="section__header">Projects</p>
            <ul className="project-list">
                {projects.map((project, index) => {
                    return (
                        <ProjectCard
                            descr = {project.coverInfo}
                            img = {project.cover}
                            index = {index}
                        />
                    )
                })}

            </ul>
        </Element>
     );
}
 

export default (Projects);