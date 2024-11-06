import React from 'react';
import NavBar from '../components/NavBar';


const LocacaoForm: React.FC = () => {
  return (
    <>
        <NavBar />
        <div className="p-6 bg-white shadow-md rounded-lg">
        {/* Título */}
        <div className="flex items-center mb-4">
            <span className="text-2xl font-bold mr-2">📦</span>
            <h2 className="text-2xl font-semibold">Locações</h2>
        </div>

        {/* Campos de Entrada */}
        <div className="grid grid-cols-3 gap-4 mb-8">
            <div>
            <label className="block text-gray-700">Id da locação</label>
            <input type="text" className="w-full p-2 border rounded-md bg-gray-200" />
            </div>
            <div>
            <label className="block text-gray-700">Data de entrega</label>
            <input type="date" className="w-full p-2 border rounded-md bg-gray-200" />
            </div>
            <div>
            <label className="block text-gray-700">Data de retirada</label>
            <input type="date" className="w-full p-2 border rounded-md bg-gray-200" />
            </div>
            <div>
            <label className="block text-gray-700">Cliente</label>
            <input type="text" className="w-full p-2 border rounded-md bg-gray-200" />
            </div>
            <div>
            <label className="block text-gray-700">Pagamento</label>
            <input type="text" className="w-full p-2 border rounded-md bg-gray-200" />
            </div>
            <div>
            <label className="block text-gray-700">Preço total</label>
            <input type="text" className="w-full p-2 border rounded-md bg-gray-200" />
            </div>
            <div className="col-span-2">
            <label className="block text-gray-700">Endereço</label>
            <input type="text" className="w-full p-2 border rounded-md bg-gray-200" />
            </div>
            <div className="flex items-center">
            <label className="text-gray-700 mr-2">Concluída</label>
            <input type="checkbox" className="h-5 w-5" />
            </div>
        </div>

        {/* Tabela de Produtos */}
        <div className="mt-6 bg-gray-200 rounded-lg">
            <div className="bg-orange-400 text-white font-semibold p-3 rounded-t-lg">Produtos alugados</div>
            <table className="w-full bg-white rounded-b-lg">
            <thead>
                <tr className="text-left border-b">
                <th className="p-3">Produto</th>
                <th className="p-3">Quantidade</th>
                <th className="p-3">Preço</th>
                </tr>
            </thead>
            <tbody>
                {/* Linha de exemplo */}
                <tr className="border-t">
                <td className="p-3">Exemplo Produto</td>
                <td className="p-3">1</td>
                <td className="p-3">R$ 50,00</td>
                </tr>
                {/* Adicione mais linhas conforme necessário */}
            </tbody>
            </table>
        </div>
        </div>
    </>
  );
};

export default LocacaoForm;
