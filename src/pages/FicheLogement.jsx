import { useParams } from 'react-router-dom'
import { Details } from "../components/Details"
import { Slideshow } from "../components/Slideshow"


export const FicheLogement = () => {
    const { id } = useParams(); 
  
    return (
        // <>
        //     {logementdatas.map((data, index) => (
        //     <>
        //     <Slideshow key={`${data.id}-${index}`} id={data.id}/>
        //     <Details key={`${data.id}-${index}`} id={data.id}/> 
        //     </>
        // ))}
        // </> 
        <>
            <Slideshow id={id}/> 
            <Details id={id}/>
        </>
            
        
        //les composants prennent l'id de la location à afficher, présent dans le fichier json
    )
}