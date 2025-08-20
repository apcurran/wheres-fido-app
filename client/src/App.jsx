import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import BaseLayout from "./components/BaseLayout";
// pages
import HomePage from "./pages/Home";
import SearchPetsPage from "./pages/SearchPets";
import PetDetailsPage from "./pages/PetDetails";

const router = createBrowserRouter([
    {
        path: "/",
        Component: BaseLayout,
        children: [
            {
                index: true,
                Component: HomePage,
            },
            {
                path: "pets-search",
                Component: SearchPetsPage,
                // loader here for data
            },
            {
                path: "pet",
                Component: PetDetailsPage,
                // loader here for data
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
