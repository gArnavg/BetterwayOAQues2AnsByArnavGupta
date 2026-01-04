export default function Cart({ cart, setCart }) {
  if (!cart.length) return <p>Cart is empty</p>;

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="cart">
      <h2>Cart</h2>

      {cart.map(item => (
        <div key={item.id}>
          {item.title} × {item.qty}
          <button
            onClick={() =>
              setCart(cart.filter(i => i.id !== item.id))
            }
          >
            Remove
          </button>
        </div>
      ))}

      <p>Total Items: {totalItems}</p>
      <p>Total Price: ₹{totalPrice}</p>
    </div>
  );
}
