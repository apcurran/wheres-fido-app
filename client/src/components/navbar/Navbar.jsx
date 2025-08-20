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
            </nav>
        </header>
    );
}

export default Navbar;
