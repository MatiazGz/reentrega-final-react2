import React from "react";
import { useParams } from "react-router-dom";

export function ProductDetail({ products }) {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id)); // Encuentra el producto por ID

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} />
      <p>Descripción: {product.description}</p>
      <p>Precio: ${product.price}</p>
    </div>
  );
}
