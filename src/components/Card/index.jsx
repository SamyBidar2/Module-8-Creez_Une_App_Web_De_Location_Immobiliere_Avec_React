import { NavLink } from "react-router-dom";
import './index.scss'

export const Card = ({logement}) => {
   
    return (
        <NavLink to={`/Fiche_Logement/${logement.id}`} className='card'>
            <div className='loctitle'>{logement.title}</div>
            <img src={logement.cover} alt={logement.title} />
        </NavLink>
    )
}
