import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import "./App.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello app!</div>,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
