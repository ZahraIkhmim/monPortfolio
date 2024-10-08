// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Accueil from './components/Accueil';
import APropos from './components/APropos';
import Competences from './components/Competences';
import Contact from './components/Contact';
import ProjetData from './components/ProjetData';
import './App.css'; // Import du fichier CSS

function App() {
  return (
    <Router>
      <div className="App">
        {/* Menu de navigation */}
        <nav>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/a-propos">À Propos</Link></li>
            <li><Link to="/competences">Compétences</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/projet-data">Projet Data</Link></li>
          </ul>
        </nav>

        {/* Définir les routes */}
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/competences" element={<Competences />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projet-data" element={<ProjetData />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
