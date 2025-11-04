import "./SearchPets.css";

import FrenchBulldog from "./search-dog-3.jpg";
import TwoDogs from "./search-dog-2.jpg";
import DogOnRug from "./search-dog-1.jpg";

function SearchPetsPage() {
    return (
        <div className="search-pets-wrapper">
            <div className="info-group">
                <div className="info-top">
                    <h1>Ready to adopt a new pet?</h1>
                    <p>Use our search tool to find a dog or cat best friend.</p>
                </div>
                <form className="info-form">
                    <div className="form-group">
                        <label htmlFor="zip">Zip Code:</label>
                        <input name="zip" id="zip" type="number" />
                    </div>
                    <div className="form-group">
                        <label
                            htmlFor="pet-species-select"
                            className="visually-hidden"
                        >
                            Select Pet:
                        </label>
                        <select
                            name="pet-species-select"
                            id="pet-species-select"
                        >
                            <button>
                                <selectedcontent></selectedcontent>
                            </button>
                            <option value="">Please select a pet</option>
                            <option value="dog">Dog</option>
                            <option value="cat">Cat</option>
                        </select>
                    </div>
                    <button className="form-submit-btn">Search</button>
                </form>
            </div>
            <div className="adoption-img-group">
                <img
                    src={FrenchBulldog}
                    alt="French bulldog looking ahead at camera"
                    className="adoption-img"
                />
                <img
                    src={TwoDogs}
                    alt="Two chocolate coat dogs staring outwards"
                    className="adoption-img"
                />
                <img
                    src={DogOnRug}
                    alt="Dog sitting by sunny window on soft, fluffy rug"
                    className="adoption-img"
                />
            </div>
        </div>
    );
}

export default SearchPetsPage;
