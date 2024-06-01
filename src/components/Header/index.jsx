import { NavLink } from "react-router-dom";
import logo from '../../images/Logo_Header.png';
import './index.scss';

export const Header = () => {
    return (
        <div className="Header">
            <img src={logo} alt="Logo Kasa"/>
            <nav>
                <NavLink to='/'>Accueil</NavLink>
                <NavLink to='/A_Propos'>A Propos </NavLink>
            </nav>
        </div>
    )
}