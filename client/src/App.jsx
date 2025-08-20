import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import BaseLayout from "./components/BaseLayout";
// pages
import Home from "./pages/Home";
import SearchPets from "./pages/SearchPets";
import PetDetails from "./pages/PetDetails";

const router = createBrowserRouter([
    {
        path: "/",
        Component: BaseLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "pets-search",
                Component: SearchPets,
                // loader here for data
            },
            {
                path: "pet",
                Component: PetDetails,
                // loader here for data
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
