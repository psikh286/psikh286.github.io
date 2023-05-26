/* eslint-disable jsx-a11y/anchor-is-valid */

import { NavLink } from "react-router-dom";

import "./style.css"



const Navbar = () => {

    const activeLink = "navbar__links navbar__links--active";
    const normalLink = "navbar__links";


    return ( 
        <nav className="navbar">
            <div className="navbar__container">
                <ul className="navbar__list">
                    <li className="navbar__list-main">
                        <NavLink to="/" className={({isActive}) => 
                            isActive ? activeLink : normalLink
                        }>
                            Home
                        </NavLink>
                    </li>
                    <li className="navbar__list-main">
                        {/* <NavLink to="/hgf"  className={({isActive}) => 
                            isActive ? activeLink : normalLink
                        }>
                            
                          Portfolio
    
                        </NavLink> */}
                        <a href="#section" className="navbar__links"> Portfolio</a>
                    </li>
                    <li className="navbar__list-main">
                        <NavLink to='/contacts' className={({isActive}) => 
                            isActive ? activeLink : normalLink
                        }>
                       Contacts
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;