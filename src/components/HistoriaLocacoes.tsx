import { Link } from "react-router-dom"

export const HistoriaLocacoes = () => {
    return(
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
                <tr className="hover:bg-gray-50 text-sm">
                  <td className="p-3 border-b">#1347</td>
                  <td className="p-3 border-b">22/09/2024</td>
                  <td className="p-3 border-b">23/09/2024</td>
                  <td className="p-3 border-b">
                    Rua Não Existe Número ABC Casa 123
                  </td>
                  <td className="p-3 border-b">PIX</td>
                  <td className="p-3 border-b">
                    <Link
                      to="/locacoes/adicionarLocacao"
                      className="text-blue-500 underline hover:text-blue-700"
                    >
                      Produtos ↗
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    )
}