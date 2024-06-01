import './index.scss'
import { Collapse } from "../Collapse";
import { collapsedatas } from '../../datas/Collapsedatas';

export const Collapselist = () => {
    return (
        <div className='collapselist'>
            {collapsedatas.map((datas, index) => (
                <Collapse key={`${datas}-${index}`} Collapsetitle={datas.title} Collapsetext={datas.text} />
                ))}
       </div> 
    )
}
