
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 300, // Trigger animation earlier (when element is 200px from viewport)
      duration: 500,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="bg-radial-gradient min-w-[300px] scroll-smooth">
    <div className="sticky top-0 z-10 backdrop-blur-md"> <Navbar />
    </div>
      
      <div data-aos="zoom-in"><Hero /></div>
      <div data-aos="zoom-in" ><About /></div>
      <div data-aos="zoom in"><Skills /></div>
      <div data-aos="zoom-in"><Projects /></div>
      <div data-aos="zoom-in"><Contact /></div>
    </div>
  );
}

export default App;
