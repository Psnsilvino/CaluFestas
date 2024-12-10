import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://calufestas-api.onrender.com/api/users/login", {
        email,
        senha,
      },
      {
        withCredentials: true, // Permite o envio e recebimento de cookies
      }
    );

      if (response.status === 200) {
        // Sucesso: redirecione o usuário ou salve o token conforme necessário
        console.log("Login bem-sucedido", response.data);
        navigate("/", {replace: true}); // Redireciona para a página inicial
      }
    } catch (error) {
      console.error("Erro ao fazer login", error);
      alert("Erro ao fazer login, verifique suas credenciais.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="usuario" className="block text-gray-700">
              Email
            </label>
            <input
              type="text"
              id="usuario"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mt-2 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="senha" className="block text-gray-700">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full p-3 mt-2 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;