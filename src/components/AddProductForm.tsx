import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

interface Product {
  _id: string; // ID como string
  nome: string;
  quantidade: number;
  quantidadeEmLocacao: number
  preco: number;
}

const AddProductForm: React.FC = () => {
  const params = useParams<{ idLocacao: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<string | ''>('');
  const [quantity, setQuantity] = useState<number | ''>('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [productDetails, setProductDetails] = useState<{ nome: string; quantidade: number; quantidadeEmLocacao: number; preco: number; } | null>(null);

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>('http://localhost:3000/api/products');
        setProducts(response.data);
      } catch (err) {
        setError('Erro ao carregar os produtos.');
        console.error(err);
      }
    };

    fetchProducts();
  }, []);

  const handleProductChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = e.target.value;
    setSelectedProduct(selectedId);

    if (selectedId) {
      const selectedProduct = products.find((product) => product._id === selectedId);
      if (selectedProduct) {
        setProductDetails({ nome: selectedProduct.nome, quantidade: selectedProduct.quantidade, preco: selectedProduct.preco, quantidadeEmLocacao: selectedProduct.quantidadeEmLocacao });
      } else {
        setProductDetails(null);
      }
    } else {
      setProductDetails(null);
    }
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!selectedProduct || !quantity) {
      setError('Por favor, selecione um produto e insira a quantidade.');
      return;
    }

    try {
      // Envia os dados para o backend
      const response = await axios.post('http://localhost:3000/api/locatedProducts', {
        produto: selectedProduct,
        nomeProduto: productDetails ? productDetails.nome : "",
        locacao: params.idLocacao,
        quantidade: quantity,
        preco: productDetails ? productDetails?.preco : 0,
      });

      console.log(response)

      if (response.status === 201) {
        setSuccess('Produto registrado com sucesso!');
        setQuantity('');
        setSelectedProduct('');
        setProductDetails(null);
      } else {
        setError('Erro inesperado ao registrar o produto.');
      }
    } catch (err) {
      setError('Erro ao registrar o produto. Verifique sua conexão ou tente novamente.');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col p-4 bg-gray-100 rounded shadow">
      {error && <div className="mb-4 text-red-500">{error}</div>}
      {success && <div className="mb-4 text-green-500">{success}</div>}

      <select
        className="p-2 mb-4 border rounded"
        value={selectedProduct}
        onChange={handleProductChange}
        required
      >
        <option value="">Selecione um produto</option>
        {products.map((product) => (
          <option key={product._id} value={product._id}>
            {product.nome}
          </option>
        ))}
      </select>

      <input
        className="p-2 mb-4 border rounded bg-gray-200"
        type="text"
        placeholder="Quantidade em estoque"
        value={productDetails ? productDetails.quantidade - productDetails.quantidadeEmLocacao : ''}
        disabled
      />
      <input
        className="p-2 mb-4 border rounded bg-gray-200"
        type="text"
        placeholder="Preço unitário da venda"
        value={productDetails ? productDetails.preco.toFixed(2) : ''}
        disabled
      />

      <input
        className="p-2 mb-4 border rounded"
        type="number"
        value={quantity}
        onChange={handleQuantityChange}
        placeholder="Quantidade"
        min={0}
        max={productDetails ? productDetails?.quantidade - productDetails?.quantidadeEmLocacao : 0}
        required
      />

      <Link to={`/locacoes/${params.idLocacao}`}>
        <button className="p-2 bg-slate-400 text-white rounded hover:bg-slate-700 mb-2">
          Voltar
        </button>
      </Link>
      <button type="submit" className="p-2 bg-gray-900 text-white rounded hover:bg-gray-700">
        Registrar
      </button>
    </form>
  );
};

export default AddProductForm;
