import React, { useEffect, useState } from 'react';
import ClientRow from '../components/ClientRow';
import NavBar from '../components/NavBar';
import axios from 'axios';
import { ClientsManagement } from '../interfaces/clientsManagement';
import { Link } from 'react-router-dom';



// const clientsData: Client[] = [
//   { _id: "1", nome: 'Lucas Corradi', email: 'lucas@email.com', telefone: 61999999999 },
//   { _id: "2", name: 'Rafael Elias', email: 'rafael@email.com', telefone: 61999999999 },
//   { _id: "3", name: 'Silvino Padilha', email: 'silvino@email.com', telefone: '(61) 99999-9999' },
//   { _id: "4", name: 'Fulanto de Tal', email: 'fulano.detal@email.com', telefone: '(61) 99999-9999' },
// ];

const ClientsPage: React.FC = () => {
  const [clients, setClients] = useState<ClientsManagement[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [error, setError] = useState<string | null>(null); // Estado de erro

  useEffect(() => {
		const fetchData = async () => {
		  try {
			const response = await axios.get(`http://localhost:3000/api/clients`); // Substitua pela sua URL da API
			setClients(response.data);
		  } catch (err) {
			setError(`Erro ao carregar dados: ${err}`);
		  } finally {
			setLoading(false);
		  }
		};
	
		fetchData();
	  }, []);

    if (loading) {
      return (
        <>
          <NavBar/>
          <p>Carregando...</p>
        </>
      ); // Exibe uma mensagem de carregamento
    }
    
    if (error) {
      return (
        <>
          <NavBar/>
          <p>{error}</p>
        </>
      ); // Exibe uma mensagem de erro
    }

  const filteredClients = clients.filter((client) =>
    client.nome.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <NavBar />
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold flex items-center gap-2">
            <span role="img" aria-label="clients">👥</span> Clientes
          </h1>
          <Link to={"/clientes/adicionarCliente"}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
              Novo Cliente
            </button>
          </Link>
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
              <ClientRow key={client._id} client={client} />
            ))}
          </tbody>
        </table>
        
        
        <Link to={"/clientes/adicionarCliente"}>
          <button className="text-blue-500 mt-4 hover:underline">
            +Adicionar Cliente
          </button>
        </Link>
      </div>
    </>
  );
};

export default ClientsPage;