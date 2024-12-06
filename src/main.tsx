import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductPage from './pages/ProductPage.tsx';
import Login from './pages/login.tsx';
import Home from './pages/home.tsx';
import { LocacaoForm } from './pages/locacaoInfo.tsx';
import LocationsPage from './pages/LocationsPage.tsx';
import AddProduct from './pages/AddProduct.tsx';
import ClientsPage from './pages/clientes.tsx';
import InfoClientes from './pages/infoclientes.tsx';

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/login",
		element: <Login/>,
	},
	{
		path: "/estoque",
		element: <ProductPage />,
	},
	{
		path: "/clientes",
		element: <ClientsPage />,
	},
	{
		path: "/clientes/adicionarCliente",
		element: <InfoClientes novo />,
	},
	{
		path: "/clientes/:idCliente",
		element: <InfoClientes/>,
	},
	{
		path: "/locacoes",
		element: <LocationsPage />,
	},
	{
		path: "/locacoes/adicionarLocacao/:idCliente",
		element: <LocacaoForm novo/>,
	},
	{
		path: "/locacoes/:idLocacoes",
		element: <LocacaoForm/>,
	},
	{
		path: "/locacoes/:idLocacoes/adicionarProduto",
		element: <AddProduct/>,
	},
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
)