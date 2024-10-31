import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="usuario" className="block text-gray-700">Usuário</label>
            <input
              type="text"
              id="usuario"
              className="w-full p-3 mt-2 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="senha" className="block text-gray-700">Senha</label>
            <input
              type="password"
              id="senha"
              className="w-full p-3 mt-2 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <Link to={"/"}>
            <button
              type="submit"
              className="w-full p-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
