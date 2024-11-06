// src/components/LocationTable.tsx
import React from 'react';
import { PencilLine, Info } from 'lucide-react';


const LocationTable: React.FC = () => {
  // Sample data for illustration purposes
  const locations = [
    { id: 1, deliveryDate: '08/11/2024', pickupDate: '12/11/2024', address: 'endereço' },
    { id: 2, deliveryDate: '', pickupDate: '', address: '' },
    { id: 3, deliveryDate: '', pickupDate: '', address: '' },
    { id: 4, deliveryDate: '74294', pickupDate: '', address: '' },
  ];

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
            <tr key={location.id} className="border-b">
              <td className="text-center p-4 text-gray-700 border border-gray-300">{location.id}</td>
              <td className="text-center p-4 text-gray-700 border border-gray-300">{location.deliveryDate}</td>
              <td className="text-center p-4 text-gray-700 border border-gray-300">{location.pickupDate}</td>
              <td className="text-center p-4 text-gray-700 border border-gray-300">{location.address}</td>
              <td className="p-4 text-center border border-gray-300">

                <div className="flex justify-center space-x-2">
                  <button className="text-gray-600 hover:text-gray-900">
                    <Info/>
                  </button>
                  <button className="text-gray-600 hover:text-gray-900">
                    <PencilLine/>
                  </button>
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
