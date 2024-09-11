import "./scrollButton.css"

import {scroller} from "react-scroll";

import arrowIcon from "../../../img/upButton.svg";


function handleScrollToBlock(text){
    scroller.scrollTo(text, {
        duration: 300,
        smooth: 'ease-in-easeOutQuad',
    })
}


const ScrollButton = (props) => {
    
    const dest = props.dest;
    const dir = props.dir;
    
    return(
        <div className={`down-button ${dir}`} onClick={() => handleScrollToBlock(dest)}>
            <div className="down-button__body">
                <img src={arrowIcon} alt="scrollDown"/>
            </div>
            
            <div className="down-button__effect"></div>
        </div>
    );
}

export default ScrollButton;