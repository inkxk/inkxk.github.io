import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import App from "./App";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // basename="https://inkxk.github.io/portfolio/"
    <BrowserRouter basename="/">
        <Navbar />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="education" element={<Education />} />
                <Route path="experience" element={<Experience />} />
                <Route path="projects" element={<Projects />} />
            </Routes>
    </BrowserRouter>
);
