import React, { useState } from 'react';

const AddProductForm: React.FC = () => {
  const [quantity, setQuantity] = useState<number | ''>('');
  const [date, setDate] = useState<string>('');

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Quantity: ${quantity}, Date: ${date}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col p-4 bg-gray-100 rounded shadow">
      <select className="p-2 mb-4 border rounded" required>
        <option>Selecione um produto</option>
        {/* Adicione opções dinamicamente aqui */}
      </select>
      <input className="p-2 mb-4 border rounded" type="text" placeholder="Quantidade em estoque" disabled />
      <input className="p-2 mb-4 border rounded" type="text" placeholder="Preço unitário da venda" disabled />
      <input
        className="p-2 mb-4 border rounded"
        type="number"
        value={quantity}
        onChange={handleQuantityChange}
        placeholder="Quantidade"
        required
      />
      <input
        className="p-2 mb-4 border rounded"
        type="datetime-local"
        value={date}
        onChange={handleDateChange}
        required
      />
      <button type="submit" className="p-2 bg-gray-900 text-white rounded hover:bg-gray-700">
        Registrar
      </button>
    </form>
  );
};

export default AddProductForm;