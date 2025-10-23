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
                    <div className="form-group"></div>
                    <button className="form-submit-btn">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default SearchPetsPage;
