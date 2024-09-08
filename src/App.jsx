import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PaginationDemo from './components/PaginationDemo';

const App = () => {
  return (
    <div>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page/:pageNumber" element={<PaginationDemo />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
