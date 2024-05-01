import './index.scss'
import { Card } from "../Card";
import logementdatas from '../../datas/Logementdatas.json'


export const Cardlist = () => {
    return (
        <div className='cardlist'>
            {logementdatas.map((data, index) => (
            <Card key={`${data.id}-${index}`} id={data.id}/>))}
            {/* <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card /> */}
        </div>
    )
}
