/* eslint-disable jsx-a11y/anchor-is-valid */

import { useEffect, useRef } from "react";

import { NavLink } from "react-router-dom";

import "./style.css"



const Navbar = () => {

    const activeLink = "navbar__links navbar__links--active";
    const normalLink = "navbar__links";

    const activeBtnRef = useRef(null);

    useEffect(() => {
        function magic() {
          if (activeBtnRef.current) {
            if (window.pageYOffset > 960) {
              activeBtnRef.current.style.margin = "0 0 0 62px";
            } else {
              activeBtnRef.current.style.margin = "0 0 0 -10px";
            }
          }
        }
      
        window.addEventListener("scroll", magic);
      
        return () => {
          window.removeEventListener("scroll", magic);
        };
      }, []);
      
    return (
        <nav className="navbar">
            <div className="navbar__container">
                <ul className="navbar__list">
                    <li className="navbar__list-main">
                        
                        <div ref={activeBtnRef} className="active-btn"></div>

                         <a href="#" className="navbar__links btn"> Home</a>
                         <a href="#section" className="navbar__links"> Portfolio</a>
                         <a href="#" className="navbar__links"> Contacts</a>
                        
                        
                        {/* <NavLink to="/" className={({isActive}) => 
                            isActive ? activeLink : normalLink
                        }>
                            Home
                        </NavLink>
                    </li>
                    <li className="navbar__list-main">
                        <NavLink to="/hgf"  className={({isActive}) => 
                            isActive ? activeLink : normalLink
                        }>
                            
                          Portfolio
    
                        </NavLink>
                        <a href="#section" className="navbar__links"> Portfolio</a>
                    </li>
                    <li className="navbar__list-main">
                        <NavLink to='/contacts' className={({isActive}) => 
                            isActive ? activeLink : normalLink
                        }>
                       Contacts
                        </NavLink> */}
                    </li>
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;