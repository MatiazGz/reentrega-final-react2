import React from "react";
import { Route, Routes } from "react-router-dom";
import { products as initialProducts } from "./products/products.json";
import { Products } from "./components/ItemListContainer.jsx";
import { NavBar } from "./components/NavBar.jsx";
import { useFilters } from "./hooks/useFilters.js";
import { Cart } from "./components/Cart.jsx";
import { CartProvider } from "./context/cart.jsx";
import { ProductDetail } from "./views/ProductView.jsx";

function App() {
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(initialProducts);
  return (
    <CartProvider>
      <NavBar />
      <Cart />
      <Routes>
        <Route path="/" element={<Products products={filteredProducts} />} />
        <Route path="/product/:id"
            element={<ProductDetail products={initialProducts} />}/>
      </Routes>
    </CartProvider>
  );
}

export default App;
