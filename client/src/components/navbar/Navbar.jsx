import { Link } from "react-router";

import "./Navbar.css";
import logo from "./logo-paw.svg";

function Navbar() {
    return (
        <header className="header-nav">
            <nav>
                <Link to="/" className="logo">
                    <span>Where's Fido</span>
                    <img src={logo} alt="Dog paw logo" />
                </Link>
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
