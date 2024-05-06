import logementdatas from '../datas/Logementdatas.json'
import { useParams, Navigate} from 'react-router-dom'
import { Details } from "../components/Details"
import { Slideshow } from "../components/Slideshow"


export const FicheLogement = () => {
    const { id } = useParams(); 
    const place = logementdatas.find(data => data.id === id);

    return (
        <>
        { 
        place? 
        <> 
        <Slideshow id={id}/> 
        <Details id={id}/> 
        </>
        : 
        <Navigate to="/Erreur404" replace={true} />
        }   
        </>
        //les composants prennent l'id de la location à afficher, présent dans le fichier json
    )
}


/* <Navigate to="/Erreur404" replace={true} />
            <Slideshow id={id}/> 
            <Details id={id}/> */
        // <>
        //     {logementdatas.map((data, index) => (
        //     <>
        //     <Slideshow key={`${data.id}-${index}`} id={data.id}/>
        //     <Details key={`${data.id}-${index}`} id={data.id}/> 
        //     </>
        // ))}
        // </> 