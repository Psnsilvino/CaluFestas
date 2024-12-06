import NavBar from "../components/NavBar"
import { Table } from "../components/Table/Table"

function ProductPage() {

	return (
		<>
			<NavBar />
			<Table categoria='Mesas' corCategoria='text-blue-500' corBorda='border-blue-400' />
			<Table categoria='Pranchas' corCategoria='text-violet-500' corBorda='border-violet-400' />
			<Table categoria='Cadeiras' corCategoria='text-rose-400' corBorda='border-rose-400' />
			<Table categoria='Demolição' corCategoria='text-teal-700' corBorda='border-teal-700' />
			<Table categoria='Puffs' corCategoria='text-orange-500' corBorda='border-orange-500' />
			<Table categoria='Pés' corCategoria='text-red-600' corBorda='border-red-600' />
			<Table categoria='Conjuntos bistrôs' corCategoria='text-purple-700' corBorda='border-purple-700' />
			<Table categoria='Conjuntos de pvc' corCategoria='text-blue-600' corBorda='border-blue-600' />
			<Table categoria='Conjuntos' corCategoria='text-teal-400' corBorda='border-teal-400' />
		</>
	)
}

export default ProductPage