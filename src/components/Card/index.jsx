import { NavLink } from "react-router-dom";
// import logementdatas from '../../datas/Logementdatas.json'
import './index.scss'

export const Card = ({logement}) => {
    // const place = logementdatas.find(data => data.id === id);
   
    return (
        <NavLink to={`/Fiche_Logement/${logement.id}`} className='card'>
            <div className='loctitle'>{logement.title}</div>
            <img src={logement.cover} alt={logement.title} />
        </NavLink>
    )
}
