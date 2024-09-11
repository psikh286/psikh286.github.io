import './projectCard.css';

const ImageCard = ({img, newAspectRatio = 4 / 3}) => {
    return (
        <div className='project-card block' style={{aspectRatio: newAspectRatio}}>
            <li className="project-card__container">
                <img className="project-card__img" src={img} alt="project_img"/>
            </li>
        </div>
    );
}

export default ImageCard;