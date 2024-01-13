import React, { useState, useEffect } from "react";
import "./Cart.css";

import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./CartWidgets.jsx";
import { useCart } from "../hooks/useCart.js";
import { Link } from "react-router-dom";

function CartItem({
  thumbnail,
  price,
  title,
  quantity,
  addToCart,
  removeOneFromCart,
  removeFromCart,
}) {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>
      <footer>
        <button onClick={removeFromCart}>x</button>
        <small>
          <button onClick={removeOneFromCart} disabled={quantity === 1}>
            -
          </button>
          Cantidad: {quantity}
        </small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  );
}
export function Cart() {
  const cartCheckboxId = useId();
  const { cart, clearCart, addToCart, removeFromCart, removeOneFromCart } =
    useCart();
  const [cartItemCount, setCartItemCount] = useState(0);
  useEffect(() => {
    const totalItems = cart.reduce((total, product) => {
      return total + product.quantity;
    }, 0);
    setCartItemCount(totalItems);
  }, [cart]);

  const getTotal = () => {
    return cart.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  };

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon itemCount={cartItemCount} />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              removeFromCart={() => removeFromCart(product)}
              removeOneFromCart={() => removeOneFromCart(product)}
              {...product}
            />
          ))}
        </ul>
        <h3>Total: ${getTotal()}</h3>

        <div className="checkout-button">
          <Link to="/checkout" className="link">
            <h3>Checkout</h3>
          </Link>
        </div>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
