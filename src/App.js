import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PredictForm from './components/PredictForm';
import VerificationResult from './components/VerificationResult';
import Login from './components/Login';
import Navbar from './components/Navbar';

function App() {
  const [userData, setUserData] = useState(null);

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Rota inicial - Login */}
        <Route path="/" element={<Login setUserData={setUserData} />} />

        {/* Rota de verificação - acessível mesmo sem userData */}
        <Route 
          path="/verificar" 
          element={<PredictForm userData={userData} />} 
        />

        {/* Rota para resultado da verificação */}
        <Route path="/resultado" element={<VerificationResult />} />

        {/* Redireciona para "/" caso rota não exista */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
