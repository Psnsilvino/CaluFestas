import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Info } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Location {
  _id: number;
  data_inicio: string;
  data_fim: string;
  endereco: string;
}

const LocationTable: React.FC = () => {
  const [locations, setLocations] = useState<Location[]>([]);  // Garantir que seja um array inicialmente
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/locations/uncompleted')
      .then((response) => {
        // Verifica se a resposta é um array válido
        if (Array.isArray(response.data)) {
          setLocations(response.data);
        } else {
          setError("Dados das locações estão mal formatados.");
        }
      })
      .catch((err) => {
        setError("Erro ao carregar as locações.");
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="p-4 text-gray-600 font-semibold border border-gray-300 text-center">Id da locação</th>
            <th className="p-4 text-gray-600 font-semibold border border-gray-300 text-center">Data de entrega</th>
            <th className="p-4 text-gray-600 font-semibold border border-gray-300 text-center">Data de retirada</th>
            <th className="p-4 text-gray-600 font-semibold border border-gray-300 text-center">Endereço</th>
            <th className="p-4 text-gray-600 font-semibold border border-gray-300 text-center">Ações</th>
          </tr>
        </thead>
        <tbody>
          {locations.map((location) => (
            <tr key={location._id} className="border-b">
              <td className="text-center p-4 text-gray-700 border border-gray-300">{location._id}</td>
              <td className="text-center p-4 text-gray-700 border border-gray-300">{location.data_inicio || "Não informado"}</td>
              <td className="text-center p-4 text-gray-700 border border-gray-300">{location.data_fim || "Não informado"}</td>
              <td className="text-center p-4 text-gray-700 border border-gray-300">{location.endereco || "Não informado"}</td>
              <td className="p-4 text-center border border-gray-300">
                <div className="flex justify-center space-x-2">
                  <Link to={`/locacoes/${location._id}`}>
                    <button className="text-gray-600 hover:text-gray-900">
                      <Info />
                    </button>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LocationTable;
