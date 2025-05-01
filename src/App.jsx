import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home';



function App() {
  return (
    <>
    <Router>
     
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </Router>
     <ToastContainer position="top-right" autoClose={3000} />
     </>
  );
}

export default App;
