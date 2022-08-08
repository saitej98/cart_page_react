import React from "react";

function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemPrice * 0.14;
  const shippingPrice = itemPrice > 2000 ? 0 : 20;
  const totalPrice = itemPrice + taxPrice + shippingPrice;
  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id}>
            <div className="col-1"> {item.name}</div>
            <div className="col-1">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>
              <button onclick={() => onAdd(item)} className="add">
                +
              </button>
            </div>
            <div className="col-1 text-right">
              {item.qty} x Rs{item.price.toFixed(2)}
            </div>
          </div>
        ))}
        {cartItems.length !== 0 && (
          <>
            <hr />
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div>
              <button onclick={() => alert("Implementing Checkout....")}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}

export default Cart;
