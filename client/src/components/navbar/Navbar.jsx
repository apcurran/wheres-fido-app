import { Link } from "react-router";

import logo from "./logo-paw.svg";

function Navbar() {
    return (
        <header className="header-nav">
            <nav>
                <div>
                    <Link to="/">
                        <span>Where's Fido</span>
                        <img src={logo} alt="Dog paw logo" />
                    </Link>
                </div>
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/pets-search">Search Pets</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
