import NamePlant from './NamePlant.js';
import IdPlant from './IdPlant.js';
import CareScale from './CareScale.js';
import Cover from './Cover.js';

function PlantItem({ name, cover, id, light, water, isBestSale }) {
    return (
      <div className="lmj-plant-item">
        {isBestSale && <span>🔥</span>}
        <NamePlant scaleValue={name} />
        
        <Cover scaleValue={cover} />
        
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
        <IdPlant scaleValue={id} />
      </div>
    );
  }
  

export default PlantItem;