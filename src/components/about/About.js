import unity from '../../img/unity.svg'
import csharp from '../../img/c-sharp-logo.svg'
import blender from '../../img/blender-3d.svg'
import unreal4 from '../../img/unreal-engine.svg'

import './about.css'

const About = () => {
    return ( 
        <div className="about" id='about'>
            <p className="about__header-title">About</p>
            <div className="about__container">
                <div className="about__info">
                    <p className="about__title">Hi, i'm <br/>Alan berberov</p>
                    <p className="about__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse finibus tristique metus, id sagittis ex tincidunt at.Aliquam erat volutpat. Sed interdum nulla vitae metus vulputate, id gravida enim rutrum finibus tristique metus, id sagittis ex tincidunt at.Aliquam erat volutpat. Sed interdum nulla vitae metus vulputate, id gravida enim rutrumfinibus tristique metus, id sagittis ex tincidunt at.Aliquam erat volutpat. Sed interdum nulla vitae metus vulputate, id gravida enim rutrum</p>
                </div>
                <div className="about__skills">
                    <h3>Skills:</h3>
                    <div className="about__skills-list">
                        <div className="about__skils-item">
                            <div className="about__skils-item-img">
                                <img src={unity} alt="" />
                            </div>
                            <div className="about__skils-item-img">
                                <img src={csharp} alt="" />
                            </div>
                        </div>
                        <div className="about__skils-item">
                            <div className="about__skils-item-img">
                                <img src={blender} alt="" />
                            </div>

                            <div className="about__skils-item-img">
                                <img src={unreal4} alt="" />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default About;