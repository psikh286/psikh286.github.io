import About from "../components/about/About";
import Header from "../components/header/Header";
import Projects from "../components/projects/Projects";
import Navbar from "./../components/navbar/Navbar"

const HomePage = () => {
    return ( 
        <div className="home__container">
            <Header/>
            <Navbar/>
            <About/>
            <Projects/>
        </div>
     );
}
 
export default HomePage;