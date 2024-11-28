import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.tsx';

const ClientDetails = () => {
  return (
    <>
      <NavBar />
      <div className="p-6">
        {/* Header da página */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-2xl">👤</span>
          <h1 className="text-2xl font-semibold">Cliente</h1>
        </div>

        {/* Informações do cliente */}
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600">Id do usuário</label>
              <p className="bg-gray-100 rounded-md p-2">#L121412</p>
            </div>
            <div>
              <label className="text-sm text-gray-600">Telefone</label>
              <p className="bg-gray-100 rounded-md p-2">(99) 99999-9999</p>
            </div>
            <div>
              <label className="text-sm text-gray-600">Nome</label>
              <p className="bg-gray-100 rounded-md p-2">Fulano de Tal</p>
            </div>
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <p className="bg-gray-100 rounded-md p-2">fulano@email.com</p>
            </div>
            <div className="md:col-span-2">
              <label className="text-sm text-gray-600">Endereço</label>
              <p className="bg-gray-100 rounded-md p-2">
                Rua Não Existe Número ABC Casa 123
              </p>
            </div>
          </div>

          {/* Botões de ação */}
          <div className="flex justify-end gap-2 mt-6">
            <Link to={"/clientes"}>
              <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md shadow hover:bg-gray-300">
                🔙 Voltar
              </button>
            </Link>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600">
              ✏️ Editar informações
            </button>
          </div>
        </div>

        {/* Histórico de locações */}
        <div className="bg-white shadow rounded-lg">
          <div className="bg-yellow-500 text-white rounded-t-lg px-6 py-3 flex items-center gap-2">
            <span className="text-xl">🚚</span>
            <h2 className="text-lg font-semibold">Histórico de locações</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-600 text-sm">
                  <th className="p-3 border-b">Id da locação</th>
                  <th className="p-3 border-b">Data de entrega</th>
                  <th className="p-3 border-b">Data de retirada</th>
                  <th className="p-3 border-b">Endereço</th>
                  <th className="p-3 border-b">Pagamento</th>
                  <th className="p-3 border-b">Produtos</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50 text-sm">
                  <td className="p-3 border-b">#1347</td>
                  <td className="p-3 border-b">22/09/2024</td>
                  <td className="p-3 border-b">23/09/2024</td>
                  <td className="p-3 border-b">
                    Rua Não Existe Número ABC Casa 123
                  </td>
                  <td className="p-3 border-b">PIX</td>
                  <td className="p-3 border-b">
                    <Link
                      to="/locacaoInfo"
                      className="text-blue-500 underline hover:text-blue-700"
                    >
                      Produtos ↗
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientDetails;
