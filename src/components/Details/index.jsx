import logementdatas from '../../datas/Logementdatas.json'
import { Collapse } from '../Collapse'
import { Tags } from '../Tags'
import './index.scss'

export const Details = ({id}) => {
    const place = logementdatas.find(data => data.id === id);

    return (
            <div className='details-container'>
                <div className='place-title'>{place.title}</div>
                <div className='place-location'>{place.location}</div>
                <Tags id={id}/>
                <Collapse/>

            </div>
    )
}