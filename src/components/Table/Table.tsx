import { useEffect, useState } from "react";
import { TableButton } from "./TableButton";
import { Check, PencilLine, X } from "lucide-react";
import axios from "axios";

interface TableProps {
	categoria: string,
	corCategoria: string
	corBorda: string
};

interface TableRow {
	_id: string;
	nome: string;
	categoria: string;
	quantidade: number;
	quantidadeEmLocacao: number;
	preco: string;
  }


export function Table({ categoria, corCategoria, corBorda}: TableProps) {
	// const [rows, setRows] = useState([
	// 	{ name: 'Mesa de 1,20m', stock: 20, rented: 0, price: 'R$ 16,00' },
	// 	{ name: 'Mesa de 1,30m', stock: 6, rented: 0, price: 'R$ 18,00' },
	// 	{ name: 'Mesa de 1,40m', stock: 16, rented: 0, price: 'R$ 18,00' },
	// 	{ name: 'Mesa de 1,50m', stock: 6, rented: 0, price: 'R$ 20,00' },
	// ])
	const [rows, setRows] = useState<TableRow[]>([]);
	const [editRowIndex, setEditRowIndex] = useState<number | null>(null);
	const [backupRow, setBackupRow] = useState<TableRow | null>(null);
	const [loading, setLoading] = useState(true);
  	const [error, setError] = useState<string | null>(null);
	
	  useEffect(() => {
		const fetchData = async () => {
		  try {
			const response = await axios.get(`http://localhost:3000/api/products/${categoria}`, {withCredentials: true}); // Substitua pela sua URL da API
			setRows(response.data);
		  } catch (err) {
			setError(`Erro ao carregar dados: ${err}`);
		  } finally {
			setLoading(false);
		  }
		};
	
		fetchData();
	  }, [categoria]);

	const handleEditClick = (index: number) => {
		setEditRowIndex(index === editRowIndex ? null : index);
		setBackupRow({ ...rows[index] });
	};

	const handleRevertClick = () => {
		if (backupRow && editRowIndex !== null) {
			const updatedRows = [...rows];
			updatedRows[editRowIndex] = backupRow; // Restaura os dados originais da linha
			setRows(updatedRows); // Atualiza o estado com os dados restaurados
		  }
		  setEditRowIndex(null); // Desabilita o modo de edição
		  setBackupRow(null); // Limpa o backup
	}

	const handleSaveClick = () => {
		setEditRowIndex(null)
	}

	if (loading) {
		return <p>Carregando...</p>; // Exibe uma mensagem de carregamento
	}
	
	if (error) {
		return <p>{error}</p>; // Exibe uma mensagem de erro
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
							<td className={`border-l-4 ${corBorda} p-2 w-2/6`}>{row.nome}</td>
							<td className="p-2">
								<input min={0} type="number" value={row.quantidade} disabled={editRowIndex !== index} onChange={(e) => {
                      				const updatedRows = [...rows];
                      				updatedRows[index].quantidade = Number(e.target.value);
                      				setRows(updatedRows);
                    			}} />
							</td>
							<td className="p-2">
								<input min={0} type="number" value={row.quantidadeEmLocacao} disabled={editRowIndex !== index} onChange={(e) => {
                      				const updatedRows = [...rows];
                      				updatedRows[index].quantidadeEmLocacao = Number(e.target.value);
                      				setRows(updatedRows);
                    			}} />
							</td>
							<td className="p-2">{row.preco}</td>
							<td className="p-2 w-40">
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
