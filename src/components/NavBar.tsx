import { Archive } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

const NavBar = () => {
	return (
		<>
			<nav className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center">
				{/* Logo */}
				<Link to={"https://youtu.be/dQw4w9WgXcQ?si=yfdfHyFkXMPliSeV"} className="text-3xl font-bold">
					<img src={logo} alt="logo" className="w-24"/>
				</Link>
				{/* Links */}
				<ul className="flex space-x-8 text-lg">
					<li>
						<Link to={"/estoque"} className="hover:underline">Estoque</Link>
					</li>
					<li>
						<Link to={"/clientes"} className="hover:underline">Clientes</Link>
					</li>
					<li>
						<Link to={"/locacoes"} className="hover:underline">Locações</Link>
					</li>
				</ul>
				{/* Logout button */}
				<button className="bg-blue-800 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
					Logout
				</button>
			</nav>
			{/* Título abaixo da Navbar */}
			<div className="px-6 py-4 flex items-center space-x-2">
        		{/* Ícone */}
				<Archive />
        		{/* Título */}
        		<h1 className="text-2xl font-semibold">Estoque</h1>
      		</div>

      		{/* Linha horizontal */}
      		<hr className="mx-6 border-gray-300" />
		</>
	);
};

export default NavBar;