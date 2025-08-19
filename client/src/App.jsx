import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import BaseLayout from "./components/BaseLayout";
import Home from "./pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        Component: BaseLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
