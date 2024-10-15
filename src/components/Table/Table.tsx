import { useState } from "react";
import { TableButton } from "./TableButton";
import { Check, PencilLine, X } from "lucide-react";

interface TableProps {
	categoria: string,
	corCategoria: string
	corBorda: string
};


export function Table({ categoria, corCategoria, corBorda}: TableProps) {

	const [rows, setRows] = useState([
		{ name: 'Mesa de 1,20m', stock: 20, rented: 0, price: 'R$ 16,00' },
		{ name: 'Mesa de 1,30m', stock: 6, rented: 0, price: 'R$ 18,00' },
		{ name: 'Mesa de 1,40m', stock: 16, rented: 0, price: 'R$ 18,00' },
		{ name: 'Mesa de 1,50m', stock: 6, rented: 0, price: 'R$ 20,00' },
	])
	const [editRowIndex, setEditRowIndex] = useState<number | null>(null);

	const handleEditClick = (index: number) => {
		setEditRowIndex(index === editRowIndex ? null : index);
	};

	const handleRevertClick = () => {
		setEditRowIndex(null)
	}

	const handleSaveClick = () => {
		setEditRowIndex(null)
	}

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
							<td className="p-2">
								<input min={0} type="number" value={row.stock} disabled={editRowIndex !== index} onChange={(e) => {
                      				const updatedRows = [...rows];
                      				updatedRows[index].stock = Number(e.target.value);
                      				setRows(updatedRows);
                    			}} />
							</td>
							<td className="p-2">
								<input min={0} type="number" value={row.rented} disabled={editRowIndex !== index} onChange={(e) => {
                      				const updatedRows = [...rows];
                      				updatedRows[index].rented = Number(e.target.value);
                      				setRows(updatedRows);
                    			}} />
							</td>
							<td className="p-2">{row.price}</td>
							<td className="p-2 w-[150px]">
								{ editRowIndex !== index && (
									<TableButton icon={PencilLine} onClick={() => handleEditClick(index)} />
								)}
								{ editRowIndex === index && (
									<div>
										<TableButton icon={Check} cor="text-green-600" onClick={() => handleSaveClick()} />
										<TableButton icon={X} cor="text-red-600" onClick={() => handleRevertClick()} />
									</div>
								)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
