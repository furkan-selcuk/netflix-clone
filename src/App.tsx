import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Home from './pages/Home';
import Browse from './pages/Browse';
import MovieDetail from './pages/MovieDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App bg-netflix-black min-h-screen">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={
            <>
              <Navbar />
              <Home />
            </>
          } />
          <Route path="/browse" element={
            <>
              <Navbar />
              <Browse />
            </>
          } />
          <Route path="/movie/:id" element={
            <>
              <Navbar />
              <MovieDetail />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
