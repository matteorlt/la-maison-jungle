import { useState } from 'react'
import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'
import Categories from './Categories'

function ShoppingList({ cart, updateCart }) {
	const [filter, setFilter] = useState('')

	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
		
	}

	return (
		<div className='lmj-shopping-list'>
			<Categories
				categories={categories}
				filter={filter}
				setFilter={setFilter}
			/>

			<ul className='lmj-plant-list'>
				{plantList
					.filter((plant) => !filter || plant.category === filter)
					.map(({ id, cover, name, water, light, price }) => (
						<div key={id}>
							<PlantItem
								cover={cover}
								name={name}
								water={water}
								light={light}
								price={price}
							/>
							<button onClick={() => addToCart(name, price)}>Ajouter</button>
						</div>
					))}
			</ul>
		</div>
	)
}

export default ShoppingList
