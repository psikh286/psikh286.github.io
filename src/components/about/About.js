import resume from '../../img/Resume.pdf'

import './about.css'

const About = () => {
    return ( 
        <div className="about" id='about'>
            <p className="section__header">About</p>
            <div className="about__container">
                <div className="about__info">
                    <p className="about__title">Hello there!</p>
                    <p className="about__text">
                        My name is <b className="highlighted">Alan</b>.<br/> I'm a <b className="highlighted">Game Developer</b>  specializing in <b className="highlighted">Unity Engine</b> and <b className="highlighted">C#</b>, making exciting game mechanics, expandable systems, and designer-friendly tools.
                        I'm studying Game Design at the University of Applied Science.
                    </p>
                </div>
                <a href={resume} className="about__download" target="_blank" rel="noreferrer">RESUME/CV</a>
            </div>
        </div>
     );
}
 
export default About;