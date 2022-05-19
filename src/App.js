import './App.css';
import './index.css';
import './styles/Header.css';
import './styles/Homepage.css';
import './styles/Footer.css';
import './styles/Contact.css';
import './styles/NotreCuisine.css';
import './styles/NosSalons.css';
import './styles/RepasDaffaires.css';
import './styles/Emporte.css';
import './styles/ReceptionsExt.css';
import './styles/Evenementiel.css';
import './styles/ChezNous.css';
import './styles/Exterieur.css';
import './styles/Lieux.css';


import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import ScrollToTop from "./Components/SameWebsite/ScrollToTop";

import Header from "./Components/SameWebsite/Header";
import Homepage from './Components/SameWebsite/Homepage';
import Footer from './Components/SameWebsite/Footer';

import Portfolio from './Components/Navigation/Portfolio';
import Contact from './Components/Navigation/Contact';
import NotreCuisine from './Components/Pages/NotreCuisine';
import NosSalons from './Components/Pages/NosSalons';
import RepasDaffaires from './Components/Pages/RepasDaffaires';
import Emporte from './Components/Pages/Emporte';
import ChezNous from './Components/Pages/ChezNous';
import Exterieur from './Components/Pages/Exterieur';
import Evenementiel from './Components/Pages/Evenementiel';
import Lieux from './Components/Pages/Lieux';

function App() {
   

  return (
    <div className="App">
      <BrowserRouter>
        <div className="App-container">
          <Header/>
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/food" element={<NotreCuisine />} />
              <Route path="/halls" element={<NosSalons />} />
              <Route path="/BusinessLunch" element={<RepasDaffaires />} />
              <Route path="/TakeAway" element={<Emporte />} />
              <Route path="/inside" element={<ChezNous />} />
              <Route path="/outside" element={<Exterieur />} />
              <Route path="/events" element={<Evenementiel />} />
              <Route path="/locations" element={<Lieux />} />
            </Routes> 
          </ScrollToTop>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  
      
   
  );
}

export default App;


