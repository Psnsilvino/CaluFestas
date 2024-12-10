import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

interface Produto {
  _id: string;
  nomeProduto: string;
  quantidade: number;
  preco: number;
}

interface ProdutosAlugadosProps {
  idLocacao?: string;
}

export const ProdutosAlugados = ({ idLocacao }: ProdutosAlugadosProps) => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!idLocacao) return;

    const fetchProdutos = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://calufestas-api.onrender.com/api/locatedProducts/${idLocacao}`, { withCredentials: true });
        console.log(response.data); // Verifique a resposta aqui
        const data = Array.isArray(response.data) ? response.data : [];
        setProdutos(data);
      } catch (err) {
        console.error(err); // Para debug
        setError("Erro ao carregar produtos alugados.");
      } finally {
        setLoading(false);
      }
    };

    fetchProdutos();
  }, [idLocacao]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className="mt-6 bg-gray-200 rounded-lg">
        <div className="bg-orange-400 text-white font-semibold p-3 rounded-t-lg">
          Produtos alugados
        </div>
        <table className="w-full bg-white rounded-b-lg">
          <thead>
            <tr className="text-left border-b">
              <th className="p-3">Produto</th>
              <th className="p-3">Quantidade</th>
              <th className="p-3">Preço</th>
            </tr>
          </thead>
          <tbody>
            {produtos.length > 0 ? (
              produtos.map((produto) => (
                <tr key={produto._id} className="border-t">
                  <td className="p-3">{produto.nomeProduto}</td>
                  <td className="p-3">{produto.quantidade}</td>
                  <td className="p-3">R${produto.preco * produto.quantidade}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="p-3 text-center">
                  Nenhum produto alugado encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Link to={`/locacoes/${idLocacao}/adicionarProduto`}>
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md shadow hover:bg-gray-300">
          Adicionar Produto
        </button>
      </Link>
    </>
  );
};
