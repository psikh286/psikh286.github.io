import {useParams} from "react-router-dom";
import { projects } from "../helpers/ProjectList";

import {useEffect} from "react";
import { useNavigate } from "react-router-dom";

import '../styles/projectPage.css'
import "../components/utils/scrollButton/scrollButton.css";

import LinkButton from "../components/linkButton/LinkButton";
import ImageCard from "../components/projectCard/ImageCard";


const ProjectPage = () => {
    const {id} = useParams();
    const project = projects[id];
    let navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="project">
            <button onClick={() => navigate(-1)} className="project__back-button block">Back</button>
            
            <p className="section__header block" style={{textTransform: "uppercase", marginBottom: 0}}>{project.title}</p>
            <p className="project__info block" dangerouslySetInnerHTML={{__html: project.info}}></p>
            
            <div className="project__images">
                <ImageCard img={project.images[0]} newAspectRatio={16/9}/>
                <ImageCard img={project.images[1]} newAspectRatio={16/9}/>
            </div>
            
            <div className="project__last-row">
                <div className="block">
                    <h2>PROJECT DETAILS</h2>
                    <hr/>
                    
                    <ul className="project__details">
                        <li dangerouslySetInnerHTML={{__html: '<b>Roles: </b>' + project.roles}}></li>
                        {project.semester && <li dangerouslySetInnerHTML={{__html: '<b>Semester: </b>' + project.semester}}></li>}
                        <li dangerouslySetInnerHTML={{__html: '<b>Team Size: </b>' + project.teamSize}}></li>
                        <li dangerouslySetInnerHTML={{__html: '<b>Time Spent: </b>' + project.time}}></li>
                        <li dangerouslySetInnerHTML={{__html: '<b>Date: </b>' + project.date}}></li>
                        <li dangerouslySetInnerHTML={{__html: '<b>Engine: </b>' + project.engine}}></li>
                    
                    </ul>

                </div>
                <div className="block">
                    <h2>MY CONTRIBUTIONS</h2>
                    <hr/>
                    
                    <ul className="project__details dotted" dangerouslySetInnerHTML={{__html:project.contribution}}></ul>
                </div>
                <div className="project__problems block">
                    <div>
                        <h2>PROBLEM</h2>
                        <hr/>

                        <p dangerouslySetInnerHTML={{__html: project.problems}}></p>
                    </div>
                    <div>
                        <h2>SOLUTION</h2>
                        <hr/>

                        <p dangerouslySetInnerHTML={{__html: project.solutions}}></p>
                    </div>
                </div>
            </div>
            
            <div className="project__buttons block">
                <LinkButton project={project}/>
            </div>
        </div>
    );
}
 
export default ProjectPage;