import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/main/Main";
import About from "./components/About";
import Contact from "./components/Contact";
import Admin from "./components/Admin";
import Footer from "./components/Footer";
import type { PortfolioItem } from "./types";
import { MAIN_PORTFOLIO } from "./constants/portfolio";
import Portfolio from "./components/portfolio/Portfolio";
import BusinessAreas from "./components/businessAreas/BusinessAreas";
import ScrollToTop from "./components/common/ScrollToTop";

const App: React.FC = () => {
  const [isAdminView, setIsAdminView] = useState(false);
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>(() => {
    const saved = localStorage.getItem("main_portfolio");
    return saved ? JSON.parse(saved) : MAIN_PORTFOLIO;
  });

  useEffect(() => {
    localStorage.setItem("main_portfolio", JSON.stringify(portfolio));
  }, [portfolio]);

  const addPortfolio = (item: PortfolioItem) => {
    setPortfolio([item, ...portfolio]);
  };

  const deletePortfolio = (id: number) => {
    setPortfolio(portfolio.filter((p) => p.id !== id));
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen selection:bg-indigo-500 selection:text-white">
        <Navbar
          onAdminClick={() => setIsAdminView(!isAdminView)}
          isAdmin={isAdminView}
        />

        <Routes>
          <Route path="/" element={<Main portfolio={portfolio} />} />
          <Route path="/services" element={<BusinessAreas />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/admin"
            element={
              <Admin
                onAddPortfolio={addPortfolio}
                onDeletePortfolio={deletePortfolio}
              />
            }
          />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
