import { NavLink } from "react-router-dom";
import './Erreur404.scss';
// import { Header } from "../components/Header/Header";
// import { Footer } from "../components/Footer/Footer";

export const Erreur404 = () => {
    return (
  
        <div className="container">
        {/* <Header/> */}
            <div className="E404">404</div>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to='/'>Retourner sur la page d’accueil.</NavLink>
        {/* <Footer/> */}
        </div>
    )
}