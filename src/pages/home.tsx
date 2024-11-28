import React from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';


const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center bg-gray-100 w-full h-screen pt-6">
        {/* Caixa de Boas-Vindas */}
        <div className="bg-blue-100 text-center p-6 rounded-lg shadow-md w-full max-w-4xl mb-10">
          <h1 className="text-2xl font-bold text-blue-700 mb-4">
            Bem-vindo ao painel de gerenciamento!
          </h1>
          <p className="text-blue-600">
            Aqui você pode consultar informações sobre clientes, locações e garantir que o
            gerenciamento do estoque seja feito de maneira muito mais prática e eficiente.
            Além disso, na aba de LOCAÇÕES, é possível acessar todas as informações necessárias
            para uma entrega sem riscos de erros.
          </p>

        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full px-6 max-w-5xl mb-10">
          {/* Card Estoque */}
          <Link to={"/estoque"}>
            <div className="bg-yellow-400 text-white p-6 rounded-lg shadow-md flex flex-col items-center gap-4 hover:bg-yellow-500 transition-all">
              <div className="text-4xl">📄</div>
              <h2 className="text-xl font-bold">Estoque</h2>
            </div>
          </Link>

          {/* Card Clientes */}
          <Link to={"/clientes"}>
            <div className="bg-yellow-400 text-white p-6 rounded-lg shadow-md flex flex-col items-center gap-4 hover:bg-yellow-500 transition-all">
              <div className="text-4xl">👥</div>
              <h2 className="text-xl font-bold">Clientes</h2>
            </div>
          </Link>

          {/* Card Locações */}
          <Link to={"/locacoes"}>
            <div className="bg-yellow-400 text-white p-6 rounded-lg shadow-md flex flex-col items-center gap-4 hover:bg-yellow-500 transition-all">
              <div className="text-4xl">🚛</div>
              <h2 className="text-xl font-bold">Locações</h2>
            </div>
          </Link>
        </div>

        {/* Botão Próxima Locação */}
        <div className="w-full max-w-5xl px-6 flex justify-start">
          <button className="bg-green-100 text-green-700 px-4 py-4 rounded-full flex items-center gap-2 shadow-md hover:bg-green-200 transition-all">
            Próxima Locação <span>➡️</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;