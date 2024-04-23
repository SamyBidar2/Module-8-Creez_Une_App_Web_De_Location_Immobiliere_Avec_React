import { NavLink } from "react-router-dom";
import logo from '../../images/Logo_Header.png';
import './Header.scss';

export const Header = () => {
    return (
        <div className="Header">
            <img src={logo} alt="Logo Kasa"/>
            <nav>
                <NavLink to='/'>Acceuil</NavLink>
                <NavLink to='/A_Propos'>A_Propos </NavLink>
            </nav>
        </div>
    )
}