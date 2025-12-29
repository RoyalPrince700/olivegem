import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import GlobalPresence from './pages/GlobalPresence';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import ESG from './pages/ESG';
import Media from './pages/Media';

function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans selection:bg-og-gold selection:text-og-dark flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/global-presence" element={<GlobalPresence />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/esg" element={<ESG />} />
            <Route path="/media" element={<Media />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
