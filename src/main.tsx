import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductPage from './pages/ProductPage.tsx';
import NavBar from './components/NavBar.tsx';
import Login from './pages/login.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductPage />,
  },
  {
    path: "/estoque",
    element: <ProductPage />,
  },
  {
    path: "/clientes",
    element: <NavBar />,
  },
  {
    path: "/locacoes",
    element: <ProductPage />,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
