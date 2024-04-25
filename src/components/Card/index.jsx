import { NavLink } from "react-router-dom";
import './index.scss'

export const Card = () => {
    return (
        // <div className='card'>
        <NavLink to='/Fiche_Logement' className='card'>
            <div className='loctitle'>Titre de la location</div>
        </NavLink>
    )
}
