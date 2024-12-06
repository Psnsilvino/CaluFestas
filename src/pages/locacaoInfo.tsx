import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { ProdutosAlugados } from "../components/ProdutosAlugados";
import { useParams } from "react-router-dom";
import axios from "axios";

interface LocacaoFormProps {
  novo?: boolean;
}

export const LocacaoForm = ({ novo }: LocacaoFormProps) => {
  const params = useParams<{ idLocacao: string; idCliente: string }>();

  const [locacao, setLocacao] = useState({
    idLocacao: "",
    deliveryDate: "",
    pickupDate: "",
    cliente: "",
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
        .get(`/api/locacoes/${params.idLocacao}`)
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
      deliveryDate: locacao.deliveryDate || null, // Garante que a data siga o formato ISO ou seja nula
      pickupDate: locacao.pickupDate || null,
    };

    const request = novo
      ? axios.post("/api/locacoes", formattedData)
      : axios.put(`/api/locacoes/${params.idLocacao}`, formattedData);

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
              className="w-full p-2 border rounded-md bg-gray-200"
              value={locacao.idLocacao}
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">Data de entrega</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              value={locacao.deliveryDate}
              onChange={(e) =>
                handleChange("deliveryDate", e.target.value)
              }
            />
          </div>
          <div>
            <label className="block text-gray-700">Data de retirada</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              value={locacao.pickupDate}
              onChange={(e) =>
                handleChange("pickupDate", e.target.value)
              }
            />
          </div>
          <div>
            <label className="block text-gray-700">Cliente</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              value={locacao.cliente}
              onChange={(e) => handleChange("cliente", e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Pagamento</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              value={locacao.pagamento}
              onChange={(e) => handleChange("pagamento", e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Preço total</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              value={locacao.precoTotal}
              onChange={(e) =>
                handleChange("precoTotal", e.target.value)
              }
            />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700">Endereço</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
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

        {/* Produtos Alugados */}
        {!novo && <ProdutosAlugados />}

        {/* Botão de Salvar */}
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600"
        >
          Salvar
        </button>
      </div>
    </>
  );
};
