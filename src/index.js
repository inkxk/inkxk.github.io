import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import App from "./App";
import Education from "./education";
import Experience from "./Experience";
import Projects from "./projects";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/education",
        element: <Education />,
    },
    {
        path: "/experience",
        element: <Experience />,
    },
    {
        path: "/projects",
        element: <Projects />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
