import { Link } from "react-router-dom"

export const ProdutosAlugados = () => {
    return(
        <>
            <div className="mt-6 bg-gray-200 rounded-lg">
            <div className="bg-orange-400 text-white font-semibold p-3 rounded-t-lg">Produtos alugados</div>
            <table className="w-full bg-white rounded-b-lg">
                <thead>
                    <tr className="text-left border-b">
                        <th className="p-3">Produto</th>
                        <th className="p-3">Quantidade</th>
                        <th className="p-3">Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Linha de exemplo */}
                    <tr className="border-t">
                        <td className="p-3">Exemplo Produto</td>
                        <td className="p-3">1</td>
                        <td className="p-3">R$ 50,00</td>
                    </tr>
                    {/* Adicione mais linhas conforme necessário */}
                </tbody>
            </table>
                </div>
            <Link to={"/locacoes/adicionarProduto"}>
                    <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md shadow hover:bg-gray-300">Adicionar Produto</button>
            </Link>
        </>
    )
}