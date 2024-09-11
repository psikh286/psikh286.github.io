import { NavLink } from 'react-router-dom';
import linkIcon from '../../img/linkLogos/open-external.svg'
import './projectCard.css'

const ProjectCard = ({img, descr, index}) => {
    return (
        <NavLink to={`/project/${index}`} className='project-card--hover_enabled block'>
            <li className="project-card__container">
                <img className="project-card__img" src={img} alt="project_img"/>
                <p className="project-card__title" dangerouslySetInnerHTML={{__html: descr}}></p>
            </li>
            
            <img className="project-card__icon" src={linkIcon} alt="ansk"/>
        </NavLink>
     );
}
 
export default ProjectCard;