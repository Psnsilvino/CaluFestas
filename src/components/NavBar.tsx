
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

const NavBar = () => {
	return (
		<>
			<nav className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center">
				{/* Logo */}
				<Link to={"/"} className="text-3xl font-bold">
					<img src={logo} alt="logo" className="w-24" />
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
				<Link to={"/login"}>
					<button className="bg-blue-800 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
						Logout
					</button>
				</Link>
			</nav>
			{/* Título abaixo da Navbar */}

		</>
	);
};

export default NavBar;