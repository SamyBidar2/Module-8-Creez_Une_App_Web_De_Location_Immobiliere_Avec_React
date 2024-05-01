import './index.scss';
import arrow from '../../images/arrow.png';
import { useState } from 'react';



export const Collapse = ({Collapsetitle,Collapsetext,Size}) => {

    const [arrowUp,setArrowUp] = useState(true);
    

    function handleClick() {
        console.log('✨ Ceci est un clic ✨');
        setArrowUp(!arrowUp);
    }
    
    return (
        // {`${size} main ${type}`}
        <div className={`collapse ${Size}`}>
            <div className='topbar'>
                <div className='collapsetitle'>{Collapsetitle}</div>
                <img id='arrow' className={arrowUp ? 'updown showtext': 'downup HideText'} src={arrow} alt='arrow' onClick={handleClick}/>
            </div>
            <div id='textcontainer' className={arrowUp ? 'hidetext': 'showtext'} >{Collapsetext}</div>
        </div>
        
    )
}
