import { NavLink } from 'react-router-dom';
import '../project/projectCard.css'

const ProjectCard = ({img, index}) => {
    return ( 
        <NavLink to={`/project/${index}`} className='project__card'>
            <li className="project__card-item">
                <img className="project__card-img" src={img} alt="project_img"/>
            </li>
        </NavLink>
     );
}
 
export default ProjectCard;