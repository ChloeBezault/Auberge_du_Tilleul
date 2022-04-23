import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from "./Components/navbar/Navbar";
import Homepage from './Components/homepage/Homepage';
import Footer from './Components/footer/Footer';

import leTilleul from './Components/navbar/LeTilleul';
import Réceptions from './Components/navbar/Réceptions';
import DédiéauxProfessionnels from './Components/navbar/DédiéauxProfessionnels';
import AubergeDuTilleul from './Components/navbar/AubergeDuTilleul';
import Portfolio from './Components/navbar/Portfolio';
import ContactRéservations from './Components/navbar/ContactRéservations';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/leTilleul" element={<leTilleul />} />
          <Route path="/receptions" element={<Réceptions />} />
          <Route path="/forProfessionals" element={<DédiéauxProfessionnels />} />
          <Route index path="/" element={<AubergeDuTilleul />} />
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


