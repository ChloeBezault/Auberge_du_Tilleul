import './App.css';
import './styles/Header.css';
import './styles/Homepage.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from "./Components/header/Header";
import Homepage from './Components/homepage/Homepage';
import Footer from './Components/footer/Footer';

import leTilleul from './Components/header/leTilleul';
import Réceptions from './Components/header/Réceptions';
import DédiéauxProfessionnels from './Components/header/DédiéauxProfessionnels';
import AubergeDuTilleul from './Components/header/AubergeDuTilleul';
import Portfolio from './Components/header/Portfolio';
import ContactRéservations from './Components/header/ContactRéservations';

function App() {
  return (
    
    <BrowserRouter>
      <div className="App">
          <Header/>
          <Routes>
            <Route index path="/" element={<AubergeDuTilleul />} />
            <Route path="/leTilleul" element={<leTilleul />} />
            <Route path="/receptions" element={<Réceptions />} />
            <Route path="/forProfessionals" element={<DédiéauxProfessionnels />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<ContactRéservations />} />
          </Routes>
          <Homepage/>
          <Footer/>
      </div>
    </BrowserRouter>
      
   
  );
}

export default App;


