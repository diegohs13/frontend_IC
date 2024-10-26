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
    texto: `Uma denúncia anônima revelou que grandes marcas de água mineral estariam comercializando produtos contaminados com uma substância tóxica que pode causar doenças neurológicas a longo prazo. Segundo fontes não confirmadas, amostras coletadas em diversas cidades apresentaram níveis de contaminação acima do permitido. A Agência Nacional de Vigilância Sanitária (Anvisa) estaria investigando o caso, mas ainda não se pronunciou oficialmente. Especialistas recomendam evitar o consumo de água engarrafada até que a situação seja esclarecida.`,
  },
  {
    id: 3,
    titulo: 'Especialistas Afirmam que Água Engarrafada Está Contaminada com Substância Tóxica',
    texto: `Ministério da Saúde anuncia aumento na vacinação contra a gripe

O Ministério da Saúde anunciou nesta segunda-feira um aumento de 25% na cobertura vacinal contra a gripe em todo o país. De acordo com a ministra da Saúde, Dra. Maria Oliveira, a meta foi superada graças a campanhas intensivas de conscientização realizadas em todo o Brasil. “Estamos felizes em ver que a população está respondendo bem às iniciativas de vacinação. Isso é fundamental para reduzir a carga sobre o sistema de saúde, especialmente durante o inverno”, afirmou a ministra. O governo prevê que, até o final do ano, mais de 80% da população estará vacinada contra o vírus da gripe. Especialistas em saúde pública comemoram o avanço, destacando a importância da vacina para prevenir complicações respiratórias, principalmente em grupos de risco, como idosos e crianças. A campanha de vacinação segue até o final de setembro, com postos móveis e parcerias com clínicas particulares em várias cidades do país.`,
  },
  {
    id: 4,
    titulo: 'NASA Oculta Informações sobre Impacto Imminente',
    texto: `Documentos vazados sugerem que um asteroide gigante, denominado 2024-XB, estaria em rota de colisão direta com a Terra. Segundo as informações não divulgadas oficialmente pela NASA, o impacto pode acontecer dentro dos próximos dois meses e destruir uma área equivalente a um continente. O governo estaria ocultando a informação para evitar pânico global. Grupos de ativistas pedem mais transparência e afirmam que a sociedade tem o direito de se preparar para o evento catastrófico.`,
  },
  {
    id: 5,
    titulo: 'Vacinas de COVID-19 possuem microchips para rastrear pessoas.',
    texto: `Teorias conspiratórias sugerem que vacinas estão sendo usadas para implantar microchips em indivíduos,
permitindo rastreamento em massa da população.`,
  },
  {
    id: 6,
    titulo: 'Cientistas brasileiros revelam cura definitiva para o câncer com ervas amazônicas.',
    texto: `Em uma reviravolta surpreendente, cientistas brasileiros anunciaram ter descoberto a cura definitiva para todos os tipos de câncer usando apenas ervas da Amazônia. Segundo o Dr. Carlos Mendes, líder da pesquisa, a erva conhecida como "Milagre Verde" foi testada em mais de 10 mil pacientes, todos curados em menos de 30 dias. "Nunca vimos algo assim na história da medicina", disse o Dr. Mendes em uma conferência. O governo brasileiro, no entanto, está bloqueando a divulgação dessa cura para proteger os interesses das grandes indústrias farmacêuticas. A erva, que cresce apenas em áreas remotas da floresta, está sendo secretamente comercializada em mercados alternativos. Milhares de pessoas ao redor do mundo já estão procurando pela "Milagre Verde", que está sendo vendida a preços exorbitantes. Autoridades de saúde pública ainda não comentaram sobre a descoberta, aumentando as suspeitas de um complô entre governos e corporações.`,
  },
  {
    id: 7,
    titulo: 'STF Discute Validade de Votos de Ministros Aposentados em Julgamentos Retomados',
    texto: `Os ministros do Supremo Tribunal Federal discutiram, nesta quinta-feira (24 outubro 2024), a possibilidade de alterar uma regra interna da Corte que, na retomada do julgamento dos processos, preserva o voto já apresentado por ministros, mesmo que eles já estejam aposentados. A mudança no Regimento foi feita em 2022. Na ocasião, a Corte definiu que os votos apresentados por ministros em julgamentos no plenário virtual continuariam valendo se o caso for levado para análise no plenário físico após a aposentadoria desse ministro`,
  },
  {
    id: 8,
    titulo: 'Vacina Experimental Causa Efeitos Colaterais em Milhares de Pessoas ao Redor do Mundo',
    texto: `Uma nova vacina experimental, aplicada em caráter emergencial em diversos países, estaria causando graves efeitos colaterais em milhares de pessoas. Relatos de perda de visão, paralisia temporária e problemas cardíacos surgiram em grupos de pacientes após a imunização. Médicos e pesquisadores têm alertado para os riscos de continuar a aplicação sem mais estudos clínicos. Autoridades de saúde afirmam que os casos estão sendo investigados, mas alertam para o risco de desinformação e alarmismo nas redes sociais.`,
  },
  {
    id: 9,
    titulo: 'Nunes Lidera com 49%, mas Vantagem sobre Boulos Diminui no 2º Turno em SP',
    texto: `Datafolha em SP, 2º turno: Nunes tem 49% e Boulos, 35%. Pesquisa Datafolha divulgada nesta quinta-feira (24) mostra Ricardo Nunes (MDB) com 49% das intenções de voto contra 35% de Guilherme Boulos (PSOL) no 2º turno da disputa pela Prefeitura de São Paulo. A margem de erro é de 3 pontos para mais ou para menos. Em relação à pesquisa anterior, divulgada em 17 de outubro, Nunes oscilou dois pontos para baixo (tinha 51%) e Boulos, dois pontos para cima (tinha 33%). Ambas as variações estão dentro da margem de erro, que é de três pontos para mais ou para menos. A vantagem de Nunes é a menor observada pelo Datafolha no segundo turno: em 10 de outubro, Nunes tinha 55%, e o Boulos, 33%; em 17 de outubro, a distância era de 18 pontos (51% a 33%), e agora é de 14 pontos.`
  },
  {
    id: 10,
    titulo: 'Gestão de Ricardo Nunes é Regular para 45%, e Vantagem sobre Boulos Diminui no 2º Turno',
    texto: `Datafolha: 26% aprovam, e 28% reprovam gestão de Ricardo Nunes na Prefeitura de SP. Outros 45% consideram o governo Nunes como regular; O Datafolha entrevistou 1.204 eleitores paulistanos entre os dias 22 e 23 de outubro. O nível de confiança é de 95%. A margem de erro é de três pontos para mais ou para menos. Nunes (MDB) à frente da Prefeitura de São Paulo é avaliada como ótima ou boa por 26% dos eleitores da cidade, enquanto 28% consideram o governo do atual prefeito como ruim ou péssimo. Outros 45% consideram o governo Nunes como regular; 2% não têm opinião sobre o tema. Em comparação com a pesquisa realizada no início de outubro, a avaliação do desempenho de Nunes ficou estável, com oscilações dentro da margem de erro: 25% de ótimo ou bom, 46% de regular e 27% de ruim ou péssimo. 2º turno
O levantamento mostra Nunes com 49% das intenções de voto, contra 35% de Boulos no 2º turno da disputa pela Prefeitura de São Paulo. A margem de erro é de 3 pontos para mais ou para menos. Em relação à pesquisa anterior, divulgada em 17 de outubro, Nunes oscilou dois pontos para baixo (tinha 51%), e Boulos dois pontos para cima (tinha 33%). Ambas as variações estão dentro da margem de erro. O Datafolha entrevistou 1.204 eleitores paulistanos entre os dias 22 e 23 de outubro. Encomendado pela TV Globo e pela Folha, o levantamento está registrado na Justiça Eleitoral sob o número TSE: SP-07600/2024. O nível de confiança é de 95%. A margem de erro é de três pontos para mais ou para menos.`
  },
  {
    id: 11,
    titulo: 'Hackers Invadem Sistema Bancário e Roubam R$ 2 Bilhões de Contas em Todo o Brasil',
    texto: `Um grupo de hackers internacionais invadiu o sistema de segurança dos principais bancos brasileiros, causando um rombo de R$ 2 bilhões em contas correntes e poupanças. Segundo fontes não identificadas, milhares de clientes tiveram suas economias esvaziadas em poucas horas. Especialistas em segurança digital afirmam que esse pode ser o maior ataque cibernético já registrado no Brasil. A Federação Brasileira de Bancos (Febraban) recomenda que clientes não acessem suas contas online até que o problema seja resolvido.`,
  },
  {
    id: 12,
    titulo: 'Restaurante Famoso Serviu Carne de Cavalo como Prato Principal',
    texto: `Uma denúncia chocante aponta que um renomado restaurante em São Paulo estaria substituindo carne bovina por carne de cavalo em alguns de seus pratos principais, enganando seus clientes. Ex-funcionários do local afirmam que a prática acontece há anos e que o estabelecimento buscava cortar custos com essa substituição ilegal. A Vigilância Sanitária abriu uma investigação e pode fechar o restaurante nos próximos dias. Consumidores indignados pedem esclarecimentos e ameaçam processar a rede.`,
  },
  {
    id: 13,
    titulo: 'Nunes e Boulos Empatam entre Eleitores Afetados por Falta de Luz em SP',
    texto: `Entre quem teve problemas com falta de luz em SP, Nunes tem 40% e Boulos, 39%, diz Quaest. 28% dos eleitores disseram que tiveram problemas de falta de luz nas últimas duas semanas na capital paulista. Para maioria dos eleitores, Enel foi principal responsável pelo apagão. Pesquisa mostra que Ricardo Nunes tem 44% das intenções de voto e Guilherme Boulos, 35%. A pesquisa Quaest divulgada nesta quarta-feira (23) mostra que, entre os eleitores que tiveram falta de luz nas últimas semanas, Ricardo Nunes (MDB) tem 40% das intenções de voto e Guilherme Boulos (PSOL), 39%. Nesses recortes a margem de erro é de 5 pontos para mais ou para menos para quem teve problemas e de 3 pontos para quem não teve problemas.`
  },
  {
    id: 14,
    titulo: 'Candidato do Republicanos em Diadema Declara Apoio ao PT, Contrariando Aliança de Tarcísio',
    texto: `Candidato derrotado de Tarcísio anuncia apoio ao PT no 2° turno em Diadema, na Grande SP. Gesiel Duarte é o presidente municipal do Republicanos na cidade, mesmo partido do governador de SP. Enquanto ele faz campanha para o petista Fillipi, Tarcísio apoia o adversário Taka Yamauchi (MDB), que venceu o 1° turno no município por uma diferença de apenas 2,3%. Faltando cinco dias para o 2° turno das eleições municipais, o candidato derrotado à Prefeitura de Diadema pelo Republicanos, Gesiel Duarte, anunciou apoio à reeleição do prefeito José de Filippi Júnior (PT) na cidade de Diadema, na Grande São Paulo. Filippi disputa o 2° turno contra Taka Yamauchi (MDB), que tem apoio do governador Tarcísio de Freitas, do mesmo Republicanos de Gesiel Duarte. Atualmente, Duarte é o presidente municipal do partido Republicanos em Diadema. Enquanto ele faz campanha para Fillipi do PT, Tarcísio tem feito campanha ao lado do adversário Taka Yamauchi. Os dois tiveram juntos nesta segunda-feira (21 outubro 2024), em uma caminhada no Centro da cidade.`
  },
  {
    id: 15,
    titulo: 'Fuad Noman Lidera com 46%, mas Vantagem sobre Engler Cai no 2º Turno',
    texto: `Datafolha em BH, 2º turno: Fuad tem 46%, e Engler, 39%. Em votos válidos – excluídos brancos e nulos e eleitores que se declararam indecisos –, Fuad Noman (PSD) tem 54%, e Bruno Engler, 46%. Margem de erro é de 3 pontos percentuais. Pesquisa Datafolha divulgada nesta quinta-feira (24) com as intenções de voto para prefeito de Belo Horizonte no 2º turno mostra Fuad Noman (PSD) na liderança, com 46%, e Bruno Engler (PL) na segunda posição, com 39%. Veja o resultado: Fuad Noman (PSD): 46% (eram 48%) Bruno Engler (PL): 39% (eram 41%) Em branco/ nulo/ nenhum: 10% (eram 8%) Não sabe: 5% (eram 4%). A pesquisa, contratada pela TV Globo e pela Folha de S.Paulo, foi realizada presencialmente com 910 pessoas de 16 anos ou mais em Belo Horizonte, nos dias 22 e 23 de outubro, e registrada na Justiça Eleitoral sob o protocolo MG-04815/2024. A margem de erro é de 3 pontos percentuais para mais ou para menos. Em comparação com o último levantamento Datafolha, divulgado em 10 de outubro, o atual prefeito, Fuad Noman, passou de 48% para 46%. Já o candidato do PL, Bruno Engler, passou de 41% para 39%.`
  },
  {
    id: 16,
    titulo: 'Gigantesco Enxame de Abelhas Mutantes Ameaça Cidades no Interior de São Paulo',
    texto: `Moradores de várias cidades do interior de São Paulo relataram ataques de um enxame de abelhas gigantes que teriam sofrido mutações após contato com pesticidas ilegais. Segundo testemunhas, as abelhas são maiores que o normal e extremamente agressivas, atacando pessoas e animais sem provocação. Vídeos compartilhados nas redes sociais mostram ruas desertas e escolas fechadas por medo dos ataques. Autoridades locais pediram para que a população evite áreas abertas até que o enxame seja contido. Entomologistas alertam que, se as abelhas continuarem se reproduzindo, pode haver uma “crise ecológica sem precedentes`
  },
  {
    id: 17,
    titulo: 'Governo Planeja Implantar Microchips em Todos os Brasileiros até 2025',
    texto: `Um suposto plano secreto do governo brasileiro prevê a implantação de microchips em todos os cidadãos até 2025, segundo documentos vazados por fontes anônimas. O projeto seria parte de um programa de “segurança digital” e permitiria monitorar a localização e atividades de cada pessoa em tempo real. Organizações de defesa dos direitos humanos protestaram contra a medida, alegando que se trata de uma violação das liberdades individuais. Especialistas em tecnologia afirmam que o microchip também poderia ser usado para restringir transações bancárias e controlar o acesso a serviços públicos. O governo nega a existência do projeto, mas não apresentou provas de que ele não está em andamento.`
  }
  
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