import logo from '../../images/Logo_Footer.png';
import './index.scss';

export const Footer = () => {
    return (
        <div className="Footer">
            <img src={logo} alt="Logo Kasa"/>
            <p>2020 Kasa. All rights reserved</p>
        </div>
        
    )
}