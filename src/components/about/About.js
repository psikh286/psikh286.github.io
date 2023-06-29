import './about.css'
import ScrollButton from "../utils/ScrollButton";

import resume from '../../img/Resume.pdf'

import twitter from "../../img/linkLogos/twitter.svg";
import gitHub from "../../img/linkLogos/github.svg";
import linkedIn from "../../img/linkLogos/linkedin.svg";
import itch from "../../img/linkLogos/itch-io.svg";
import email from "../../img/linkLogos/email.svg";


const About = () => {
    return ( 
        <div className="about" id='about'>
            
            <div className="about__info block">
                <p className="about__title">ABOUT ME</p>
                <p className="about__text">
                    I specialize in <b className="highlighted">Unity Engine</b> and <b className="highlighted">C#</b>, making exciting game mechanics, expandable systems, and designer-friendly tools.
                    I'm studying Game Design at the University of Applied Science.
                </p>
                <a href={resume} className="about__download" target="_blank" rel="noreferrer">RESUME/CV</a>
            </div>
            {/*<div className="block">
                <p className="about__title">STATS</p>
                <p className="about__text">
                    Aboba: 45;
                    sadfas; 4 games;
                </p>
            </div>*/}
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
                <a href="https://twitter.com/alan_berberov" target="_blank" rel="noreferrer">
                    <img className="footer__icon" src={twitter} alt="Link" />
                </a>
            </div>

            <ScrollButton dir={"down"} dest={"portfolio"}/>
            <ScrollButton dir={"up"} dest={"header"}/>
        </div>
     );
}
 
export default About;