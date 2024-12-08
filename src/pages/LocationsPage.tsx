import React from 'react';
import LocationTable from '../components/Table/LocationTable.tsx';
import NavBar from '../components/NavBar.tsx';


const LocationsPage: React.FC = () => {
  return (
    <>
    <NavBar/>
    <div className="p-8">
      <h2 className="text-2xl font-semibold flex items-center space-x-2 mb-6">
        <span>Locações</span>
      </h2>
      <LocationTable />
    </div>
    </>
  );
};

export default LocationsPage;
