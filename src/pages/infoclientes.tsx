import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../components/NavBar.tsx";
import { HistoriaLocacoes } from "../components/HistoriaLocacoes";

interface ClientDetailsProps {
  novo?: boolean;
}

const ClientDetails = ({ novo }: ClientDetailsProps) => {
  const params = useParams<{ idCliente: string }>();

  // Estados para os inputs
  const [telefone, setTelefone] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");

  // Estado para controle de carregamento e erros
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Verifica se é um cliente novo ou existente
    if (!novo && params.idCliente) {
      axios
        .get(`http://localhost:3000/api/clients/${params.idCliente}`, {withCredentials:true})
        .then((response) => {
          const { nome, telefone, email, endereco } = response.data;
          setNome(nome);
          setTelefone(telefone);
          setEmail(email);
          setEndereco(endereco);
        })
        .catch((err) => {
          setError("Erro ao carregar dados do cliente");
          console.error(err);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false); // Se for novo, não faz a requisição
    }
  }, [novo, params.idCliente]);

  const handleSave = () => {
    // const cliente = { nome, telefone, email, endereco };

    if (novo) {
      axios
        .post("http://localhost:3000/api/clients", { nome: nome, telefone: telefone, email: email, endereco: endereco }, {withCredentials:true})
        .then(() => {
          alert("Cliente criado com sucesso!");
        })
        .catch((err) => {
          alert("Erro ao criar cliente");
          console.error(err);
        });
    } else if (params.idCliente) {
      axios
        .put(`http://localhost:3000/api/clients/${params.idCliente}`, { nome: nome, telefone: telefone, email: email, endereco: endereco })
        .then(() => {
          alert("Dados atualizados com sucesso!");
        })
        .catch((err) => {
          alert("Erro ao salvar alterações");
          console.error(err);
        });
    }
  };

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <NavBar />
      <div className="p-6">
        {/* Header da página */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-2xl">👤</span>
          <h1 className="text-2xl font-semibold">Cliente</h1>
        </div>

        {/* Informações do cliente */}
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 ">Id do usuário</label>
              <input
                type="text"
                className="bg-gray-300 rounded-md p-2"
                value={params.idCliente || ""}
                readOnly
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-600">Nome</label>
              <input
                type="text"
                className="bg-gray-200 rounded-md p-2"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-600">Telefone</label>
              <input
                type="text"
                className="bg-gray-200 rounded-md p-2"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="text"
                className="bg-gray-200 rounded-md p-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="md:col-span-2 flex flex-col">
              <label className="text-sm text-gray-600">Endereço</label>
              <input
                type="text"
                className="bg-gray-200 rounded-md p-2"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
              />
            </div>
          </div>

          {/* Botões de ação */}
          <div className="flex justify-end gap-2 mt-6">
            <Link to={"/clientes"}>
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
        </div>
        {!novo && <HistoriaLocacoes idCliente={params.idCliente} />}
      </div>
    </>
  );
};

export default ClientDetails;
