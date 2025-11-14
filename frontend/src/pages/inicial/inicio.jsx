import { Link } from 'react-router-dom';
import './inicio.scss';
import Botao from '../../components/botaoo/botaoir.jsx';

export default function Inicio() {
  return (
    <div className="inicio-container">

      <div className="inicio-content">
        <h1 className="titulo-game">trabalho 4bimestre – robson</h1>
        <p className="descricao">
          Bem-vindo ao portal gamer! Entre para o mundo onde jogadores, rankings,
          conquistas e desafios se encontram. Explore missões, gerencie perfis
          e acesse a área administrativa do sistema.
        </p>
        <Botao />
      </div>

      <section className="destaques">
        <h2>Jogos em Destaque</h2>
        <div className="card-container">

          <div className="game-card">
            <img src="https://i.imgur.com/kq7cB0S.png" alt="Cyber Hero" />
            <h3>Cyber Hero</h3>
            <p>Aventura futurista cheia de batalhas e upgrades lendários.</p>
            <button className="btn-jogar">Jogar</button>
          </div>

          <div className="game-card">
            <img src="https://i.imgur.com/QpT2Q22.png" alt="Galaxy War" />
            <h3>Galaxy War</h3>
            <p>Lute contra naves alienígenas e conquiste novas galáxias.</p>
            <button className="btn-jogar">Jogar</button>
          </div>

          <div className="game-card">
            <img src="https://i.imgur.com/b5bnQ8p.png" alt="Battle Arena" />
            <h3>Battle Arena</h3>
            <p>Batalhas multiplayer em tempo real com rankings mundiais.</p>
            <button className="btn-jogar">Jogar</button>
          </div>

        </div>
      </section>

      <section className="avatar-area">
        <img 
          className="avatar"
          src="https://i.imgur.com/jSfLZ1l.png"
          alt="Mascote"
        />
        <div>
          <h2>Seu Guia Virtual</h2>
          <p>Eu sou Byte, seu assistente virtual neste mundo de games!  
          Clique em iniciar para desbloquear seu primeiro desafio.</p>
        </div>
      </section>

      <section className="novidades">
        <h2> Novidades da Semana</h2>
        <ul>
          <li>Novo sistema de login atualizado.</li>
          <li>Área administrativa com painel de usuários.</li>
          <li>Ranking de jogadores adicionado.</li>
          <li>Suporte a novos temas visuais.</li>
        </ul>
      </section>

      <footer className="inicio-footer">
        <Link to="/cadastroAdmin" className="btn-admin">
          Área Administrativa
        </Link>
      </footer>

    </div>
  );
}
