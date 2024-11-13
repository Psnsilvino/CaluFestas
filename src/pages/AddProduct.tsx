import React from 'react';
import AddProductForm from '../components/AddProductForm';
import NavBar from '../components/NavBar';

const AddProduct: React.FC = () => {
  return (
    <>
      <NavBar/>
      <div className="flex h-screen">
        <div className="flex flex-col flex-1">
          <main className="flex-1 p-6 bg-gray-200">
            <h3 className="text-xl font-semibold mb-4">Registrar Produto</h3>
            <div className="max-w-lg mx-auto">
              <AddProductForm />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default AddProduct;