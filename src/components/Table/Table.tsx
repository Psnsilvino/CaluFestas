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
	const [editRowId, setEditRowId] = useState<string | null>(null);
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

	  const handleEditClick = (id: string) => {
		const rowToEdit = rows.find((row) => row._id === id);
		if (rowToEdit) {
		  setBackupRow({ ...rowToEdit }); // Salva uma cópia da linha original
		  setEditRowId(id); // Define o ID da linha em edição
		}
	  };

	  const handleCancelClick = () => {
		if (backupRow && editRowId !== null) {
		  const updatedRows = rows.map((row) =>
			row._id === editRowId ? backupRow : row // Restaura os dados antigos da linha em edição
		  );
		  setRows(updatedRows); // Atualiza o estado com os dados restaurados
		}
		setEditRowId(null); // Desabilita o modo de edição
		setBackupRow(null); // Limpa o backup
	  };

	  const handleSaveClick = async () => {
		if (editRowId === null) return; // Não faz nada se não houver uma linha em edição
	
		const updatedRow = rows.find((row) => row._id === editRowId);
		if (!updatedRow) return; // Segurança: caso a linha não seja encontrada
	
		try {
			console.log(updatedRow._id)
		  await axios.put(`http://localhost:3000/api/products/${updatedRow._id}`, updatedRow, {withCredentials: true}); // Substitua pela sua URL e endpoint
		  setEditRowId(null); // Desabilita o modo de edição após o sucesso
		  setBackupRow(null); // Limpa o backup após o sucesso
		  alert('Dados atualizados com sucesso!');
		} catch (err) {
		  console.error('Erro ao atualizar os dados:', err);
		  alert(err);
		}
	  };

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
					{rows.map((row) => (
						<tr key={row._id} className="bg-gray-50">
							<td className={`border-l-4 ${corBorda} p-2 w-2/6`}>{row.nome}</td>
							<td className="p-2">
								<input min={0} type="number" value={row.quantidade - row.quantidadeEmLocacao} disabled={editRowId !== row._id} onChange={(e) => {
                      				const updatedRows = rows.map((r) =>
                        				r._id === row._id ? { ...r, quantidade: Number(e.target.value) } : r
                      				);
                      				setRows(updatedRows);
                    			}} />
							</td>
							<td className="p-2">
								<input min={0} type="number" max={row.quantidade} value={row.quantidadeEmLocacao} disabled={editRowId !== row._id} onChange={(e) => {
                      				const updatedRows = rows.map((r) =>
                        				r._id === row._id ? { ...r, quantidadeEmLocacao: Number(e.target.value) } : r
                      				);
                      				setRows(updatedRows);
                    			}} />
							</td>
							<td className="p-2">{row.preco}</td>
							<td className="p-2 w-40">
								{ editRowId !== row._id && (
									<TableButton icon={PencilLine} onClick={() => handleEditClick(row._id)} />
								)}
								{ editRowId === row._id && (
									<div>
										<TableButton icon={Check} cor="text-green-600" onClick={handleSaveClick} />
										<TableButton icon={X} cor="text-red-600" onClick={() => handleCancelClick()} />
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
