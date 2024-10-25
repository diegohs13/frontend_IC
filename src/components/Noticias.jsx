import React, { useState } from 'react';
import './Noticias.css'; // Importar o CSS

const noticias = [
  {
    id: 1,
    titulo: 'Campanha de doação de sangue atinge meta em tempo recorde',
    texto: ` Campanha de doação de sangue atinge meta em tempo recorde
    A campanha nacional de doação de sangue, organizada pelo Ministério da Saúde 
em parceria com o Hemocentro Nacional, atingiu a meta de doações previstas para o 
primeiro semestre de 2023 em tempo recorde. Segundo o secretário de Saúde, Pedro Costa, 
as doações aumentaram 40% em relação ao ano passado. 
A campanha continuará durante o segundo semestre com a meta de manter os estoques estáveis.`,
  },
  {
    id: 2,
    titulo: 'Ministério da Saúde anuncia aumento na vacinação contra a gripe',
    texto: `Ministério da Saúde anuncia aumento na vacinação contra a gripe

O Ministério da Saúde anunciou nesta segunda-feira um aumento de 25% na cobertura vacinal contra a gripe em todo o país. De acordo com a ministra da Saúde, Dra. Maria Oliveira, a meta foi superada graças a campanhas intensivas de conscientização realizadas em todo o Brasil. “Estamos felizes em ver que a população está respondendo bem às iniciativas de vacinação. Isso é fundamental para reduzir a carga sobre o sistema de saúde, especialmente durante o inverno”, afirmou a ministra. O governo prevê que, até o final do ano, mais de 80% da população estará vacinada contra o vírus da gripe. Especialistas em saúde pública comemoram o avanço, destacando a importância da vacina para prevenir complicações respiratórias, principalmente em grupos de risco, como idosos e crianças. A campanha de vacinação segue até o final de setembro, com postos móveis e parcerias com clínicas particulares em várias cidades do país.`,
  },
  {
    id: 3,
    titulo: 'Vacinas de COVID-19 possuem microchips para rastrear pessoas.',
    texto: `Teorias conspiratórias sugerem que vacinas estão sendo usadas para implantar microchips em indivíduos,
permitindo rastreamento em massa da população.`,
  },
];


const Noticias = ({ onCopiarTexto }) => {
    const [noticiaAtiva, setNoticiaAtiva] = useState(null);
  
    const abrirModal = (noticia) => setNoticiaAtiva(noticia);
    const fecharModal = () => setNoticiaAtiva(null);
  
    return (
      <div className="noticias-container">
        <h2>Notícias Disponíveis</h2>
        <div className="noticias-cards">
          {noticias.map((noticia) => (
            <div key={noticia.id} className="card">
              <h3>{noticia.titulo}</h3>
              <div className="button-group">
                <button onClick={() => abrirModal(noticia)} className="veja-mais">
                  Veja mais
                </button>
                <button
                  className="copy-icon"
                  onClick={() => onCopiarTexto(noticia.texto)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 96 960 960"
                    width="20"
                    fill="currentColor"
                  >
                    <path d="M200 936q-33 0-56.5-23.5T120 856V296h80v560h400v80H200Zm120-120q-33 0-56.5-23.5T240 736V216q0-33 23.5-56.5T320 136h400q33 0 56.5 23.5T800 216v520q0 33-23.5 56.5T720 816H320Zm0-80h400V216H320v520Zm0 0V216v520Z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
  
        {noticiaAtiva && (
          <div className="modal-overlay" onClick={fecharModal}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <h3>{noticiaAtiva.titulo}</h3>
              <p>{noticiaAtiva.texto}</p>
              <button className="fechar-modal" onClick={fecharModal}>
                Fechar
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default Noticias;