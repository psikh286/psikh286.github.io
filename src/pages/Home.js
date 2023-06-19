import About from "../components/about/About";
import Header from "../components/header/Header";
import Projects from "./Projects";
import Navbar from "./../components/navbar/Navbar"

const Home = () => {
    return ( 
        <div className="home__container">
            <Navbar />
            <Header />
            <Projects />
            <About />
        </div>
     );
}
 
export default Home;

