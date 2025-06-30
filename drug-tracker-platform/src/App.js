    // src/App.js
    import React from 'react';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import HomePage from './pages/HomePage';
    import AboutPage from './pages/AboutPage';
    import AfricaPharma from './pages/AfricaPharma';
    
    function App() {
      return (
        <Router>
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/africapharma" element={<AfricaPharma />} />
            {/* Add more routes for other pages */}
          </Routes>
        </Router>
      );
    }

    export default App;
