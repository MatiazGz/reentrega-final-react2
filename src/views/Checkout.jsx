import React, { useState } from "react";
import "./Checkout.css";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telefono: "",
  });

  const [error, setError] = useState("");

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
    alert("Compra realizada, numero de compra:" + {});

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
