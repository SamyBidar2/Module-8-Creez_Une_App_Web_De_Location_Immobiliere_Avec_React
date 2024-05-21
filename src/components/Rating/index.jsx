import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './index.scss'

export const Rating = ({placeRating}) => {

    const stars = [];
    for (let i = 0; i <= 4; i++) {
        const starClass = i <= placeRating ? 'stars rated' : 'stars';
        stars[i]=(<FontAwesomeIcon key={i} id={`star${i}`} className={starClass} icon={faStar}/>);
    }
    console.log('nombre etoile = '+placeRating)

    return (
        <div className='stars-container'>
            {stars}
        </div>
        
    )
}
