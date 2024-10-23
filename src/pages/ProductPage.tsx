import NavBar from "../components/NavBar"
import { Table } from "../components/Table/Table"

function ProductPage() {

	return (
		<>
			<NavBar/>
			<Table categoria='Mesas' corCategoria='text-blue-500' corBorda='border-blue-400' />
			<Table categoria='Pranchas' corCategoria='text-violet-500' corBorda='border-violet-400'/>
		</>
	)
}

export default ProductPage