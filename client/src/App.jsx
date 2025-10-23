import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import BaseLayout from "./components/BaseLayout";
import HomePage from "./pages/home/Home";
import SearchPetsPage from "./pages/search-pets/SearchPets";
import PetDetailsPage from "./pages/PetDetails";
import ErrorPage from "./pages/ErrorPage";

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
                path: "pets/:id",
                Component: PetDetailsPage,
                // loader here for data
            },
            {
                path: "*",
                Component: ErrorPage,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
