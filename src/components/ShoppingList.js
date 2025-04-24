import {plantList} from '../datas/plantList.js';
import '../styles/ShoppingList.css'

function ShoppingList() {
	return (
		<ul>
			{plantList.map((plant) => (
				<li key={plant.id}>
					{plant.name} {' '}
					{plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
				</li>
			))}
		</ul>
	)
}

export default ShoppingList;
