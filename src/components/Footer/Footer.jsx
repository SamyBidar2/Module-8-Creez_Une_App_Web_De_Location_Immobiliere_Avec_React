import logo from '../../images/Logo_Footer.png';
import './Footer.scss';

export const Footer = () => {
    return (
        <div className="Footer">
            {/* remplacer par l'image du logo */}
            <img src={logo} alt="Logo Kasa"/>
            <p>2020 Kasa. All rights reserved</p>
        </div>
        
    )
}