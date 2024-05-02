import logementdatas from '../../datas/Logementdatas.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './index.scss'

export const Rating = ({id}) => {
    const place = logementdatas.find(data => data.id === id);
    

    return (
        <>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        </>
        
    )
}