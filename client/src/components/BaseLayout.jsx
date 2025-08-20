import { Outlet } from "react-router";
import Navbar from "./navbar/Navbar";

function BaseLayout() {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default BaseLayout;
