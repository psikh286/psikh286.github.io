import { NavLink } from 'react-router-dom';
import '../project/projectCard.css'

const ProjectCard = ({img, descr, index}) => {
    return ( 
        <NavLink to={`/project/${index}`} className='project-card'>
            <li className="project-card__container">
                <p className="project-card__title" dangerouslySetInnerHTML={{__html: descr}}></p>
                <img className="project-card__img" src={img} alt="project_img"/>
            </li>
        </NavLink>
     );
}
 
export default ProjectCard;