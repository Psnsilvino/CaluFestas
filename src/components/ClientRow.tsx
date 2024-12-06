import { HousePlus, Info } from 'lucide-react';
import React from 'react';
import { ClientsManagement } from '../interfaces/clientsManagement';
import { Link } from 'react-router-dom';


interface ClientRowProps {
  client: ClientsManagement;
}

const ClientRow: React.FC<ClientRowProps> = ({ client }) => {
  return (
    <tr className="border-b hover:bg-gray-50 transition">
      <td className="border p-3">{client.nome}</td>
      <td className="border p-3">{client.email}</td>
      <td className="border p-3">{client.telefone}</td>
      <td className="border p-3 text-center flex items-center justify-center gap-2">
        <Link to={`/clientes/${client._id}`}>
          <button className="text-gray-600 hover:text-blue-500">
            <Info />
          </button>
        </Link>
        <Link to={`/locacoes/adicionarLocacao/${client._id}`}>
          <button className="text-gray-600 hover:text-orange-500">
            <HousePlus />
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default ClientRow;