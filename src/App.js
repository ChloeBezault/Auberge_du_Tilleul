import './App.css';
import './styles/Header.css';
import './styles/Homepage.css';
import './styles/Footer.css';


import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Header from "./Components/SameWebsite/Header";
import Homepage from './Components/SameWebsite/Homepage';
import Footer from './Components/SameWebsite/Footer';


import Receptions from './Components/Navigation/Receptions';
import DedieauxProfessionnels from './Components/Navigation/DedieauxProfessionnels';
import Portfolio from './Components/Navigation/Portfolio';
import Contact from './Components/Navigation/Contact';
import LeTilleul from './Components/Navigation/LeTilleul';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App-container">
          <Header/>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/letilleul" element={<LeTilleul />} />
              <Route path="/receptions" element={<Receptions />} />
              <Route path="/forProfessionals" element={<DedieauxProfessionnels />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes> 
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  
      
   
  );
}

export default App;


