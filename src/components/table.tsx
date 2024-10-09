interface TableProps {
	categoria: string,
	corCategoria: string
	corBorda: string
}

export function Table({ categoria, corCategoria, corBorda}: TableProps) {
	const rows = [
		{ name: 'Mesa de 1,20m', stock: 20, rented: 0, price: 'R$ 16,00' },
		{ name: 'Mesa de 1,30m', stock: 6, rented: 0, price: 'R$ 18,00' },
		{ name: 'Mesa de 1,40m', stock: 16, rented: 0, price: 'R$ 18,00' },
		{ name: 'Mesa de 1,50m', stock: 6, rented: 0, price: 'R$ 20,00' },
	];

	return (
		<div className="p-4">
			<table className="w-full text-left border-separate border-spacing-y-2">
				<thead>
					<tr className="text-sm font-medium text-gray-500">
						<th className={`text-2xl font-semibold ${corCategoria} mb-4`}>{categoria}</th>
						<th className="p-2">Quantidade no estoque</th>
						<th className="p-2">Quantidade em locação</th>
						<th className="p-2">Preço unitário</th>
						<th className="p-2">Editar</th>
					</tr>
				</thead>
				<tbody>
					{rows.map((row, index) => (
						<tr key={index} className="bg-gray-50">
							<td className={`border-l-4 ${corBorda} p-2`}>{row.name}</td>
							<td className="p-2">{row.stock}</td>
							<td className="p-2">{row.rented}</td>
							<td className="p-2">{row.price}</td>
							<td className="p-2">
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
