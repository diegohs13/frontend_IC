import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './VerificationResult.css';

const VerificationResult = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { resultado = "Indefinido" } = state || {};

  return (
    <div className="result-container">
      <header className="header">
        <h1>Chill Tech News</h1>
      </header>

      <h2>Avaliação de Veracidade</h2>

      <div className="icon-container">
        {resultado === "Verdadeira" ? (
          <div className="svg-icon">
            <svg
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="greenGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="#66bb6a" />
                  <stop offset="100%" stop-color="#43a047" />
                </linearGradient>
              </defs>
              <circle cx="12" cy="12" r="10" fill="url(#greenGradient)" />
              <path
                d="M9 12.5L11.5 15L16 9"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <p>Esta notícia é verdadeira!</p>
          </div>
        ) : (
          <div className="svg-icon">
            <svg
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="redGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="#ef5350" />
                  <stop offset="100%" stop-color="#e53935" />
                </linearGradient>
              </defs>
              <circle cx="12" cy="12" r="10" fill="url(#redGradient)" />
              <path
                d="M15 9L9 15M9 9L15 15"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <p>Esta notícia é falsa!</p>
          </div>
        )}
      </div>

      <div className="buttons-container">
        <button className="new-check-button" onClick={() => navigate('/verificar')}>
          Verificar outra notícia
        </button>
        <button className="login-button" onClick={() => navigate('/')}>
          Voltar para o início
        </button>
      </div>
    </div>
  );
};

export default VerificationResult;
