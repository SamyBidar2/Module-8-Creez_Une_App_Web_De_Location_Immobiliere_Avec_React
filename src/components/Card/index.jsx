import { NavLink } from "react-router-dom";
import logementdatas from '../../datas/Logementdatas.json'
import './index.scss'

export const Card = ({id}) => {
    const place = logementdatas.find(data => data.id === id);
   
    return (
        <NavLink to={`/Fiche_Logement/${id}`} className='card'>
            <div className='loctitle'>{place.title}</div>
            <img src={place.cover} alt={place.title} />
        </NavLink>
    )
}
