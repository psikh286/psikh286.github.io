import './linkButton.css'

import itchIcon from "../../img/linkLogos/itch-io.svg";
import gitIcon from "../../img/linkLogos/github.svg";

const ProjectCard = ({project}) => {
    return (
        <div className="portfolio__buttons">
            {project.gitHub && (
                <a href={project.gitHub} target="_blank" rel="noreferrer" className="portfolio__button">
                    <div className="portfolio__button--fill">
                        <p>Code!</p>
                    </div>
                    <img src={gitIcon} alt="gitHub-icon" className="project__icon" />
                </a> )}

            {project.itch && (
                <a href={project.itch} target="_blank" rel="noreferrer" className="portfolio__button">
                    <div className="portfolio__button--fill">
                        <p>Play it!</p>
                    </div>
                    <img src={itchIcon} alt="itch-icon" className="project__icon" />
                </a> )}
        </div>
    );
}

export default ProjectCard;