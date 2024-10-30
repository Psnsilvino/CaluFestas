import React from 'react';


interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface ClientRowProps {
  client: Client;
}

const ClientRow: React.FC<ClientRowProps> = ({ client }) => {
  return (
    <tr className="border-b hover:bg-gray-50 transition">
      <td className="border p-3">{client.name}</td>
      <td className="border p-3">{client.email}</td>
      <td className="border p-3">{client.phone}</td>
      <td className="border p-3 text-center flex items-center justify-center gap-2">
        <button className="text-gray-600 hover:text-blue-500">
          ed
        </button>
        <button className="text-gray-600 hover:text-blue-500">
          ex
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;