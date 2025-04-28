import { plantList } from '../datas/plantList.js'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem.js'

function ShoppingList() {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map((plant) => (
					<li key={plant.id}>
						<PlantItem {...plant} />
					</li>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList
