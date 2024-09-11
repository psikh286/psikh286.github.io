import "./styles/main.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ScrollToTop from "./components/utils/scrollToTop";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
