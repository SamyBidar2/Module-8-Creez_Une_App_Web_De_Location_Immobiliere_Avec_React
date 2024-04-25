import { Carrousel } from "../components/Carrousel"
import { logementdatas } from '../datas/Logementdatas'
import React, { useState } from 'react'


export const FicheLogement = () => {
    const [currentslide, setCurrentSlide] = useState(0);

    return (
        <>
        {logementdatas.map((datas, cover, title, id) =>(
        <Carrousel key={id} cover={datas.cover} title={title}/>
        
        ))} 
            {/* <Carrousel/> */}
        </>
        
    )
}