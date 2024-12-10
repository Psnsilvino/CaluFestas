
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"
import axios from "axios";


const NavBar = () => {

	const navigate = useNavigate();

	const handleClick = async (e: { preventDefault: () => void; }) => {
		e.preventDefault();
		try {
			const response = await axios.post("https://calufestas-api.onrender.com/api/users/logout", {}, {withCredentials: true})
			console.log(response)
			navigate("/login")
		} catch (error) {
			console.error(error)
		}
	}

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
				
				<button className="bg-blue-800 hover:bg-blue-700 text-white py-2 px-4 rounded-full" onClick={handleClick}>
					Logout
				</button>
			</nav>
			{/* Título abaixo da Navbar */}

		</>
	);
};

export default NavBar;