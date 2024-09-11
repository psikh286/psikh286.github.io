import './about.css'

import resume from '../../img/Resume.pdf'

import gitHub from "../../img/linkLogos/github.svg";
import linkedIn from "../../img/linkLogos/linkedin.svg";
import itch from "../../img/linkLogos/itch-io.svg";
import email from "../../img/linkLogos/email.svg";


const About = () => {
    return ( 
        <div className="section" id='about'>
            <p className="section__header block">ABOUT ME</p>
            
            <div className="about__info block">
                <p className="about__text">
                    I specialize in <b className="highlighted">Unity Engine</b> and <b className="highlighted">C#</b>, making exciting game mechanics, expandable systems, and designer-friendly tools.
                    I'm studying Game Design at the University of Applied Science.
                </p>
                <hr color="black" width="100%"/>
                <a href={resume} className="about__download" target="_blank" rel="noreferrer">RESUME/CV</a>
            </div>
            
            <div className="about__contacts block">
                <a href="https://github.com/psikh286" target="_blank" rel="noreferrer">
                    <img className="footer__icon" src={gitHub} alt="Link" />
                </a>
                <a href="mailto:alan@berberov.dev" target="_blank" rel="noreferrer">
                    <img className="footer__icon" src={email} alt="Link" />
                </a>
                <a href="https://www.linkedin.com/in/alan-berberov-53844027a/" target="_blank" rel="noreferrer">
                    <img className="footer__icon" src={linkedIn} alt="Link" />
                </a>
                <a href="https://psikh286.itch.io/" target="_blank" rel="noreferrer">
                    <img className="footer__icon" src={itch} alt="Link" />
                </a>
            </div>
        </div>
     );
}
 
export default About;