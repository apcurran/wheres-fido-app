import "./SearchPets.css";

function SearchPetsPage() {
    return (
        <div className="search-pets-wrapper">
            <div className="info-group">
                <div className="info-top"></div>
                <form className="info-form">
                    <div className="form-group">
                        <label htmlFor="zip">Enter Zip Code</label>
                        <input type="number" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pet-species-select">Select Pet:</label>
                        <select name="" id="pet-species-select">
                            <button>
                                <selectedcontent></selectedcontent>
                            </button>

                            <option value="dog">Dog</option>
                            <option value="cat">Cat</option>
                        </select>
                    </div>
                    <button className="form-submit-btn">Search</button>
                </form>
            </div>
        </div>
    );
}

export default SearchPetsPage;
