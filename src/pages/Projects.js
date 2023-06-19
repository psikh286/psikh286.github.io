import ProjectCard from "../components/project/ProjectCard.js";
import { projects } from "../helpers/projectList";

import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


import '../styles/main.css'



// const doSome = function(text) {
//     text = 'sectionScroll'
//     console.log(text);
//     scroller.scrollTo("sectionScroll", {
//       duration: 0,
//       delay: 0,
//       smooth: true,
//       offset: 50, 

//     })
// }

const Projects = () => {


    

    return ( 
        <Element id="section" name="sectionScroll">
            <h1 className="projects__title">Projects</h1>
            <div className="projects__container">
                <ul className="projects">
                    {projects.map((project, index) => {
                        return (
                            <ProjectCard
                                key={project.id}
                                title={project.title}
                                description={project.description}
                                img={project.img}
                                index={index}
                            />
                        )
                    })}

                </ul>
            </div>
        </Element>
     );
}
 

export default (Projects);