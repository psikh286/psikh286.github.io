import upimg from '../../img/icons8-up-arrow-50.png'
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
        <div className="upbtn">
            <div className="upbtn__container" onClick={upToTop}>
                <img className='upbtn__img' src={upimg} alt="upimg" />
            </div>
        </div>
     );
}
 
export default Upbtn;