import { Banner } from "../components/Banner";
import { Cardlist } from "../components/Cardlist";
import banner from '../images/HomeBanner.png';

export const Home = () => {
    return (
        <>
        <Banner homebanner={banner} title={"Chez vous, partout et ailleurs"} />
        <Cardlist />
        </>
    )
}