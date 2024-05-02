import logementdatas from '../../datas/Logementdatas.json'
import './index.scss'

export const Rating = ({id}) => {
    const place = logementdatas.find(data => data.id === id);
    const tags = place.tags;

    return (
            <div className='tags-container'>
                {tags.map((tag, index) => (
                    <div className='tag' key= {`${place.id}-${index}`}> {tag} </div>
                ))}
            </div>
    )
}