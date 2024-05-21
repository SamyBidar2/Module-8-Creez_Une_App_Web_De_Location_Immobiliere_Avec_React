import './index.scss'

export const Tags = ({placeTag}) => {
    
    return (
        <div className='tags-container'>
            {placeTag.map((tag, index) => (
                <div className='tag' key={`${index}-${tag}`}>{tag}</div>
            ))}
        </div>
    );
}
