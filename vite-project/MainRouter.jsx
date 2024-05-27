import React from "react";
// Import the BrowserRouter, Route and Link components
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home"; // Import the Home component
import About from "./src/about"; // Import the About component
import Education from "./src/education"; // Import the Education component
import Project from "./src/project"; // Import the Project component
import Contact from "./src/contact"; // Import the Contact component
import Service from "./src/service"; // Import the Service component

import { Routes } from "react-router-dom";
import Layout from "./layout";

const MainRouter = () => {
  return (
    <div>
        <Layout />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/project" element={<Project />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      
    </div>
  );
};

export default MainRouter;
