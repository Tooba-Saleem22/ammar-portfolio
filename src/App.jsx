import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import ContactPage from "./pages/ContactPage";
import Services from "./pages/Services";

function App() {
  return (
    <Router>
      {/* Navbar fixed */}
      <Navbar />

      {/* Main content */}
      <div className="bg-black text-white min-h-screen pt-28">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Optional fallback for invalid route */}
          <Route
            path="*"
            element={<div className="text-center p-10">Page Not Found</div>}
          />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
