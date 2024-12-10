import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { ProdutosAlugados } from "../components/ProdutosAlugados";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

interface LocacaoFormProps {
  novo?: boolean;
}

export const LocacaoForm = ({ novo }: LocacaoFormProps) => {
  const params = useParams<{ idLocacao: string, idCliente: string }>();

  const [locacao, setLocacao] = useState({
    _id: params.idLocacao,
    data_inicio: "",
    data_fim: "",
    cliente: params.idCliente,
    pagamento: "",
    precoTotal: "",
    endereco: "",
    concluida: false,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!novo && params.idLocacao) {
      axios
        .get(`https://calufestas-api.onrender.com/api/locations/${params.idLocacao}`, { withCredentials: true })
        .then((response) => {
          setLocacao(response.data);
        })
        .catch((err) => {
          setError("Erro ao carregar os dados da locação.");
          console.error(err);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false); // Se for novo, não carrega dados do backend
    }
  }, [novo, params.idLocacao]);

  const handleSave = () => {
    const formattedData = {
      ...locacao,
      data_inicio: locacao.data_inicio || null, // Garante que a data siga o formato ISO ou seja nula
      data_fim: locacao.data_fim || null,
    };

    const request = novo
      ? axios.post("https://calufestas-api.onrender.com/api/locations", formattedData, { withCredentials: true })
      : axios.put(`https://calufestas-api.onrender.com/api/locations/${params.idLocacao}`, formattedData, { withCredentials: true });

    request
      .then(() => {
        alert("Locação salva com sucesso!");
      })
      .catch((err) => {
        alert("Erro ao salvar a locação.");
        console.error(err);
      });
  };

  const handleChange = (field: string, value: unknown) => {
    setLocacao((prev) => ({ ...prev, [field]: value }));
  };

  if (loading) return <div>Carregando...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <>
      <NavBar />
      <div className="p-6 bg-white shadow-md rounded-lg">
        {/* Título */}
        <div className="flex items-center mb-4">
          <span className="text-2xl font-bold mr-2">📦</span>
          <h2 className="text-2xl font-semibold">Locações</h2>
        </div>

        {/* Campos de Entrada */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div>
            <label className="block text-gray-700">Id da locação</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md bg-gray-300"
              value={locacao._id}
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">Data de entrega</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md bg-gray-200"
              value={locacao.data_inicio}
              onChange={(e) =>
                handleChange("data_inicio", e.target.value)
              }
            />
          </div>
          <div>
            <label className="block text-gray-700">Data de retirada</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md bg-gray-200"
              value={locacao.data_fim}
              onChange={(e) =>
                handleChange("data_fim", e.target.value)
              }
            />
          </div>
          <div>
            <label className="block text-gray-700">Cliente</label>
            {!novo && (
              <Link to={`/clientes/${locacao.cliente}`}>
                <input
                type="text"
                className="w-full p-2 border rounded-md bg-green-100"
                value={locacao.cliente}
                readOnly
                />
              </Link>
            )}
            {novo && (
              <input
              type="text"
              className="w-full p-2 border rounded-md bg-gray-300"
              value={locacao.cliente}
              readOnly
            />
            )}
          </div>
          <div>
            <label className="block text-gray-700">Pagamento</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md bg-gray-200"
              value={locacao.pagamento}
              onChange={(e) => handleChange("pagamento", e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Endereço</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md bg-gray-200"
              value={locacao.endereco}
              onChange={(e) => handleChange("endereco", e.target.value)}
            />
          </div>
          <div className="flex items-center">
            <label className="text-gray-700 mr-2">Concluída</label>
            <input
              type="checkbox"
              className="h-5 w-5"
              checked={locacao.concluida}
              onChange={(e) => handleChange("concluida", e.target.checked)}
            />
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-6">
            <Link to={"/locacoes"}>
              <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md shadow hover:bg-gray-300">
                🔙 Voltar
              </button>
            </Link>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600"
            >
              ✏️ Salvar alterações
            </button>
          </div>
        

        {/* Produtos Alugados */}
        {!novo && <ProdutosAlugados idLocacao={locacao._id} />}

        
      </div>
    </>
  );
};
