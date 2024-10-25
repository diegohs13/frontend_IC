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
    setLoading(true);
    try {
      const response = await axios.post(
        'https://0df5-2804-7f0-be40-b04e-b558-8728-1aa0-7375.ngrok-free.app/predict',
        { texto }
      );
      navigate('/resultado', { state: response.data });
    } catch (error) {
      setErro('Erro ao classificar a notícia.');
    } finally {
      setLoading(false);
    }
  };

  // Função para receber texto copiado do componente Noticias
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
