import './App.css';
import './styles/Header.css';
import './styles/Homepage.css';
import './styles/Footer.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from "./Components/SameWebsite/Header";
import Homepage from './Components/SameWebsite/Homepage';
import Footer from './Components/SameWebsite/Footer';

import leTilleul from './Components/Navigation/leTilleul';
import Réceptions from './Components/Navigation/Réceptions';
import DédiéauxProfessionnels from './Components/Navigation/DédiéauxProfessionnels';
import Portfolio from './Components/Navigation/Portfolio';
import Contact from './Components/Navigation/Contact';

function App() {
  return (
    
    <BrowserRouter>
      <div className="App">
          <Header/>
          <Routes>
            <Route path="/letilleul" element={<leTilleul />} />
            <Route path="/receptions" element={<Réceptions />} />
            <Route path="/forProfessionals" element={<DédiéauxProfessionnels />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Homepage/>
          <Footer/>
      </div>
    </BrowserRouter>
      
   
  );
}

export default App;


