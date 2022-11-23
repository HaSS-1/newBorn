import "./Hero.css"

import { PrimaryButton } from '../../components/index'
const Hero = () => {
    return (
        <div className="hero-main">
            <div className="hero-text">
                <h6 className="hero-subtitle">Welcome To NewBorn</h6>
                <h4 className="hero-title"><em>Discover</em> My New Born Projects Here</h4>
                <PrimaryButton>browse Now</PrimaryButton>
                {/* <div className="main-button">
                    <a href="browse.html">Discover Now</a>
                </div> */}
            </div>
        </div>
    )
}

export default Hero