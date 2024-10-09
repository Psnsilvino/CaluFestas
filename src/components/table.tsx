
const Table = () => {
  const data = [
    { nome: "Mesa de 1,20m", estoque: 20, locacao: 0, preco: "R$ 16,00" },
    { nome: "Mesa de 1,30m", estoque: 6, locacao: 0, preco: "R$ 18,00" },
    { nome: "Mesa de 1,40m", estoque: 16, locacao: 0, preco: "R$ 18,00" },
    { nome: "Mesa de 1,50m", estoque: 6, locacao: 0, preco: "R$ 20,00" },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead className="bg-blue-100">
          <tr>
            <th className="px-4 py-2 border border-gray-300">Mesas</th>
            <th className="px-4 py-2 border border-gray-300">Quantidade no estoque</th>
            <th className="px-4 py-2 border border-gray-300">Quantidade em locação</th>
            <th className="px-4 py-2 border border-gray-300">Preço unitário</th>
            <th className="px-4 py-2 border border-gray-300">Editar</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="bg-white">
              <td className="px-4 py-2 border border-gray-300">{item.nome}</td>
              <td className="px-4 py-2 border border-gray-300"><input type="text" value={item.estoque} disabled/></td>
              <td className="px-4 py-2 border border-gray-300"><input type="text" value={item.locacao} disabled/></td>
              <td className="px-4 py-2 border border-gray-300">{item.preco}</td>
              <td className="px-4 py-2 border border-gray-300 text-center">
                <button className="p-2 bg-gray-200 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M17.414 2.586a2 2 0 010 2.828l-10 10A2 2 0 016 16H3v-3a2 2 0 01.586-1.414l10-10a2 2 0 012.828 0zM7 15v2h2l9.293-9.293-2-2L7 15z" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
