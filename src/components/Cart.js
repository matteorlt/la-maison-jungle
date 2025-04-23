import '../styles/Cart.css'

function Cart() {
  const plantes = [
    { nom: "Monstera", prix: 8 },
    { nom: "Lierre", prix: 10 },
    { nom: "Bouquet de fleurs", prix: 15 },
  ];
  const total = plantes.reduce((acc, plante) => acc + plante.prix, 0);
  return (
    <div className='lmj-cart'>
      <h2>Mon panier</h2>
      <ul>
        {plantes.map((plante, index) => (
          <li key={index}>
            {plante.nom} - {plante.prix}€
          </li>
        ))}
      </ul>
      <p>
        <strong>Total : {total}€</strong>
      </p>
    </div>
  );
}
export default Cart;
