import { Banner } from "../components/Banner";
import { Collapselist } from "../components/Collapselist";
import banner from '../images/AboutBanner.png';
import './Apropos.scss';

export const APropos = () => {
    return (
        <div className="Container" >
            <Banner homebanner={banner} />
            <Collapselist />
        </div>
    )
}