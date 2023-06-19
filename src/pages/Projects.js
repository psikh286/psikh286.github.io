import ProjectCard from "../components/project/ProjectCard.js";
import { projects } from "../helpers/projectList";

import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


import '../styles/main.css'

const Projects = () => {
    return ( 
        <Element id="section" name="sectionScroll">
            <h1 className="projects__title">Projects</h1>
            <div className="projects__container">
                <ul className="projects">
                    {projects.map((project, index) => {
                        return (
                            <ProjectCard
                                img={project.img}
                                index={project.id}
                            />
                        )
                    })}

                </ul>
            </div>
        </Element>
     );
}
 

export default (Projects);