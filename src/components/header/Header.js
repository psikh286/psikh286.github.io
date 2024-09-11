import './header.css'
import {Element, scroller} from 'react-scroll';

import ScrollButton from "../utils/scrollButton/ScrollButton";

let style = {display:"inline-block", color:"rgb(0, 0, 0)", cursor:"pointer"};

let text = [    
    <p style={style} onClick={() => changeColor(0)}>A</p>,
    <p style={style} onClick={() => changeColor(1)}>L</p>,
    <p style={style} onClick={() => changeColor(2)}>A</p>,
    <p style={style} onClick={() => changeColor(3)}>N</p>,
    
    <p style={style} onClick={() => changeColor(4)}>B</p>,
    <p style={style} onClick={() => changeColor(5)}>E</p>,
    <p style={style} onClick={() => changeColor(6)}>R</p>,
    <p style={style} onClick={() => changeColor(7)}>B</p>,
    <p style={style} onClick={() => changeColor(8)}>E</p>,
    <p style={style} onClick={() => changeColor(9)}>R</p>,
    <p style={style} onClick={() => changeColor(10)}>O</p>,
    <p style={style} onClick={() => changeColor(11)}>V</p>
];


function changeColor(i){
    let elem = document.getElementById("aboba");
    
    elem.children[i].style.color = getRandomColor(elem.children[i].style.color);
}
function getRandomColor(color){
    let colors = ["rgb(0, 0, 0)",
                            "rgb(255, 0, 56)", 
                            "rgb(0, 255, 12)", 
                            "rgb(0, 115, 255)", 
                            "rgb(161, 0, 255)",
                            "rgb(255, 252, 242)"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    if(randomColor === color) randomColor = getRandomColor(color);
    
    return randomColor;
}


const Header = () => {
    return ( 
        <div className="header" id='header'>
            <div className="header__info">
                <p className="header__name block"> HELLO!</p>
                <p className="header__name block" id="aboba"> I AM {text[0]}{text[1]}{text[2]}{text[3]} {text[4]}{text[5]}{text[6]}{text[7]}{text[8]}{text[9]}{text[10]}{text[11]}</p>
                <p className="header__role block">GAME PROGRAMMER</p>
            </div>
        
            <ScrollButton dir={"down"} dest={"about"}/>
        </div>
     );
}
 
export default Header;