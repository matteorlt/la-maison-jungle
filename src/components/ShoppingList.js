import {plantList} from '../datas/plantList.js';
import '../styles/ShoppingList.css'
import CareScale from "./CareScale.js";

function ShoppingList() {
	return (
		<ul>
			{plantList.map((plant) => (
				<li key={plant.id}>
					{plant.name} {' '}
					{plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
					<CareScale scaleValue={plant.light} />
				</li>
			))}
		</ul>
	)
}

export default ShoppingList;



