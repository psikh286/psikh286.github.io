import './header.css'
import { Element } from 'react-scroll';

let text = [
    <p style={{display:"inline-block"}} onClick={() => changeColor(0)}>A</p>,
    <p style={{display:"inline-block"}} onClick={() => changeColor(1)}>L</p>,
    <p style={{display:"inline-block"}} onClick={() => changeColor(2)}>A</p>,
    <p style={{display:"inline-block"}} onClick={() => changeColor(3)}>N</p>,
    
    <p style={{display:"inline-block"}} onClick={() => changeColor(4)}>B</p>,
    <p style={{display:"inline-block"}} onClick={() => changeColor(5)}>E</p>,
    <p style={{display:"inline-block"}} onClick={() => changeColor(6)}>R</p>,
    <p style={{display:"inline-block"}} onClick={() => changeColor(7)}>B</p>,
    <p style={{display:"inline-block"}} onClick={() => changeColor(8)}>E</p>,
    <p style={{display:"inline-block"}} onClick={() => changeColor(9)}>R</p>,
    <p style={{display:"inline-block"}} onClick={() => changeColor(10)}>O</p>,
    <p style={{display:"inline-block"}} onClick={() => changeColor(11)}>V</p>
];



function changeColor(i){
    let elem = document.getElementById("aboba");
    
    if(i>3) i++;
    elem.children[i].style.color = getRandomColor(elem.children[i].style.color);
}
function getRandomColor(color){
    let colors = ["rgb(255, 140, 0)", "rgb(255, 0, 56)", "rgb(27, 217, 119)", "rgb(157, 34, 250)", "rgb(243, 255, 0)", "rgb(255, 252, 242)"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    if(randomColor === color) randomColor = getRandomColor(color);
    return randomColor;
}


const Header = () => {
    return ( 
        <Element className="header" id='header'>
            <div className="header__container">
                <div className="header__info">
                    <div className="header__info-container">
                        <p className="header__info-name" id="aboba">{text[0]}{text[1]}{text[2]}{text[3]}<br/>{text[4]}{text[5]}{text[6]}{text[7]}{text[8]}{text[9]}{text[10]}{text[11]}</p>
                        <p className="header__info-role">Game Developer & technical designer</p>
                    </div>
                </div>
                
                <div className="header__doombar">
                    <div className="header__doombar-list">
                        {/*<div className="doombar-list-main"> <p className="list-main-num">84%</p> <p className="list-main-text">C#</p></div>
                        <div className="doombar-list-main"> <p className="list-main-num">67%</p> <p className="list-main-text">Design System</p></div>
                        <div className="doombar-list-main"> <p className="list-main-text">place for photo??</p></div>
                        <div className="doombar-list-main"> <p className="list-main-num">96%</p><p className="list-main-text">Sociable</p></div>
                        <div className="doombar-list-main"> <p className="list-main-num">88%</p><p className="list-main-text">GitHub</p></div>
                        <div className="doombar-list-main"> <p className="list-main-num">90%</p><p className="list-main-text">Unity</p></div>*/}
                    </div>
                </div>
            </div>
        </Element>
     );
}
 
export default Header;