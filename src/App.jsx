import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import YolkedYummies from './pages/YolkedYummies.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import FlavourOfTheMonth from './pages/FlavourOfTheMonth.jsx';

function App() {
  return (
    <Router>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about-us" element={<YolkedYummies />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/flavour-of-the-month" element={<FlavourOfTheMonth />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
