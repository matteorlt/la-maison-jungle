import {plantList} from '../datas/plantList.js';


function ShoppingList() {
	return (
		<ul>
			{plantList.map((plant) => (
				<li key={plant.id}>
					{plant.name} - {plant.category} {' '}
					{plant.isBestSale ? <span>🔥</span> : <span>👎</span>}
				</li>
			))}
		</ul>
	)
}

export default ShoppingList;
