import { useState } from 'react';
import './App.css';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Achievements } from './components/sections/Achievements';
import "./index.css";
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
function App() {
  const [isLoaded, SetIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>{!isLoaded && <LoadingScreen onComplete={() => SetIsLoaded(true)} />}{" "}
    <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Home />
      <About />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />


    </div>
    </>  
  
  );
}

export default App
