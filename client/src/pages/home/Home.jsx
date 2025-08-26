import ButtonSpecial from "../../components/button--special/ButtonSpecial";

import "./Home.css";

function HomePage() {
    return (
        <div className="home-page-grid">
            <div className="callout">
                <p>Search from our list of pets near your location.</p>
                <ButtonSpecial>Find Pets</ButtonSpecial>
            </div>
            <picture>
                {/* circles SVG here */}
                <img src="" alt="" />
            </picture>
            <picture>
                {/* blog SVG here */}
                <img src="" alt="" />
            </picture>
        </div>
    );
}

export default HomePage;
