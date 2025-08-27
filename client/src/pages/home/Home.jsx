import ButtonSpecial from "../../components/button--special/ButtonSpecial";

import "./Home.css";
import DogLookingUp from "./dog-look-up__min.avif";
import DogStaringAhead from "./hero-landing-dog__min.avif";

function HomePage() {
    return (
        <div className="home-page-grid">
            <div className="callout">
                <p>Search from our list of pets near your location.</p>
                <ButtonSpecial>Find Pets</ButtonSpecial>
            </div>
            <picture>
                {/* circles SVG here as before pseudo-elem */}
                <img src={DogLookingUp} alt="Dog looking upwards" />
            </picture>
            <picture>
                <img
                    src={DogStaringAhead}
                    alt="Dog staring ahead at viewport"
                    className="blob-dog-img"
                />
            </picture>
        </div>
    );
}

export default HomePage;
