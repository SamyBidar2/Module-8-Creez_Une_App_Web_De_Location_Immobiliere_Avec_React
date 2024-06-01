import React, { useState } from 'react';
import './index.scss'
import leftArrow from '../../images/leftArrow.png'
import rightArrow from '../../images/rightArrow.png'



export const Slideshow = ({ place }) => {
    const [slide, setSlide] = useState(0);

    //fonctions pour changer de slide
    const nextSlide = () => {
        setSlide(slide === place.pictures.length -1 ? 0 : slide + 1)
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? place.pictures.length -1 : slide -1)
    };
    

    return (
        <div className='carousel'>
                
                {place.pictures.map((picture, index) => (
                    <img 
                        className={slide === index ? "slide" : "slide  slide-hidden"} //Si le slide n'a pas la même valeur que l'index, on le masque
                        key={`${place.id}-${index}`}
                        src={picture} 
                        alt={place.title} 
                    />
                ))}
                
                {place.pictures.length > 1 ? 
                    <>
                    <img className='arrow left' src={leftArrow} alt='leftarrow' onClick={prevSlide}/>
                    <img className='arrow right' src={rightArrow} alt='righttarrow' onClick={nextSlide}/>
                    <span className='slidenumber'>
                        {`${slide + 1}/${place.pictures.length}`}
                    </span> 
                    </>
                    :
                    null
                }    
            </div>      
    )
}
