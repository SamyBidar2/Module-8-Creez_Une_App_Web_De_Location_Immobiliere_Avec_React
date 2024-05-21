import logementdatas from '../datas/Logementdatas.json'
import { useParams, Navigate} from 'react-router-dom'
import { Details } from "../components/Details"
import { Slideshow } from "../components/Slideshow"


export const FicheLogement = () => {
    const { id } = useParams(); 
    const logement = logementdatas.find(data => data.id === id);

    return (
        <>
            { 
            logement? 
            <> 
                <Slideshow place={logement}/> 
                <Details place={logement}/>
            </>
            : 
            <Navigate to="/Erreur404" replace={true} />
            }   
        </>

    )
}
