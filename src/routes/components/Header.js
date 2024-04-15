import { Link, NavLink } from "react-router-dom";
import logo from '../../images/Logo_Header.png';

export const Header = () => {
    return (
        <div className="Header">
            <img src={logo} alt="Logo Kasa"/>
            <nav>
                <NavLink to='/'>Home </NavLink>
                <NavLink to='/A_Propos'>A_Propos </NavLink>
            </nav>
        </div>
       
    )
}