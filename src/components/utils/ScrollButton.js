import arrowIcon from "../../img/upButton.svg";
import {scroller} from "react-scroll";
import "../../styles/downScrollButton.css"

function handleScrollToBlock(text){
    scroller.scrollTo(text, {
        duration: 600, // Длительность анимации в миллисекундах
        smooth: 'ease-in-out', // Тип анимации
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