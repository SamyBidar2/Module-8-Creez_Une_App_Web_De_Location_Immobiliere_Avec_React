// import logementdatas from '../../datas/Logementdatas.json'
import './index.scss'

export const Host = ({placeHost}) => {
    return (
        <div className='host-container'>
            <div className='hostname'>{placeHost.name}</div>
            <img src={placeHost.picture} alt="profile de l'hôte"></img>
        </div>
    )
}

// export const Host = ({id}) => {
//     const place = logementdatas.find(data => data.id === id);
//     const hosts = place.host;

//     return (
//         <div className='host-container'>
            
//             <div className='hostname'>{hosts.name}</div>
//             <img src={hosts.picture} alt="profile de l'hôte"></img>

//         </div>
//     )
// }