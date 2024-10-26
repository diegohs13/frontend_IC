import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = ({ setUserData }) => {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [telefone, setTelefone] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://e413-2804-7f0-be40-b04e-b558-8728-1aa0-7375.ngrok-free.app/login', {
        nome_completo: nomeCompleto.trim(),
        telefone: telefone.trim(),
      });

      setUserData({ nomeCompleto, telefone });
      navigate('/verificar');
    } catch (error) {
      console.error('Erro na requisição:', error);
      setErro('Erro ao salvar os dados de participação.');
    }
  };

  const handleCancel = () => {
    navigate('/verificar');
  };

  return (
    <div className="main-container">
      <div className="form-wrapper">
        <div className="form-card">
          <h2>Participe do Sorteio de uma Alexa!</h2>
          <p>Preencha os campos abaixo para concorrer ao sorteio. Boa sorte!</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={nomeCompleto}
              onChange={(e) => setNomeCompleto(e.target.value)}
              placeholder="Seu Nome Completo"
              required
            />
            <input
              type="tel"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              placeholder="Seu Telefone (com DDD)"
              required
            />
            <div className="qr-code-container">
              <img
                src="https://via.placeholder.com/150"
                alt="QR Code Exemplo"
                className="qr-code"
              />
              <p>Escaneie o QR Code acima e vote em Chill Tech para participar!</p>
            </div>
            <button type="submit">Participar</button>
          </form>

          <button type="button" className="cancel-button" onClick={handleCancel}>
            Não Participar
          </button>

          {erro && <p className="error">{erro}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;