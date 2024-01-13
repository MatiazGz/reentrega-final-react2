import React, { useState } from "react";
import "./Checkout.css";
import { useCart } from "../hooks/useCart.js";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telefono: "",
  });

  const [error, setError] = useState("");

  const { cart } = useCart();
  console.log(cart);
  const itemTitles = cart.map((item) => item.title);
  const itemPrices = cart.map((item) => item.price);
  const itemImage = cart.map((item) => item.thumbnail);
  const itemQ = cart.map((item) => item.quantity);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifico si los campos están vacíos
    const isEmpty = Object.values(formData).some(
      (value) => value.trim() === ""
    );

    if (isEmpty) {
      setError("Todos los campos son obligatorios");
      return;
    }
    alert(
      `Compra realizada: ${itemTitles.join(", ")} Total:$  ${itemQ.reduce(
        (total, quantity, index) => total + quantity * itemPrices[index],
        0
      )}`
    );

    // Limpiar el formulario y el mensaje de error después de la compra
    setFormData({
      name: "",
      email: "",
      telefono: "",
    });
    setError("");
  };

  return (
    <div>
      <h2>Checkout</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        {itemQ.map((quantity, index) => (
          <div key={index}>
            <h4>
              {quantity} x {itemTitles[index]}
            </h4>
            <img
              className="image1"
              src={itemImage[index]}
              alt={itemTitles[index]}
            />
            <h4>${itemPrices[index]}</h4>
          </div>
        ))}
      </div>
      <h3>
        Total: $
        {itemQ.reduce(
          (total, quantity, index) => total + quantity * itemPrices[index],
          0
        )}
      </h3>

      <form className="formCheck" onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Correo electrónico:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Teléfono:
          <input
            type="number"
            name="telefono"
            value={formData.telefono}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Completar compra</button>
      </form>
    </div>
  );
};

export default Checkout;
