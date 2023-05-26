// import backgroundImg from "../../img/3d_girl_full_size.jpg"
import './header.css'

const Header = () => {
    return ( 
        <div className="header">
            <div className="header__container">
                {/* <div className="header__background">
                    <img className="header__background-img" src={backgroundImg} alt="background_info" />
                </div> */}
                <div className="header__info">
                    <div className="header__info-container">
                        <p className="header__info-main">Alan<br/>Berberov</p>
                        <p className="header__info-gamedev">Game Developer, technical designer</p>
                    </div>
                </div>
            </div>
            <div className="header__doombar">
                <div className="header__doombar-list">
                    <div className="doombar-list-main"> <p className="list-main-num">84%</p> <p className="list-main-text">C#</p></div>
                    <div className="doombar-list-main"> <p className="list-main-num">67%</p> <p className="list-main-text">Design System</p></div>
                    <div className="doombar-list-main"> <p className="list-main-text">place for photo??</p></div>
                    <div className="doombar-list-main"> <p className="list-main-num">96%</p><p className="list-main-text">Sociable</p></div>
                    <div className="doombar-list-main"> <p className="list-main-num">88%</p><p className="list-main-text">GitHub</p></div>
                    <div className="doombar-list-main"> <p className="list-main-num">90%</p><p className="list-main-text">Unity</p></div>
                </div>
            </div>
        </div>
     );
}
 
export default Header;