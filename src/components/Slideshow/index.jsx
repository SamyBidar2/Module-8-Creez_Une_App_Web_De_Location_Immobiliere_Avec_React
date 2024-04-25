import React, { useState } from 'react';
import logementdatas from '../../datas/Logementdatas.json'
import './index.scss'
import leftArrow from '../../images/leftArrow.png'
import rightArrow from '../../images/rightArrow.png'



export const Slideshow = ({id}) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === pictures.length -1 ? 0 : slide + 1)
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? pictures.length -1 : slide -1)
    };
    
    const place = logementdatas.find(data => data.id === id); //permet de trouver dans le fichier Json l'élément par son id
    const pictures = place.pictures;

    return (
        <div className='carousel'>
                <img className='arrow left' src={leftArrow} alt='leftarrow' onClick={prevSlide}/>
                
                {pictures.map((picture, index) => (
                    <img 
                        className={slide === index ? "slide" : "slide  slide-hidden"} 
                        key={index} 
                        src={picture} 
                        alt={place.title} 
                    />
                ))}
    
                <img className='arrow right' src={rightArrow} alt='righttarrow' onClick={nextSlide}/>
    
                <span className='slidenumber'>
                    {`${slide + 1}/${pictures.length}`}
                </span> 
            </div>      
    )
}



// export const Carousel = ({cover, title}) => {
//     return (
//         <div className='carousel'>
//              {logementdatas.map((datas, id) =>
//             ( <img key={id} src={datas.cover} alt={datas.title} />))}
//             <img className='slide' src={cover} alt={title} />
//             <img className='arrow left' src={leftArrow} alt='leftarrow'/>
//             <img className='arrow right' src={rightArrow} alt='righttarrow'/>
//         </div>
//     )
// }