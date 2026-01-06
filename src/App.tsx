import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Contact from "./components/Contact";
import About from "./components/About";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
