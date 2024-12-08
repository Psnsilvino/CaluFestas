import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

interface HistoriaLocacoesProps {
  idCliente?: string
}

interface Locacao {
  _id: number;
  data_inicio: string;
  data_fim: string;
  endereco: string;
  pagamento: string;
  produtos: string; // Pode ser ajustado conforme o formato retornado pelo backend
}

export const HistoriaLocacoes = ({ idCliente }: HistoriaLocacoesProps) => {

  const [locacoes, setLocacoes] = useState<Locacao[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Função para buscar os dados
    const fetchLocacoes = async () => {
      console.log(idCliente)
      try {
        const response = await axios.get<Locacao[]>(`http://localhost:3000/api/locations/cliente/${idCliente}`); // Altere para a rota correta
        setLocacoes(response.data);
      } catch (error) {
        console.error("Erro ao buscar os dados de locações:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLocacoes();
  }, [idCliente]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="bg-yellow-500 text-white rounded-t-lg px-6 py-3 flex items-center gap-2">
        <span className="text-xl">🚚</span>
        <h2 className="text-lg font-semibold">Histórico de locações</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-600 text-sm">
              <th className="p-3 border-b">Id da locação</th>
              <th className="p-3 border-b">Data de entrega</th>
              <th className="p-3 border-b">Data de retirada</th>
              <th className="p-3 border-b">Endereço</th>
              <th className="p-3 border-b">Pagamento</th>
              <th className="p-3 border-b">Produtos</th>
            </tr>
          </thead>
          <tbody>
            {locacoes.map((locacao) => (
              <tr key={locacao._id} className="hover:bg-gray-50 text-sm">
                <td className="p-3 border-b">#{locacao._id}</td>
                <td className="p-3 border-b">{locacao.data_inicio}</td>
                <td className="p-3 border-b">{locacao.data_fim}</td>
                <td className="p-3 border-b">{locacao.endereco}</td>
                <td className="p-3 border-b">{locacao.pagamento}</td>
                <td className="p-3 border-b">
                  <Link
                    to={`/locacoes/${locacao._id}`}
                    className="text-blue-500 underline hover:text-blue-700"
                  >
                    Produtos ↗
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}