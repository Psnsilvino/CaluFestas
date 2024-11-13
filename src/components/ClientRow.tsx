import { PencilLine, Info } from 'lucide-react';
import React from 'react';
import { ClientsManagement } from '../interfaces/clientsManagement';


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
        <button className="text-gray-600 hover:text-blue-500">
          <Info />
        </button>
        <button className="text-gray-600 hover:text-orange-500">
          <PencilLine />
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;