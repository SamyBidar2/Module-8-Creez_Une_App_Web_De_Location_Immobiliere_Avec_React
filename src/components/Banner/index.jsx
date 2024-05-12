import './index.scss'

    export const Banner = ({ homebanner, title }) => {
    return (
        <div className='bannerbackground'>
            <img id='banner' src={homebanner} alt='Bannière'/>
            <h1>{title}</h1> 
        </div>
    )
}
