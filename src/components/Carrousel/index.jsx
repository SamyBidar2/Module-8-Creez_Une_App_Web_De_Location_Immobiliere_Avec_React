// import { logementdatas } from '../../datas/Logementdatas'
// import React, { useState } from 'react';
import './index.scss'
import leftArrow from '../../images/leftArrow.png'
import rightArrow from '../../images/rightArrow.png'

export const Carrousel = ({cover, title}) => {
    return (
        <div className='background'>
            {/* {logementdatas.map((datas, id) =>
            ( <img key={id} src={datas.cover} alt={datas.title} />))} */}
            <img src={cover} alt={title} />
            <img className='arrow left' src={leftArrow} alt='leftarrow'/>
            <img className='arrow right' src={rightArrow} alt='righttarrow'/>
        </div>
    )
}
