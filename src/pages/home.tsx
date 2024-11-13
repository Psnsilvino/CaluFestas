import React from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';


const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="p-8">
        <div className="flex items-start justify-between">
          {/* Banner de boas-vindas com largura menor */}
          <div className="bg-blue-100 rounded-lg p-6 h-60 max-w-4xl">
            <h1 className="text-4xl font-bold text-blue-700 mb-2">
              Bem vindo ao painel de gerenciamento!
            </h1>
            <p className="text-blue-600 text-3xl">
              Aqui você pode consultar informações a respeito dos clientes e locações além de gerenciar o estoque.
            </p>
          </div>

          {/* Botão de Próxima Locação */}
          <button className="ml-4 bg-green-100 text-green-700 px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-green-200 transition">
            <span>Próxima Locação</span>
            <span>➡️</span>
          </button>
        </div>

        {/* Seção de Cartões */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          {/* Card Estoque */}
          <Link to={"/estoque"}>
            <div className="bg-orangeButton text-white rounded-lg p-6 flex flex-col items-center space-y-2 hover:bg-yellow-500 transition">
              <div className="text-4xl">📋</div>
              <span className="text-xl font-semibold">Estoque</span>
            </div>
          </Link>

          {/* Card Clientes */}
          <Link to={"/clientes"}>
            <div className="bg-orangeButton text-white rounded-lg p-6 flex flex-col items-center space-y-2 hover:bg-yellow-500 transition">
              <div className="text-4xl">👥</div>
              <span className="text-xl font-semibold">Clientes</span>
            </div>
          </Link>

          {/* Card Locações */}
          <Link to={"/locacoes"}>
            <div className="bg-orangeButton text-white rounded-lg p-6 flex flex-col items-center space-y-2 hover:bg-yellow-500 transition">
              <div className="text-4xl">🚚</div>
              <span className="text-xl font-semibold">Locações</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;