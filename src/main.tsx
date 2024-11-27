import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductPage from './pages/ProductPage.tsx';
import Login from './pages/login.tsx';
import Home from './pages/home.tsx';
import LocacoesInfo from './pages/locacaoInfo.tsx';
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
    path: "/estoque",
    element: <ProductPage />,
  },
  {
    path: "/clientes",
    element: <ClientsPage />,
  },
  {
    path: "/locacoes",
    element: <LocationsPage />,
  },
  {
    path: "/locacaoInfo",
    element: <LocacoesInfo/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/locacoes/adicionarProduto",
    element: <AddProduct/>,
  },
  {
    path: "/infoclientes",
    element: <InfoClientes/>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)