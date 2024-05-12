// import logementdatas from '../../datas/Logementdatas.json'
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


// export const Rating = ({id}) => {
//     const place = logementdatas.find(data => data.id === id);
//     const rating = place.rating;
    
//     const stars = [];
//     for (let i = 1; i <= 5; i++) {
//         const starClass = i <= rating ? 'stars rated' : 'stars';
//         stars.push(<FontAwesomeIcon key={i} id={`star${i}`} className={starClass} icon={faStar} />);
//     }
//     console.log('nombre etoile = '+rating)

//     // for (let i=1; i<= rating; i++)
//     // {
//     //     starcalsses = 'sta'
//     // }

//     return (
//         <div className='stars-container'>
//             {stars}
//             {/* <FontAwesomeIcon  id='star1' className='stars' icon={faStar} />
//             <FontAwesomeIcon  id='star2' className='stars' icon={faStar} />
//             <FontAwesomeIcon  id='star3' className='stars' icon={faStar} />
//             <FontAwesomeIcon  id='star4' className='stars' icon={faStar} />
//             <FontAwesomeIcon  id='star5' className='stars' icon={faStar} /> */}
//         </div>
        
//     )
// }