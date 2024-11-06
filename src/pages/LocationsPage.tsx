// src/pages/LocationsPage.tsx
import React from 'react';
import LocationTable from '../components/Table/LocationTable.tsx';
import NavBar from '../components/NavBar.tsx';


const LocationsPage: React.FC = () => {
  return (
    <>
    <NavBar/>
    <div className="p-8">
      <div className="flex items-center mb-4">
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md mr-4">
          Nova locação
        </button>
        <input
          type="text"
          placeholder="Pesquisar..."
          className="border border-gray-300 rounded-md px-3 py-2 text-sm"
        />
      </div>
      <h2 className="text-2xl font-semibold flex items-center space-x-2 mb-6">
        <span>Locações</span>
      </h2>
      <LocationTable />
      <div className="text-blue-600 mt-4 cursor-pointer hover:underline">
        + Adicionar Locação
      </div>
    </div>
    </>
  );
};

export default LocationsPage;
