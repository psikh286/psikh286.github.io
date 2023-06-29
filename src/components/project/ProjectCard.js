import { NavLink } from 'react-router-dom';
import linkIcon from '../../img/linkLogos/link.svg'
import '../project/projectCard.css'

const ProjectCard = ({img, descr, index}) => {
    return ( 
        <NavLink to={`/project/${index}`} className='project-card block'>
            <li className="project-card__container">
                <p className="project-card__title" dangerouslySetInnerHTML={{__html: descr}}></p>
                <img className="project-card__img" src={img} alt="project_img"/>
                <img className="project-card__icon" src={linkIcon} alt="ansk"/>
            </li>
        </NavLink>
     );
}
 
export default ProjectCard;