import logementdatas from '../../datas/Logementdatas.json'
import { Collapse } from '../Collapse'
import { Tags } from '../Tags'
import { Rating } from '../Rating'
import { Host } from '../Host'
import './index.scss'

export const Details = ({id}) => {
    const place = logementdatas.find(data => data.id === id);
    const equipement = place.equipments;
    const description = place.description;

    return (
            <div className='details-container'>
                <div id='hostandtitle'>
                    <div className='title-container'>
                        <div className='place-title'>{place.title}</div>
                        <div className='place-location'>{place.location}</div>
                    </div>
                    <Host id={id}/>
                </div>
                
                <div id='tagsandrating'>
                    <Tags id={id}/>
                    <Rating id={id}/>
                </div>
                    
                <div className='collapse-container'>
                    <Collapse Collapsetitle={"Description"} Collapsetext={description} Size={'medium'}/>
                    <Collapse Collapsetitle={"Équipements"} Collapsetext={equipement} Size={'medium'}/>
                </div>
            </div>
    )
}