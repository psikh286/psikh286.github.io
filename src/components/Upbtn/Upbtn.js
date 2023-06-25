import upimg from '../../img/upButton.svg'
import './upbtn.css'

const Upbtn = () => {

    const upToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
    }
    
    return ( 
        <div className="upbtn" onClick={upToTop}>
            <img className='upbtn__img' src={upimg} alt="upimg"/>
        </div>
     );
}
 
export default Upbtn;