import React, { useState } from 'react';
import ClientRow from '../components/ClientRow';
import NavBar from '../components/NavBar';


interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const clientsData: Client[] = [
  { id: 1, name: 'Lucas Corradi', email: 'lucas@email.com', phone: '(61) 99999-9999' },
  { id: 2, name: 'Rafael Elias', email: 'rafael@email.com', phone: '(61) 99999-9999' },
  { id: 3, name: 'Silvino Padilha', email: 'silvino@email.com', phone: '(61) 99999-9999' },
  { id: 4, name: 'Fulanto de Tal', email: 'fulano.detal@email.com', phone: '(61) 99999-9999' },
];

const Clients: React.FC = () => {
  const [search, setSearch] = useState('');

  const filteredClients = clientsData.filter((client) =>
    client.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <NavBar />
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold flex items-center gap-2">
            <span role="img" aria-label="clients">👥</span> Clientes
          </h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Novo Cliente
          </button>
        </div>

        <div className="relative mb-4">
          <input
            type="text"
            placeholder="🔍 pesquisar..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 pl-10 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <table className="w-full border-collapse border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3 text-left font-medium">Nome</th>
              <th className="border p-3 text-left font-medium">Email</th>
              <th className="border p-3 text-left font-medium">Telefone</th>
              <th className="border p-3">Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredClients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>

        <button className="text-blue-500 mt-4 hover:underline">
          +Adicionar Cliente
        </button>
      </div>
    </>
  );
};

export default Clients;