import { Collapse } from '../Collapse'
import { Tags } from '../Tags'
import { Rating } from '../Rating'
import { Host } from '../Host'
import './index.scss'

export const Details = ({place}) => {

    return (
            <div className='details-container'>
                <div id='hostandtitle'>
                    <div className='title-container'>
                        <div className='place-title'>{place.title}</div>
                        <div className='place-location'>{place.location}</div>
                    </div>
                    {/* <Host placeHost={place.host}/> */}
                </div>
                
                <div id='tagsandrating'>
                    <Tags placeTag={place.tags}/>
                    <div className='host-rating-container'>
                        <Host placeHost={place.host}/>
                        <Rating placeRating={place.rating}/>    
                    </div>
                    
                </div>
                    
                <div className='collapse-container'>
                    <Collapse Collapsetitle={"Description"} Collapsetext={place.description} />
                    <Collapse Collapsetitle={"Équipements"} Collapsetext={place.equipments} />
                </div>
            </div>
    )
}
