import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Noticias from './Noticias'; // Importa o componente Noticias
import './PredictForm.css'; // CSS atualizado

const PredictForm = () => {
  const [texto, setTexto] = useState('');
  const [erro, setErro] = useState('');
  const [loading, setLoading] = useState(false); // Estado de carregamento
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro(''); // Limpa qualquer erro anterior

    if (texto.length < 150) {
      setErro('A notícia precisa ter pelo menos 150 caracteres.');
      return; // Impede o envio da requisição
    }

    setLoading(true);
    try {
      const response = await axios.post(
        'https://f706-2804-18-1053-4fe8-dd1a-627a-1dd0-3631.ngrok-free.app/predict',
        { texto }
      );
      navigate('/resultado', { state: response.data });
    } catch (error) {
      setErro('Erro ao classificar a notícia.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopiarTexto = (noticia) => {
    setTexto(noticia); // Preenche o campo de entrada com a notícia copiada
  };

  return (
    <div className="main-container">
      <div className="form-card">
        <h2>Verificar Notícia</h2>
        <p className="subtitle">Verifique se a notícia é verdadeira ou falsa em segundos!</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder="Insira o texto da notícia"
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Verificando...' : 'Verificar notícia'}
          </button>
        </form>
        {erro && <p className="error">{erro}</p>}
      </div>

      {/* Componente de Notícias */}
      <Noticias onCopiarTexto={handleCopiarTexto} />
    </div>
  );
};

export default PredictForm;
