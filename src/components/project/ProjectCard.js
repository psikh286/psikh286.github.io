import { NavLink } from 'react-router-dom';
import '../project/projectCard.css'

const ProjectCard = ({title, img, index}) => {
    return ( 
        <NavLink to={`/project/${index}`} className='project__card'>
            <li className="project__card-item">
                <img src={img} alt="project_img"/>
                <p className="project__card-title">{title}</p>
            </li>
        </NavLink>
     );
}
 
export default ProjectCard;