import logementdatas from '../../datas/Logementdatas.json'
import { Collapse } from '../Collapse'
import { Tags } from '../Tags'
import { Rating } from '../Rating'
import './index.scss'

export const Details = ({id}) => {
    const place = logementdatas.find(data => data.id === id);
    const equipement = place.equipments;
    const description = place.description;

    return (
            <div className='details-container'>
                <div className='place-title'>{place.title}</div>
                <div className='place-location'>{place.location}</div>
                <Rating id={id}/>
                <Tags id={id}/>
                <div className='collapse-container'>
                    <Collapse Collapsetitle={"Description"} Collapsetext={description} Size={'medium'}/>
                    <Collapse Collapsetitle={"Équipements"} Collapsetext={equipement} Size={'medium'}/>
                </div>
                
            </div>
    )
}