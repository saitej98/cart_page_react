import React from "react";

function Product(props) {
  const { item, product, onAdd, onRemove } = [props];
  return (
    <div className="card">
      <img src={product.image} alt={product.image} className="small" />
      <h3>{product.name}</h3>
      <div>Rs.{product.price}</div>
      <div>
        {item ? (
          <div>
            <button onClick={() => onRemove(item)} className="remove">
              -
            </button>
            <button onclick={() => onAdd(item)} className="add">
              +
            </button>
          </div>
        ) : (
          <button
            onclick={() => {
              onAdd(product);
            }}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Product;
