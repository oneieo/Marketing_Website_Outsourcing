import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Contact from "./components/Contact";
import About from "./components/About";
import Admin from "./components/Admin";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useState } from "react";

const App: React.FC = () => {
  const [isAdminView, setIsAdminView] = useState(false);
  return (
    <BrowserRouter>
      <Navbar
        onAdminClick={() => setIsAdminView(!isAdminView)}
        isAdmin={isAdminView}
      />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/admin"
          element={
            <Admin
              onAddPortfolio={() => {}}
              portfolio={[]}
              onDeletePortfolio={() => {}}
            />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
