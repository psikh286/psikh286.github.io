import "./styles/main.css"

import { HashRouter as Router, Routes, Route } from "react-router-dom";



// import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import ProjectMain from "./pages/ProjectMain";
import ScrollToTop from "./components/utils/scrollToTop";
import Footer from "./components/footer/Footer";
import Upbtn from "./components/Upbtn/Upbtn";



function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:ids" element={<ProjectMain />} />
        </Routes>
      </Router>
      <Upbtn />
      <Footer />
    </div>
  );
}

export default App;
