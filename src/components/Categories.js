import '../styles/Categories.css'

function Categories({ categories, filter, setFilter }) {
  return (
    <div className='lmj-categories'>
    <select value={filter} onChange={(e) => setFilter(e.target.value)} className='lmj-categories-select'>
      <option value="">Toutes les categories</option>
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
    <button onClick={() => setFilter("")}>Réinitialiser</button>
    
  </div>
  );
}

export default Categories;
