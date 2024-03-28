import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/common/Footer.tsx';
import Header from './components/common/Header.tsx';
import CartPage from './pages/CartPage.tsx';
import CatalogPage from './pages/CatalogPage.tsx';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path='/catalog' element={<CatalogPage />}/>
                    <Route path='/cart' element={<CartPage />} />
                    <Route path='' element={<CatalogPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
        
    );
}

export default App;
