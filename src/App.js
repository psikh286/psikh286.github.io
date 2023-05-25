import "./styles/main.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import ProjectMain from "./pages/ProjectMain";
import ScrollToTop from "./components/utils/scrollToTop";



function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectMain />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
